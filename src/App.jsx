import React, { useState } from "react";
import styled from "styled-components";
import Nav from "./Components/Nav";
import Tabs from "./tabs";
import TabContent from "./Components/TabContent";
import Tab from "./Components/Tab";

const Page = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-size: 24px;
  color: #333;
  background-color: #000;
`;

function App() {
  const [currentTab, setCurrentTab] = useState(Tabs[0].id);

  return  (
    <Page>
      <Nav
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        tabContent={Tabs} />
      {Tabs.map((tab, key) => (
        tab.id === currentTab ? <TabContent url={tab.url} key={key} /> : null
      ))}
    </Page>
  )
}

export default App;
