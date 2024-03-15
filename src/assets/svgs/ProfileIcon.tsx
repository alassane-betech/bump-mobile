import Svg, { Path } from "react-native-svg";
import { IconProps } from "./Types";

export const ProfileIcon = ({ height, width, color }: IconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.53 18.438A4.001 4.001 0 0 1 8.212 16h6a4.001 4.001 0 0 1 3.684 2.438M15.213 8.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm6 2.5c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10Z"
    />
  </Svg>
);

ProfileIcon.defaultProps = {
  color: "gray",
  height: 20,
  width: 22,
};
