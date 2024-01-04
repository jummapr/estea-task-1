import { Button, Card, Typography } from "antd";
import React from "react";
import { CiHeart } from "react-icons/ci";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import styled from "styled-components";
import { homePopularHotelsFilter, papularHotels } from "../../constant";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PapularHotels = () => {
  const { Title, Paragraph, Text } = Typography;
  let navigate = useNavigate()
  const { Meta } = Card;
  return (
    <PopularHotelsStyle>
      <div className="titleWrapper">
        <Title className="title">Popular Hotels</Title>
        <Paragraph className="subTitle">
          Interdum et malesuada fames ac ante ipsum
        </Paragraph>
      </div>

      <div className="filterWrapper">
        {homePopularHotelsFilter.map((item) => (
          <div className="filter" key={item.id}>
            <Text className="filterText">{item.label}</Text>
          </div>
        ))}
      </div>

      <div className="cardWrapper">
        <div className="cardBox">
          {papularHotels.map((item) => (
            <Card
            onClick={() => {
              console.log(item);  
              navigate(`/detail/${item.id}`);
            }}
              key={item.id}
              style={{ width: 300,cursor:"pointer" }}
              cover={
                <>
                  {item.label && (
                    <div
                      className="labelBox"
                      style={{ backgroundColor: item.labelColor }}
                    >
                      <Text className="label">{item.label}</Text>
                    </div>
                  )}
                  <img alt="example" src={item.image} />
                  <div className="heartBox">
                    <CiHeart size={40} className="heart" />
                  </div>
                </>
              }
            >
              <Title level={5} className="cardTitle">
                {item.title}
              </Title>
              <Paragraph className="cardText">{item.subTitle}</Paragraph>

              <div className="ratings">
                <div className="ratingBox">{item.rating}</div>
                <Text strong className="ratingMiddleText">
                  {item.middleText}
                </Text>
                <Paragraph className="ratingText">
                  {item.reviews} reviews
                </Paragraph>
              </div>

              <div className="rentAmount">
                <Text className="rent">Starting from</Text>
                <Text strong className="rentAmountText">
                  {item.amount}
                </Text>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="BottomButton">
        <Button type="default">
          View All
          <MdArrowOutward size={30} />
        </Button>
      </div>
    </PopularHotelsStyle>
  );
};

const PopularHotelsStyle = styled.div`
  .cardWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .cardBox {
      margin-top: 5rem;
      margin-bottom: 2rem;
      width: 63rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
      place-items: center;
    }
  }

  .ant-card {
    border-radius: 10px;
    width: 19rem !important;
    border: none !important;

    .ant-card-body {
      padding-left: 0 !important;
      padding-top: 10px !important;
    }
  }

  .filterWrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    gap: 20px;

    .filter {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 15px;
      background-color: ${({ theme }) => theme.colors.colorLight_2};
      border-radius: 5px;
      cursor: pointer;

      .filterText {
        color: ${({ theme }) => theme.colors.colorDark_1};
        font-size: 14px;
        font-weight: 600;
        font-family: "jost";

        &:hover {
          color: ${({ theme }) => theme.colors.colorBlue_1};
        }
      }

      &:first-child {
        background-color: ${({ theme }) => theme.colors.colorBlue_1};

        .filterText {
          color: ${({ theme }) => theme.colors.colorWhite};
        }
      }
    }
  }

  .labelBox {
    width: 11rem !important;
    height: 1.8rem;
    position: absolute;
    top: 20px;
    left: -1px;
    z-index: 1;
    background-color: ${({ theme }) => theme.colors.colorDark_1};
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 500;
    font-family: "jost";
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;

    .label {
      color: ${({ theme }) => theme.colors.colorWhite};
      font-size: 12px;
      font-weight: 500;
      font-family: "jost";
      text-transform: uppercase;
    }
  }

  .heartBox {
    width: 37px !important;
    height: 37px;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.colorWhite};
    padding: 5px 10px;
    border-radius: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    .heart {
      width: 100%;
      height: 100%;
      color: ${({ theme }) => theme.colors.colorLight_1};
      font-size: 50px;
      font-weight: 500;
      font-family: "jost";
      text-align: center;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.colorBlue_1};
      .heart {
        color: ${({ theme }) => theme.colors.colorWhite};
      }
    }
  }
  .titleWrapper {
    .title {
      font-size: 30px;
      color: ${({ theme }) => theme.colors.colorDark_1};
      font-weight: 600;
      padding: 0 !important;
      margin: 0 !important;
      font-family: "jost";
    }

    .subTitle {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.colorLight_1};
      font-weight: 500;
      padding: 0 !important;
      margin: 0 !important;
      font-family: "jost";
      padding-top: 30px;
      margin-bottom: 20px;
    }
  }
  .cardTitle {
    font-size: 17px;
    color: ${({ theme }) => theme.colors.colorDark_1};
    font-weight: 600;
    padding: 0 !important;
    margin: 0 !important;
    font-family: "jost";
    position: relative !important;
  }

  .cardText {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.colorLight_1};
    font-weight: 400;
    padding: 0 !important;
    margin: 0 !important;
    font-family: "jost";
  }

  .ratings {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
    margin: 16px 0 4px 0;

    .ratingBox {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 15%;
      background-color: ${({ theme }) => theme.colors.colorBlue_1};
      color: ${({ theme }) => theme.colors.colorWhite};
      font-size: 14px;
    }

    .ant-typography {
      padding: 0 !important;
      margin: 0 !important;
    }

    .ratingMiddleText {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.colorDark_1};
      font-family: "jost";
      font-weight: 600;
    }

    .ratingText {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.colorLight_1};
      font-weight: 400;
      padding: 0 !important;
      margin: 0 !important;
      font-family: "jost";
    }
  }

  .rentAmount {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;

    .rent {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.colorDark_1};
      font-weight: 600;
      padding: 0 !important;
      margin: 0 !important;

      font-family: "jost";
    }

    .rentAmountText {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.bgPrimary};
      font-weight: 600;
      padding: 0 !important;
      margin: 0 !important;
      font-family: "jost";
    }
  }

  .BottomButton {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
    .ant-btn {
      height: 55px;
      width: 150px;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      background-color: transparent;
      border-color: white;
      font-weight: 600;
      font-family: "jost";
      border-radius: 6px !important;

      border: 1px solid ${({ theme }) => theme.colors.colorBlue_1};
      color: ${({ theme }) => theme.colors.colorBlue_1};

      &:hover {
        background-color: ${({ theme }) => theme.colors.colorBlue_1};
        color: ${({ theme }) => theme.colors.colorWhite} !important;
      }
    }
  }
`;

export default PapularHotels;
