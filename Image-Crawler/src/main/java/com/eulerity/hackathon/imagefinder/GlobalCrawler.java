package com.eulerity.hackathon.imagefinder;

import java.util.HashMap;
import java.util.UUID;
import java.util.regex.Pattern;

public class GlobalCrawler {

    private static GlobalCrawler instance = null;

    private GlobalCrawler() { }

    public static synchronized GlobalCrawler getInstance() {
        if (instance == null) {
            instance = new GlobalCrawler();
        }
        return instance;
    }

    public static String generateUniqueId() {
        return UUID.randomUUID().toString();
    }


    private HashMap<String, CrawlerWrapper> crawlers = new HashMap<>();

    public String registerRequest( String url ) {
        String id = generateUniqueId();
        CrawlerWrapper crawler = new CrawlerWrapper(url);
        crawlers.put(id, crawler);
        crawler.start();
        return id;
    }


    public CrawlerWrapper getCrawler(String id) {
        return crawlers.get(id);
    }

    public static boolean isValidURL(String url) {

        if (url == null) return false;

        // Regex to check valid URL
        String regex = "((http|https)://)(www.)?"
                + "[a-zA-Z0-9@:%._\\+~#?&//=]"
                + "{2,256}\\.[a-z]"
                + "{2,6}\\b([-a-zA-Z0-9@:%"
                + "._\\+~#?&//=]*)";

        return Pattern.compile(regex).matcher(url).matches();
    }


}
