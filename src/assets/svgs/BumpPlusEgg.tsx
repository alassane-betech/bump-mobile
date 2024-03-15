import { COLORS } from "@src/styles/BaseStyle";
import Svg, { Circle, ClipPath, Defs, G, Path } from "react-native-svg";
import { IconProps } from "./Types";

export const BumpPlusEgg = ({ height, width, color }: IconProps) => (
  <Svg width={28} height={38} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill="white"
        d="M0 22.708C0 13.143 4.877 0 13.718 0c8.84 0 13.718 13.143 13.718 22.708 0 9.565-6.14 15.212-13.718 15.212S0 32.273 0 22.708Z"
      />
      <Circle cx={14} cy={23} r={10} fill="#FFCE71" />
      <Path
        stroke="#553903"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.801}
        d="M13.938 19.113v8.716m-4.63-4.358h9.26"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27.43v37.92H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

BumpPlusEgg.defaultProps = {
  color: COLORS.white,
  height: 101,
  width: 96,
};
