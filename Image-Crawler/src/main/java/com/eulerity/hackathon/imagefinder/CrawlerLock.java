package com.eulerity.hackathon.imagefinder;

import com.google.gson.Gson;
import com.google.gson.annotations.Expose;
import lombok.*;
import lombok.Data;

import java.sql.Timestamp;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CrawlerLock {

    private long delay = 1000;

    private Boolean isRateLimited = false;

    private Timestamp rateLimitTimeStamp;

    public void pauseCrawl( int delay ) {
        isRateLimited = true;
        this.delay = delay + delay/2;
        rateLimitTimeStamp = new Timestamp(System.currentTimeMillis());
    }

    public void pauseCrawl() {
        isRateLimited = true;
        this.delay = delay + delay/2;
        rateLimitTimeStamp = new Timestamp(System.currentTimeMillis());
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

    public long getDelay() {
        return delay;
    }

    public void updateDelayAfterRecrawl(int delay){
        this.delay = delay * 2;
    }

    public void updateDelayAfterRecrawl(){
        this.delay = delay * 2;
    }


}
