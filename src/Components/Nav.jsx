import { useState, useEffect } from "react";
import Tab from "./Tab"
import styled from "styled-components";


const TabsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    padding: 0 4px 0 4px;
    width: 50px;
    height: 100%;
    gap: 0;
`;

const TabsList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
    gap: 12px;
    padding-top: 16px;
`;

const ClockContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 8px 0;
    color: ${props => props.offset ? '#000' : '#fff'};
    
    p {
        margin: 0;
        text-align: center;
        font-family: 'Noto Sans', sans-serif;
        font-weight: 600;
        font-size: 36px;

        &:last-child {
            margin-top: -14px;
        }
    }
`;

const Nav = ({ currentTab, setCurrentTab, tabContent }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const formatTime = (time) => {
            return {
                hour: ((time.getHours() % 12) === 0 ? 12 : (time.getHours() % 12)).toString().padStart(2, '0'),
                minute: time.getMinutes().toString().padStart(2, '0')
            };
        };
        const interval = setInterval(() => {
            setTime(formatTime(new Date()));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <TabsContainer>
            <TabsList>
                {tabContent.map((tab, index) => (
                    <Tab
                    key={index}
                    title={tab.title}
                    icon={tab.icon}
                    active={currentTab === tab.id}
                    onClick={() => setCurrentTab(tab.id)}
                    />
                ))}
            </TabsList>
            <ClockContainer><p>{time.hour}</p><p>{time.minute}</p></ClockContainer>
        </TabsContainer>
    )
};

export default Nav;