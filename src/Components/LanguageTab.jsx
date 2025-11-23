import React from 'react';
import styled from 'styled-components';

const LanguageTabContainer = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background: none;
    outline: none;
    border: 0px;
    padding: 0px;
    margin: 0px;
`;

const Icon = styled.img`
    width: 38px;
    height: 38px;
    margin: -6px;
`;

const LanguageTab = ({ icon, socket }) => {
    const [language, setLanguage] = React.useState("English");

    socket.on("languageModeChanged", (data) => {
        setLanguage(data);
    });

    const toggleLanguage = () => {
      if (language === "English") {
        socket.emit("updateLanguageMode", "Spanish");
      } else {
        socket.emit("updateLanguageMode", "English");
      }
    }

    return (
       <LanguageTabContainer onClick={toggleLanguage}>
          <Icon src={`mode_${language.toLowerCase()}.png`} alt="language-tab" />
       </LanguageTabContainer>
    );
};

export default LanguageTab;