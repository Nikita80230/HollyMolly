import { useEffect, useState } from "react";
import Container from "src/components/Container/Container";
import { StyledSection } from "./Styled";
import IconClose from "src/assets/images/close.svg?react";
import IconPlus from "src/assets/images/plus.svg?react";
import { questions } from "src/utils/questions";

const FAQPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = (index) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index], 
    }));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <StyledSection>
      <Container>
        <h1 className="styledTitle">Питання що часто-задаються</h1>
        <ul className="list">
          {questions.map((item, index) => (
            <li className="item" key={index}>
              <div className="wrapperTitle">
                <h3 className="title">{item.question}</h3>
                {isOpen[index] ? (
                  <button
                    className="buttonWrapper"
                    onClick={() => handleClick(index)}
                  >
                    <IconClose className="iconClose" />
                  </button>
                ) : (
                  <button
                    className="buttonWrapper"
                    onClick={() => handleClick(index)}
                  >
                    <IconPlus className="iconPlus" />
                  </button>
                )}
              </div>
              {isOpen[index] && (
                <div className="containerDesc">
                  <p className="description">{item.answer}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </StyledSection>
  );
};

export default FAQPage;
