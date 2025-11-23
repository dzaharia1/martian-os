import React, { useState } from "react";
import { io } from "socket.io-client";
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
  const socket = io(`${import.meta.env.VITE_SOCKET_URL}:${import.meta.env.VITE_SOCKET_PORT}`);
  const [currentTab, setCurrentTab] = useState(Tabs[0]);

  const tabClickHandler = (newTab) => {
    if (newTab.type === "page") {
      setCurrentTab(newTab);
    } else if (newTab.type === "function") {
      newTab.function(socket, tab);
    }
  }

  return  (
    <Page>
      <Nav
        currentTab={currentTab}
        tabClickHandler={tabClickHandler}
        tabContent={Tabs}
        socket={socket} />
      {Tabs.map((tab, key) => (
        tab.id === currentTab.id ? <TabContent url={tab.url} key={key} /> : null
      ))}
    </Page>
  )
}

export default App;
