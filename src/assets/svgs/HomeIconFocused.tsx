import { COLORS } from "@src/styles/BaseStyle";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./Types";

export const HomeIconFocused = ({ height, width, color }: IconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      fill="#fff"
      d="M15.935 3.95c-1.807-4.234-8.584-3.763-9.94.47-4.969-1.882-7.77 6.49-.903 7.995l.835 6.081c.04.289.286.504.578.504h8.921a.583.583 0 0 0 .578-.504l.834-6.08c6.325-1.412 5.162-9.6-.903-8.467Z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.75}
      d="M15.935 3.95c-1.807-4.234-8.584-3.763-9.94.47-4.969-1.882-7.77 6.49-.903 7.995l.835 6.081c.04.289.286.504.578.504h8.921a.583.583 0 0 0 .578-.504l.834-6.08c6.325-1.412 5.162-9.6-.903-8.467Z"
    />
    <Path
      stroke="#000"
      strokeOpacity={0.3}
      strokeWidth={1.75}
      d="M15.935 3.95c-1.807-4.234-8.584-3.763-9.94.47-4.969-1.882-7.77 6.49-.903 7.995l.835 6.081c.04.289.286.504.578.504h8.921a.583.583 0 0 0 .578-.504l.834-6.08c6.325-1.412 5.162-9.6-.903-8.467Z"
    />
    <Path
      stroke="#000"
      strokeOpacity={0.3}
      strokeWidth={1.75}
      d="M15.935 3.95c-1.807-4.234-8.584-3.763-9.94.47-4.969-1.882-7.77 6.49-.903 7.995l.835 6.081c.04.289.286.504.578.504h8.921a.583.583 0 0 0 .578-.504l.834-6.08c6.325-1.412 5.162-9.6-.903-8.467Z"
    />
    <Path stroke="#000" strokeWidth={1.75} d="M6 16h10M6 17h10M6 18h10" />
  </Svg>
);

HomeIconFocused.defaultProps = {
  color: COLORS.tabIconFocused,
  height: 22,
  width: 22,
};
