package com.eulerity.hackathon.imagefinder;

import lombok.Data;
import lombok.var;
import org.jsoup.HttpStatusException;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
//import sun.awt.X11.XSystemTrayPeer;

import java.io.IOException;

import java.net.*;
import java.net.MalformedURLException;
import java.net.UnknownHostException;
import java.sql.Time;
import java.sql.Timestamp;
import java.util.*;

@Data
public class DocumentCrawler implements Runnable{

        private String url;
        private Thread thread;
        private int currentDepth;
        private CrawlerWrapper wrapper;

        public DocumentCrawler(String url, CrawlerWrapper wrapper, int currentDepth) {
            this.url = url;

            if (this.url.endsWith("#")) {
                // Remove "#" character from the end of the string
                this.url = url.substring(0, url.length() - 1);
            }

            this.wrapper = wrapper;
            this.currentDepth = currentDepth;

            thread = new Thread(this);

            this.wrapper.getAllThreads().add(thread);

            thread.start();
        }

        public DocumentCrawler(String url, CrawlerWrapper wrapper) {
            this(url, wrapper, 0);
        }

        @Override
        public void run() {

            if(this.currentDepth >= CrawlerWrapper.MAX_DEPTH) {
                return;
            }

            if(this.wrapper.getCheckedURLs().containsKey(url) && this.wrapper.getCheckedURLs().get(url)) {
                System.out.println("Already crawled URL: " + url);

                this.getThread().interrupt();

                return;
            }
            crawl();
        }

        public static String removeQueryParameters(String urlString) {
            try {
                URL url = new URL(urlString);
                String baseURL = url.getProtocol() + "://" + url.getHost() + url.getPath();
                return baseURL;
            } catch (Exception e) {
                e.printStackTrace();
                return null;
            }
        }

        public boolean isImageTypeURL(String url) {
            //ref: https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types


//System.out.println(url + "   ----->  IsImageTypeURL: " + (url.endsWith(".jpg") || url.endsWith(".jpeg") ||
//                    url.endsWith(".png") || url.endsWith(".gif") ||
//                    url.endsWith(".jfif") || url.endsWith(".pjpeg") ||
//                    url.endsWith(".pjp") || url.endsWith(".svg") ||
//                    url.endsWith(".webp") || url.endsWith(".bmp") ||
//                    url.endsWith(".ico") || url.endsWith(".cur") ||
//                    url.endsWith(".tif") || url.endsWith(".tiff")));


            return url.endsWith(".jpg") || url.endsWith(".jpeg") ||
                    url.endsWith(".png") || url.endsWith(".gif") ||
                    url.endsWith(".jfif") || url.endsWith(".pjpeg") ||
                    url.endsWith(".pjp") || url.endsWith(".svg") ||
                    url.endsWith(".webp") || url.endsWith(".bmp") ||
                    url.endsWith(".ico") || url.endsWith(".cur") ||
                    url.endsWith(".tif") || url.endsWith(".tiff");
        }

        public boolean isDocOrMov(String url) {
            return url.endsWith(".doc") || url.endsWith(".docx") ||
                    url.endsWith(".pdf") || url.endsWith(".ppt") ||
                    url.endsWith(".pptx") || url.endsWith(".xls") ||
                    url.endsWith(".mp4") || url.endsWith(".avi") ||
                    url.endsWith(".mov") || url.endsWith(".flv") ||
                    url.endsWith(".avchd") || url.endsWith(".odp") ||
                    url.endsWith(".wav") || url.endsWith(".mp3") ||
                    url.endsWith(".xlsx") || url.endsWith(".txt") ;
        }

        public void crawl() {

            if(this.url.contains("?")){
                System.out.println("--------------------");
                System.out.println("URL before removing query parameters: " + this.url);
                this.url = removeQueryParameters(this.url);
                System.out.println("URL after removing query parameters: " + this.url);
            }


            if(isImageTypeURL(this.url)){
                this.wrapper.addImage(
                        new CrawledImage(this.url, "", "", "", this.url, "", "", false, "", "")
                );
                return;
            }
            if(isDocOrMov(this.url)){
                return;
            }

            int delay = 1000;

            System.out.println("Crawling URL: " + url);

            SortedSet<String> refURLs = new TreeSet<>();

            int currentRetry = 0;
            while(currentRetry++ < 3) {

                try {
                    // Connect to the URL and get the HTML document

//                    this.wrapper.checkPaused();
//
//                    this.wrapper.getSemaphore().acquire();

                    if( !this.wrapper.getCrawlerLock().canContinueCrawl()){
                        Thread.sleep(this.wrapper.getCrawlerLock().getDelay());
                        System.out.println("Retrying");
                    }





                    Document document = Jsoup.connect(url).get();
//                    this.wrapper.getSemaphore().release();


                    //---- semaphore till here

                    this.wrapper.getCrawledPages().add( new CrawledPage(url, document.title()));

                    // Get all <a> elements (links) from the HTML document
                    Elements links = document.select("a[href]");

                    // Iterate over each link and print its URL
                    for (Element link : links) {
                        String linkUrl = link.attr("abs:href"); // Get the absolute URL
                        refURLs.add(linkUrl);

                    }


                    for (String refURL : refURLs) {
                        if (this.wrapper.getCheckedURLs().containsKey(refURL) && this.wrapper.getCheckedURLs().get(refURL)) {
                            continue;
                        }

                        if(!refURL.contains(this.wrapper.getDomain())) {
                            continue;
                        }

                        if(!refURL.contains(this.wrapper.getDomain())) {
                            continue;
                        }

                        if(refURL.equals(url))
                            continue;

                        this.wrapper.addNextURL(refURL);
                        var nextCrawl = new DocumentCrawler(refURL, this.wrapper, currentDepth + 1);

                        this.wrapper.getAllThreads().add(nextCrawl.getThread());
                    }

                    Elements images = document.select("img");

                    // Iterate over each image and print its source URL
                    for (Element img : images) {
                        String imageUrl = img.absUrl("src");

                        if(imageUrl.isEmpty()) {
                            continue;
                        }

                        String alt = img.attr("alt");
                        String title = img.attr("title");
                        String width = img.attr("width");
                        String height = img.attr("height");
                        String srcPageTitle = document.title();

                        String dataSrc = img.attr("data-src");
                        String dataAlt = img.attr("data-alt");

                        if(imageUrl.contains("logo") ||
                                alt.contains("logo") || title.contains("logo") || dataAlt.contains("logo") ||
                                dataSrc.contains("logo") || imageUrl.contains("branding")) {
                            this.wrapper.addLogo(
                                    new CrawledImage(imageUrl, alt, title, srcPageTitle, url, dataAlt, dataSrc,

                                            new Boolean( img.hasClass("logo") || imageUrl.contains("logo") ||
                                                    alt.contains("logo") || title.contains("logo") || title.contains("logo") ||
                                                    srcPageTitle.contains("logo") || dataAlt.contains("logo") ||
                                                    dataSrc.contains("logo") || imageUrl.contains("branding")),

                                            width, height
                                    )
                            );
                        }
                        else {
                            this.wrapper.addImage(
                                    new CrawledImage(imageUrl, alt, title, srcPageTitle, url, dataAlt, dataSrc,

                                            new Boolean ( img.hasClass("logo") || imageUrl.contains("logo") ||
                                                    alt.contains("logo") || title.contains("logo") || title.contains("logo") ||
                                                    srcPageTitle.contains("logo") || dataAlt.contains("logo") ||
                                                    dataSrc.contains("logo") || imageUrl.contains("branding") ),

                                            width, height
                                    )
                            );
                        }

                    }

                    break;
                }
                catch (MalformedURLException e) {
                    this.wrapper.message += ( "Malformed URL : " + e.getMessage() + "\n");
                    this.wrapper.isError = true;
                    return;
                }
                catch (UnknownHostException e) {
                    this.wrapper.message += ( "Unknown host Exception : " + e.getMessage() + "\n");
                    this.wrapper.isError = true;
                    return;
                }
                catch (HttpStatusException e) {
                    if (e.getStatusCode() == 429) {
                        this.wrapper.getCrawlerLock().pauseCrawl();
                        System.out.println("Received 429 Retrying in " + this.wrapper.getCrawlerLock().getDelay() + " milliseconds... current timestamp: "
                                + (new Timestamp(System.currentTimeMillis())).toString());

                    }
                    else {
                        // If it's not a 429 status code, rethrow the exception
                        e.printStackTrace();
                        this.wrapper.message += ( "HTTP Status Exception : " + e.getMessage() + "\n");
                        this.wrapper.isError = true;
                        // Release the permit when exception occurs
//                        this.wrapper.getSemaphore().release();
                        break;
                    }

                }
                catch (InterruptedException e) {
                    e.printStackTrace();
                    return;
                }
                catch (IOException e) {
                    e.printStackTrace();
                    this.wrapper.message += ("IOException : " + e.getMessage() + "\n");
                    this.wrapper.isError = true;
                    break;
                }
//                catch (InterruptedException e) {
//                    throw new RuntimeException(e);
//                }

            }
            //this.wrapper.getCrawledURLs().add(url);

            this.wrapper.addCheckedURL(url);
            return;
        }



}
