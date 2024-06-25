import { Hearts } from "react-loader-spinner";
import { WrapperLoader } from "./Styled";

const Loader = () => {
  return (
    <WrapperLoader>
      <Hearts
        height="100"
        width="100"
        color="#e85a50"
        ariaLabel="hearts-loading"
        visible={true}
      />
    </WrapperLoader>
  );
};

export default Loader;
