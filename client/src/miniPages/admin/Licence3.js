import React, { useState, useEffect } from "react";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { GiDiploma } from "react-icons/gi";

import NewUserModal from "../../components/NewUserModal";
import HeaderNav from "../../components/HeaderNav";
import Table from "../../components/Table";
import ListNav from "../../components/ListNav";

const Licence3 = () => {

  const [speciality, setSpeciality] = useState("Speciality");
  const [group, setGroup] = useState("Group");
  const [query, setQuery] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //data been pushed to Table
  const [allList, setAllList] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const DeleteUser = (message) => {
    toast.success(message, {
      style: {
        background: "#25ab42",
        color: "#fff",
      },
    });
  };

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    const level = "Licence 3";
    await axios
      .get(`http://localhost:5000/api/admin/students/${level}`)
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
    if (speciality === "GL") {
      newData = newData.filter((item) => {
        return item.speciality === "Genie logiciel";
      });
    }
    if (speciality === "TI") {
      newData = newData.filter((item) => {
        return item.speciality === "Technology information";
      });
    }
    if (speciality === "SCI") {
      newData = newData.filter((item) => {
        return item.speciality === "Genie logiciel";
      });
    }
    if (speciality === "SI") {
      newData = newData.filter((item) => {
        return item.speciality === "Genie logiciel";
      });
    }
    if (group !== "Group") {
      newData = newData.filter((item) => {
        return item.group === group;
      });
    }
    setFiltered(newData);
  }, [speciality, group, query]);

  return (
    <Wrapper>
      <Content>
        <Toaster />
        <HeaderNav
          level="Licence 3"
          Icon={GiDiploma}
          onClick={() => setModalIsOpen(true)}
        />
        <List>
          <ListNav
            level="speciality"
            speciality={speciality}
            setSpeciality={setSpeciality}
            setGroup={setGroup}
            group={group}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            total={filtered.length}
          />
          <Table
            data={filtered}
            DeleteUser={DeleteUser}
            updateUI={getStudents}
          />
        </List>
        <NewUserModal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          onClick={() => setModalIsOpen(false)}
          handler="speciality"
          storeIn="Student"
        />
      </Content>
    </Wrapper>
  )
}

export default Licence3


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

// const Content = styled.div`
//   //border: 1px solid red;
// `;
