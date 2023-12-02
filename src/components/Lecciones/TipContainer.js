import React from "react";
import styled from "styled-components";

const TipContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default TipContainer;

const Container = styled.div`
  display: flex;
  padding: 32px 24px;
  flex-direction: column;
  gap: 5px;
  border-radius: 16px 16px;
  background: #d8edcd;
  margin-top: 20px;
`;
