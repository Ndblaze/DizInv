import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { GiTeacher } from "react-icons/gi";

//pages import
import HeaderNav from "../../components/HeaderNav";
import ListNav from "../../components/ListNav";
import Table from "../../components/Table";

const Teachers = () => {
  const [query, setQuery] = useState("");
  const [dept, setDept] = useState("Department");

  //data been pushed to Table
  const [allList, setAllList] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    getTeachers();
  }, []);

  const getTeachers = async () => {
    await axios
      .get(`http://localhost:5000/api/admin/get-teachers`)
      .then((res) => {
        if (res.data.length > 0) {
          setAllList(res.data);
          setFiltered(res.data);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    let newData = allList;

    if (query !== "") {
      newData = newData.filter((item) => {
        return (
          item.firstName.toUpperCase().includes(query.toUpperCase()) ||
          item.lastName.toUpperCase().includes(query.toUpperCase())
        );
      });
    }
    if (dept !== "Department") {
      newData = newData.filter((item) => {
        return item.department === dept;
      });
    }

    setFiltered(newData);
  }, [dept, query]);

  return (
    <Wrapper>
      <Content>
        <Toaster />
        <HeaderNav
          level={"Teacher"}
          Icon={<GiTeacher />}
          //  onClick={() => setModalIsOpen(true)}
        />

        <List>
          <ListNav
            Teacher
            dept={dept}
            setDept={setDept}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            total={filtered.length}
          />

          <Table
            data={filtered}
            // DeleteUser={DeleteUser}
            // updateUI={getStudents}
          />
        </List>
      </Content>
    </Wrapper>
  );
};

export default Teachers;

const Wrapper = styled.div`
  padding: 40px 40px 0 0px;
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
