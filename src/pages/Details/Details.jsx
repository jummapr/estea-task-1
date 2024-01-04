import React from "react";
import { DetailsStyle } from "./DetailsStyle";
import Navbar from "../../components/Navbar";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Flex,
  Layout,
  Row,
  Typography,
  Space,
} from "antd";
import { IoCarOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import { CiHeart, CiWifiOn } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";
import { FaSmokingBan } from "react-icons/fa";
import { GiModernCity } from "react-icons/gi";
import {
  PiAirplaneInFlightFill,
  PiAirplaneInFlightLight,
  PiCallBell,
  PiTelevision,
} from "react-icons/pi";
import { RiHomeSmile2Line } from "react-icons/ri";
import { FaKitchenSet } from "react-icons/fa6";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { useState } from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { GrCertificate } from "react-icons/gr";
import { IoManSharp } from "react-icons/io5";

const Details = () => {
  const { Title, Paragraph, Text } = Typography;
  const { Header, Footer, Sider, Content } = Layout;
  const { RangePicker } = DatePicker;
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <DetailsStyle>
      <div className="navigate-back ">
        <Flex className="navigate container" justify="space-between">
          <div className="left">
            <Breadcrumb
              items={[
                {
                  title: "Home",
                },
                {
                  title: <a href="">London Hotels</a>,
                },
                {
                  title:
                    "Great Northern Hotel, a Tribute Portfolio Hotel, London",
                },
              ]}
            />
          </div>
          <div className="right">
            <Text className="linkText">All Hotel in London</Text>
          </div>
        </Flex>
      </div>

      <div className="detailHeaderBox ">
        <Flex className="container" justify="space-between">
          <div>
            <Flex>
              <Title level={3}>Warwick Allerton Hotel Chicago</Title>
              <div></div>
            </Flex>
            <Flex gap={"20px"}>
              <Flex>
                <span>
                  <IoLocationOutline size={20} />
                </span>
                <Text>
                  Moscow Road, Kensington and Chelsea, London, W2 4EL, United
                  Kingdom
                </Text>
              </Flex>

              <Text className="linkText">Show on Map</Text>
            </Flex>
          </div>
          <Flex className="right" gap={"20px"} align="center">
            <div gap={"5px"}>
              <span className="fromText">From</span>
              <Text className="text" strong>
                US$72
              </Text>
            </div>

            <Button className="headerSelectRoomBtn">
              <Flex gap={"5px"} align="center">
                Select Room
                <MdOutlineArrowOutward size={20} />
              </Flex>
            </Button>
          </Flex>
        </Flex>
      </div>

      <div className="hotelImageBox container">
        <Row className="row">
          <Col className="col-1" span={12}>
            <img
              src="/hotel-detail-image-1.png"
              alt="image-1"
              className="image-1"
            />
            <div className="heartBox">
              <CiHeart size={40} className="heart" />
            </div>
          </Col>
          <Col className="col-2" span={6}>
            <img
              src="/hotel-detail-image-2.png"
              alt="image-2"
              className="image-2"
            />
            <img
              src="/hotel-detail-image-3.png"
              alt="image-3"
              className="image-2"
            />
          </Col>
          <Col className="col-3" span={6}>
            <div>
              <img
                src="/hotel-detail-image-2.png"
                alt="image-4"
                className="image-4"
              />

              <div className="heartBox">
                <CiPlay1 size={50} className="heart" />
              </div>
            </div>
            <div>
              <img
                src="/hotel-detail-image-2.png"
                alt="image-4"
                className="image-4"
              />

              <div className="AllPhotosBtn">
                <Button type="default">See All 90 Photos</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="hotelMainContent container">
        <Layout className="layout">
          <Layout className="left" hasSider>
            <Content>
              <div className="propertyBox">
                <Title level={3} className="title">
                  Property highlights
                </Title>

                <Flex
                  gap={"63px"}
                  className="propertyList"
                  justify="start"
                  align="center"
                >
                  <Flex vertical gap={"10px"} align="center">
                    <GiModernCity size={25} className="icon" />
                    <Title level={5} className="text">
                      In London City Centre
                    </Title>
                  </Flex>
                  <Flex vertical gap={"10px"} align="center">
                    <PiAirplaneInFlightLight size={25} className="icon" />
                    <Title level={5} className="text">
                      Airport transfer
                    </Title>
                  </Flex>
                  <Flex vertical gap={"10px"} align="center">
                    <PiCallBell size={25} className="icon" />

                    <Title level={5} className="text">
                      Front desk [24-hour]
                    </Title>
                  </Flex>
                  <Flex vertical gap={"10px"} align="center">
                    <PiTelevision size={25} className="icon" />

                    <Title level={5} className="text">
                      Premium TV channels
                    </Title>
                  </Flex>
                </Flex>

                <Divider />

                <div className="overview">
                  <Title level={3} className="title">
                    Overview
                  </Title>

                  <Flex vertical gap={"30px"} className="overviewTextBox">
                    <Text className="overviewText">
                      You can directly book the best price if your travel dates
                      are available, all discounts are already included. In the
                      following house description you will find all information
                      about our listing.
                    </Text>
                    <div>
                      <Flex vertical gap={"14px"}>
                        <Text className="overviewText">
                          2-room terraced house on 2 levels. Comfortable and
                          cosy furnishings: 1 room with 1 french bed and radio.
                          Shower, sep. WC. Upper floor: (steep stair)
                          living/dining room with 1 sofabed (110 cm, length 180
                          cm), TV. Exit to the balcony. Small kitchen (2 hot
                          plates, oven,
                        </Text>
                        <Text className="overviewLinkText">See More</Text>
                      </Flex>
                    </div>
                  </Flex>
                </div>

                <Divider />
                <Flex vertical gap={"14px"} className="facilities">
                  <Title level={3} className="title">
                    Most Popular Facilities
                  </Title>

                  <Flex
                    vertical={false}
                    justify="space-between"
                    className="facilitiesList"
                  >
                    <Flex vertical gap={"15px"}>
                      <Flex gap={"15px"}>
                        <FaSmokingBan size={18} />
                        <Text>Non-smoking rooms</Text>
                      </Flex>
                      <Flex gap={"15px"}>
                        <IoCarOutline size={18} />
                        <Text>Parking</Text>
                      </Flex>
                      <Flex gap={"15px"}>
                        <RiHomeSmile2Line size={18} />
                        <Text>Living Area</Text>
                      </Flex>
                    </Flex>
                    <Flex vertical gap={"15px"}>
                      <Flex gap={"15px"}>
                        <CiWifiOn size={18} />
                        <Text>Free WiFi</Text>
                      </Flex>
                      <Flex gap={"15px"}>
                        <FaKitchenSet size={18} />
                        <Text>Kitchen</Text>
                      </Flex>
                      <Flex gap={"15px"}>
                        <AiOutlineSafetyCertificate size={18} />
                        <Text>Safety & security</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </div>
            </Content>
            <Sider className="right">
              <Card style={{ width: 370 }} className="card">
                <div>
                  <Flex
                    vertical={false}
                    gap={"10px"}
                    justify="space-between"
                    align="center"
                  >
                    <Flex vertical={false} gap={"10px"} align="center">
                      <Title level={4}>US$72</Title>
                      <Text>nights</Text>
                    </Flex>
                    <Flex
                      vertical={false}
                      gap={"10px"}
                      align="center"
                      justify="center"
                    >
                      <Flex vertical align="center">
                        <Text>Exceptional</Text>
                        <Paragraph>3,014 reviews</Paragraph>
                      </Flex>
                      <div className="ratingBox">4.8</div>
                    </Flex>
                  </Flex>

                  <Flex align="center" className="datePickerBox">
                    <div className="datePicker">
                      <div>
                        <div className="">
                          <Text className="text">Check in - Check out</Text>

                          <RangePicker
                            bordered={false}
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </Flex>

                  <Flex className="guestBox">
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
                                  onClick={() => handleOption("children", "d")}
                                >
                                  -
                                </Button>
                                <span className="optionCounterNumber">
                                  {options.children}
                                </span>
                                <Button
                                  onClick={() => handleOption("children", "i")}
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
                  </Flex>

                  <Button type="primary" className="btn">
                    Check availability
                  </Button>
                </div>
              </Card>

              <Card className="locationBox">
                <div className="imageBox">
                  <img src="/map.png" alt="" />

                  <div className="MapBtn">
                    <Button type="default" className="MapBtn">
                      <TfiLocationPin size={22} />
                      Show on map
                    </Button>
                  </div>

                  <Flex vertical gap={"10px"} className="locationHeader">
                    <Flex gap={"10px"}>
                      <GrCertificate size={20} className="icon" />
                      <Text className="text">
                        Exceptional location - Inside city center{" "}
                      </Text>
                    </Flex>
                    <Flex gap={"10px"}>
                      <IoManSharp size={20} className="icon" />
                      <Text className="text">
                        Exceptional location - Inside city center{" "}
                      </Text>
                    </Flex>
                  </Flex>

                  <Divider className="divider" />

                  <Flex vertical gap={"10px"} className="footerContent">
                    <Text className="footerTitle">Popular landmarks</Text>
                    <Flex vertical={false} justify="space-between">
                      <Text className="footerText">Royal Pump Room Museum</Text>
                      <Text className="footerPara">0.1 km</Text>
                    </Flex>
                    <Flex vertical={false} justify="space-between">
                      <Text className="footerText">
                        Harrogate Turkish Baths
                      </Text>
                      <Text className="footerPara">0.1 km</Text>
                    </Flex>

                    <Text className="linkText">Show more</Text>
                  </Flex>
                </div>
              </Card>
            </Sider>
          </Layout>

          <Footer className="footerLayout">
            <Title level={3} className="title">
              Available Rooms
            </Title>

            <Card style={{ width: "100%" }} className="card" bordered>
             
            </Card>
          </Footer>
        </Layout>
      </div>
    </DetailsStyle>
  );
};

export default Details;
