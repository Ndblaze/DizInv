import React, { useState, useEffect } from "react";
import styled from "styled-components";
//import axios from "axios";
import ListExcludedNav from "./ListExcludedNav";
import ExcludedTable from "./ExcludedTable";

const ExcludedListTeacher = () => {
  const [query, setQuery] = useState("");

  const [allList, setAllList] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const list = [
    {
      firstName: "Ndubuisi",
      lastName: "James Eze",
      group: "G1",
      excluded: true,
      dateMissed: ["11/04/2022", "17/11/20202", "11/08/2022"],
    },
    {
      firstName: "Slimane",
      lastName: "Ibrahim",
      group: "G3",
      excluded: true,
      dateMissed: ["12/04/2022", "15/11/20202", "21/08/2022"],
    },
    {
      firstName: "Malak",
      lastName: "Meina ",
      group: "G2",
      excluded: false,
      dateMissed: ["01/04/2022", "02/11/20202", "23/08/2022"],
    },
  ];

  useEffect(() => {
    setAllList(list);
    setFiltered(list);
  }, []);

  useEffect(() => {
    if (query !== "") {
      const newData = allList.filter((item) => {
        return (
          item.firstName.toUpperCase().includes(query.toUpperCase()) ||
          item.lastName.toUpperCase().includes(query.toUpperCase())
        );
      });
      setFiltered(newData);
    }else{
      setFiltered(allList);
    }
  }, [query, allList]);

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
