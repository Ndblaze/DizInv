import React from "react";
import styled from "styled-components";
import axios from "axios";

import { CgClose } from "react-icons/cg";
import { BsCheck2All } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";

const ExcludedTable = ({ listExcluded }) => {
  return (
    <Wrapper>
      <Content>
        <table>
          <TableHeader>
            <TrHead>
              <NumberID>#</NumberID>
              <Name>Name</Name>
              <Group>Group</Group>
              <Action>Excluded</Action>
              <Detaile></Detaile>
            </TrHead>
          </TableHeader>
          {listExcluded.length > 0 ? (
            <TableBody>
              {listExcluded.map((item, index) => (
                <TrBody key={index}>
                  <NumberIDBody>{index}</NumberIDBody>
                  <NameBody>{item.name}</NameBody>
                  <GroupBody>{item.group}</GroupBody>
                  <ActionBody>
                    {!item.excluded ? (
                      <IconContainer
                        // onClick={() => registerPresence(item)}
                        style={{ color: "#ff4a4a", backgroundColor: "#ffe7e7" }}
                      >
                        <CgClose />
                      </IconContainer>
                    ) : (
                      <IconContainer
                        // onClick={() => registerPresence(item)}
                        style={{ color: "#00cf00", backgroundColor: "#e2ffe2" }}
                      >
                        <BsCheck2All />
                      </IconContainer>
                    )}
                  </ActionBody>
                  <DetaileBody>
                    {" "}
                    <BiChevronDown />{" "}
                  </DetaileBody>
                </TrBody>
              ))}
            </TableBody>
          ) : (
            <ListEmpty>
              <h1>There is no List for excluding student.......</h1>
            </ListEmpty>
          )}
        </table>
      </Content>
    </Wrapper>
  );
};

export default ExcludedTable;

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

const ListEmpty = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > h1 {
    font-size: 18px;
    color: #adb1c0;
  }
`;

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

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
  width: 350px;
  padding: 3px;
  text-align: left;
`;
const Group = styled.th`
  width: 150px;
  padding: 3px;
  text-align: center;
`;

const Action = styled.th`
  width: 200px;
  padding: 3px;
  text-align: center;
`;
const Detaile = styled.th`
  width: 20px;
  padding: 3px;
  text-align: center;
`;

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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
  width: 350px;
  padding: 3px;
  text-align: left;
  text-transform: capitalize;
`;

const GroupBody = styled.td`
  width: 150px;
  padding: 3px;
  text-align: center;
  text-transform: uppercase;
`;

const ActionBody = styled.td`
  width: 200px;
  padding: 3px;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const DetaileBody = styled.td`
  width: 20px;
  font-size: 25px;
  padding: 3px;
  text-align: left;
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
