import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: auto;
  color: #ff0f2e;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40vw;
  padding: 2%;
  box-shadow: 0px 2px 8px #2f2f2f;
  h1 {
    font-size: 3rem;
  }



  div {
    display: flex;
    align-items: center;
    width: 48%;
    height: 100%;

    gap: 10%;

    span{
      display: inline-block;
      

    }

    #backHome {
      display: flex;
      height: 50%;
      padding: 1%;     
    }

    #boss{

    }

    section {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      width: 100%;
    }
  }
`;