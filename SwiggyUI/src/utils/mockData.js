export const resObjs = [
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
                "collectionId": "83639",
                "title": "Biryani",
                "description": "Taste these delectable classics, delectable biryanis to make your day.",
                "imageId": "COLLECTIONS/IMAGES/MERCH/2025/1/3/a956d6fd-5fa1-4ab7-b734-05424a92c0cb_Biriyani.png",
                "aspectRatio": "3.44",
                "cta": {
                    "link": "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani,biryani,ads_pc_biryani",
                    "type": "collectionv2"
                },
                "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
                "count": "113 restaurants"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
                "sortConfigs": [
                    {
                        "key": "relevance",
                        "title": "Relevance (Default)",
                        "selected": true,
                        "defaultSelection": true
                    },
                    {
                        "key": "deliveryTimeAsc",
                        "title": "Delivery Time"
                    },
                    {
                        "key": "modelBasedRatingDesc",
                        "title": "Rating"
                    },
                    {
                        "key": "costForTwoAsc",
                        "title": "Cost: Low to High"
                    },
                    {
                        "key": "costForTwoDesc",
                        "title": "Cost: High to Low"
                    }
                ],
                "restaurantCount": 113,
                "facetList": [
                    {
                        "label": "10 Mins Delivery",
                        "id": "isRestaurantBolt",
                        "selection": "SELECT_TYPE_SINGLESELECT",
                        "facetInfo": [
                            {
                                "label": "10 Mins Delivery",
                                "id": "isRestaurantBoltfacetquery0",
                                "analytics": {},
                                "openFilter": true
                            }
                        ],
                        "viewType": "VIEW_TYPE_FLATTENED",
                        "subLabel": "Filterby",
                        "icon": "COLLECTIONS/IMAGES/MERCH/2024/12/18/4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png",
                        "selectedIcon": "COLLECTIONS/IMAGES/MERCH/2024/12/26/3072d307-2f8e-471c-862d-d426fb93c0bf_4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png"
                    },
                    {
                        "label": "Veg/Non-Veg",
                        "id": "isVeg",
                        "selection": "SELECT_TYPE_MULTISELECT",
                        "facetInfo": [
                            {
                                "label": "Non Veg",
                                "id": "isVegfacetquery0",
                                "analytics": {},
                                "openFilter": true
                            },
                            {
                                "label": "Pure Veg",
                                "id": "isVegfacetquery1",
                                "analytics": {},
                                "openFilter": true
                            }
                        ],
                        "viewType": "VIEW_TYPE_HALF_CARD",
                        "subLabel": "Filterby",
                        "openFilter": true
                    },
                    {
                        "label": "Ratings",
                        "id": "rating",
                        "selection": "SELECT_TYPE_MULTISELECT",
                        "facetInfo": [
                            {
                                "label": "Ratings",
                                "id": "ratingfacetquery0",
                                "analytics": {},
                                "openFilter": true
                            },
                            {
                                "label": "Ratings 4.0+",
                                "id": "ratingfacetquery1",
                                "analytics": {},
                                "openFilter": true
                            },
                            {
                                "label": "Ratings 4.5+",
                                "id": "ratingfacetquery2",
                                "analytics": {},
                                "openFilter": true
                            }
                        ],
                        "viewType": "VIEW_TYPE_HALF_CARD",
                        "subLabel": "Filterby",
                        "openFilter": true
                    },
                    {
                        "label": "Delivery Time",
                        "id": "deliveryTime",
                        "selection": "SELECT_TYPE_MULTISELECT",
                        "facetInfo": [
                            {
                                "label": "Less than 30 mins",
                                "id": "deliveryTimefacetquery0",
                                "analytics": {},
                                "openFilter": true
                            },
                            {
                                "label": "Less than 45 mins",
                                "id": "deliveryTimefacetquery1",
                                "analytics": {},
                                "openFilter": true
                            }
                        ],
                        "viewType": "VIEW_TYPE_HALF_CARD",
                        "subLabel": "Filterby",
                        "openFilter": true
                    },
                    {
                        "label": "Cost For Two",
                        "id": "costForTwo",
                        "selection": "SELECT_TYPE_MULTISELECT",
                        "facetInfo": [
                            {
                                "label": "Less than Rs. 300",
                                "id": "costForTwofacetquery0",
                                "analytics": {},
                                "openFilter": true
                            },
                            {
                                "label": "Rs.300 - Rs.600",
                                "id": "costForTwofacetquery1",
                                "analytics": {},
                                "openFilter": true
                            },
                            {
                                "label": "Greater than Rs. 600",
                                "id": "costForTwofacetquery2",
                                "analytics": {},
                                "openFilter": true
                            }
                        ],
                        "viewType": "VIEW_TYPE_HALF_CARD",
                        "subLabel": "Filterby",
                        "openFilter": true
                    }
                ]
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                "layout": {
                    "rows": 1,
                    "widgetPadding": {
                        "left": 16,
                        "right": 16
                    },
                    "scrollBar": {},
                    "widgetTheme": {
                        "defaultMode": {
                            "backgroundColour": "#FFFFFF",
                            "theme": "THEME_TYPE_LIGHT"
                        },
                        "darkMode": {
                            "backgroundColour": "#1B3028",
                            "theme": "THEME_TYPE_DARK"
                        }
                    }
                },
                "id": "restaurantCountWidget",
                "gridElements": {
                    "infoWithStyle": {
                        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
                        "text": "113 Restaurants to explore",
                        "headerStyling": {
                            "textSize": 15,
                            "textColor": "text_color_highest_emphasis",
                            "textFontName": "FONT_NAME_HEADER_H5",
                            "maxLines": 1
                        }
                    }
                }
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "2305",
                    "name": "Paradise Biryani",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/31/7394ea2b-bc81-4849-97fe-fa322e555669_2305.jpg",
                    "locality": "Paradise Circle",
                    "areaName": "Ramgopalpet",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Biryani",
                        "Kebabs",
                        "Hyderabadi",
                        "Rolls & Wraps"
                    ],
                    "avgRating": 4.4,
                    "parentId": "700",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "187K+",
                    "promoted": true,
                    "adTrackingId": "cid=25950306~p=0~adgrpid=25950306#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=2305~eid=043510a9-d9ff-4421-8c2f-c2245f42811b~srvts=1740977181506~collid=83639",
                    "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 4.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-03-04 02:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Biryani.png",
                                "description": "Delivery!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "Delivery!",
                                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Biryani.png"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹399",
                        "discountTag": "FLAT DEAL",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "25950306"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=2305&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "142670",
                    "name": "Shah Ghouse Hotel & Restaurant",
                    "cloudinaryImageId": "ung6vn0jctobkxxzzbvo",
                    "locality": "Santh Nirankari Satsang Bhavan",
                    "areaName": "Banjara Hills",
                    "costForTwo": "₹350 for two",
                    "cuisines": [
                        "Biryani",
                        "Chinese",
                        "Tandoor",
                        "Mughlai"
                    ],
                    "avgRating": 4.3,
                    "parentId": "19271",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "68K+",
                    "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-03-10 00:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                                "description": "bolt!"
                            },
                            {
                                "imageId": "Rxawards/_CATEGORY-Biryani.png",
                                "description": "Delivery!"
                            },
                            {
                                "imageId": "Rxawards/_CATEGORY-Mughlai.png",
                                "description": "Delivery!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                                            "description": "bolt!"
                                        }
                                    },
                                    {
                                        "attributes": {
                                            "imageId": "Rxawards/_CATEGORY-Biryani.png",
                                            "description": "Delivery!"
                                        }
                                    },
                                    {
                                        "attributes": {
                                            "imageId": "Rxawards/_CATEGORY-Mughlai.png",
                                            "description": "Delivery!"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=142670&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "958344",
                    "name": "Kaadhale - Pure Vegetarian Restaurant",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/87599c98-dd2b-4736-b784-7d481d236a46_958344.jpg",
                    "locality": "Secunderabad",
                    "areaName": "Secunderabad",
                    "costForTwo": "₹700 for two",
                    "cuisines": [
                        "Biryani",
                        "Desserts",
                        "South Indian",
                        "Bakery",
                        "Beverages",
                        "Snacks",
                        "Cafe"
                    ],
                    "avgRating": 4.4,
                    "veg": true,
                    "parentId": "606544",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "421",
                    "promoted": true,
                    "adTrackingId": "cid=25960048~p=1~adgrpid=25960048#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=958344~eid=b7628bc4-3f05-4029-9df4-6e6d98852812~srvts=1740977181506~collid=83639",
                    "sla": {
                        "deliveryTime": 40,
                        "lastMileTravel": 4.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "4.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-03-04 00:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                                            "description": "pureveg"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "isNewlyOnboarded": true,
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "25960048"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=958344&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "4138",
                    "name": "Grand Hotel",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/10/11bab9a5-1cd7-4e69-b837-f7ec3150c493_80f7ff85-05a4-4f94-8525-bf9f2713fbce.jpg",
                    "locality": "Banjara Hills",
                    "areaName": "Abids",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "Biryani",
                        "Chinese",
                        "Kebabs",
                        "Tandoor"
                    ],
                    "avgRating": 4.4,
                    "parentId": "4001",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "315K+",
                    "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 3.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-03-03 23:59:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textExtendedBadges": {},
                            "textBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "30% OFF",
                        "subHeader": "UPTO ₹75",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.1",
                            "ratingCount": "30K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=4138&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "876685",
                    "name": "Meridian's Biryani And Shawarma",
                    "cloudinaryImageId": "s3zpmnxvobwg9obxf1ug",
                    "locality": "Venkat Nagar",
                    "areaName": "Banjara Hills",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "Biryani",
                        "Arabian"
                    ],
                    "avgRating": 3.2,
                    "parentId": "513645",
                    "avgRatingString": "3.2",
                    "totalRatingsString": "417",
                    "promoted": true,
                    "adTrackingId": "cid=25884104~p=3~adgrpid=25884104#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=876685~eid=9c267ecb-3a30-4598-836b-236b87c09f9d~srvts=1740977181506~collid=83639",
                    "sla": {
                        "deliveryTime": 48,
                        "lastMileTravel": 6.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "6.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-03-03 23:59:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "25884104"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=876685&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "699984",
                    "name": "Blue Sea Restaurant",
                    "cloudinaryImageId": "783ce82c683fa397a8cd394efffd5122",
                    "locality": "Basheerbagh",
                    "areaName": "Abids",
                    "costForTwo": "₹450 for two",
                    "cuisines": [
                        "Hyderabadi",
                        "Seafood",
                        "Mughlai",
                        "Chinese",
                        "Haleem",
                        "Tandoor"
                    ],
                    "avgRating": 4.3,
                    "parentId": "20855",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "6.5K+",
                    "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 1.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-03-03 23:59:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                                "description": "bolt!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                                            "description": "bolt!"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.5",
                            "ratingCount": "4.8K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=699984&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "43958",
                    "name": "Hotel Sohail Waves",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/9/28/755c729a-3c80-4751-a8e7-6c7e5a57473f_d03c7715-551a-4408-9a2f-be63fe347580.jpg",
                    "locality": "Malakpet",
                    "areaName": "Malakpet",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Biryani",
                        "Arabian",
                        "Mughlai",
                        "Chinese",
                        "North Indian",
                        "Salads",
                        "Snacks",
                        "Ice Cream",
                        "Beverages"
                    ],
                    "avgRating": 4.4,
                    "parentId": "18995",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "91K+",
                    "promoted": true,
                    "adTrackingId": "cid=25958873~p=4~adgrpid=25958873#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=43958~eid=2d9bc7d3-1e2b-4233-9a47-505c71414188~srvts=1740977181506~collid=83639",
                    "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 5.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "5.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-03-03 23:59:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {},
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "3.9",
                            "ratingCount": "18K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "25958873"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=43958&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    }
]