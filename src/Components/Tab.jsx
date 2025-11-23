import React from 'react';
import styled from 'styled-components';
import LanguageTab from './LanguageTab';

const TabContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    background-color: ${props => props.active ? 'rgba(220, 220, 220, .5)' : 'transparent'};
    border: ${props => props.active ? '2px solid rgba(255, 255, 255, .5)' : '2px solid rgba(0, 0, 0, 0)'};
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, border 0.3s ease;
`;

const Icon = styled.img`
    width: 32px;
    height: 32px;
`;

const Tab = ({ tab, active, onClick, socket }) => {
    if (tab.type === "app") {
        return (
            <TabContainer active={active}>
                {tab.appName === "LanguageTab" && <LanguageTab icon={tab.icon} socket={socket} />}
            </TabContainer>
        );
    } else {
        return (
            <TabContainer active={active} onClick={onClick}>
                <Icon src={tab.icon} alt={tab.title}/>
            </TabContainer>
        );
    }   
};



export default Tab;
