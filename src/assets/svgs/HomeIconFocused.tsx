import { COLORS } from "@src/styles/BaseStyle";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./Types";

export const HomeIconFocused = ({ height, width, color }: IconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      stroke={color}
      strokeWidth={1.5}
      d="M5 15h11.5M15.935 3.95c-1.807-4.234-8.584-3.763-9.94.47-4.969-1.882-7.77 6.49-.903 7.995l.845 6.153a.5.5 0 0 0 .495.432H15.5a.5.5 0 0 0 .495-.432l.845-6.153c6.324-1.41 5.161-9.6-.904-8.466Z"
    />
  </Svg>
);

HomeIconFocused.defaultProps = {
  color: COLORS.tabIconFocused,
  height: 20,
  width: 22,
};
