import React, { Component } from "react";
import Slider from "react-slick";
import './SectionFour.css'
import yunus_img1 from "./slider4-img/port-fi-1.jpg"
import yunus_img2 from "./slider4-img/port-fi-2.jpg"
import yunus_img3 from "./slider4-img/port-fi-3.jpg"
import yunus_img4 from "./slider4-img/port-fi-4.jpg"
import yunus_img5 from "./slider4-img/port-fi-5.jpg"
import yunus_img6 from "./slider4-img/port-fi-6.jpg"
import yunus_img7 from "./slider4-img/port-fi-7.jpg"
import yunus_img8 from "./slider4-img/port-fi-8.jpg"
import yunus_img9 from "./slider4-img/port-fi-9.jpg"
import yunus_img10 from "./slider4-img/port-fi-10.jpg"
import yunus_img11 from "./slider4-img/port-fi-11.jpg"
import yunus_img12 from "./slider4-img/port-fi-12.jpg"
import yunus_img13 from "./slider4-img/port-fi-13.jpg"
import yunus_img14 from "./slider4-img/port-fi-14.jpg"
import yunus_img15 from "./slider4-img/port-fi-15.jpg"
import SectionFourSliderText from "./SectionFourSliderText/SectionFourSliderText";


export default class SliderFour extends Component {
  render() {
    const settings = {
    //   dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      // autoplay: true,
      // speed: 500,
      // autoplaySpeed: 4000,
      responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
      <div className="slider-four">
        <Slider {...settings}>
                <div className="slider-elem tesst">
                    <img src={yunus_img1} alt="" />  
                      <SectionFourSliderText
                      topText={"Chicken Recipes"}
                      bottomText={"Burger"}
                      />
                    <div className="shaddow"></div>          
                </div>
                <div className="slider-elem">
                <img src={yunus_img2} alt="" />   
                <SectionFourSliderText
                      topText={"Chicken Recipes"}
                      bottomText={"Burger"}
                      />
                <div className="shaddow"></div>          
                </div>
                <div className="slider-elem">
                <img src={yunus_img3} alt="" />  
                <SectionFourSliderText
                      topText={"Chicken Recipes"}
                      bottomText={"Burger"}
                      />   
                <div className="shaddow"></div>          
                </div>
                <div className="slider-elem">
                <img src={yunus_img4} alt="" /> 
                <SectionFourSliderText
                      topText={"Chicken Recipes"}
                      bottomText={"Burger"}
                      />
                <div className="shaddow"></div>          
                </div>
                <div className="slider-elem">
                <img src={yunus_img5} alt="" /> 
                <SectionFourSliderText
                      topText={"Chicken Recipes"}
                      bottomText={"Burger"}
                      />
                <div className="shaddow"></div>          
                </div>
                <div className="slider-elem">
                <img src={yunus_img6} alt="" /> 
                <SectionFourSliderText
                      topText={"Chicken Recipes"}
                      bottomText={"Burger"}
                      />
                <div className="shaddow"></div>          
                </div>
                <div className="slider-elem">
                <img src={yunus_img7} alt="" /> 
                <SectionFourSliderText
                      topText={"Chicken Recipes"}
                      bottomText={"Burger"}
                      />
                <div className="shaddow"></div>          
                </div>
                <div className="slider-elem">
                <img src={yunus_img8} alt="" /> 
                <SectionFourSliderText
                      topText={"Chicken Recipes"}
                      bottomText={"Burger"}
                      />
                <div className="shaddow"></div>          
                </div>
                <div className="slider-elem">
                <img src={yunus_img9} alt="" /> 
                <SectionFourSliderText
                      topText={"Chicken Recipes"}
                      bottomText={"Burger"}
                      />
                <div className="shaddow"></div>          
                </div>
                <div className="slider-elem">
                <img src={yunus_img10} alt="" />
                <SectionFourSliderText
                      topText={"Chicken Recipes"}
                      bottomText={"Burger"}
                      /> 
                <div className="shaddow"></div>          
                </div>
                <div className="slider-elem">
                <img src={yunus_img11} alt="" /> 
                <SectionFourSliderText
                      topText={"Chicken Recipes"}
                      bottomText={"Burger"}
                      />
                <div className="shaddow"></div>          
                </div>
                <div className="slider-elem">
                <img src={yunus_img12} alt="" /> 
                <SectionFourSliderText
                      topText={"Chicken Recipes"}
                      bottomText={"Burger"}
                      />
                <div className="shaddow"></div>          
                </div>
                <div className="slider-elem">
                <img src={yunus_img13} alt="" /> 
                <SectionFourSliderText
                      topText={"Chicken Recipes"}
                      bottomText={"Burger"}
                      />
                <div className="shaddow"></div>          
                </div>
                <div className="slider-elem">
                <img src={yunus_img14} alt="" /> 
                <SectionFourSliderText
                      topText={"Chicken Recipes"}
                      bottomText={"Burger"}
                      />
                <div className="shaddow"></div>          
                </div>
                <div className="slider-elem">
                <img src={yunus_img15} alt="" /> 
                <SectionFourSliderText
                      topText={"Chicken Recipes"}
                      bottomText={"Burger"}
                      />
                <div className="shaddow"></div>          
                </div>
        </Slider>
      </div>
    );
  }
}