import { useState } from "react";
import { StyledLanguageSwitcher } from "./Styled";

const LanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleSwitch = (e) => {
    setSelectedLanguage(e.currentTarget.value);
  };

  console.log(selectedLanguage);

  return (
    <StyledLanguageSwitcher>
      <button
        className={`switchBtn ${selectedLanguage === "en" ? "active" : ""}`}
        type="button"
        onClick={handleSwitch}
        value="en"
      >
        En
      </button>
      <button
        className={`switchBtn ${selectedLanguage === "ua" ? "active" : ""}`}
        type="button"
        onClick={handleSwitch}
        value="ua"
      >
        Ua
      </button>
    </StyledLanguageSwitcher>
  );
};

export default LanguageSwitcher;
