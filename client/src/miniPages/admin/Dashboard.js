import React from "react";
import styled from "styled-components";
import GeneralStatistics from "../../components/GeneralStatistics";

//react icons
import { BiBarChartAlt } from "react-icons/bi";

const Dashboard = () => {
  return (
    <Wrapper>
      <Content>
        <HeaderContainer>
          <DashboardIcon />
          <Hearder>Dashboard</Hearder>
        </HeaderContainer>
        <GeneralStatistics Teachers={500} Students={1500} Modules={46} />

        <Grid>
          <One>
            <Up>
              <div></div>
            </Up>
            <Down>
              <div></div>
            </Down>
          </One>
          <Two> <div></div> </Two>
        </Grid>
      </Content>
    </Wrapper>
  ); 
};

export default Dashboard;

const Wrapper = styled.div`
  padding: 40px 40px 0 0px;
`;

const Content = styled.div`
  //border: 1px solid red;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DashboardIcon = styled(BiBarChartAlt)`
  color: #777b86;
  font-size: 25px;
  font-weight: 700;
  margin-right: 5px;
`;

const Hearder = styled.h1`
  font-size: 23px;
  font-weight: 700;
  color: #adb1c0;
`;

const Grid = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  //border:1px solid red ;
`;

const One = styled.div`
 // border: 1px solid red;
  flex: 1;
`;

const Two = styled.div`
  flex: 1;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content:center ;

  & > div {
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const Up = styled.div`
  height: 170px;
  display: flex;
  align-items: center;

  & > div {
    background-color: #ffffff;
    width: 95%;
    height: 90%;
    border-radius: 25px;
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
const Down = styled.div`
  height: 230px;
  display: flex;
  align-items: center;

  & > div {
    background-color: #ffffff;
    width: 95%;
    height: 90%;
    border-radius: 25px;
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
