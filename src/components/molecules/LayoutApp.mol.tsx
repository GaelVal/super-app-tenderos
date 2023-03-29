import styled from "styled-components"
import { APP_TITLE } from "../../configs"
import ILayoutProps from "../../interfaces/props/i-layout"
import BackApp from "../atoms/BackApp.atom"
import MainAppContent from "../atoms/MainAppContent.atom"
import MenuAppBar from "../atoms/MenuAppBar.atom"
import TitleAppBar from "../atoms/TitleAppBar.atom"
import TopAppBar from "../atoms/TopAppBar.atom"

const Main = styled.div`
  padding: 1rem;
  min-height: 90%;
`;

const LayoutApp = ({ title, children }: ILayoutProps) => {
  /**
   * todo: layout of modules privates and menus.
   */
  return (<BackApp>
    {/* menu app */}
    <MenuAppBar>
      <TitleAppBar>{APP_TITLE}</TitleAppBar>
    </MenuAppBar>
    {/* content */}
    <MainAppContent>
      {/* top app bar*/}
      <TopAppBar>
        {title}
      </TopAppBar>
      {/* main content */}
      <Main>
        {children}
      </Main>
    </MainAppContent>
  </BackApp>)
}

export default LayoutApp;
