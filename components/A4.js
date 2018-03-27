import styled from "styled-components";

export default styled.div`
  position: relative;
  display: block;
  background: #fff;
  width: 210mm;
  height: 297mm;
  padding: 20mm;
  margin: 0 auto;

  &:before,
  &:after {
    position: absolute;
    content: "";
    left: 0;
    width: 5mm;
    height: 0;
    border-bottom: 1px solid #ccc;
  }
  &:before {
    top: 105mm;
  }
  &:after {
    top: 200mm;
  }
`;
