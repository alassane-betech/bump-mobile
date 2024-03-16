import Svg, { Path } from "react-native-svg";
import { IconProps } from "./Types";
import { COLORS } from "@src/styles/BaseStyle";

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

export const LunchIconFocused = ({ height, width, color }: IconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      fill={color}
      fillRule="evenodd"
      d="M.787 1a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2h-1v1.867c0 .714 0 1.254-.137 1.767a4 4 0 0 1-.592 1.263c-.306.435-.72.78-1.27 1.237L11.35 11l3.44 2.866c.549.457.963.803 1.27 1.237a4 4 0 0 1 .59 1.263c.139.513.139 1.053.138 1.767V20h1a1 1 0 1 1 0 2h-16a1 1 0 1 1 0-2h1v-1.867c0-.714 0-1.254.138-1.767a4 4 0 0 1 .591-1.263c.306-.434.72-.78 1.27-1.237L8.226 11l-3.44-2.866c-.55-.457-.964-.802-1.27-1.237a4 4 0 0 1-.591-1.263c-.139-.513-.138-1.053-.138-1.767V2h-1a1 1 0 0 1-1-1Zm4 2.752V2h10v1.752c0 .88-.008 1.137-.069 1.362-.06.227-.16.44-.295.632-.135.19-.327.361-1.003.925L9.787 9.698 6.154 6.671c-.676-.564-.868-.734-1.002-.925a2 2 0 0 1-.296-.632c-.06-.225-.069-.482-.069-1.362Z"
      clipRule="evenodd"
    />
  </Svg>
);

LunchIconFocused.defaultProps = {
  color: COLORS.tabIconFocused,
  height: 22,
  width: 19,
};
