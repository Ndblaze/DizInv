import React, { useState, useEffect } from "react";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useParams } from "react-router-dom";
import { GiDiploma } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";
import { GiTiedScroll } from "react-icons/gi";

import NewUserModal from "../../components/NewUserModal";
import HeaderNav from "../../components/HeaderNav";
import Table from "../../components/Table";
import ListNav from "../../components/ListNav";

const StudentListingSpeciality = () => {
  const params = useParams();
  const [speciality, setSpeciality] = useState("Speciality");
  const [group, setGroup] = useState("Group");
  const [query, setQuery] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //data been pushed to Table
  const [allList, setAllList] = useState([]);
  const [filtered, setFiltered] = useState([]);

  //common changes to change
  const [getStudentParameter, setGetStudentParameter] = useState("");
  const [IconChange, setIconChange] = useState();

  const DeleteUser = (message) => {
    toast.success(message, {
      style: {
        background: "#25ab42",
        color: "#fff",
      },
    });
  };

  //this function is called from the addNew forms components
  const addedSuccecfully = (message) => {
    toast.success(message, {
      style: {
        background: "#25ab42",
        color: "#fff",
      },
    });
  };

  //this function is called from the addNew forms components
  const addedFailed = (message) => {
    toast.error(message, {
      style: {
        background: "rgba(255,51,51, 0.7)",
        color: "#fff",
      },
    });
  };

  useEffect(() => {
    if (params.id === "licence3") {
      setGetStudentParameter("Licence 3");
      setIconChange(<GiDiploma />);
    }
    if (params.id === "master1") {
      setGetStudentParameter("Master 1");
      setIconChange(<FaGraduationCap />);
    }
    if (params.id === "master2") {
      setGetStudentParameter("Master 2");
      setIconChange(<GiTiedScroll />);
    }
    getStudents();
  }, [params]);

  const getStudents = async () => {
    //console.log(params)
    await axios
      .get(`http://localhost:5000/api/admin/students/${params.id}`)
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

  useEffect(() => {
    setGroup("Group");
  }, [speciality]);

  return (
    <Wrapper>
      <Content>
        <Toaster />
        <HeaderNav
          level={getStudentParameter}
          Icon={IconChange}
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
          setModalIsOpen={() => setModalIsOpen(false)}
          addedSuccecfully={addedSuccecfully}
          addedFailed={addedFailed}
          handler="speciality"
          update={getStudents}
        />
      </Content>
    </Wrapper>
  );
};

export default StudentListingSpeciality;

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
