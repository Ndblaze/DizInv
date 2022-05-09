import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { BiMessageSquareAdd } from "react-icons/bi";
import PresenceListTeacher from "../../ComponentsTeacher/PresenceListTeacher";
import CreateNewSession from "./CreateNewSession";
import QRCode from "qrcode";

const TeacherPresenceList = () => {
  const navigation = useNavigate();
  const { group, module, sceance } = useParams();
  //  console.log(group, module);

  //seting the add session modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  //New req date
  const [newReq, setNewReq] = useState("");
  //date listings
  const [dateList, setDateList] = useState([]);
  //qrcode data
  const [QRsrc, setQRSRC] = useState();

  useEffect(() => {
    getAllDate();
  }, []);

  //  crating a qrcode
  const crearQR = (payload) => {
    QRCode.toDataURL(payload).then((data) => {
      setQRSRC(data);
    });
  };

  //get all date listing
  const getAllDate = async () => {
    await axios
      .get(
        `http://localhost:5000/api/managePresence/get-dates/${module}/${sceance}/${group}`
      )
      .then((res) => {
        if (res.data.status === "SUCCESS") {
          console.log('dates')
          setDateList(res.data.results);
        }
        if (res.data.status === "FAILED") {
          //this error message should be prompted to show in the toast
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // craete new session request
  const createNewSession = async (sessionDetails, type) => {
    await axios
      .post(`http://localhost:5000/api/managePresence/create-session`, {
        values: { ...sessionDetails, type: type },
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === "SUCCESS" && type === "manual") {
          const { date } = res.data.message;
          // console.log(date);
          setNewReq(date);
          getAllDate();
          setModalIsOpen(false);
        }
        if (res.data.status === "SUCCESS" && type === "IOT") {
          const { date } = res.data.message;
          // console.log(date);
          setNewReq(date);
          getAllDate();
          crearQR(JSON.stringify(res.data.message));
        }
        if (res.data.status === "FAILED") {
          //this error message should be prompted to show in the toast
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Wrapper>
      <Content>
        <HeaderContainer>
          <Title>
            <BackIcon onClick={() => navigation(-1)} />
            <Hearder>Manage Presence - {group} </Hearder>
          </Title>
          <AddSceance onClick={() => setModalIsOpen(true)}>
            New Session
            <BiMessageSquareAdd />
          </AddSceance>
        </HeaderContainer>
        <PresenceListTeacher
          newReq={newReq}
          dateList={dateList}
          getAllDate={getAllDate}
        />
      </Content>
      <CreateNewSession
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        createNewSession={createNewSession}
        QRsrc={QRsrc}
      />
    </Wrapper>
  );
};

export default TeacherPresenceList;

const Wrapper = styled.div`
  padding: 40px 40px 0 0px;
  width: 100%;
`;

const Content = styled.div`
  //border: 1px solid red;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
`;

const BackIcon = styled(FaArrowLeft)`
  color: #777b86;
  font-size: 23px;
  font-weight: 700;
  margin-right: 40px;
  cursor: pointer;
`;

const Hearder = styled.h1`
  font-size: 23px;
  font-weight: 700;
  color: #adb1c0;
`;

const AddSceance = styled.div`
  width: 130px;
  height: 40px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  margin-right: 50px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background-color: #e5cbff;
  color: #bf7fff;

  &:hover {
    background-color: #f2e5ff;
  }
`;
