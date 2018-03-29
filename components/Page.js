import styled, { injectGlobal } from "styled-components";

injectGlobal`
  html, body {
    margin: 0;
  }
  * {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 10pt;
    line-height: 1.5;
    box-sizing: border-box;
  }
  body {
    background: #efefef;
    padding: 2em;
  }
`;

export default styled.div``;
