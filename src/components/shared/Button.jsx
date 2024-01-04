import React from "react";
import styled from "styled-components";

const Button = ({ children, width, height, bgColor, type ,borderRadius,padding}) => {
  return (
    <ButtonStyle
      className="btn"
      style={{
        width: width,
        height: height,
        backgroundColor: bgColor,
        border: type === "outline" ? "1px solid #fff" : "",
        color: type === "outline" ? "#fff" : "",
        borderRadius: borderRadius,
        padding: padding,
        cursor: "pointer",

       
      }}
    >
      {children}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  padding: 10px 20px;
`;

export default Button;
