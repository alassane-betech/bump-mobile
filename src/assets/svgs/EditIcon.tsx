import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./Types";

export const EditIcon = ({ height, width, color }: IconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.333}
      d="M2.877 18.116c.045-.414.068-.62.131-.814a2 2 0 0 1 .233-.485c.112-.17.259-.317.553-.61L17.001 3a2.828 2.828 0 1 1 4 4L7.793 20.206c-.294.294-.441.442-.61.553a2 2 0 0 1-.486.233c-.193.063-.4.086-.813.132L2.5 21.5l.377-3.384Z"
    />
  </Svg>
);

EditIcon.defaultProps = {
  color: "#fff",
  height: 24,
  width: 24,
};
