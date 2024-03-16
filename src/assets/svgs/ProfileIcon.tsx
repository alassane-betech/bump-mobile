import Svg, { Path } from "react-native-svg";
import { IconProps } from "./Types";
import { COLORS } from "@src/styles/BaseStyle";

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
  height: 22,
  width: 22,
};

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
