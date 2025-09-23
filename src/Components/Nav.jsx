import Tab from "./Tab"
import styled from "styled-components";


const TabsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 12px 4px;
    width: 50px;
`;

const Nav = ({ currentTab, setCurrentTab, tabContent }) => {
    return (
        <TabsContainer>
            {tabContent.map((tab, index) => (
                <Tab
                    key={index}
                    title={tab.title}
                    icon={tab.icon}
                    active={currentTab === tab.id}
                    onClick={() => setCurrentTab(tab.id)}
                />
            ))}
        </TabsContainer>
    )
};

export default Nav;