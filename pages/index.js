import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";
const Home = () => {
  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        offset: 50,
      });
    }

    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <>
      <div
        className="navbar w-nav"
        data-aos="fade"
        data-animation="default"
        data-easing2="ease"
        data-easing="ease"
        data-collapse="medium"
        role="banner"
        data-no-scroll="1"
        data-duration="500"
        style={{ transition: "opacity 2.5s ease-in-out" }}
      >
        <div className="container nav-container">
          <div className="nav-menu-container">
            <a
              href="/"
              aria-current="page"
              className="brand w-nav-brand w--current"
            >
              <img
                src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc142251c61c394c38cb19_Vancouver%20Logo.svg"
                loading="lazy"
                alt=""
                className="brand"
              />
            </a>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <div className="link-container">
                <div className="nav-link">
                  <a
                    href="#Features"
                    className="link-block animation-01 w-inline-block"
                  >
                    <div>Features</div>
                    <div className="link-block-underline"></div>
                  </a>
                </div>
                <div className="nav-link">
                  <a
                    href="#Pricing"
                    className="link-block animation-01 w-inline-block"
                  >
                    <div>Pricing</div>
                    <div className="link-block-underline"></div>
                  </a>
                </div>
                <div className="nav-link">
                  <a
                    href="#Help"
                    className="link-block animation-01 w-inline-block"
                  >
                    <div>Help</div>
                    <div className="link-block-underline"></div>
                  </a>
                </div>
              </div>
              <div className="nav-buttons-container">
                <div className="nav-link">
                  <a
                    href="/"
                    aria-current="page"
                    className="link-block animation-01 w-inline-block w--current"
                  >
                    <div>Sign in</div>
                    <div className="link-block-underline"></div>
                  </a>
                </div>
                <a
                  href="https://webflow.com/templates/html/vancouver-saas-website-template"
                  target="_blank"
                  className="button w-button"
                >
                  Buy for $24
                </a>
              </div>
            </nav>
            <div className="menu-button w-nav-button">
              <div className="center-box">
                <img
                  src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc1260fe7b1f40dca8ea2b_menu.svg"
                  loading="lazy"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section overflow-hidden">
        <div className="container">
          <div className="center-text">
            <div className="hero-text-holder">
              <div className="animate-on-load-1st fade-up">
                <div className="hero-text">
                  <span className="gradient-text">Tailormade</span>
                  to Manage all your Data registers
                </div>
              </div>
              <div className="animate-on-load-2st fade-up" data-aos="fade-up">
                <div className="paragraph-hero fade-up">
                  <p>
                    Operate with your data predictably, securely, and at a lower
                    cost in an intuitive and easy to navigate dashboard.Designed
                    to run all your data types.
                  </p>
                </div>
              </div>
              <div className="animate-on-load-3rd fade-up" ˇ data-aos="fade-up">
                <div className="hero-button-holder">
                  <a
                    href="https://webflow.com/templates/html/vancouver-saas-website-template"
                    target="_blank"
                    className="button arrow w-button"
                  >
                    Buy for $24
                  </a>
                  <a href="#More" className="gradient-link w-inline-block">
                    <div className="link-gradient-text">Learn More</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-on-load-4rd fade-up" data-aos="fade-up">
            <div className="app-holder">
              <div className="app-container">
                <div className="app-main-photo">
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc141a89b7006a587f0ac8_App%20Image.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 89vw, (max-width: 767px) 88vw, (max-width: 991px) 75vw, (max-width: 1439px) 76vw, 1035.1953125px"
                    srcSet="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc141a89b7006a587f0ac8_App%20Image-p-500.jpeg 500w, https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc141a89b7006a587f0ac8_App%20Image-p-800.jpeg 800w, https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc141a89b7006a587f0ac8_App%20Image-p-1080.jpeg 1080w, https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc141a89b7006a587f0ac8_App%20Image-p-1600.jpeg 1600w, https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc141a89b7006a587f0ac8_App%20Image-p-2000.jpeg 2000w, https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc141a89b7006a587f0ac8_App%20Image-p-2600.jpeg 2600w, https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc141a89b7006a587f0ac8_App%20Image.jpg 3844w"
                    alt=""
                    className="app-photo"
                  />
                </div>
                <div className="app-info-01">
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc14226dae299806bc7977_Earnings%20Image.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 100px, (max-width: 991px) 150px, 250px"
                    srcSet="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc14226dae299806bc7977_Earnings%20Image-p-500.jpeg 500w, https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc14226dae299806bc7977_Earnings%20Image-p-800.jpeg 800w, https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc14226dae299806bc7977_Earnings%20Image.jpg 952w"
                    alt=""
                    className="_100width"
                  />
                </div>
                <div className="app-info-02">
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc141adc1635dfab4166e7_Visitor%20Insights.jpg"
                    loading="lazy"
                    sizes="(max-width: 767px) 180px, (max-width: 991px) 280px, 506px"
                    srcSet="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc141adc1635dfab4166e7_Visitor%20Insights-p-500.jpeg 500w, https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc141adc1635dfab4166e7_Visitor%20Insights-p-800.jpeg 800w, https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc141adc1635dfab4166e7_Visitor%20Insights-p-1080.jpeg 1080w, https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc141adc1635dfab4166e7_Visitor%20Insights.jpg 2024w"
                    alt=""
                    className="_100width"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="logo-grid-holder" data-aos="fade-up">
            <div className="w-layout-grid logo-grid">
              <div
                id="w-node-ddf35f60-4046-a5dc-8dfc-7a16218a2043-aca8ea2d"
                className="logo-small-container"
              >
                <img
                  src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc47b530e84509b65dc688_Logo01.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
              <div
                id="w-node-ed6e05a7-8859-5c2e-bfa6-5a34d46c5535-aca8ea2d"
                className="logo-small-container"
              >
                <img
                  src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc47b5d721c4ea063fdc48_Logo02.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
              <div
                id="w-node-_38e6cc19-86ef-7eaa-1ab1-b4758b264793-aca8ea2d"
                className="logo-small-container"
              >
                <img
                  src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc47b5751014695cfdd3a4_Logo03.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
              <div
                id="w-node-_2c5230ad-7a3e-1078-2648-792bc8a3d83f-aca8ea2d"
                className="logo-small-container"
              >
                <img
                  src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc47b58478829018399285_Logo04.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
              <div
                id="w-node-_4ffe437a-249e-b0bf-4319-d5ced5949c15-aca8ea2d"
                className="logo-small-container"
              >
                <img
                  src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc47b551c61c7f1e3a3814_Logo05.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
              <div
                id="w-node-a11f21d4-8fb0-6c15-87e3-d6c169a6536f-aca8ea2d"
                className="logo-small-container"
              >
                <img
                  src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc47b5b64ae6883bfa1b23_Logo06.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
              <div
                id="w-node-_209d1c9a-5c8e-b2b8-a90f-cc9d58a26396-aca8ea2d"
                className="logo-small-container"
              >
                <img
                  src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc47b52ce68c2825f42a43_Logo07.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
              <div
                id="w-node-_6c110cba-70eb-d829-f5bf-8ff72d91f759-aca8ea2d"
                className="logo-small-container"
              >
                <img
                  src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc47b5455ce96b4f6ea81a_Logo08.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
              <div
                id="w-node-_0d8e1bb2-4dcf-58bc-ddb2-2969473a2235-aca8ea2d"
                className="logo-small-container"
              >
                <img
                  src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc47b56fcb81136a488baf_Logo09.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
              <div
                id="w-node-afed102e-1e94-d6d2-0ddb-965b06c57825-aca8ea2d"
                className="logo-small-container"
              >
                <img
                  src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc47b57c758d6bb27ae1d9_Logo10.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
            </div>
            <div className="fade-in-move-on-scroll" data-aos="fade-up">
              <p>Trusted by Top-tier product campanies</p>
            </div>
          </div>
        </div>
      </div>
      <div id="More" className="section">
        <div className="container _4em">
          <div className="center-text">
            <div className="fade-in-move-on-scroll" data-aos="fade-up">
              <h1>
                We can help you manage from top to bottom, all the layers.
              </h1>
            </div>
            <div className="paragraph-hero">
              <div className="fade-in-move-on-scroll" data-aos="fade-up">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                  etiam tellus aliquet risus, odio vitae cras viverra elementum.
                </p>
              </div>
            </div>
          </div>
          <div className="features-container">
            <div className="w-layout-grid grid-6-col">
              <div
                id="w-node-_3e5d2762-47b3-db8b-cc0c-4a656fea09c8-aca8ea2d"
                className="content"
              >
                <div className="fade-in-move-on-scroll" data-aos="fade-up">
                  <h2>Top Management, to help you see the bigger picture</h2>
                </div>
                <div className="fade-in-move-on-scroll" data-aos="fade-up">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas massa massa id arcu blandit dignissim contum
                    volutpat dolor fermentum, justo tempor.
                    <br />
                    <br />
                    Vulputate enim ante egestas commodo in.
                  </p>
                </div>
                <div className="list-container">
                  <ul role="list" className="w-list-unstyled">
                    <li>
                      <div className="list-holder">
                        <div className="list-icon-container">
                          <img
                            src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc4a566d06e55f48fbe8a4_Checkmark%20Icon.png"
                            loading="lazy"
                            alt=""
                            className="_100width"
                          />
                        </div>
                        <div>Lorem ipsum dolor sit amet, consectetur.</div>
                      </div>
                    </li>
                    <li>
                      <div className="list-holder">
                        <div className="list-icon-container">
                          <img
                            src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc4a566d06e55f48fbe8a4_Checkmark%20Icon.png"
                            loading="lazy"
                            alt=""
                            className="_100width"
                          />
                        </div>
                        <div>Elementum purus ac fermentum</div>
                      </div>
                    </li>
                    <li>
                      <div className="list-holder">
                        <div className="list-icon-container">
                          <img
                            src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc4a566d06e55f48fbe8a4_Checkmark%20Icon.png"
                            loading="lazy"
                            alt=""
                            className="_100width"
                          />
                        </div>
                        <div>
                          Maecenas massa massa id arcu blandit dignissim
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                id="w-node-_003d7288-52d9-6c3b-64c7-0783fd2a1b36-aca8ea2d"
                className="image-container"
              >
                <img
                  src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc4bd6cede115ca195c43f_Feature%20Image%2001.svg"
                  loading="lazy"
                  alt=""
                  className="feature-image"
                />
              </div>
            </div>
            <div className="w-layout-grid grid-6-col">
              <div
                id="w-node-_5865c2f9-085b-8a6d-8622-8912e97a7274-aca8ea2d"
                className="image-container"
              >
                <img
                  src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc4bd6a0bf2350ffd1ef9f_Feature%20Image%2002.svg"
                  loading="lazy"
                  alt=""
                  className="feature-image"
                />
              </div>
              <div
                id="w-node-_5865c2f9-085b-8a6d-8622-8912e97a7256-aca8ea2d"
                className="content"
              >
                <div
                  className="fade-in-move-on-scroll fade-up"
                  data-aos="fade-up"
                >
                  <h2>Micromanage every data so there are no slip-ups</h2>
                </div>
                <div
                  className="fade-in-move-on-scroll fade-up"
                  data-aos="fade-up"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas massa massa id arcu blandit dignissim contum
                    volutpat dolor fermentum, justo tempor.
                    <br />
                    <br />
                    Vulputate enim ante egestas commodo in.
                  </p>
                </div>
                <div className="list-container">
                  <ul role="list" className="w-list-unstyled">
                    <li>
                      <div className="list-holder">
                        <div className="list-icon-container">
                          <img
                            src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc4a566d06e55f48fbe8a4_Checkmark%20Icon.png"
                            loading="lazy"
                            alt=""
                            className="_100width"
                          />
                        </div>
                        <div>Lorem ipsum dolor sit amet, consectetur.</div>
                      </div>
                    </li>
                    <li>
                      <div className="list-holder">
                        <div className="list-icon-container">
                          <img
                            src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc4a566d06e55f48fbe8a4_Checkmark%20Icon.png"
                            loading="lazy"
                            alt=""
                            className="_100width"
                          />
                        </div>
                        <div>Elementum purus ac fermentum</div>
                      </div>
                    </li>
                    <li>
                      <div className="list-holder">
                        <div className="list-icon-container">
                          <img
                            src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc4a566d06e55f48fbe8a4_Checkmark%20Icon.png"
                            loading="lazy"
                            alt=""
                            className="_100width"
                          />
                        </div>
                        <div>
                          Maecenas massa massa id arcu blandit dignissim
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Features" className="section grey-section">
        <div className="container _6em">
          <div className="center-text">
            <div className="fade-in-move-on-scroll" data-aos="fade-up">
              <h1>
                All in one platform, from mobile to desktop everything you need
                is here
              </h1>
            </div>
            <div className="paragraph-hero">
              <div className="fade-in-move-on-scroll" data-aos="fade-up">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                  etiam tellus aliquet risus, odio vitae cras viverra elementum.
                </p>
              </div>
            </div>
          </div>
          <div className="sticky-slider-section">
            <div className="w-layout-grid sticky-slider-container">
              <div
                id="w-node-_82187d72-78de-76a1-d56b-c9a74902fc48-aca8ea2d"
                className="sticky-text-container"
              >
                <div className="sticky-text-holder">
                  <div className="fade-in-move-on-scroll" data-aos="fade-up">
                    <h2 className="no-margins">
                      Handcrafted to Manage all your data
                    </h2>
                  </div>
                  <div className="fade-in-move-on-scroll" data-aos="fade-up">
                    <p>
                      Get the data directly on your phone, scroll and swipe away
                      to get informed and updated
                    </p>
                  </div>
                  <div className="list-container">
                    <ul role="list" className="w-list-unstyled">
                      <li>
                        <div className="list-holder">
                          <div className="list-icon-container">
                            <img
                              src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc4a566d06e55f48fbe8a4_Checkmark%20Icon.png"
                              loading="lazy"
                              alt=""
                              className="_100width"
                            />
                          </div>
                          <div>Easy to use and understand</div>
                        </div>
                      </li>
                      <li>
                        <div className="list-holder">
                          <div className="list-icon-container">
                            <img
                              src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc4a566d06e55f48fbe8a4_Checkmark%20Icon.png"
                              loading="lazy"
                              alt=""
                              className="_100width"
                            />
                          </div>
                          <div>Accessible from anywhere</div>
                        </div>
                      </li>
                      <li>
                        <div className="list-holder">
                          <div className="list-icon-container">
                            <img
                              src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc4a566d06e55f48fbe8a4_Checkmark%20Icon.png"
                              loading="lazy"
                              alt=""
                              className="_100width"
                            />
                          </div>
                          <div>
                            Auto sync between devices with the latest data
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                id="w-node-_82187d72-78de-76a1-d56b-c9a74902fc66-aca8ea2d"
                className="slider-image-holder"
              >
                <div className="slider-sticky-holder _01">
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bebe4e7179fecc6348f131_Slider%20Image%2001.jpg"
                    loading="lazy"
                    alt=""
                    className="feature-image"
                  />
                </div>
                <div className="slider-sticky-holder _02">
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bebe4e601a60ce1d2bb940_Slider%20Image%2002.jpg"
                    loading="lazy"
                    alt=""
                    className="feature-image"
                  />
                </div>
                <div className="slider-sticky-holder _03">
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bebe4f8f3058338a17893b_Slider%20Image%2003.jpg"
                    loading="lazy"
                    alt=""
                    className="feature-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container _4em">
          <div className="grid-6-col">
            <div
              id="w-node-_9acb6e39-e985-ebce-2ef5-19ba02513fee-aca8ea2d"
              className="title-container"
            >
              <div className="fade-in-move-on-scroll" data-aos="fade-up">
                <h1 className="fade-up">
                  Access <span className="gradient-text">powerful</span>
                  and helpful features.
                </h1>
              </div>
              <div className="fade-in-move-on-scroll" data-aos="fade-up">
                <p className="paragraph-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                  etiam tellus aliquet risus, odio vitae cras viverra elementum.
                </p>
              </div>
              <div className="top-margin-l">
                <div className="fade-in-move-on-scroll" data-aos="fade-up">
                  <a href="#" className="button arrow w-button">
                    Request a demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-grid-holder">
            <div className="w-layout-grid feature-cards">
              <div
                id="w-node-_80744953-1164-62c7-834a-49586763b7b6-aca8ea2d"
                className="feature-cards-container"
              >
                <div className="feature-card-paddings">
                  <div className="feature-card-big-app-holder">
                    <div className="relative">
                      <div
                        className="fade-in-move-on-scroll fade-up"
                        data-aos="fade-up"
                      >
                        <h4 className="no-margins">
                          Design with real native elements
                        </h4>
                      </div>
                      <div
                        className="fade-in-move-on-scroll fade-up
                        "
                        data-aos="fade-up"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div className="app-gardient-top"></div>
                    <div className="full-app-image-container">
                      <img
                        src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc59c9b64ae66f68faa904_Feature%20Grid%20Image%2001%20(1).jpg"
                        loading="lazy"
                        alt=""
                        className="full-app-image"
                        data-aos="fade"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-_5db75681-33d3-b0fb-2e77-0a4c1ef35b70-aca8ea2d"
                className="feature-cards-container _02"
              >
                <div className="feature-card-paddings">
                  <div className="feature-card-big-app-holder _02">
                    <div className="relative">
                      <div
                        className="fade-in-move-on-scroll fade-up"
                        data-aos="fade-up"
                      >
                        <h4 className="no-margins">Real Time Data</h4>
                      </div>
                      <div
                        className="fade-in-move-on-scroll fade-up"
                        data-aos="fade-up"
                      >
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                    <div className="app-gardient-bot"></div>
                    <div className="app-gardient-top"></div>
                    <div className="phone-container">
                      <div className="phone-image-container">
                        <img
                          src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc5afca6c2178c70737e28_Apple%20iPhone%2012%20Pro%20Silver.png"
                          loading="lazy"
                          sizes="(max-width: 479px) 86vw, (max-width: 767px) 65vw, (max-width: 991px) 63vw, 282px"
                          srcSet="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc5afca6c2178c70737e28_Apple%20iPhone%2012%20Pro%20Silver-p-500.png 500w, https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc5afca6c2178c70737e28_Apple%20iPhone%2012%20Pro%20Silver-p-800.png 800w, https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc5afca6c2178c70737e28_Apple%20iPhone%2012%20Pro%20Silver.png 1024w"
                          alt=""
                          className="iphone-image"
                          data-aos="fade"
                        />
                      </div>
                      <div className="iphone-screen-image-container">
                        <img
                          src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc5ba6a0bf234a3fd242cc_Iphone%20App%20Image.jpg"
                          loading="lazy"
                          sizes="(max-width: 479px) 80vw, (max-width: 991px) 61vw, 254px"
                          srcSet="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc5ba6a0bf234a3fd242cc_Iphone%20App%20Image-p-500.jpeg 500w, https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc5ba6a0bf234a3fd242cc_Iphone%20App%20Image.jpg 704w"
                          alt=""
                          className="iphone-screen-image"
                          data-aos="fade"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-layout-grid feature-cards">
              <div
                id="w-node-_6eda20d0-05fc-a501-ad3d-6ae5e36c303e-aca8ea2d"
                className="feature-cards-container _02"
              >
                <div className="feature-card-paddings">
                  <div className="feature-card-big-app-holder _02">
                    <div className="relative">
                      <div
                        className="fade-in-move-on-scroll fade-up "
                        data-aos="fade-up"
                      >
                        <h4 className="no-margins">Quick overview</h4>
                      </div>
                      <div
                        className="fade-in-move-on-scroll fade-up"
                        data-aos="fade-up"
                      >
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                    <div className="app-gardient-bot"></div>
                    <div className="app-gardient-top"></div>
                    <div className="phone-container _02">
                      <div className="phone-image-container ">
                        <img
                          src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc5afca6c2178c70737e28_Apple%20iPhone%2012%20Pro%20Silver.png"
                          loading="lazy"
                          sizes="(max-width: 991px) 100vw, 394.796875px"
                          srcSet="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc5afca6c2178c70737e28_Apple%20iPhone%2012%20Pro%20Silver-p-500.png 500w, https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc5afca6c2178c70737e28_Apple%20iPhone%2012%20Pro%20Silver-p-800.png 800w, https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc5afca6c2178c70737e28_Apple%20iPhone%2012%20Pro%20Silver.png 1024w"
                          alt=""
                          className="iphone-image"
                          data-aos="fade"
                        />
                      </div>
                      <div className="iphone-screen-image-container">
                        <img
                          src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc5ba6a0bf234a3fd242cc_Iphone%20App%20Image.jpg"
                          loading="lazy"
                          sizes="(max-width: 479px) 97vw, (max-width: 991px) 100vw, 366.796875px"
                          srcSet="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc5ba6a0bf234a3fd242cc_Iphone%20App%20Image-p-500.jpeg 500w, https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc5ba6a0bf234a3fd242cc_Iphone%20App%20Image.jpg 704w"
                          alt=""
                          className="iphone-screen-image fade"
                          data-aos="fade"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-_6eda20d0-05fc-a501-ad3d-6ae5e36c3031-aca8ea2d"
                className="feature-cards-container"
              >
                <div className="feature-card-paddings">
                  <div className="feature-card-big-app-holder">
                    <div className="relative">
                      <div
                        className="fade-in-move-on-scroll fade-up"
                        data-aos="fade-up"
                      >
                        <h4 className="no-margins">
                          Don &#x27;t miss anything important
                        </h4>
                      </div>
                      <div
                        className="fade-in-move-on-scroll fade-up"
                        data-aos="fade-up"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div className="full-app-image-container _02">
                      <img
                        src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc5d770ac88d5925a5d9a7_Feature%20Grid%20Image%2002.svg"
                        loading="lazy"
                        alt=""
                        className="full-app-image"
                        data-aos="fade"
                      />
                    </div>
                    <div className="app-gardient-bot"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Pricing" className="section">
        <div className="container _6em">
          <div className="center-text">
            <div className="fade-in-move-on-scroll" data-aos="fade-up">
              <h1>Our payment plan is easy to understand</h1>
            </div>
          </div>
          <div className="payment-holder">
            <div
              data-current="Tab 2"
              data-easing="ease"
              data-duration-in="300"
              data-duration-out="100"
              className="tabs w-tabs"
            >
              <div className="tabs-menu w-tab-menu fade-up" data-aos="fade">
                <a
                  data-w-tab="Tab 1"
                  className="tab-link right-side w-inline-block w-tab-link"
                >
                  <div className="tab-text">Pay Monthly</div>
                </a>
                <a
                  data-w-tab="Tab 2"
                  className="tab-link w-inline-block w-tab-link w--current"
                >
                  <div className="tab-text">Pay Annual</div>
                </a>
              </div>
              <div className="tabs-content w-tab-content">
                <div data-w-tab="Tab 1" className="w-tab-pane">
                  <div className="tab-grid">
                    <div
                      id="w-node-_55eeaba3-9b54-f591-debf-2f656f5641f6-aca8ea2d"
                      className="payment-tab-holder"
                    >
                      <div className="payment-padding">
                        <div
                          className="fade-in-move-on-scroll fade-up"
                          data-aos="fade-up"
                        >
                          <h1 className="no-margins">Pro</h1>
                        </div>
                        <div
                          className="fade-in-move-on-scroll fade-up"
                          data-aos="fade-up"
                        >
                          <div className="center-text">
                            <div className="payment-number-holder">
                              <h1 className="no-margins">$</h1>
                              <div className="payment-number-container">
                                <div className="plan-number">16</div>
                                <h1 className="no-margins">/mo</h1>
                              </div>
                            </div>
                            <p>$144 per person billed yearly</p>
                          </div>
                        </div>
                        <div
                          className="fade-in-move-on-scroll _100width"
                          data-aos="fade-up"
                        >
                          <div className="top-margin-l _100width">
                            <div className="payment-button-holder">
                              <a href="#" className="button w-button">
                                Start Free Trail
                              </a>
                              <a
                                href="#"
                                className="gradient-link w-inline-block"
                              >
                                <div className="link-gradient-text grey-full">
                                  Sing in to manage your account
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-bbe64543-f8b8-e245-b98f-f12add5ba78e-aca8ea2d"
                      className="content"
                    >
                      <div className="tab-text-holder">
                        <div
                          className="fade-in-move-on-scroll fade-up"
                          data-aos="fade-up"
                        >
                          <h2 className="no-margins">
                            Try Our product for free for on month
                          </h2>
                        </div>
                        <div
                          className="fade-in-move-on-scroll fade-up"
                          data-aos="fade-up"
                        >
                          <p>
                            No credit card is required, start for free, and pick
                            a plan later. You can cancel anytime.
                          </p>
                        </div>
                        <div
                          className="fade-in-move-on-scroll"
                          data-aos="fade-up"
                        >
                          <div className="w-layout-grid grid-list">
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      loading="lazy"
                                      src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc4a566d06e55f48fbe8a4_Checkmark%20Icon.png"
                                      alt=""
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Cloud Storage</div>
                                </div>
                              </li>
                            </ul>
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      loading="lazy"
                                      src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc4a566d06e55f48fbe8a4_Checkmark%20Icon.png"
                                      alt=""
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Unlimited Shares</div>
                                </div>
                              </li>
                            </ul>
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      loading="lazy"
                                      src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc4a566d06e55f48fbe8a4_Checkmark%20Icon.png"
                                      alt=""
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Privat Access</div>
                                </div>
                              </li>
                            </ul>
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      loading="lazy"
                                      src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc4a566d06e55f48fbe8a4_Checkmark%20Icon.png"
                                      alt=""
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Embed Links</div>
                                </div>
                              </li>
                            </ul>
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      loading="lazy"
                                      src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc4a566d06e55f48fbe8a4_Checkmark%20Icon.png"
                                      alt=""
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Comments</div>
                                </div>
                              </li>
                            </ul>
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      loading="lazy"
                                      src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc4a566d06e55f48fbe8a4_Checkmark%20Icon.png"
                                      alt=""
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Print PDF Ready</div>
                                </div>
                              </li>
                            </ul>
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      loading="lazy"
                                      src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc4a566d06e55f48fbe8a4_Checkmark%20Icon.png"
                                      alt=""
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Export to PNG</div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 2" className="w-tab-pane w--tab-active">
                  <div className="tab-grid">
                    <div
                      id="w-node-_21ad6684-3158-f9d9-417c-29f08a721e3e-aca8ea2d"
                      className="payment-tab-holder"
                    >
                      <div className="payment-padding">
                        <div
                          className="fade-in-move-on-scroll"
                          data-aos="fade-up"
                        >
                          <h1 className="no-margins">Pro</h1>
                        </div>
                        <div
                          className="fade-in-move-on-scroll"
                          data-aos="fade-up"
                        >
                          <div className="center-text">
                            <div className="payment-number-holder">
                              <h1 className="no-margins">$</h1>
                              <div className="payment-number-container">
                                <div className="plan-number">12</div>
                                <h1 className="no-margins">/mo</h1>
                              </div>
                            </div>
                            <p>$144 per person billed yearly</p>
                          </div>
                        </div>
                        <div
                          className="fade-in-move-on-scroll _100width"
                          data-aos="fade-up"
                        >
                          <div className="top-margin-l _100width">
                            <div className="payment-button-holder">
                              <a href="#" className="button w-button">
                                Start Free Trail
                              </a>
                              <a
                                href="#"
                                className="gradient-link w-inline-block"
                              >
                                <div className="link-gradient-text grey-full">
                                  Sing in &amp;manage your account
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-_21ad6684-3158-f9d9-417c-29f08a721e57-aca8ea2d"
                      className="content"
                    >
                      <div className="tab-text-holder">
                        <div
                          className="fade-in-move-on-scroll fade-up"
                          data-aos="fade-up"
                        >
                          <h2 className="no-margins">
                            Try Our product for free for on month
                          </h2>
                        </div>
                        <div
                          className="fade-in-move-on-scroll"
                          data-aos="fade-up"
                        >
                          <p>
                            No credit card is required, start for free, and pick
                            a plan later. You can cancel anytime.
                          </p>
                        </div>
                        <div
                          className="fade-in-move-on-scroll"
                          data-aos="fade-up"
                        >
                          <div className="w-layout-grid grid-list">
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      loading="lazy"
                                      src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc4a566d06e55f48fbe8a4_Checkmark%20Icon.png"
                                      alt=""
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Cloud Storage</div>
                                </div>
                              </li>
                            </ul>
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      loading="lazy"
                                      src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc4a566d06e55f48fbe8a4_Checkmark%20Icon.png"
                                      alt=""
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Unlimited Shares</div>
                                </div>
                              </li>
                            </ul>
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      loading="lazy"
                                      src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc4a566d06e55f48fbe8a4_Checkmark%20Icon.png"
                                      alt=""
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Privat Access</div>
                                </div>
                              </li>
                            </ul>
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      loading="lazy"
                                      src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc4a566d06e55f48fbe8a4_Checkmark%20Icon.png"
                                      alt=""
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Embed Links</div>
                                </div>
                              </li>
                            </ul>
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      loading="lazy"
                                      src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc4a566d06e55f48fbe8a4_Checkmark%20Icon.png"
                                      alt=""
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Comments</div>
                                </div>
                              </li>
                            </ul>
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      loading="lazy"
                                      src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc4a566d06e55f48fbe8a4_Checkmark%20Icon.png"
                                      alt=""
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Print PDF Ready</div>
                                </div>
                              </li>
                            </ul>
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      loading="lazy"
                                      src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc4a566d06e55f48fbe8a4_Checkmark%20Icon.png"
                                      alt=""
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Export to PNG</div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container _6em">
          <div className="center-text">
            <div className="fade-in-move-on-scroll" data-aos="fade-up">
              <h1>Connect to what you actually need</h1>
            </div>
          </div>
          <div className="connect-section-container">
            <div className="w-layout-grid connect-grid-container">
              <div
                id="w-node-d008f252-532e-9d09-d9c2-0bb50db72bc3-aca8ea2d"
                className="company-avatar-container"
              >
                <div>
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc6766fe7b1f6e89ab74d7_Comapny%20Avatar.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-_6b36a120-b831-13db-9104-e521eb83e706-aca8ea2d"
                className="company-avatar-container"
              >
                <div>
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc68db99f57152ed8120de_Company%20Avatar%2005.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-_8689b8b6-e83a-0577-b4e9-43bb27f11736-aca8ea2d"
                className="company-avatar-container bot"
              >
                <div>
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc68dc83fd9c4685ec8d12_Company%20Avatar%2006.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-_4f1d5286-8618-b7c4-8f9b-154d93084005-aca8ea2d"
                className="company-avatar-container up"
              >
                <div>
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc68dc001cf66491f0cbda_Company%20Avatar%2001.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-_52b3093c-671c-ec38-a078-3b81fa20f408-aca8ea2d"
                className="company-avatar-container"
              >
                <div>
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc68dce02d27863c0cb675_Company%20Avatar%2007.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-e3acfc95-87cd-c92c-4015-0873834ac1d1-aca8ea2d"
                className="company-avatar-container random"
              >
                <div>
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc68dc7d7b7c2415942b54_Company%20Avatar%2004.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-ab6fd3a9-0145-6a3e-94fc-91330bb0f431-aca8ea2d"
                className="company-avatar-container random"
              >
                <div>
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc68dc20250608380f0d9e_Company%20Avatar%2003.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-_2bb55183-bd7a-9bae-a4c9-ae37c11720c5-aca8ea2d"
                className="company-avatar-container bot"
              >
                <div>
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc68dc3fbee74331ea69cc_Company%20Avatar%2008.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-_05e15299-d605-b9eb-85f8-c9e4e84a86e4-aca8ea2d"
                className="company-avatar-container bot"
              >
                <div>
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62beb648357a202689d2688a_Company%20Avatar%2015.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-a9b6046f-debb-78ae-3ea8-b3631ff554a0-aca8ea2d"
                className="company-avatar-container up hide"
              >
                <div>
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62beb64396e2ae80e40c771e_Company%20Avatar%2018.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
            </div>
            <div className="w-layout-grid connect-grid-container">
              <div
                id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff2dd-aca8ea2d"
                className="company-avatar-container"
              >
                <div>
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62beb643730d345dd715bef5_Company%20Avatar%2017.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff2e2-aca8ea2d"
                className="company-avatar-container bot"
              >
                <div>
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62beb64396e2ae80e40c771e_Company%20Avatar%2018.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff2e7-aca8ea2d"
                className="company-avatar-container bot"
              >
                <div>
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62beb6439c2088ac19530a35_Company%20Avatar%2019.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff2ec-aca8ea2d"
                className="company-avatar-container up"
              >
                <div>
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62beb6443a756e338e6987a3_Company%20Avatar%2020.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff2f1-aca8ea2d"
                className="company-avatar-container"
              >
                <div>
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62beb645aea71ce79203da80_Company%20Avatar%2009.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff2f6-aca8ea2d"
                className="company-avatar-container"
              >
                <div>
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62beb6452b9c80cf9068d091_Company%20Avatar%2010.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff2fb-aca8ea2d"
                className="company-avatar-container random"
              >
                <div>
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62beb645870dba6e8b4843eb_Company%20Avatar%2011.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff300-aca8ea2d"
                className="company-avatar-container"
              >
                <div>
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62beb646a31203c301455ae4_Company%20Avatar%2012.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff305-aca8ea2d"
                className="company-avatar-container"
              >
                <div>
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62beb647d17b91bc646d5203_Company%20Avatar%2014.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff30a-aca8ea2d"
                className="company-avatar-container up hide"
              >
                <div>
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62beb6477be4212229d8a9b4_Company%20Avatar%2013.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Help" className="section">
        <div className="container _4em">
          <div className="quick-access">
            <div className="quick-access-grid">
              <a href="#" className="quick-access-card-holder w-inline-block">
                <div className="quick-access-card">
                  <h1>Help</h1>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="arrow-holder-container">
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc2217d721c46bbe3ee164_Arrow%20Gradient.svg"
                    loading="lazy"
                    alt=""
                    className="_100width"
                  />
                </div>
                <div className="grey-border"></div>
              </a>
              <a
                href="mailto:info@mycompanyemail.com"
                className="quick-access-card-holder w-inline-block"
              >
                <div className="quick-access-card">
                  <h1>Contact</h1>
                  <p>info@mycompanyemail.com</p>
                </div>
                <div className="arrow-holder-container">
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc2217d721c46bbe3ee164_Arrow%20Gradient.svg"
                    loading="lazy"
                    alt=""
                    className="_100width"
                  />
                </div>
                <div className="grey-border"></div>
              </a>
              <div
                id="w-node-bcfa0579-6986-668e-09cb-5d36b8f087e7-b8f087d1"
                className="quick-access-card-holder less-padding"
              >
                <div className="quick-access-card spacing">
                  <h1>Get to know us</h1>
                  <div className="w-form">
                    <form
                      id="email-form"
                      name="email-form"
                      data-name="Email Form"
                      method="get"
                      className="form"
                    >
                      <div className="form-container">
                        <div className="submit-button">
                          <input
                            type="submit"
                            value="Submit"
                            data-wait="Please wait..."
                            className="link-gradient-text grey w-button"
                          />
                        </div>
                        <input
                          type="text"
                          className="quick-accesss-input w-input"
                          maxLength="256"
                          name="name-2"
                          data-name="Name 2"
                          placeholder="Your Email"
                          id="name-2"
                        />
                        <div className="form-gradient"></div>
                      </div>
                    </form>
                    <div className="success-message-toast w-form-done">
                      <div className="success-message-text">
                        <span className="text-span">
                          <strong>Thank you!</strong>
                        </span>
                        <strong></strong>
                        Your submission has been received!
                      </div>
                    </div>
                    <div className="error-message w-form-fail">
                      <div>
                        Oops! Something went wrong while submitting the form.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grey-border"></div>
              </div>
              <a
                href="mailto:Security@mycompanyemail.com"
                className="quick-access-card-holder w-inline-block"
              >
                <div className="quick-access-card">
                  <h1>Security</h1>
                  <p>Security@mycompanyemail.com</p>
                </div>
                <div className="arrow-holder-container">
                  <img
                    src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc2217d721c46bbe3ee164_Arrow%20Gradient.svg"
                    loading="lazy"
                    alt=""
                    className="_100width"
                  />
                </div>
                <div className="grey-border"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="w-layout-grid grid-8-col">
            <div
              id="w-node-_8b3914f6-0a6d-8c3b-f9b8-6366871866d8-0a144c54"
              className="fade-in-move-on-scroll fade-up"
              data-aos="fade-up"
            >
              <h1 className="no-margins">
                Don’t miss the chance get a demo from our team
              </h1>
            </div>
            <div
              id="w-node-_177ad39d-ec13-3434-08d3-899b73ba7d6c-0a144c54"
              className="veritcal-direction-spacing"
            >
              <div
                className="fade-in-move-on-scroll fade-up"
                data-aos="fade-up"
              >
                <p className="paragraph-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                  etiam tellus aliquet risus, odio vitae cras viverra elementum.
                </p>
              </div>
              <div
                className="fade-in-move-on-scroll fade-up"
                data-aos="fade-up"
              >
                <a href="#" className="button arrow w-button">
                  Request a demo
                </a>
              </div>
            </div>
          </div>
          <div className="footer-flex-container">
            <a href="#" className="footer-logo-link">
              <img
                src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc1d49a6c2177d44719778_Footer%20Logo.svg"
                alt=""
                className="footer-image"
                data-aos="fade"
              />
            </a>
            <a
              href="mailto:hello@mycompanyemail.com"
              className="w-inline-block"
            >
              <h5>hello@mycompanyemail.com</h5>
            </a>
          </div>
          <div className="footer-line"></div>
          <div className="copy-right-section">
            <p className="copyright-text">
              Crafted with ♥ by{" "}
              <a
                href="http://azwedo.com?ref=vancouver-template"
                target="_blank"
              >
                Azwedo
              </a>
              &amp;
              <a
                href="http://wedoflow.com?ref=vancouver-template"
                target="_blank"
              >
                Wedoflow
              </a>
              |Powered by{" "}
              <a href="http://www.webflow.com" target="_blank">
                Webflow
              </a>
            </p>
            <div className="footer-link-holder">
              <div
                className="fade-in-move-on-scroll fade-up"
                data-aos="fade-up"
              >
                <a
                  href="/template/licensing"
                  className="link-block animation-01 w-inline-block"
                >
                  <div>Licensing</div>
                  <div className="link-block-underline"></div>
                </a>
              </div>
              <div
                className="fade-in-move-on-scroll fade-up"
                data-aos="fade-up"
              >
                <a
                  href="/template/style-guide"
                  className="link-block animation-01 w-inline-block"
                >
                  <div>Style Guide</div>
                  <div className="link-block-underline"></div>
                </a>
              </div>
              <div
                className="fade-in-move-on-scroll fade-up"
                data-aos="fade-up"
              >
                <a
                  href="/template/change-log"
                  className="link-block animation-01 w-inline-block"
                >
                  <div>Change Log</div>
                  <div className="link-block-underline"></div>
                </a>
              </div>
              <div
                className="fade-in-move-on-scroll fade-up"
                data-aos="fade-up"
              >
                <a
                  href="/template/instructions"
                  className="link-block animation-01 w-inline-block"
                >
                  <div>Help Center</div>
                  <div className="link-block-underline"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
