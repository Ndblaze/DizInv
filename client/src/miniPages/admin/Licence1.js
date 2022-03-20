import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HiOutlineAcademicCap } from "react-icons/hi";
import Modal from "react-modal";
import axios from "axios";

import HeaderNav from "../../components/HeaderNav";
import ListNav from "../../components/ListNav";
import Table from "../../components/Table";
import AddNewForm from "../../components/AddNewForm";

import toast, { Toaster } from "react-hot-toast";

const Licence1 = () => {
  const [speciality, setSpeciality] = useState("Speciality");
  const [section, setSection] = useState("Section");
  const [group, setGroup] = useState("Group");
  const [query, setQuery] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //data been pushed to Table
  const [allList, setAllList] = useState([]);
  const [filtered, setFiltered] = useState([]);

  //data from the add new modal
  const [newStudent, setNewStudent] = useState({
    firstName: "",
    LastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    password: "",
    level: "",
    inscription: "",
    section: "",
    group: "",
  });

  //item to delete
  const [newDelete, setNewDelete] = useState();
  //console.log(newDelete);

  const DeleteUser = () => {
    toast.success("User deleted succefully", {
      style: {
        background: "#25ab42",
        color: "#fff",
      },
    });
  };

  const onDelete = (message) => {
    setNewDelete(message);
    DeleteUser();
  };

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    await axios
      .get("http://localhost:5000/api/admin/licence1")
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
    if (section !== "Section") {
      newData = newData.filter((item) => {
        return item.section === section;
      });
    }
    if (group !== "Group") {
      newData = newData.filter((item) => {
        return item.group === group;
      });
    }
    setFiltered(newData);
  }, [section, group, query]);

  useEffect(() => {
    setGroup("Group");
  }, [section, speciality]);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#0a0b0d",
      padding: 0,
      border: "none",
      borderRadius: "20px",
      //   overflow: 'hidden',
      width: "550px",
    },
    overlay: {
      backgroundColor: "rgba(10, 11, 13, 0.75)",
    },
  };

  return (
    <Wrapper>
      <Content>
        <Toaster />
        <HeaderNav
          level="Licence 1"
          Icon={HiOutlineAcademicCap}
          onClick={() => setModalIsOpen(true)}
        />
        <List>
          <ListNav
            level="section"
            speciality={speciality}
            section={section}
            setSection={setSection}
            setSpeciality={setSpeciality}
            setGroup={setGroup}
            group={group}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            total={filtered.length}
          />
          <Table data={filtered} onDelete={onDelete} />
        </List>
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          onRequestClose={() => setModalIsOpen(false)}
          ariaHideApp={false}
        >
          <AddNewForm
            onClick={() => setModalIsOpen(false)}
            handler="section"
            setNewStudent={setNewStudent}
            newStudent={newStudent}
          />
        </Modal>
      </Content>
    </Wrapper>
  );
};

export default Licence1;

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
