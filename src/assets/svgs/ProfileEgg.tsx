import Svg, { Circle, Defs, Ellipse, G, Path } from "react-native-svg";
import { IconProps } from "./Types";

export const ProfileEgg = ({ height, width, color }: IconProps) => (
  <Svg width={width} height={height} fill="none">
    <G filter="url(#a)">
      <Path
        fill={color}
        d="M.195 29.362C.195 16.994 6.5 0 17.928 0S35.66 16.994 35.66 29.362c0 12.369-7.938 19.67-17.733 19.67-9.796 0-17.733-7.301-17.733-19.67Z"
      />
    </G>
    <Circle cx={17.962} cy={31.324} r={11.081} fill="#fff" opacity={0.2} />
    <Circle cx={14.169} cy={27.378} r={3.795} fill="#fff" opacity={0.5} />
    <Ellipse
      cx={17.964}
      cy={31.248}
      fill="#fff"
      opacity={0.3}
      rx={7.438}
      ry={7.362}
    />
    <Defs></Defs>
  </Svg>
);

ProfileEgg.defaultProps = {
  color: "#C59E74",
  height: 51,
  width: 36,
};
