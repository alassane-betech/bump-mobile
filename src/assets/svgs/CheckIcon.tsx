import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./Types";

export const CheckIcon = ({ height, width, color }: IconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 1 3.5 6.5 1 4"
    />
  </Svg>
);

CheckIcon.defaultProps = {
  color: "#2B323B",
  height: 8,
  width: 10,
};
