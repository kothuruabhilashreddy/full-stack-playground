const RestaurantCard = ({resData}) => {
    const {
        id = null,
        name = 'Unknown Restaurant',
        avgRating = 0,
        cuisines = [],
        areaName = 'Unknown Area',
        sla = {}
      } = resData?.card?.card?.info || {};
      return (
        id && (
            <div className="restaurant-card" key={id}>
                <div className="card-logo">
                    <img className="sc-bXCLTC jRHowI" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/31/7394ea2b-bc81-4849-97fe-fa322e555669_2305.jpg" alt="Paradise Biryani" />
                    <div className="card-offer"></div>
                </div>
                <div className="card-info">
                    <div className="card-name">{name.length>25 ?name.substr(0,25): name}
                    </div>
                    <div className="card-duration">{avgRating}* {sla?.deliveryTime}min</div>
                    <div className="card-specials">
                        <div className="card-items">{cuisines?.join(', ').length > 25 ? cuisines.join(', ').substr(0,25) : cuisines.join(', ')} </div>
                        <div className="card-location">{areaName}</div>
                    </div>
                </div>
            </div>
            )   
        )
}

export default RestaurantCard;