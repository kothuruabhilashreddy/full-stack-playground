package com.eulerity.hackathon.imagefinder;

import com.google.gson.Gson;
import com.google.gson.annotations.Expose;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class CrawledImage implements Comparable<CrawledImage> {
    @Expose
    public String imageUrl;
    @Expose
    public String alt;
    @Expose
    public String title;
    @Expose
    public String srcPageTitle;
    @Expose
    public String srcPageUrl;
    @Expose
    public String dataAlt;
    @Expose
    public String dataSrc;
    @Expose
    public Boolean isLogo;
    @Expose
    public String width;
    @Expose
    public String height;




    public String toString(){
        return new Gson().toJson(this);
    }

    @Override
    public int compareTo(CrawledImage o) {
        return ( this.imageUrl.equals(o.imageUrl) && this.srcPageUrl.equals(o.srcPageUrl) ) ? 0 : 1;
    }
}
