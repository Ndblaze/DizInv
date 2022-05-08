import React, { useEffect, useState } from "react";
import styled from "styled-components";
import QRCode from "qrcode";

//c25df900-ce65-11ec-874b-154d4645bac2

const QRGenerator = ({ text }) => {
  const [src, setSrc] = useState("");

  useEffect(() => {
    QRCode.toDataURL(text).then((data) => {
      setSrc(data);
    });
  }, []);

  return (
    <Wrapper>
      <img src={src} />
    </Wrapper>
  );
};

export default QRGenerator;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
