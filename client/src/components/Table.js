import React from "react";
import styled from "styled-components";
import TablePhoto from "./TablePhoto";
import View_Delete from "./View_Delete";

const Table = ({ data, setEditProfile, onDelete, profile }) => {
  return (
    <Wrapper>
      <Content>
        <table>
          <TableHeader>
            <TrHead>
              <Photo>Photo</Photo>
              <Name>Name</Name>
              <Mobile>Mobile</Mobile>
              <Email>Email</Email>
              <View>View</View>
              <Delete>Delete</Delete>
            </TrHead>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TrBody key={item.inscription}>
                <PhotoBody>
                  <TablePhoto Name={item.firstName.slice(0, 1).toUpperCase()} />
                </PhotoBody>
                <NameBody>
                  {item.firstName} {item.lastName}
                </NameBody>
                <MobileBody>{item.phone}</MobileBody>
                <EmailBody>{item.email.split("univ")[0]}...</EmailBody>
                <Tbody2>
                  <View_Delete text="View" path={item.inscription} />
                </Tbody2>
                <Tbody2>
                  <View_Delete
                    text="Delete"
                    onClick={() => onDelete(item.inscription)}
                  />
                </Tbody2>
              </TrBody>
            ))}
          </TableBody>
        </table>
      </Content>
    </Wrapper>
  );
};

export default Table;

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

const Photo = styled.th`
  width: 100px;
  padding: 3px;
  text-align: center;
`;
const Name = styled.th`
  width: 200px;
  padding: 3px;
  text-align: left;
`;
const Mobile = styled.th`
  width: 150px;
  padding: 3px;
  text-align: center;
`;
const Email = styled.th`
  width: 230px;
  padding: 3px;
  text-align: left;
`;
const View = styled.th`
  width: 100px;
  padding: 3px;
  text-align: center;
`;
const Delete = styled.th`
  width: 100px;
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

const NameBody = styled.td`
  width: 200px;
  padding: 3px;
  text-align: left;
  text-transform: uppercase;
`;

const MobileBody = styled.td`
  width: 170px;
  padding: 3px;
  text-align: center;
`;

const EmailBody = styled.td`
  width: 230px;
  padding: 3px;
  text-align: left;
  text-transform: lowercase;
`;

const PhotoBody = styled.td`
  width: 100px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

const Tbody2 = styled.td`
  width: 100px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
