import React from 'react'
import styled from "styled-components";
import { HiAcademicCap } from "react-icons/hi";
import HeaderNav from "../../components/HeaderNav";

const Licence2 = () => {
  return (
    <Wrapper>
    <Content>
      <HeaderNav
        level="Licence 2"
        Icon={HiAcademicCap}
        onClick={() => console.log("licence 2")}
      />
    </Content>
  </Wrapper>
  );
};

export default Licence2

const Wrapper = styled.div`
  padding: 40px 40px 0 0px;
`;

const Content = styled.div`
  //border: 1px solid red;
`;