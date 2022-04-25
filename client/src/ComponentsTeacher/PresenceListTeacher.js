import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ListNavPresence from "../miniPages/teachers/ListNavPresence";
import PresenceTable from "./PresenceTable";

const PresenceListTeacher = () => {
  const [query, setQuery] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  console.log(query);

  //get list of a certain date
  const [dateQuery, setDateQuery] = useState();
  console.log(dateQuery);

  //data been pushed to Table
  const [allList, setAllList] = useState([]);
  const [filtered, setFiltered] = useState([]);

  return (
    <Wrapper>
      <Content>
        <List>
          <ListNavPresence
            setDateQuery={setDateQuery}
            getQuery={(e) => {
              setQuery(e.target.value);
            }}
          />

          <PresenceTable />
        </List>
      </Content>
    </Wrapper>
  );
};

export default PresenceListTeacher;

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
