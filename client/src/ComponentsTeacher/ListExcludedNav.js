import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ListTotal from "../components/ListTotal";
import Search from "../components/Search";


const ListExcludedNav = ({ setQuery, total }) => {
  return (
    <Wrapper>
      <SearchContainer>
        <Search onChange={(e) => setQuery(e.target.value)} />
      </SearchContainer>
       <ListTotal total={total} />
    </Wrapper>
  );
};

export default ListExcludedNav;

const Wrapper = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  border-radius: 20px 20px 0 0;
`;
const SearchContainer = styled.div`
  border: 2px solid #d0d3e0;
  width: 400px;
  height: 30px;
  padding-left: 15px;
  margin-right: 30px;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;

