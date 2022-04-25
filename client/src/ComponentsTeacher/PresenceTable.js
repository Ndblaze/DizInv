import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { BsCheck2All } from "react-icons/bs";

const PresenceTable = () => {
  const { group, module, sceance } = useParams();

  const [todayDate, setTodayDate] = useState();

  const getTodayDate = () => {
    const DateTime = new Date();
    setTodayDate(
      DateTime.getFullYear() + 
        "-" +
        (DateTime.getMonth() + 1) +
        "-" +
        DateTime.getDate()
    );
  };

  useEffect(() => {
    getTodayDate();
  }, []);
  const tempData = [
    {
      name: "Ndubuisi James Eze",
      group: "G2",
      sceance: "TP",
      date: todayDate,
      present: true,
    },
    {
      name: "Michael Njoku",
      group: "G2",
      sceance: "TP",
      date: todayDate,
      present: true,
    },
    {
      name: "Pius Sunday",
      group: "G2",
      sceance: "TP",
      date: todayDate,
      present: true,
    },
    {
      name: "Alpha Wuyep",
      group: "G2",
      sceance: "TP",
      date: todayDate,
      present: false,
    },
  ];
  return (
    <Wrapper>
      <Content>
        <table>
          <TableHeader>
            <TrHead>
              <NumberID>#</NumberID>
              <Name>Name</Name>
              <Group>Group</Group>
              <Sceance>Sceance</Sceance>
              <TodayCurrentDate> Date</TodayCurrentDate>
              <Action>Present</Action>
            </TrHead>
          </TableHeader>
          <TableBody>
            {tempData.map((item, index) => (
              <TrBody key={index}>
                <NumberIDBody>{index}</NumberIDBody>
                <NameBody>{item.name}</NameBody>
                <GroupBody>{group}</GroupBody>
                <SceanceBody>{sceance}</SceanceBody>
                <TodayCurrentDateBody>{item.date}</TodayCurrentDateBody>
                <ActionBody>
                  {item.present ? (
                    <IconContainer
                      style={{ color: "#00cf00", backgroundColor: "#e2ffe2" }}
                    >
                      <BsCheck2All />
                    </IconContainer>
                  ) : (
                    <IconContainer
                      style={{ color: "#ff4a4a", backgroundColor: "#ffe7e7" }}
                    >
                      <CgClose />
                    </IconContainer>
                  )}
                </ActionBody>
              </TrBody>
            ))}
          </TableBody>
        </table>
      </Content>
    </Wrapper>
  );
};

export default PresenceTable;

const Wrapper = styled.div`
  margin: 0;
`;

const Content = styled.div`
  overflow-y: scroll;
  height: 70vh;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #f6e8ff;
  }

  & > table {
    width: 100%;
  }
`;
const TableHeader = styled.thead`
  background-color: #f1f3f7;
  position: sticky;
  top: 0;
`;
const TrHead = styled.tr`
  padding: 5px 30px 5px 10px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #777b86;
  font-size: 18px;
  border-bottom: 2px solid #f6e8ff;
`;

const NumberID = styled.th`
  width: 100px;
  padding: 3px;
  text-align: center;
`;
const Name = styled.th`
  width: 250px;
  padding: 3px;
  text-align: left;
`;
const Group = styled.th`
  width: 100px;
  padding: 3px;
  text-align: center;
`;
const Sceance = styled.th`
  width: 100px;
  padding: 3px;
  text-align: center;
`;
const TodayCurrentDate = styled.th`
  width: 150px;
  padding: 3px;
  text-align: center;
`;
const Action = styled.th`
  width: 200px;
  padding: 3px;
  text-align: center;
`;

const TableBody = styled.tbody``;

const TrBody = styled.tr`
  padding: 5px 30px 5px 10px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #777b86;
  font-size: 15px;
  border-bottom: 2px solid #f6e8ff;

  &:hover {
    background-color: #fdfaff;
  }
`;

const NumberIDBody = styled.td`
  width: 100px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

const NameBody = styled.td`
  width: 250px;
  padding: 3px;
  text-align: left;
  text-transform: capitalize;
`;

const GroupBody = styled.td`
  width: 100px;
  padding: 3px;
  text-align: center;
  text-transform: uppercase;
`;

const SceanceBody = styled.td`
  width: 100px;
  padding: 3px;
  text-align: center;
  text-transform: uppercase;
`;
const TodayCurrentDateBody = styled.td`
  width: 150px;
  padding: 3px;
  text-align: center;
`;

const ActionBody = styled.td`
  width: 200px;
  padding: 3px;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  width: 70px;
  height: 30px;
  font-size: 20px;
`;
