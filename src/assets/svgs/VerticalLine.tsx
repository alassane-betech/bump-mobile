import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./Types";

export const VerticalLine = ({ height, width, color }: IconProps) => (
  <Svg width={2} height={16} fill="none">
    <Path stroke={color} d="M.667 0v16" />
  </Svg>
);

VerticalLine.defaultProps = {
  color: "#E6E6E6",
  height: 16,
  width: 2,
};
