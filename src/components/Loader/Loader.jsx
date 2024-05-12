import { Hearts } from "react-loader-spinner";

const Loader = () => {
  return (
    <Hearts
      height="100"
      width="100"
      color="#98714A"
      ariaLabel="hearts-loading"
      wrapperStyle={{
        position: "absolute",
        top: "40%",
        left: "40%",
        zIndex: "103",
      }}
      // wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
