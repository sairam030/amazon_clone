import "./Home.css";
import Product from "./Product";

function HomePage() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="home__row">
        <Product title={"hello"} rating={3} image={""} price={234} />
        <Product title={"hello"} rating={3} image={""} price={234} />
      </div>
      <div className="home__row">
        <Product title={"hello"} rating={3} image={""} price={234} />
        <Product title={"hello"} rating={3} image={""} price={234} />
        <Product title={"hello"} rating={3} image={""} price={234} />
      </div>
      <div className="home__row">
        <Product title={"hello"} rating={3} image={""} price={234} />
      </div>
    </div>
  );
}
export default HomePage;
