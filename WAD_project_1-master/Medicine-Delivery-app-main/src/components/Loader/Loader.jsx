import { RotatingLines } from "react-loader-spinner";
import { WrapperLoader } from "./Loader.styled";

export const Loader = () => (
  <WrapperLoader>
    <RotatingLines
      strokeColor="#136d40"
      strokeWidth="5"
      animationDuration="1.2"
      width="96"
      visible={true}
    />
  </WrapperLoader>
);