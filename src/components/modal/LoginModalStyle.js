import { Modal } from "antd";
import styled from "styled-components";

export const LoginModalStyles = styled(Modal)`
  .headingText {
    font-size: 16px;
    font-weight: 400;
    font-family: "jost";
    color: ${({theme}) => theme.colors.bsGray_600};
  }

  .submitBtn {
    font-family: "jost";
    width: 8rem !important;
    height: 3rem !important;
    background-color: ${({ theme }) => theme.colors.colorBlue_1} !important;
  }

  .cancelBtn {
    font-family: "jost";
    width: 8rem !important;
    height: 3rem !important;
    
    &:hover {
        border: 1px solid${({ theme }) => theme.colors.colorBlue_1} !important;
        color: ${({theme}) => theme.colors.colorBlue_1} !important;
    }
  }

  .link {
    padding: 0 !important;
    padding-left: 6px !important;
    color: ${({ theme }) => theme.colors.colorBlue_1};
    font-family: 'jost';
    font-weight: 400;

    &:hover {
        color: ${({ theme }) => theme.colors.colorBlue_1} !important;
    }
  }

  .ant-modal-title {
    font-size: 18px;
    font-weight: 600;
    font-family: "jost";
  }

  .inputBoxWrapper {
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 100%;
    margin-top: 30px;

    div {
      display: flex;
      flex-direction: column;
      gap: 7px;

      label {
        font-size: 14px;
        font-weight: 500;

        font-family: "jost";

        .required {
          color: ${({ theme }) => theme.colors.colorRed_1};
        }
      }

      .input {
        height: 60px;
        font-family: "jost";
      }
    }
  }

  .forgotPassword {
    margin-bottom: 30px;
    margin-top: 9px;

    .ant-typography {
      font-size: 14px;
      font-weight: 500;
      font-family: "jost";
      cursor: pointer;
      color: ${({ theme }) => theme.colors.colorBlue_1};
      position: relative;
      text-decoration: underline;
      transition: all 0.4s ease-in-out;

      &:hover {
        text-decoration: none;
      }
    }
  }
`;
