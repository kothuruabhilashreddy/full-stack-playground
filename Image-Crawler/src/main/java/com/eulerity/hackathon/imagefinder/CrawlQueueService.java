package com.eulerity.hackathon.imagefinder;

import java.sql.Timestamp;
import java.util.Queue;
import java.util.concurrent.ConcurrentLinkedQueue;

public class CrawlQueueService {

    private int delay = 1000;

    private Queue<String> queue;

    private Boolean isRateLimited = false;

    private Timestamp rateLimitTimeStamp;


    public CrawlQueueService() {
        this.queue = new ConcurrentLinkedQueue<>();
    }

    public void add(String url) {
        queue.add(url);
    }

    public String getEntry() {
        return queue.poll();
    }

    public void pauseCrawl( String url, int delay ) {
        isRateLimited = true;
        this.delay = delay + delay/2;
        rateLimitTimeStamp = new Timestamp(System.currentTimeMillis());
    }

    public void pauseCrawl( String url ) {
        isRateLimited = true;
        this.delay = delay + delay/2;
        rateLimitTimeStamp = new Timestamp(System.currentTimeMillis());
        queue.add(url);
    }

    public boolean canContinueCrawl() {
        if (isRateLimited) {
            Timestamp currentTime = new Timestamp(System.currentTimeMillis());
            long diff = currentTime.getTime() - rateLimitTimeStamp.getTime();
            if (diff > delay) {
                isRateLimited = false;
                return true;
            }
            return false;
        }
        return true;
    }

    public void setDelay(int delay) {
        this.delay = delay;
    }

    public int getDelay() {
        return delay;
    }

    public void updateDelayAfterRecrawl(int delay){
        this.delay = delay * 2;
    }

    public void updateDelayAfterRecrawl(){
        this.delay = delay * 2;
    }




}

