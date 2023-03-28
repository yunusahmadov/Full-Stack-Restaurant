import React, { Component } from "react";
import Slider from "react-slick";
import './sectionTwo.css'
import comImg1 from '../../../images/comment1.png'
import comImg2 from '../../../images/comment2.png'
import comImg3 from '../../../images/comment3.png'


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 6000,
    };
    return (
      <div className="slider-comments">
        <Slider {...settings}>
          <div className="slider-elem">
            <img src={comImg1} alt="" />
            <p>Success is not a destination, but the road that you're on. Being successful means that you're working hard and walking your walk every day. You can only live your dream by working hard towards it. That's living your dream.</p>
            <h3>EMA WAYANS</h3>
          </div>
          <div className="slider-elem">
            <img src={comImg2} alt="" />
            <p>Success is not a destination, but the road that you're on. Being successful means that you're working hard and walking your walk every day. You can only live your dream by working hard towards it. That's living your dream.</p>
            <h3>EMA WAYANS</h3>
          </div>
          <div className="slider-elem">
            <img src={comImg3} alt="" />
            <p>Success is not a destination, but the road that you're on. Being successful means that you're working hard and walking your walk every day. You can only live your dream by working hard towards it. That's living your dream.</p>
            <h3>EMA WAYANS</h3>
          </div>
        </Slider>
      </div>
    );
  }
}