import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Search from "../../components/Search";
import { BiMessageSquareEdit } from "react-icons/bi";
import { CgFileRemove } from "react-icons/cg";

import Select from "react-select";
import axios from "axios";
import { useParams } from "react-router-dom";

const customStyles = {
  menuList: () => ({
    height: 10,
  }),
  menu: (provided, state) => ({
    ...provided,
    height: "170px",
    overflowY: "scroll",
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: "13px",
  }),
};

const ListNavPresence = ({ getQuery, setDateQuery }) => {
  const { group, module, sceance } = useParams();

  const [dateList, setDateList] = useState([]);

  useEffect(() => {
    getAllDate();
  }, []);

  const getAllDate = async () => {
    await axios
      .get(
        `http://localhost:5000/api/managePresence/get-dates/${module}/${sceance}/${group}`
      )
      .then((res) => {
        if (res.data.status === "SUCCESS") {
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

  return (
    <Wrapper>
      <SearchContainer>
        <Search onChange={getQuery} />
      </SearchContainer>
      <Operation>
        <div onClick={() => console.log()}>
          <SelectDate
            placeholder="Pick date"
            styles={customStyles}
            name="date"
            options={dateList}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: "#e5cbff",
                primary: "#bf7fff",
              },
            })}
            onChange={(e) => setDateQuery(e.value)}
          />
        </div>
        <AddDeleteSceance
          style={{ backgroundColor: "#d8ffd8", color: "#3bff3b" }}
        >
          <BiMessageSquareEdit />
        </AddDeleteSceance>
        <AddDeleteSceance
          style={{ backgroundColor: "#ffcbe5", color: "#ff7fbf" }}
        >
          <CgFileRemove />
        </AddDeleteSceance>
      </Operation>
    </Wrapper>
  );
};

export default ListNavPresence;

const Wrapper = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  border-radius: 20px 20px 0 0;
`;
const SearchContainer = styled.div`
  border: 2px solid #d0d3e0;
  width: 400px;
  height: 30px;
  padding-left: 15px;
  margin-right: 30px;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;

const Operation = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const AddDeleteSceance = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  font-size: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SelectDate = styled(Select)`
  width: 230px;
`;
