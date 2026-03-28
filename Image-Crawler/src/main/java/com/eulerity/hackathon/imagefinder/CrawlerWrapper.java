package com.eulerity.hackathon.imagefinder;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.annotations.Expose;
import lombok.Data;
import lombok.Setter;

import java.net.MalformedURLException;
import java.net.UnknownHostException;
import java.net.*;
import java.net.URL;
import java.util.List;
import java.util.SortedSet;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentSkipListSet;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.Semaphore;



@Data
public class CrawlerWrapper {

    @Expose
    public String url;

    @Expose
    public String domain;

    public static int MAX_DEPTH = 2;

    private ConcurrentHashMap<String, Boolean> checkedURLs;

    @Expose
    private SortedSet<CrawledImage> imageURLs;

    @Expose
    private SortedSet<CrawledImage> logoURLs;

    private SortedSet<String> urlPool;


    public CrawlerLock crawlerLock;




    @Expose
    //private SortedSet<String> crawledURLs;
    private SortedSet<CrawledPage> crawledPages;

    @Expose
    @Setter
    public CrawlStatus status = CrawlStatus.NOT_STARTED;

    public boolean isError = false;

    @Expose
    public String message = "Message From Server: ";

    public String getStatus() {
        return this.status.name();
    }


    private List<Thread> allThreads;

    public void addImage(CrawledImage image) {
        this.imageURLs.add(image);
    }

    public void addLogo(CrawledImage image) {
        this.logoURLs.add(image);
    }

    public void addNextURL(String url) {
        if (url == null || url.isEmpty() || url.length() == 0) {
            return;
        }

        if(this.checkedURLs.containsKey(url) && this.checkedURLs.get(url)) {
              return;
        }

        if(!url.contains(this.domain)) {
            return;
        }

        this.getUrlPool().add(url);

    }

    public void addCheckedURL(String url) {
        this.checkedURLs.put(url, true);
    }



    public CrawlerWrapper(String url) {
        this.url = url;
        try {
            URL urlObj = new URL(url);
            this.domain = urlObj.getHost();
        }
        catch (MalformedURLException e) {
            this.status = CrawlStatus.ERROR;
            this.message += (e.getMessage() + "\n");
        }
        catch (Exception e) {
            this.message += (e.getMessage() + "\n");
        }

        this.checkedURLs = new ConcurrentHashMap<>();
        this.imageURLs = new ConcurrentSkipListSet<>();
        this.logoURLs = new ConcurrentSkipListSet<>();
        this.urlPool = new ConcurrentSkipListSet<>();
        this.urlPool.add(url);
//        this.crawledURLs = new ConcurrentSkipListSet<>();
//        this.crawledURLs.add(url);

        this.crawledPages = new ConcurrentSkipListSet<>();
        this.allThreads = new CopyOnWriteArrayList<>();

        this.crawlerLock = new CrawlerLock();
    }

    public void start() {

        //monitorThread = new Thread(this::monitorRateLimit);
        if( ! GlobalCrawler.isValidURL(this.url) ) {
            this.setStatus(CrawlStatus.ERROR);
            this.message = "Invalid URL";
            return;
        }

        DocumentCrawler crawler = new DocumentCrawler(this.url, this);
        this.setStatus(CrawlStatus.IN_PROGRESS);
        crawler.run();


        for (Thread thread : this.allThreads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }

        System.out.println("All threads finished");

        if(this.isError && this.imageURLs.isEmpty()) {
            this.setStatus(CrawlStatus.ERROR);
            return;
        }

        this.setStatus(CrawlStatus.FINISHED);
////        for (CrawledImage img : this.imageURLs) {
////            System.out.println("CHECK: " + img.toString());
////        }
//        monitorThread.interrupt();
    }

    public String getRequestResponse(){
        return ( new GsonBuilder().excludeFieldsWithoutExposeAnnotation().create() ).toJson(this);
    }

//
//
//    private static final int MAX_THREADS = 10; // Maximum number of threads
//    private static final int MAX_REQUESTS_PER_SECOND = 5; // Maximum requests per second per thread
//    private static final int MAX_RETRIES = 3; // Maximum number of retries
//    private static final long INITIAL_DELAY_MS = 1000; // Initial delay in milliseconds
//    private static final long PAUSE_TIME_MS = 5000; // Time to pause all threads in milliseconds
//
//    private final Semaphore semaphore = new Semaphore(MAX_THREADS * MAX_REQUESTS_PER_SECOND);
//    private final Object pauseLock = new Object();
//    private boolean paused = false;
//
//    private Thread monitorThread;
//
//
//    private void monitorRateLimit() {
//        while (!Thread.currentThread().isInterrupted()) {
//            try {
//                Thread.sleep(PAUSE_TIME_MS);
//            } catch (InterruptedException e) {
//                Thread.currentThread().interrupt();
//            }
//            if (paused) {
//                System.out.println("Rate limit reached. Pausing threads...");
//            }
//        }
//    }
//
//    public void checkPaused() throws InterruptedException {
//        synchronized (pauseLock) {
//            while (paused) {
//                pauseLock.wait();
//            }
//        }
//    }
//
//    public void pauseThreads() {
//        synchronized (pauseLock) {
//            paused = true;
//        }
//    }
//
//    public void resumeThreads() {
//        synchronized (pauseLock) {
//            paused = false;
//            pauseLock.notifyAll();
//        }
//    }
//
//    public boolean isAnyThreadRunning() {
//        for (Thread thread : allThreads) {
//            if (thread.isAlive()) {
//                return true;
//            }
//        }
//        return false;
//    }
//
//
//


















    public static void main(String[] args) {

        System.out.println("Starting Crawler");
        String id1 = GlobalCrawler.getInstance().registerRequest("https://www3.cs.stonybrook.edu/~csgso/");
        System.out.println(GlobalCrawler.getInstance().getCrawler(id1).getRequestResponse() );

        String id2 = GlobalCrawler.getInstance().registerRequest("https://www3.cs.stonybrook.edu/~csgso/");

        try {
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        finally {

            System.out.println(GlobalCrawler.getInstance().getCrawler(id1).getRequestResponse() );

            System.out.println(GlobalCrawler.getInstance().getCrawler(id2).getRequestResponse() );
        }


    }
}
