import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import {
  AutoComplete,
  Button,
  DatePicker,
  Input,
  Space,
  Typography,
} from "antd";
import Title from "antd/es/typography/Title";

import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./home.css";

import { Navigation, Autoplay } from "swiper/modules";
import Paragraph from "antd/es/skeleton/Paragraph";
import DestinationLocation from "./DestinationLocation";
import { IoIosSearch } from "react-icons/io";
import PapularHotels from "./PapularHotels";
import WhyChoseUs from "./WhyChoseUs";

const Home = () => {
  const { Title, Paragraph, Text } = Typography;
  const { RangePicker } = DatePicker;
  const { searchLocation, setSearchLocation } = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const SearchSuggustion = [
    {
      label: "London'",
      value: "London",
    },
    {
      label: "New York",
      value: "New York",
    },
    {
      label: "Paris",
      value: "Paris",
    },
    {
      label: "Madrid",
      value: "Spain",
    },
  ];

  const handleSearch = (value) => {
    console.log(value);
    // setSearchLocation(value);
  };
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <HomeStyle>
      <div className="banner">
        <Swiper
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
          //   autoplay={{
          //     delay: 2500,
          //     disableOnInteraction: false,
          //   }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
          noSwiping={false}
        >
          <SwiperSlide>
            <div className="bg_image">
              <img src="/bg.png" alt="bgImage" />
            </div>
            <div className="overlay">
              <div>{/* <Navbar /> */}</div>

              <div className="contentWrapper">
                <div className="headingWrapper">
                  <Title className="heroHeading">
                    Find Your Dream Luxury Hotels
                  </Title>
                  <Paragraph className="heroPara">
                    Discover amazing places at exclusive deals
                  </Paragraph>
                </div>

                <div className="searchLinksWrapper">
                  <div className="linkWrapper">
                    <ul>
                      <li>Hotel</li>
                      <li>Premium Flights</li>
                    </ul>
                  </div>

                  <div className="searchWrapper">
                    <div className="grid">
                      <div className="locationWrapper">
                        <div className="inputWrapper inputWrapper-1">
                          <Text
                            style={{
                              textAlign: "start",
                              paddingRight: "6rem",
                              fontSize: "17px",
                              paddingBottom: "5px",
                              fontFamily: "jost"
                            }}
                            className="text"
                          >
                            Location
                          </Text>
                          <AutoComplete
                            className="input"
                            // onSearch={handleSearch}

                            onChange={handleSearch}
                            options={SearchSuggustion}
                            value={searchLocation}
                          >
                            <Input
                              placeholder="Where are you going?"
                              bordered={false}
                            />
                          </AutoComplete>
                        </div>
                      </div>
                      <div>
                        <div className="inputWrapper-2">
                          <Text
                            
                            className="text"
                          >
                            Check in - Check out
                          </Text>

                          <RangePicker
                            bordered={false}
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="inputWrapper-3">
                          <Text
                            style={{
                              paddingRight: "8rem",
                            }}
                            className="text"
                          >
                            Guest
                          </Text>

                          <div className="headerSearchItem">
                            <Text
                              onClick={() => setOpenOptions(!openOptions)}
                              className="headerSearchText"
                            >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</Text>
                            {openOptions && (
                              <div className="options">
                                <div className="optionItem">
                                  <Text
                                    style={{
                                      fontWeight: "600",
                                      fontSize: "15px",
                                    }}
                                  >
                                    Adult
                                  </Text>
                                  <div className="optionCounter">
                                    <Button
                                      type="default"
                                      style={{
                                        width: "30px",
                                        height: "30px",
                                        textAlign: "center",
                                      }}
                                      disabled={options.adult <= 1}
                                      // className="optionCounterButton"
                                      onClick={() => handleOption("adult", "d")}
                                    >
                                      -
                                    </Button>
                                    <Text className="optionCounterNumber">
                                      {options.adult}
                                    </Text>
                                    <Button
                                      type="default"
                                      // className="optionCounterButton"
                                      onClick={() => handleOption("adult", "i")}
                                    >
                                      +
                                    </Button>
                                  </div>
                                </div>
                                <div className="optionItem">
                                  <Text
                                    style={{
                                      fontWeight: "600",
                                      fontSize: "15px",
                                    }}
                                  >
                                    Children
                                  </Text>
                                  <div className="optionCounter">
                                    <Button
                                      disabled={options.children <= 0}
                                      onClick={() =>
                                        handleOption("children", "d")
                                      }
                                    >
                                      -
                                    </Button>
                                    <span className="optionCounterNumber">
                                      {options.children}
                                    </span>
                                    <Button
                                      onClick={() =>
                                        handleOption("children", "i")
                                      }
                                    >
                                      +
                                    </Button>
                                  </div>
                                </div>
                                <div className="optionItem">
                                  <Text
                                    style={{
                                      fontWeight: "600",
                                      fontSize: "15px",
                                    }}
                                  >
                                    Room
                                  </Text>
                                  <Space size={10} direction="horzontal">
                                    <Button
                                      disabled={options.room <= 1}
                                      onClick={() => handleOption("room", "d")}
                                    >
                                      -
                                    </Button>
                                    <Text className="optionCounterNumber">
                                      {options.room}
                                    </Text>
                                    <Button
                                      onClick={() => handleOption("room", "i")}
                                    >
                                      +
                                    </Button>
                                  </Space>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="searchBox">
                        <IoIosSearch size={24} className="searchIcon" />
                        <Text style={{
                          paddingBottom: 0
                        }} className="text">Search</Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <div className="button-next-slide">
            <IoIosArrowForward size={20} style={{ color: "red" }} />
          </div>
          <div className="button-prev-slide">
            <IoIosArrowBack />
          </div>
        </Swiper>
      </div>

      <div className="destinationWrapper">
        <DestinationLocation />
      </div>

      <div className="propertyWrapper">
        <PapularHotels />
      </div>

      <div className="whyChoseUsSectionWrapper">
        <WhyChoseUs />
      </div>
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
  .banner {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;

    .bg_image {
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 0;
      left: -1;
      z-index: -1;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .overlay {
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      background-color: rgba(5, 16, 54, 0.5);

      .contentWrapper {
        margin-top: 15rem;
        .headingWrapper {
          .heroHeading {
            color: #ffffff;
            font-size: 3rem;
            font-weight: 700;
            font-family: "jost" !important;
          }

          .heroPara {
            color: #ffffff;
            font-size: 1rem;
            font-weight: 500;
            font-family: "jost" !important;
          }
        }

        .text {
          text-align: start;
          font-weight: 500;
          font-size: 16px;
          padding-bottom: 5px;
          font-family: "jost";
        }

        .inputWrapper-1 {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: start;
          padding: 18px 30px !important;
          width: 100%;
        }
        .inputWrapper-2 {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: start;
          /* padding: 18px 24px; */
          padding: 18px 0;
          width: 100%;
        }
        .inputWrapper-3 {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: start;
          padding: 18px 0;
          width: 100%;

          .headerSearchItem {
            display: flex;
            align-items: center;
            gap: 10px;

            .headerSearchInput {
              border: none;
              outline: none;
            }
            .headerSearchText {
              color: lightgray;
              cursor: pointer;
            }

            .date {
              position: absolute;
              top: 50px;
              z-index: 2;
            }

            .options {
              z-index: 2;
              position: absolute;
              top: 39rem;
              background-color: white;
              color: gray;
              border-radius: 5px;
              -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
              box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
              padding: 20px 20px;

              .ant-btn {
                width: 30px;
                height: 30px;
                text-align: center;
                padding: 0 !important;
              }
            }

            .optionItem {
              width: 200px;
              display: flex;
              justify-content: space-between;
              margin: 10px;
            }

            .optionCounter {
              display: flex;
              align-items: center;
              gap: 10px;
              font-size: 12px;
              color: black;
            }

            .optionCounterButton {
              width: 30px;
              height: 30px;
              border: 1px solid #0071c2;
              color: #0071c2;
              cursor: pointer;
              background-color: white;
            }

            .optionCounterButton:disabled {
              cursor: not-allowed;
            }
          }
        }
      }

      .searchLinksWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .linkWrapper {
          padding-top: 40px;
          ul {
            list-style: none;
            display: flex;
            padding-right: 40rem;
            gap: 20px;

            li {
              color: #ffffff;
              font-size: 20px;
              cursor: pointer;
            }
          }
        }
      }
    }
    .slideBtn {
      position: absolute;
    }
  }

  .destinationWrapper {
    width: 100%;
    margin-top: 8rem;

    .titleWrapper {
      text-align: center;
    }
  }
  .propertyWrapper {
    width: 100%;
    margin-top: 8rem;

    .titleWrapper {
      text-align: center;
    }
  }
  .whyChoseUsSectionWrapper {
    width: 100%;
    margin-top: 8rem;

    .titleWrapper {
      text-align: center;
    }
  }

  .searchWrapper {
    /* width: 100%; */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: white;
    margin-top: 1rem;
    margin-left: 2rem;

    .searchBox {
      width: 100%;
      background-color: ${({ theme }) => theme.colors.colorBlue_1};
      display: flex;
      justify-content: center;
      padding: 0 30px;
      align-items: center;
      border-radius: 0px 20px 20px 0px / 25px 20px 20px 25px;
      cursor: pointer;

      .searchIcon {
        color: white;
      }
      .ant-typography {
        color: white;
        font-weight: 600;
        font-size: 15px;
        padding-left: 2px;
      }
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 250px 290px auto;
      /* gap: 1rem; */

      .locationWrapper {
        border-radius: 10px;
        .inputWrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: start;

          .input {
            width: 100%;
          }
        }
      }
    }
  }
`;

export default Home;
