import React from 'react';
import styled from 'styled-components';

const StyledIframe = styled.iframe`
    width: 100%;
    height: 100%;
    border: none;
`;

const TabContentContainer = styled.div`
    display: {props => props.visible ? 'flex' : 'none'}
    flex-grow: 1;
    height: 100%;
    border-radius: 12px;
    overflow: hidden;
`;

const TabContent = ({ url }) => {
    return (
        <TabContentContainer>
            <StyledIframe src={url} title="tab-content"></StyledIframe>
        </TabContentContainer>
    );
};

export default TabContent;
