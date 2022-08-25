import Heading from "../../common/Heading";
import "./featured.css";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  return (
      <>
          <section className="featured background">
              <div className="container">
                  <Heading title="Featured Property Types" subtitle="Find All Types Of Property"/>
              </div>
              <FeaturedCard/>
      </section>
      </>
  )
}

export default Featured