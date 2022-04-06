import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FcOvertime } from "react-icons/fc";
import Modal from "react-modal";

//file imports
import CreateSchedules from "../../components/CreateSchedules";
import axios from "axios";

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
    overflow: "hidden",
    width: "450px",
    height: "250px",
  },
  overlay: {
    backgroundColor: "rgba(10, 11, 13, 0.75)",
  },
};

const AdminSchedules = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [viewSchedule, setViewSchedule] = useState("Licence 1");
  const [tableColumnSize, setTableColumnSize] = useState();
  const [tableLevel, setTableLevel] = useState();
  const [scheduleData, setScheduleData] = useState({});

  const schedule = {
    licence1: {
      level: "Licence 1",
      header: [
        { index: 1, value: "9:00am - 10:00am" },
        { index: 2, value: "10:00am - 12:00pm" },
        { index: 3, value: "12:00pm - 13:00pm" },
        { index: 4, value: "13:00pm - 14:00pm" },
        { index: 5, value: "14:00pm - 15:30am" },
      ],
      sunday: [
        {
          indexCol: "sunday-col-1",
          value: [
            { indexVal: 1, module: "DAC G1, G2 TD", teacher: "", room: "A1" },
            { indexVal: 2, module: "MEL G4, G3 TP", teacher: "", room: "A2" },
            { indexVal: 3, module: "TABD Cours ", teacher: "", room: "A3" },
            { indexVal: 4, module: "GL2", teacher: "", room: "A4" },
          ],
        },
        {
          indexCol: "sunday-col-2",
          value: [
            { indexVal: 1, module: "DAC G1, G2 TD", teacher: "", room: "A1" },
            { indexVal: 2, module: "MEL G4, G3 TP", teacher: "", room: "A2" },
            { indexVal: 3, module: "TABD Cours ", teacher: "", room: "A3" },
            { indexVal: 4, module: "GL2", teacher: "", room: "A4" },
          ],
        },
        {
          indexCol: "sunday-col-3",
          value: [
            { indexVal: 1, module: "DAC G1, G2 TD", teacher: "", room: "A1" },
            { indexVal: 2, module: "MEL G4, G3 TP", teacher: "", room: "A2" },
            { indexVal: 3, module: "TABD Cours ", teacher: "", room: "A3" },
            { indexVal: 4, module: "GL2", teacher: "", room: "A4" },
          ],
        },
        {
          indexCol: "sunday-col-4",
          value: [
            { indexVal: 1, module: "DAC G1, G2 TD", teacher: "", room: "A1" },
            { indexVal: 2, module: "MEL G4, G3 TP", teacher: "", room: "A2" },
            { indexVal: 3, module: "TABD Cours ", teacher: "", room: "A3" },
            { indexVal: 4, module: "GL2", teacher: "", room: "A4" },
          ],
        },
        {
          indexCol: "sunday-col-5",
          value: [
            { indexVal: 1, module: "DAC G1, G2 TD", teacher: "", room: "A1" },
            { indexVal: 2, module: "MEL G4, G3 TP", teacher: "", room: "A2" },
            { indexVal: 3, module: "TABD Cours ", teacher: "", room: "A3" },
            { indexVal: 4, module: "GL2", teacher: "", room: "A4" },
          ],
        },
      ],
      monday: ["", "", "", "", ""],
      tuesday: ["", "", "", "", ""],
      wednesday: ["", "", "", "", ""],
      thursday: ["", "", "", "", ""],
    },
  };

  useEffect(() => {
    setScheduleData(schedule.licence1);
  }, [viewSchedule]);

  // useEffect(() => {
  //   getSchedulesFromDB();
  // }, [viewSchedule]);

  const getSchedulesFromDB = async () => {
    await axios
      .get(`http://localhost:5000/api/admin/schedule/${viewSchedule}`)
      .then((res) => {
        setScheduleData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createNewSchedule = () => {
    let arr = [];
    for (var i = 0; i < tableColumnSize; i++) {
      arr[i] = "";
    }
    const licence1 = {
      level: tableLevel,
      header: arr,
      sunday: arr,
      monday: arr,
      tuesday: arr,
      wednesday: arr,
      thursday: arr,
    };

    console.log(licence1);
  };

  return (
    <Wrapper>
      <Content>
        <HeaderContainer>
          <HeaherTitle>
            <ScheduleIcon />
            <Hearder>Schedules</Hearder>
          </HeaherTitle>
          <TableButtons>
            <ChooseSchedule
              value={viewSchedule}
              onChange={(e) => setViewSchedule(e.target.value)}
            >
              <option value={"Licence 1"}>Licence 1</option>
              <option value={"Licence 2"}>Licence 2</option>
              <option value={"Licence 3"}>Licence 3</option>
              <option value={"Master 1"}>Master 1</option>
              <option value={"Master 2"}>Master 2</option>
            </ChooseSchedule>
            <Button>Edit Current Schedule</Button>
            <Button onClick={() => setModalIsOpen(true)}>
              Create New Schedule
            </Button>
          </TableButtons>
        </HeaderContainer>

        <CreateSchedules
          scheduleData={scheduleData}
          setViewSchedule={setViewSchedule}
        />
      </Content>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onClick={() => setModalIsOpen(false)}
        ariaHideApp={false}
      >
        <NewSchedule>
          <NewScheduleHeader>Customize Table</NewScheduleHeader>
          <Customize>
            <select onChange={(e) => setTableLevel(e.target.value)}>
              <option value={""}>Choose level</option>
              <option value={"Licence 1"}>Licence 1</option>
              <option value={"Licence 2"}>Licence 2</option>
              <option value={"Licence 3"}>Licence 3</option>
              <option value={"Master 1"}>Master 1</option>
              <option value={"Master 2"}>Master 2</option>
            </select>
            <select onChange={(e) => setTableColumnSize(e.target.value)}>
              <option value={""}>Choose column size</option>
              <option value={"4"}>4</option>
              <option value={"5"}>5</option>
              <option value={"6"}>6</option>
              <option value={"7"}>7</option>
            </select>
          </Customize>
          <CreateNewScheduleButton>
            <CreateSchedule onClick={() => createNewSchedule()}>
              Create
            </CreateSchedule>
            <CancelSchedule onClick={() => setModalIsOpen(false)}>
              Cancel
            </CancelSchedule>
          </CreateNewScheduleButton>
        </NewSchedule>
      </Modal>
    </Wrapper>
  );
};

export default AdminSchedules;

const Wrapper = styled.div`
  padding: 40px 40px 0 0px;
`;

const Content = styled.div`
  //border: 1px solid red;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HeaherTitle = styled.div`
  display: flex;
  align-items: center;
`;

const TableButtons = styled.div``;

const Button = styled.button`
  padding: 9px;
  margin-left: 20px;
  border-radius: 8px;
  border: 1px solid #c278f8;
  font-weight: 600;
  color: #fff;
  background-color: #c278f8;

  &:hover {
    color: #c278f8;
    background-color: #fff;
    border: 1px solid #c278f8;
  }
`;

const ScheduleIcon = styled(FcOvertime)`
  color: #777b86;
  font-size: 25px;
  font-weight: 700;
  margin-right: 5px;
`;

const Hearder = styled.h1`
  font-size: 23px;
  font-weight: 700;
  color: #adb1c0;
`;

const ChooseSchedule = styled.select`
  width: 100px;
  outline: none;
  margin-bottom: 10px;
  padding: 9px;
  border-radius: 8px;
  color: #adb1c0;
  background-color: #f6e8ff;
`;

const NewSchedule = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
`;

const NewScheduleHeader = styled.h1`
  text-align: center;
  font-size: 20px;
  color: #f56396;
`;

const CreateNewScheduleButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Customize = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > select {
    width: 63%;
    outline: none;
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #000;
  }
`;

const CreateSchedule = styled.button`
  cursor: pointer;
  background-color: #f56396;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 5px;
  height: 35px;
  margin: 0 5px;
  padding: 5px;
  width: 130px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.22);

  &:hover {
    background-color: #fff;
    color: #8f8f8f;
  }
`;
const CancelSchedule = styled.button`
  cursor: pointer;
  background-color: #fff;
  color: #8f8f8f;
  outline: none;
  border: none;
  border-radius: 5px;
  margin: 0 5px;
  height: 35px;
  padding: 5px;
  width: 130px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.22);

  &:hover {
    background-color: #f56396;
    color: #fff;
  }
`;
