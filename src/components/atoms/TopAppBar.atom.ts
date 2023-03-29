import styled from "styled-components";
import ColorsBase from "../../enums/colors-base.enum";

const TopAppBar = styled.header`
  height: 80px;
  background-color: ${ColorsBase.bgAppBar};
  color: ${ColorsBase.white};
  justify-content: flex-start;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0 0 15px;
`;

export default TopAppBar;
