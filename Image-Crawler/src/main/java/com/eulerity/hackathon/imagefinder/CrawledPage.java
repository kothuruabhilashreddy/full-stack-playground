package com.eulerity.hackathon.imagefinder;

import com.google.gson.Gson;
import com.google.gson.annotations.Expose;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class CrawledPage implements Comparable<CrawledPage> {
    @Expose
    public String pageURL;
    @Expose
    public String pageTitle;


    public String toString(){
        return new Gson().toJson(this);
    }


    @Override
    public int compareTo(CrawledPage o) {
        return ( this.pageURL.equals(o.pageURL)) ? 0 : 1;
    }
}
