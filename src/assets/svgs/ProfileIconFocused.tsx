import { COLORS } from "@src/styles/BaseStyle";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./Types";

export const ProfileIconFocused = ({ height, width, color }: IconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      fill={color}
      fillRule="evenodd"
      d="M6.213 8.5a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
      clipRule="evenodd"
    />
    <Path
      fill={color}
      fillRule="evenodd"
      d="M11.213 0c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11Zm-9 11a9 9 0 1 1 15.862 5.824A4.99 4.99 0 0 0 14.213 15h-6a4.99 4.99 0 0 0-3.862 1.824A8.965 8.965 0 0 1 2.213 11Z"
      clipRule="evenodd"
    />
  </Svg>
);

ProfileIconFocused.defaultProps = {
  color: COLORS.tabIconFocused,
  height: 22,
  width: 22,
};
