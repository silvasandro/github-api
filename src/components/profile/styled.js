import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: flex-start;
  div {
    margin: 8px;
    text-align: center;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  h3 {
    margin-right: 10px;
  }
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: auto;
  margin-left: 10px;
  height: 200px;

  a {
    font-size: 18px;
    color: blue;
    font-weight: bold;
  }
  h1 {
    font-weight: bold;
    font-size: 32px;
  }

  h3 {
    font-weight: bold;
    font-size: 18px;
  }

  h4 {
    font-weight: bold;
    font-size: 16px;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin-right: 10px;
`;
