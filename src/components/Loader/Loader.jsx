import { Hearts } from "react-loader-spinner";
import { WrapperLoader } from "./Styled";

const Loader = () => {
  return (
    <WrapperLoader>
      <Hearts
        height="100"
        width="100"
        color="#98714A"
        ariaLabel="hearts-loading"
        visible={true}
      />
    </WrapperLoader>
  );
};

export default Loader;
