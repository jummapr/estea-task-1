import { Button, Typography } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useModal } from "./hooks/useModal";
import LoginModal from "./modal/LoginModal";
import { matchRoutes, useLocation } from "react-router-dom";
import { useCurrentPath } from "./hooks/useGetPath";

const Navbar = ({ isFixed }) => {
  const { Text } = Typography;
  const { onLogin } = useModal();
  const [isActive, setActive] = useState();

  const location = useLocation();

  const handleLoginModal = () => {
    onLogin();
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }

  return (
    <NavbarStyle>
      <div className={isActive ? "navbar-sticky" : "navbar"}>
        <div className="logo">
          <img src="/logo-light.svg" alt="logo" />
        </div>
        <div className="content">
          <Button onClick={handleLoginModal} type="primary" className="btn-1">
            Sign in / Register
          </Button>
        </div>
      </div>
      <LoginModal />
    </NavbarStyle>
  );
};

const NavbarStyle = styled.div`
  .navbar-sticky {
    width: 100%;
    height: 70px;
    padding: 0 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme.colors.colorDark_1};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.colorDark_1};

    animation: moveDown 0.5s ease-in-out;

    @keyframes moveDown {
      from {
        transform: translateY(-5rem);
      }
      to {
        transform: translateY(0rem);
      }
    }
  }

  .navbar-fixed {
    width: 100%;
    height: 70px;
    padding: 0 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme.colors.colorDark_1};
    box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.colorDark_1};
  }
  .navbar {
    width: 100%;
    height: 70px;
    padding: 0 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    .logo {
      width: 10rem;
      height: 40px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .content {
      display: flex;
      align-items: center;
      gap: 30px;
    }

    .btn-1 {
      font-family: "jost" !important;
      font-weight: 400;
    }
    .btn-1:hover {
      background-color: "white";
    }
  }

  .ant-btn {
    height: 45px;
    width: 170px;
    font-size: 1rem;
    background-color: transparent;
    border-color: ${(props) => props.theme.colors.colorWhite};

    &:hover {
      background-color: ${(props) => props.theme.colors.colorWhite} !important;
      color: ${(props) => props.theme.colors.colorBlack} !important;
    }
  }
`;

export default Navbar;
