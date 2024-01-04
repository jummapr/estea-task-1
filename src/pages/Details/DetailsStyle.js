import styled from "styled-components";

export const DetailsStyle = styled.div`
  .ant-btn {
    font-family: "jost";
  }

  .ant-typography {
    font-family: "jost";
  }

  .linkText {
    font-size: 14px;
    text-decoration: underline !important;
    color: ${({ theme }) => theme.colors.colorBlue_1};
    font-family: "jost";
    cursor: pointer;
  }

  .container {
    margin-left: 11rem;
    margin-right: 11rem;
  }
  .navigate-back {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.colorLight_2};

    margin-top: 5rem;

    .navigate {
      padding: 1rem;
      padding-bottom: 1rem;

      .left {
        .ant-breadcrumb {
          ol {
            li {
              font-size: 14px;
              font-weight: 400;
              font-family: "jost";
            }
          }
        }
      }

      .right {
      }
    }
  }

  .detailHeaderBox {
    width: 100%;
    margin-top: 4rem;

    .right {
      .fromText {
        font-size: 12px;
        font-family: "jost";
      }
      .text {
        font-size: 20px;
        padding-left: 3px;
      }
    }

    .headerSelectRoomBtn {
      font-family: "jost";
      width: 9rem !important;
      height: 3rem !important;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.colorWhite} !important;
      background-color: ${({ theme }) => theme.colors.colorBlue_1} !important;
    }
  }

  .hotelImageBox {
    margin-top: 3rem;
    margin-bottom: 7rem;
    height: 30rem;

    .row {
      width: 100%;
      height: 100%;

      .col-1 {
        .image-1 {
          width: 40rem;
          height: 34rem;
          border-radius: 6px;
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
      }

      .col-2 {
        .image-2 {
          width: 20rem;
          padding-bottom: 10px;
          border-radius: 6px;
        }
      }

      .col-3 {
        .image-4 {
          width: 20rem;
          padding-bottom: 10px;

          border-radius: 6px;
        }

        .heartBox {
          width: 40px !important;
          height: 40px;
          position: absolute;
          top: 110px;
          right: 150px;
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

        .AllPhotosBtn {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 3rem;
          position: absolute;
          top: 480px;
          right: 20px;
          z-index: 1;
          .ant-btn {
            height: 45px;
            width: 160px;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 7px;
            background-color: ${({ theme }) => theme.colors.colorWhite};
            font-weight: 600;
            border: none;
            font-family: "jost";
            border-radius: 6px !important;

            color: ${({ theme }) => theme.colors.colorBlack};

            &:hover {
              background-color: ${({ theme }) => theme.colors.colorBlue_1};
              color: ${({ theme }) => theme.colors.colorWhite} !important;
            }
          }
        }
      }
    }
  }

  .hotelMainContent {
    height: 100rem;

    .layout {
      width: 81rem !important;
      height: 100%;

      background-color: ${({ theme }) => theme.colors.colorWhite};

      .left {
        .title {
          font-weight: 500;
          font-size: 24px;
        }
        background-color: ${({ theme }) => theme.colors.colorWhite};

        .propertyBox {
          .propertyList {
            padding-top: 20px;
            text-align: center;
            padding-left: 20px;

            .text {
              font-size: 16px;
              font-weight: 400;
            }

            .icon {
              color: ${({ theme }) => theme.colors.colorBlue_1};
            }
          }
        }

        .overviewTextBox {
          padding: 20px 0;
          width: 80%;

          .overviewText {
            font-size: 15px;
            font-weight: 400;
            color: ${({ theme }) => theme.colors.colorBlack};
          }
          .overviewLinkText {
            font-size: 14px;
            text-decoration: underline !important;
            color: ${({ theme }) => theme.colors.colorBlue_1};
            font-family: "jost";
            font-weight: 600;
            cursor: pointer;
          }
        }

        .facilities {
          .facilitiesList {
            padding-left: 10px;
            width: 50%;
          }
        }
      }
      .right {
        min-width: 360px !important;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.colorWhite};

        .ratingBox {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 15%;
          background-color: ${({ theme }) => theme.colors.colorBlue_1};
          color: ${({ theme }) => theme.colors.colorWhite};
          font-size: 16px;
          font-family: "jost";
        }

        .datePickerBox {
          width: 100%;
          padding: 7px 3px;
          .datePicker {
            width: 30rem;
            padding: 10px 20px;
            border: 1px solid #d9d9d9;
            border-radius: 10px;

            .text {
              font-size: 15px;
              font-weight: 600;
              color: ${({ theme }) => theme.colors.colorBlack};
              font-family: "jost";
              padding-left: 12px;
            }
          }
        }

        .guestBox {
          width: 20rem;
          padding: 10px 20px;
          border: 1px solid #d9d9d9;
          border-radius: 10px;
          margin-top: 20px;
          .inputWrapper-3 {
            display: flex;
            flex-direction: column;
            padding: 0px 20px;
            width: 100%;

            .text {
              font-size: 15px;
              font-weight: 600;
              color: ${({ theme }) => theme.colors.colorBlack};
              font-family: "jost";
              padding-bottom: 5px;
            }
            .headerSearchItem {
              display: flex;
              align-items: center;
              /* gap: 10px; */

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
                top: 15.3rem;
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

        .btn {
          width: 100%;
          height: 4rem;
          margin-top: 30px;
          background-color: ${({ theme }) => theme.colors.colorBlue_1};
          color: ${({ theme }) => theme.colors.colorWhite} !important;
        }

        .locationBox {
          margin-top: 25px;
          width: 100%;
          padding-right: 0 !important;

          .imageBox {
            width: 100%;

            img {
              width: 100%;
            }
          }

          .MapBtn {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 3rem;
            position: absolute;
            top: 47px;
            right: 45px;
            z-index: 1;
            .ant-btn {
              height: 50px;
              width: 160px;
              font-size: 14px;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 7px;
              background-color: ${({ theme }) => theme.colors.colorWhite};
              font-weight: 500;
              border: none;
              font-family: "jost";
              border-radius: 6px !important;

              color: ${({ theme }) => theme.colors.colorBlack};

              &:hover {
                background-color: ${({ theme }) => theme.colors.colorBlue_1};
                color: ${({ theme }) => theme.colors.colorWhite} !important;
              }
            }
          }

          .locationHeader {
            margin-top: 20px;
            padding-left: 1px;

            .text {
              font-size: 14px;
              font-weight: 500;
              color: ${({ theme }) => theme.colors.colorBlack};
            }

            .icon {
              color: ${({ theme }) => theme.colors.colorBlue_1};
            }

            .divider {
              background-color: ${({ theme }) =>
                theme.colors.bgSecondary} !important;
            }
          }
          .footerContent {
            .footerTitle {
              font-size: 16px;
              font-weight: 500;
              color: ${({ theme }) => theme.colors.colorBlack};
            }

            .footerPara {
              font-size: 14px;
              color: ${({ theme }) => theme.colors.bgSecondary};
            }

            .linkText {
              font-weight: 500;
            }
          }
        }
      }
      .footerLayout {
        padding: 0 !important;
        margin-top: 20rem;
        height: 63rem;


        .card {
          width: 100%;  
          height: 100%;
        }
      }
    }
  }
`;
