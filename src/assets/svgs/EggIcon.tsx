import Svg, { Circle, Defs, Ellipse, G, Path } from "react-native-svg";
import { IconProps } from "./Types";

export const EggIcon = ({ height, width, color }: IconProps) => (
  <Svg width={width} height={height} fill="none">
    <G filter="url(#a)">
      <Path
        fill={color}
        d="M.795 19.574c0-8.246 4.203-19.575 11.822-19.575 7.619 0 11.822 11.33 11.822 19.575s-5.292 13.113-11.822 13.113c-6.53 0-11.822-4.868-11.822-13.113Z"
      />
    </G>
    <Circle cx={12.64} cy={20.882} r={7.387} fill="#fff" opacity={0.2} />
    <Circle cx={10.11} cy={18.252} r={2.53} fill="#fff" opacity={0.5} />
    <Ellipse
      cx={12.64}
      cy={20.832}
      fill="#fff"
      opacity={0.3}
      rx={4.958}
      ry={4.908}
    />
    <Defs></Defs>
  </Svg>
);

EggIcon.defaultProps = {
  color: "#C59E74",
  height: 34,
  width: 25,
};
