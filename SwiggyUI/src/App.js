import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./components/RestaurantCard";
import Header from "./components/Header";
import { resObjs } from "./utils/mockData";



const AppLayout = () => {
    return(
    <div className="app">
        <Header />
        <div className="restaurants">
            { resObjs.map((resObj) => <RestaurantCard resData={resObj}/>) }
        </div>
    </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />);
