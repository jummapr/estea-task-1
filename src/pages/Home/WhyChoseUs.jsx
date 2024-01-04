import { Typography } from "antd";
import React from "react";
import styled from "styled-components";
import { whyChooseUs } from "../../constant";

const WhyChoseUs = () => {
  const { Title, Paragraph, Text } = Typography;
  return (
    <WhyChoseUsStyle>
      <div className="titleWrapper">
        <Title className="title">Why Choose Us</Title>
        <Paragraph className="subTitle">
          These popular destinations have a lot to offer
        </Paragraph>
      </div>

      <div className="wrapper">
        {whyChooseUs.map((item) => (
          <div key={item.id} className="whyChoseWrapper">
            <img src={item.image} alt={item.title} />
            <Text className="title">{item.title}</Text>
            <Paragraph className="subTitle">{item.subTitle}</Paragraph>
          </div>
        ))}
      </div>
    </WhyChoseUsStyle>
  );
};

const WhyChoseUsStyle = styled.div`
  .titleWrapper {
    .title {
      font-size: 30px;
      color: ${({ theme }) => theme.colors.colorDark_1};
      font-weight: 600;
      padding: 0 !important;
      margin: 0 !important;
      font-family: "jost";
      line-height: 3rem !important;
    }

    .subTitle {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.colorLight_1};
      font-weight: 500;
      padding: 0 !important;
      margin: 0 !important;
      font-family: "jost";
      margin-bottom: 20px;
    }
  }

  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 90px;
    margin-top: 6rem;
    margin-bottom: 6rem;

    .whyChoseWrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;

      img {
        margin-bottom: 30px;
      }

      .title {
        line-height: 20px;
        font-size: 19px;
        color: ${({ theme }) => theme.colors.colorDark_1};
        font-weight: 500;
        padding: 0 !important;
        margin: 0 !important;
        font-family: "jost";
      }

      .subTitle {
        width: 80%;
        padding-top: 12px;
        font-size: 14px;
        color: ${({ theme }) => theme.colors.colorLight_1};
        font-weight: 400;
        margin: 0 !important;
        font-family: "jost";
      }
    }
  }
`;

export default WhyChoseUs;
