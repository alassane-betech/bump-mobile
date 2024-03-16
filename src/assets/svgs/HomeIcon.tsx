import Svg, { Path } from "react-native-svg";
import { IconProps } from "./Types";
import { COLORS } from "@src/styles/BaseStyle";

export const HomeIcon = ({ height, width, color }: IconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      stroke={color}
      strokeWidth={1.5}
      d="M5 15h11.5M15.935 3.95c-1.807-4.234-8.584-3.763-9.94.47-4.969-1.882-7.77 6.49-.903 7.995l.845 6.153a.5.5 0 0 0 .495.432H15.5a.5.5 0 0 0 .495-.432l.845-6.153c6.324-1.41 5.161-9.6-.904-8.466Z"
    />
  </Svg>
);

HomeIcon.defaultProps = {
  color: "gray",
  height: 22,
  width: 22,
};

export const HomeIconFocused = ({ height, width, color }: IconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      fill="#fff"
      d="M15.935 3.95c-1.807-4.234-8.584-3.763-9.94.47-4.969-1.882-7.77 6.49-.903 7.995l.835 6.081c.04.289.286.504.578.504h8.921a.583.583 0 0 0 .578-.504l.834-6.08c6.325-1.412 5.162-9.6-.903-8.467Z"
    />
    <Path
      stroke={color}
      strokeWidth={1.75}
      d="M15.935 3.95c-1.807-4.234-8.584-3.763-9.94.47-4.969-1.882-7.77 6.49-.903 7.995l.835 6.081c.04.289.286.504.578.504h8.921a.583.583 0 0 0 .578-.504l.834-6.08c6.325-1.412 5.162-9.6-.903-8.467Z"
    />
    <Path
      stroke={color}
      strokeOpacity={0.3}
      strokeWidth={1.75}
      d="M15.935 3.95c-1.807-4.234-8.584-3.763-9.94.47-4.969-1.882-7.77 6.49-.903 7.995l.835 6.081c.04.289.286.504.578.504h8.921a.583.583 0 0 0 .578-.504l.834-6.08c6.325-1.412 5.162-9.6-.903-8.467Z"
    />
    <Path
      stroke={color}
      strokeOpacity={0.3}
      strokeWidth={1.75}
      d="M15.935 3.95c-1.807-4.234-8.584-3.763-9.94.47-4.969-1.882-7.77 6.49-.903 7.995l.835 6.081c.04.289.286.504.578.504h8.921a.583.583 0 0 0 .578-.504l.834-6.08c6.325-1.412 5.162-9.6-.903-8.467Z"
    />
    <Path stroke={color} strokeWidth={1.75} d="M6 16h10M6 17h10M6 18h10" />
  </Svg>
);

HomeIconFocused.defaultProps = {
  color: COLORS.tabIconFocused,
  height: 22,
  width: 22,
};
