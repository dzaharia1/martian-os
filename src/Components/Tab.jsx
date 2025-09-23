import React from 'react';
import styled from 'styled-components';

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
    width: 24px;
    height: 24px;
`;

const Tab = ({ title, icon, active, url, onClick }) => {
    return (
        <TabContainer active={active} onClick={onClick}>
            <Icon src={icon} alt={title}/>
        </TabContainer>
    );
};



export default Tab;
