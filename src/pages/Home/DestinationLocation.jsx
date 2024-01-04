import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./home.css";

// import required modules
import { Navigation } from "swiper/modules";
import { Typography } from "antd";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const DestinationLocation = () => {
  const { Title, Paragraph, Text } = Typography;
  return (
    <DestinationStyle>
      <div className="titleWrapper">
        <Title>Destinations Travellers Love</Title>
        <Paragraph>These popular destinations have a lot to offer</Paragraph>
      </div>

      <div className="cardWrapper">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="slide">
            <Card image="/1.png" title="London, UK" para={"4,090 properties"} />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <Card image="/2.png" title="London, UK" para={"4,090 properties"} />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <Card image="/3.png" title="London, UK" para={"4,090 properties"} />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <Card image="/4.png" title="London, UK" para={"4,090 properties"} />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <Card image="/5.png" title="London, UK" para={"4,090 properties"} />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <Card image="/6.png" title="London, UK" para={"4,090 properties"} />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <Card />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <Card />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <Card />
          </SwiperSlide>
        </Swiper>
        <div className="button-next-slide">
          <IoIosArrowForward size={20} style={{ textAlign: "center" }} />
        </div>
        <div className="button-prev-slide">
          <IoIosArrowBack size={20} />
        </div>
      </div>
    </DestinationStyle>
  );
};

const DestinationStyle = styled.div`
  .mySwiper {
    /* display: flex;
    align-items: center;
    gap: 20px; */
    padding-left: 18rem;
    .slide {
      width: 12rem !important;
    }
  }

  .cardWrapper {
    position: relative;
  }
  .button-next-slide {
    width: 40px;
    height: 40px;
    padding: 9px;
    position: absolute;
    top: 150px;
    left: 82.2rem;
    background-color: white;
    cursor: pointer;
    color: black;

    text-align: center;
    border-radius: 50%;
    z-index: 1;
    box-shadow: 0px 20px 40px 0px #05103612;

    &:hover {
      background-color: #3554d1;
      color: white;
    }
  }
  .button-prev-slide {
    /* top: 50%;
    transform: translate(-50%); */
    width: 40px;
    height: 40px;
    padding: 9px;
    position: absolute;
    top: 150px;
    left: 16rem;
    background-color: white;
    color: black;
    cursor: pointer;

    text-align: center;
    border-radius: 50%;
    z-index: 1;
    box-shadow: 0px 20px 40px 0px #05103612;

    &:hover {
      cursor: pointer;
      background-color: #3554d1;
      color: white;
    }
  }
`;

const Card = ({ image, title, para }) => {
  const { Title, Paragraph } = Typography;

  return (
    <CardStyle>
      <div className="CardWrapper">
        <div className="image">
          <img src={image} alt="poster" />
        </div>
        <Title
          style={{
            fontSize: "1.30rem",
            lineHeight: "10px",
            paddingTop: "14px",
            fontFamily: "jost",
          }}
        >
          {title}
        </Title>
        <Paragraph style={{ fontSize: "14px", fontFamily: "jost" }}>4,090 properties</Paragraph>
      </div>
    </CardStyle>
  );
};

const CardStyle = styled.div`
  .CardWrapper {
    width: 13.7rem;
    height: 45vh;
    margin-top: 4rem;
    /* margin-left: 2rem; */
    text-align: start;

    .image {
      display: block;
      position: relative;
      width: 11rem;
      height: 12rem;
      overflow: hidden;
      border-radius: 9px;
      -webkit-transition: 0.3s ease-in-out;
      transition: 0.1s linear;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        border-radius: 9px;
        -webkit-transition: 0.3s ease-in-out;
        transition: 0.1s ease-in-out;
      }
    }
    .image:hover img {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
`;

export default DestinationLocation;
