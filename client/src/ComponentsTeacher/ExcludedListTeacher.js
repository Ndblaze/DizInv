import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import axios from "axios";
import ListExcludedNav from "./ListExcludedNav";
import ExcludedTable from "./ExcludedTable";

const ExcludedListTeacher = () => {
  const [query, setQuery] = useState();

  const [allList, setAllList] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const list = [
    {
      name: "Ndubuisi James Eze",
      group: "G1",
      excluded: true,
    },
    {
      name: "Slimane Ibrahim",
      group: "G3",
      excluded: true,
    },
    {
      name: "Malak Meina ",
      group: "G2",
      excluded: false,
    },
  ];

  useEffect(() => {
    setAllList(list);
    setFiltered(list);
  }, []);

  return (
    <Wrapper>
      <Content>
        <List>
          <ListExcludedNav setQuery={setQuery} total={filtered.length} />

          <ExcludedTable listExcluded={filtered} />
        </List>
      </Content>
    </Wrapper>
  );
};

export default ExcludedListTeacher;

const Wrapper = styled.div`
  padding: 20px 40px 0 0px;
`;

const Content = styled.div`
  //border: 1px solid red;
`;
const List = styled.div`
  margin-top: 15px;
  border-radius: 20px 20px 0px 0px;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.22);
  background-color: #ffffff;
  padding-bottom: 10px;
`;
