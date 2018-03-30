import styled from "styled-components";
import ContentEditable from "react-contenteditable";

export default styled(ContentEditable)`
  display: block;
  &:hover {
    background: #f5f5f5;
    outline: 5px solid #f5f5f5;
  }
  &:focus {
    outline: 2px dotted black;
  }

  @media print {
    background: none;
    outline: 0;
  }
`;
