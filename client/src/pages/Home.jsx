import React from "react";
import Navbar from "../components/Navbar";
import banner from "../assets/images/banner.jpg";
import Image8 from "../assets/images2/image14.jpg";
import Image2 from "../assets/images2/image2.jpg";
import Image3 from "../assets/images2/image3.jpg";
import Image7 from "../assets/images2/image7.jpg";
import Image6 from "../assets/images2/image6.jpg";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Food from "./Food";

function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <section className="container">
        <div className="flex-col-center  mx-4">
          <h2 className="bold">Best Seller</h2>
          <p className="semi-bold">Our top selling dishes this year</p>
        </div>
      </section>
      {/*  */}
      <section className=" text-black  mt-2 ">
        <div>
          <div>
            <div className="  image-container   container m-auto  ">
              <div className="bg-transarentWhite  leading-6 min-h-[15rem] md:w-[50rem]   flex justify-center items-center text-center flex-col  ">
                <div className="image-items relative">
                  <img className="image-card" src={Image3} alt="" />

                  <div className="px-2 mb-1 flex-col gap-1 mt-1">
                    <div className="flex-col gap-0">
                      <h4 className="semi-bold ">Roster Boster</h4>
                      <p>Deep-Fried chicken Fillet Burger </p>
                    </div>
                    <div className="flex-between">
                      <p className="bold "> $15.00</p>
                      <button className="btn-outline">Order Now</button>
                    </div>
                  </div>
                  <button className="btn btn-absolute">Order Now</button>
                  <div className="star ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                    {/* <FaRegStar /> */}
                  </div>
                </div>
              </div>

              <div className="   flex-col  ">
                <div className="image-items relative">
                  <img className="image-card" src={Image2} alt="" />

                  <div className="px-2 mb-1 flex-col gap-1 mt-1">
                    <div className="flex-col gap-0">
                      <h4 className="semi-bold ">Roster Boster</h4>
                      <p>Deep-Fried chicken Fillet Burger </p>
                    </div>
                    <div className="flex-between">
                      <p className="bold "> $15.00</p>
                      <button className="btn-outline">Order Now</button>
                    </div>
                  </div>
                  <button className="btn btn-absolute">Order Now</button>
                  <div className="star ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                    <FaRegStar />
                  </div>
                </div>
              </div>

              <div className=" flex-col  ">
                <div className="image-items relative">
                  <img className="image-card" src={Image3} alt="" />

                  <div className="px-2 mb-1 flex-col gap-1 mt-1">
                    <div className="flex-col gap-0">
                      <h4 className="semi-bold ">Roster Boster</h4>
                      <p>Deep-Fried chicken Fillet Burger </p>
                    </div>
                    <div className="flex-between">
                      <p className="bold "> $15.00</p>
                      <button className="btn-outline">Order Now</button>
                    </div>
                  </div>
                  <button className="btn btn-absolute">Order Now</button>
                  <div className="star ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                    <FaRegStar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="container">
        <div className="flex-col-center gap-0 mb-1 mx-4">
          <h2 className="bold">Our unique story since 1996</h2>
          <p className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
            laboriosam consectetur suscipit nihil. Ad ipsa voluptates tempora
            laboriosam cum magnam itaque, fugit harum velit reprehenderit eaque
            sequi labore nihil illum?
          </p>
        </div>
      </section>

      {/*  */}
      <section className=" text-black   ">
        <div>
          <div className="w-[100%] flex justify-center items-center ">
            <div className="image-container-2 container-2 m-auto ">
              <div className="image-card-1 relative img-animation relative">
                <img className="image-card-1 grid-col-2" src={Image6} alt="" />
                <button className="btn img-absolute">WingPack</button>
                <button className="btn btn-absolute-1">new </button>
              </div>

              <div className="image-card-2 grid-images  img-animation relative">
                <img className="image-card-3" src={Image2} alt="" />

                <button className="btn img-absolute-1">Order Now</button>
                <button className="btn btn-absolute-1">new </button>
              </div>

              <div className="image-card-3 grid-images  img-animation relative">
                <img className="image-card-3" src={Image3} alt="" />

                <button className="btn img-absolute-1">Order Now</button>
                <button className="btn btn-absolute-1">new </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}

      <section className="container">
        <div className="flex-col-center gap-0 mb-1 mx-4">
          <h2 className="bold">Featured Foods</h2>
          <Food />
        </div>
      </section>
    </>
  );
}

export default Home;
