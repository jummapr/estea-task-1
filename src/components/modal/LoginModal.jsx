import React from "react";
import { useModal } from "../hooks/useModal";
import { Button, Input, Modal, Space, Typography } from "antd";
import styled from "styled-components";
import { LoginModalStyles } from "./LoginModalStyle";

const LoginModal = () => {
  const { Text } = Typography;

  const { isOpen, onLoginClose } = useModal();

  const handleOk = () => {
    onLoginClose();
  };

  const handleCancel = () => {
    onLoginClose();
  };

  console.log(isOpen);
  return (
    <LoginModalStyles
      title="Welcome back"
      open={isOpen.login}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button className="cancelBtn" key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button className="submitBtn" key="submit" type="primary" onClick={handleOk}>
          Submit
        </Button>,
      ]}
    >
      <Text className="headingText">
        Don't have an account yet?
        <Button type="link" className="link">Sign up for free</Button>
      </Text>

      <div className="inputBoxWrapper">
        <div>
          <label>
            <span className="required">*</span>Email
          </label>
          <Input className="input" type="text" placeholder="Email" />
        </div>
        <div>
          <label>
            <span className="required">*</span>Password
          </label>
          <Input className="input" type="text" placeholder="Password" />
        </div>
      </div>

      <div className="forgotPassword">
        <Text>Forgot Password?</Text>
      </div>
    </LoginModalStyles>
  );
};

export default LoginModal;
