import React from "react";
import PortfolioItems from "./PortfolioItems";
import SectionTitle from "./SectionTitle";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-02 py-6">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionTitle aciklama="My work" baslik="portfolio" />
          </div>
        </div>
        <div className="row">
          {/* <!--   Portfolio Filters   --> */}
          <ul
            id="portfolio-filter"
            className="list-inline col-lg-12 portfolio-filter"
          >
            <li className="list-inline-item">
              <a href="#" data-filter="*" className="active">
                All
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" data-filter=".webdesign">
                Web Design
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" data-filter=".mobiledesign">
                Mobile Design
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" data-filter=".seo">
                Seo
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" data-filter=".graphic">
                Graphic
              </a>
            </li>
          </ul>
        </div>
        <div className="portfolio-items row">
          {/* <!-- Item 01 --> */}
          <div className="col-md-6 col-lg-4 portfolio-item seo">
            <PortfolioItems
              resim="assets/img/portfolio-01.png"
              baslik="My Work"
            />
          </div>
          {/* <!-- Item 02 --> */}
          <div className="col-md-6 col-lg-4 portfolio-item graphic webdesign">
            <PortfolioItems
              resim="assets/img/portfolio-02.png"
              baslik="My Work"
            />
          </div>
          {/* <!-- Item 03 --> */}
          <div className="col-md-6 col-lg-4 portfolio-item webdesign graphic">
            <PortfolioItems
              resim="assets/img/portfolio-03.png"
              baslik="My Work"
            />
          </div>
          {/* <!-- Item 04 --> */}
          <div className="col-md-6 col-lg-4 portfolio-item mobiledesign webdesign">
            <PortfolioItems
              resim="assets/img/portfolio-04.png"
              baslik="My Work"
            />
          </div>
          {/* <!-- Item 05 --> */}
          <div className="col-md-6 col-lg-4 portfolio-item mobiledesign seo">
            <PortfolioItems
              resim="assets/img/portfolio-05.png"
              baslik="My Work"
            />
          </div>
          {/* <!-- Item 06 --> */}
          <div className="col-md-6 col-lg-4 portfolio-item mobiledesign">
            <PortfolioItems
              resim="assets/img/portfolio-06.png"
              baslik="My Work"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
