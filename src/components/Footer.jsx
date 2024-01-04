import { Divider, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { GrAndroid } from "react-icons/gr";
import { AiOutlineGlobal } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  const { Text, Paragraph } = Typography;
  return (
    <FooterStyles>
      <div className="container">
        <div className="footerWrapper">
          <div className="row">
            <div className="col-1">
              <h3 className="heading">Contact Us</h3>
              <div className="contactDetails">
                <Paragraph
                  className="text"
                  style={{ fontSize: "14px", fontWeight: "400" }}
                >
                  Toll Free Customer Care
                </Paragraph>
                <Text
                  style={{ fontSize: "20px", fontWeight: "500" }}
                  className="contactHeading"
                >
                  +(1) 1800-123-4567
                </Text>
              </div>
              <div className="contactDetails">
                <Paragraph
                  className="text"
                  style={{ fontSize: "14px", fontWeight: "400" }}
                >
                  Need live support?
                </Paragraph>
                <Text
                  style={{ fontSize: "20px", fontWeight: "500" }}
                  className="contactHeading"
                >
                  hi@gotrip.com
                </Text>
              </div>
            </div>
            <div className="col-2">
              <h3 className="heading">Company</h3>
              <div className="links">
                <Text
                  style={{ fontSize: "16px", fontWeight: "400" }}
                  className="text"
                >
                  About Us
                </Text>
                <Text
                  style={{ fontSize: "16px", fontWeight: "400" }}
                  className="text"
                >
                  Careers
                </Text>
                <Text
                  style={{ fontSize: "16px", fontWeight: "400" }}
                  className="text"
                >
                  Blog
                </Text>
                <Text
                  style={{ fontSize: "16px", fontWeight: "400" }}
                  className="text"
                >
                  Press
                </Text>
                <Text
                  style={{ fontSize: "16px", fontWeight: "400" }}
                  className="text"
                >
                  Gift Cards
                </Text>
              </div>
            </div>
            <div className="col-3">
              <h3 className="heading">Support</h3>
              <div className="links">
                <Text
                  style={{ fontSize: "16px", fontWeight: "400" }}
                  className="text"
                >
                  Contact
                </Text>
                <Text
                  style={{ fontSize: "16px", fontWeight: "400" }}
                  className="text"
                >
                  Legal Notice
                </Text>
                <Text
                  style={{ fontSize: "16px", fontWeight: "400" }}
                  className="text"
                >
                  Privacy Policy
                </Text>
                <Text
                  style={{ fontSize: "16px", fontWeight: "400" }}
                  className="text"
                >
                  Terms and Conditions
                </Text>
                <Text
                  style={{ fontSize: "16px", fontWeight: "400" }}
                  className="text"
                >
                  Sitemap
                </Text>
              </div>
            </div>
            <div className="col-4">
              <h3 className="heading">Other Services</h3>
              <div className="links">
                <Text
                  style={{ fontSize: "16px", fontWeight: "400" }}
                  className="text"
                >
                  Car hire
                </Text>
                <Text
                  style={{ fontSize: "16px", fontWeight: "400" }}
                  className="text"
                >
                  Activity Finder
                </Text>
                <Text
                  style={{ fontSize: "16px", fontWeight: "400" }}
                  className="text"
                >
                  Tour List
                </Text>
                <Text
                  style={{ fontSize: "16px", fontWeight: "400" }}
                  className="text"
                >
                  Flight Finder
                </Text>
                <Text
                  style={{ fontSize: "16px", fontWeight: "400" }}
                  className="text"
                >
                  Cruise Ticket
                </Text>
                <Text
                  style={{ fontSize: "16px", fontWeight: "400" }}
                  className="text"
                >
                  holiday Rental
                </Text>
                <Text
                  style={{ fontSize: "16px", fontWeight: "400" }}
                  className="text"
                >
                  Travel Agent
                </Text>
              </div>
            </div>
            <div className="col-5">
              <h3 className="heading">Mobile</h3>
              <div className="links">
                <div className="appleStore">
                  <IoLogoAppleAppstore size={40} />
                  <div className="contentWrapper">
                    <Paragraph className="text">Download on the</Paragraph>
                    <Text style={{ color: "black", fontWeight: "600" }}>
                      Apple Store
                    </Text>
                  </div>
                </div>
                <div className="androidStore">
                  <GrAndroid size={40} />
                  <div className="contentWrapper">
                    <Paragraph className="text">Download on the</Paragraph>
                    <Text style={{ fontWeight: "600" }}>Android Store</Text>
                  </div>
                </div>
              </div>
              <Divider />
              <div>Email</div>
            </div>
          </div>


          <div className="footerBottom">
          <Divider />
          <div className="footerBottomContent">
            <div className="copyright">
              <Text>&copy; 2023 GoTrip LLC All rights reserved.</Text>
              <ul className="links">
                <li>Privacy </li>
                <li>Terms </li>
                <li>Site Map</li>
              </ul>
            </div>
            <div className="socialLinks">
              <div className="info">
                <div>
                  <AiOutlineGlobal />
                  <Text style={{ fontWeight: "600" }}>English(US)</Text>
                </div>
                <div>
                  <BiDollar />
                  <Text style={{ fontWeight: "600" }}>USD</Text>
                </div>
              </div>

              <ul className="links">
                <li>
                  <FaFacebook size={20} />
                </li>
                <li>
                  <FaTwitter size={20}  />
                </li>
                <li>
                  <FaInstagram size={20} />
                </li>
                <li>
                  <FaLinkedinIn size={20} />
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    </FooterStyles>
  );
};

const FooterStyles = styled.footer`
  .container {
    width: 100%;
    padding-left: 14rem;
    padding-right: 15px;
    margin-right: auto;
    margin-left: auto;

    

    .heading {
      font-weight: 500;
    }

    .text {
      margin: 0;
      font-family: "Jost";
      font-size: "14px";
    }

    .contactHeading {
      margin: 0;
      font-family: "Jost";
      font-weight: "600";
      color: ${({ theme }) => theme.colors.bsBlue};
    }

    .links {
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding-top: 25px;
    }

    .footerBottom {
      width: 100%;
      height: 5rem;
      display: flex;
      flex-direction: column;
      
      
      .ant-divider-horizontal {
        width: 90% !important;
        min-width: 90% !important;
        margin-right: 10rem !important;
      }
    }

    .footerBottomContent {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 2rem;

      .copyright {
        display: flex;
        align-items: center;
        gap: 20px;

        .links {
          display: flex;
          list-style: none;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          text-align: center;
          padding: 0;

          li {
            list-style: none;
            cursor: pointer;
            &:hover {
              color: ${({ theme }) => theme.colors.bsBlue};
            }
          }
        }
      }

      .socialLinks {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-right: 8rem;

        .info {
          display: flex;
          align-items: center;
          gap: 10px;

          div {
            display: flex;
            align-items: center;
            gap: 5px;
          }
        }

        .links {
          display: flex;
          list-style: none;
          flex-direction: row;
          align-items: center;
          gap: 14px;
          text-align: center;
          padding: 0;

          li {
            list-style: none;
            cursor: pointer;
            &:hover {
              color: ${({ theme }) => theme.colors.bsBlue};

            }
          }
        }
      }
    }

   

    .footerWrapper {
      padding-top: 60px;
      padding-bottom: 60px;

     

      .row {
        display: flex;
        gap: 40px;

        .col-1 {
          width: 16rem;
        }
        .col-2 {
          width: 12rem;

          .text {
            margin: 0;
            cursor: pointer;

            &:hover {
              color: ${({ theme }) => theme.colors.bsBlue};
            }
          }
        }

        .col-3 {
          width: 12rem;

          .text {
            margin: 0;
            cursor: pointer;

            &:hover {
              color: ${({ theme }) => theme.colors.bsBlue};
            }
          }
        }
        .col-4 {
          width: 13rem;

          .text {
            margin: 0;
            cursor: pointer;

            &:hover {
              color: ${({ theme }) => theme.colors.bsBlue};
            }
          }
        }
        .col-5 {
          width: 13rem;

          .links {
            display: flex;
          }
          .appleStore {
            width: 11rem;
            border: 1px solid ${({ theme }) => theme.colors.colorBorder};
            display: flex;
            padding: 12px 8px;
            border-radius: 6px;

            /* justify-content: space-between; */
          }
          .androidStore {
            width: 11rem;
            border: 1px solid ${({ theme }) => theme.colors.colorBorder};
            display: flex;
            padding: 12px 8px;
            border-radius: 6px;

            /* justify-content: space-between; */
          }
          .text {
            margin: 0;
            color: ${({ theme }) => theme.colors.bsSecondary};
          }

          .contentWrapper {
            padding-left: 10px;
          }
        }

        .contactDetails {
          display: flex;
          flex-direction: column;
          margin-top: 40px;
        }
      }
    }

    .ant-divider {
      border-top-color: ${({ theme }) => theme.colors.colorBorder} !important;
    }

    @media only screen and (min-width: 1200px) {
      .container {
        padding-left: 3rem;
      }
    }
  }
`;

export default Footer;
