const { default: HomeBanner } = require("../homeBanner/homeBanner")
const { default: RoadMap } = require("../roadMap/roadMap")
const { default: Hero } = require("../hero/hero")

const Home = () => {
    return (
        <div className="bg-black">
            <Hero />
            {/* <HomeBanner />
            <RoadMap /> */}
        </div>
    )
}

export default Home;