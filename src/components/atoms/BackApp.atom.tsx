import styled from "styled-components";
import ColorsBase from "../../enums/colors-base.enum";

const BackApp = styled.div`
  background-color: ${ColorsBase.bgColor};
  padding: 0px;
  margin: 0px;
  left: 0;
  position: absolute;
  display: flex;
  -webkit-box-align: stretch;
  align-items: stretch;
  width: 100%;
  height: 100%;
  right: 0;
  top: 0;
`;

export default BackApp;