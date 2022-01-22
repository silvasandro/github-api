import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 450;
  }

  button {
    color: #fff;
    background-color: #0d1ab5;
    padding: 8px 16px;
    margin: 0 8px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;

    &:hover {
      color: #fefceb;
      background-color: #321df3;
      box-shadow: 3px 2px 8px rgba(0, 0, 0, 0.3);
    }
  }
`;
