import { assets } from "../assets/assets";

function BannerSection() {
  return (
    <section className="banner-container">
      <div className="banner">
        <section className="banner-left">
          <h1>Managing things easy with ManageBox Solution</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            nulla fugiat aut accusamus cumque obcaecati nihil. Sint adipisci
            itaque iste? Fugiat molestias cupiditate eum nulla magni possimus,
            rem ad provident.
          </p>
          <div>
            <button>Explore More</button>
            <button>Work</button>
          </div>
        </section>
        <section className="banner-right">
          <img src={assets.work} alt="work image" className="work-image" />
        </section>
      </div>
    </section>
  );
}

export default BannerSection;
