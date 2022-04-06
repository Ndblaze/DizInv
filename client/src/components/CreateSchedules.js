import React from "react";
import styled from "styled-components";

const CreateSchedules = ({ scheduleData, setViewSchedule }) => {
  console.log(scheduleData);
  return (
    <Wrapper>
      {scheduleData.hasOwnProperty("level") ? (
        <Content>
          <Header>{scheduleData.level} Scherdule</Header>
          <Table>
            <Thead>
              <Tr>
                <Time>Time</Time>
                {scheduleData.header.map((th) => (
                  <TimeValues
                    onClick={(e) => console.log(e, th.index)}
                    key={th.index}
                  >
                    {th.value}
                  </TimeValues>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Days>Sunday</Days>
                {scheduleData.sunday.map((td) => (
                  <DaysValues key={td.indexCol}>
                    <InnerTable onClick={(e) => console.log(e, td.indexCol)}>
                      <InnerTablbeThead>
                        <InnerTableTr>
                          <th>module</th>
                          <th>teacher</th>
                          <th>room</th>
                        </InnerTableTr>
                      </InnerTablbeThead>
                      <InnerTablbeTbody>
                        {td.value.map((value) => (
                          <InnerTableTr key={value.indexVal}>
                            <td>{value.module}</td>
                            <td>{value.teacher}</td>
                            <td>{value.room}</td>
                          </InnerTableTr>
                        ))}
                      </InnerTablbeTbody>
                    </InnerTable>
                  </DaysValues>
                ))}
              </Tr>
              <Tr>
                <Days>Monday</Days>
                {scheduleData.monday.map((td) => (
                  <DaysValues>{td}</DaysValues>
                ))}
              </Tr>
              <Tr>
                <Days>Tuesday</Days>
                {scheduleData.tuesday.map((td) => (
                  <DaysValues>{td}</DaysValues>
                ))}
              </Tr>
              <Tr>
                <Days>Wednesday</Days>
                {scheduleData.wednesday.map((td) => (
                  <DaysValues>{td}</DaysValues>
                ))}
              </Tr>
              <Tr>
                <Days>Thursday</Days>
                {scheduleData.thursday.map((td) => (
                  <DaysValues>{td}</DaysValues>
                ))}
              </Tr>
            </Tbody>
          </Table>
        </Content>
      ) : (
        ""
      )}
    </Wrapper>
  );
};

export default CreateSchedules;

const Wrapper = styled.div`
  width: 100%;
  height: 82vh;
  display: flex;
  justify-content: center;
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #f6e8ff;
  }
`;
const Content = styled.div`
  height: fit-content;
  width: fit-content;
  margin-top: 20px;
`;
const Header = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

const Table = styled.table`
  border-collapse: collapse;
`;

const Thead = styled.thead``;

const Tr = styled.tr``;

const Time = styled.th`
  font-size: 14px;
  width: 50px;
  border: 1px solid #adb1c0;
  text-align: center;
  height: 50px;
`;
const TimeValues = styled.th`
  font-size: 14px;
  width: 200px;
  border: 1px solid #adb1c0;
  text-align: center;
  height: 50px;
`;
const Days = styled.td`
  font-size: 12px;
  width: 80px;
  border: 1px solid #adb1c0;
  height: fit-content;
  text-align: center;
  height: 100px;
`;
const DaysValues = styled.td`
  width: 200px;
  border: 1px solid #adb1c0;
  height: fit-content;
  text-align: center;
  height: 100px;
`;

const Tbody = styled.tbody``;

//inner Table

const InnerTable = styled.table`
  border-collapse: collapse;
  width: 200px;
  height: 100%;
`;

const InnerTablbeThead = styled.thead``;

const InnerTableTr = styled.tr`
  & > th {
    width: 33%;
    font-size: 11px;
    border-bottom: 1px solid #adb1c0;
    border-right: 1px solid #adb1c0;
    background-color: #f6e8ff;
  }
  & > td {
    width: 33%;
    font-size: 9px;
    border-bottom: 1px solid #adb1c0;
    border-right: 1px solid #adb1c0;
  }
`;
const InnerTablbeTbody = styled.tbody``;
