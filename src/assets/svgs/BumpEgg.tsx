import Svg, {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  G,
  Path,
} from "react-native-svg";
import { IconProps } from "./Types";

export const BumpEgg = ({ height, width, color }: IconProps) => (
  <Svg width={width} height={height} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill={color}
        d="M23.37 55.189c0-17.145 8.74-40.702 24.582-40.702 15.841 0 24.58 23.557 24.58 40.702S61.53 82.455 47.953 82.455c-13.579 0-24.582-10.121-24.582-27.266Z"
      />
    </G>
    <Circle cx={48.001} cy={57.908} r={15.36} fill="#FFCE71" />
    <Ellipse cx={48.001} cy={57.803} fill="#A34F01" rx={10.31} ry={10.205} />
    <Circle cx={42.741} cy={52.437} r={5.26} fill="#FFEECD" />
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M23.37 14.487h49.152v67.968H23.37z" />
      </ClipPath>
    </Defs>
  </Svg>
);

BumpEgg.defaultProps = {
  color: "#F9F9F9",
  height: 101,
  width: 96,
};
