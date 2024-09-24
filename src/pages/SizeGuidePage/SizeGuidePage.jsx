import Container from "src/components/Container/Container";
import TitlePage from "src/components/TitlePage/TitlePage";
import { StyledSection } from "./Styled";

const SizeGuidePage = () => {
  return (
    <StyledSection>
      <Container>
        <TitlePage title={"Довідник розмірів"} />
        <div className="wrapperTables">
          <div>
            <h3 className="title">Головні убори</h3>
            <div className="containerSizes">
              <p className="textSize">XXS = 54 см = 54 р.</p>
              <p className="textSize">XS = 55 см = 55 р.</p>
              <p className="textSize">S = 56 см = 56 р.</p>
              <p className="textSize">M = 57 см = 57 р.</p>
              <p className="textSize">L = 58 см = 58 р.</p>
              <p className="textSize">XL = 59 см = 59 р.</p>
            </div>
          </div>
          <div>
            <h3 className="title">Браслети</h3>
            <table className="styledTable">
              <thead>
                <tr>
                  <th className="headerCell">Зап'ястя</th>
                  <th className="headerCell">Розмір браслету</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="dataCell">14см</td>
                  <td className="dataCell">16см</td>
                </tr>
                <tr>
                  <td className="dataCell">15см</td>
                  <td className="dataCell">17см</td>
                </tr>
                <tr>
                  <td className="dataCell">16см</td>
                  <td className="dataCell">18см</td>
                </tr>
                <tr>
                  <td className="dataCell">17см</td>
                  <td className="dataCell">19см</td>
                </tr>
                <tr>
                  <td className="dataCell">18см</td>
                  <td className="dataCell">20см</td>
                </tr>
                <tr>
                  <td className="dataCell">19см</td>
                  <td className="dataCell">21см</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </StyledSection>
  );
};

export default SizeGuidePage;
