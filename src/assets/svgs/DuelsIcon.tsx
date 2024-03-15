import { COLORS } from "@src/styles/BaseStyle";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./Types";

export const DuelsIcon = ({ height, width, color }: IconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.882 2-3.155 3.155m0 0-.064.064m.064-.064c-.901.901-1.328 2.07-1.268 3.162.029.533-.126 1.06-.504 1.439l-6.363 6.123A1.5 1.5 0 0 0 6.713 18l6.363-6.123c.378-.378.905-.533 1.439-.504 1.092.06 2.26-.367 3.162-1.268l3.155-3.155M14.88 7.95l3.536-3.535M14.006 15.5l2.252 2.251a1.5 1.5 0 0 0 2.12-2.12l-1.165-1.155M8.213 6 5.47 3.293 4.213 2a1 1 0 0 0-1.414 0l-.465.414a3 3 0 0 0 0 4.242L6.213 10.5"
    />
  </Svg>
);

DuelsIcon.defaultProps = {
  color: COLORS.darkGray,
  height: 21,
  width: 22,
};
