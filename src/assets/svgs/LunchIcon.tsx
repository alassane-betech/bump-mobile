import Svg, { Path } from "react-native-svg";
import { IconProps } from "./Types";

export const LunchIcon = ({ height, width, color }: IconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.787 11 5.514 7.44c-.635-.53-.952-.794-1.18-1.119a3 3 0 0 1-.444-.947c-.103-.383-.103-.796-.103-1.622V1m6 10 4.273-3.56c.635-.53.952-.794 1.18-1.119a3 3 0 0 0 .444-.947c.103-.383.103-.796.103-1.622V1m-6 10-4.273 3.56c-.635.53-.952.794-1.18 1.119a3 3 0 0 0-.444.947c-.103.383-.103.796-.103 1.622V21m6-10 4.273 3.56c.635.53.952.794 1.18 1.119a3 3 0 0 1 .444.947c.103.383.103.796.103 1.622V21m-14-20h16m-16 20h16"
    />
  </Svg>
);

LunchIcon.defaultProps = {
  color: "gray",
  height: 22,
  width: 19,
};
