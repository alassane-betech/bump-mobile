import Svg, { Path, SvgProps } from "react-native-svg";

function TextFieldErrorIcon(props: SvgProps) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.51 2.655c.163.067.31.166.434.29l4.112 4.111a1.334 1.334 0 010 1.889l-4.112 4.111a1.335 1.335 0 01-1.888 0L2.944 8.945a1.335 1.335 0 010-1.889l4.112-4.111a1.335 1.335 0 011.455-.29zM7.53 9.138a.667.667 0 001.138-.471V5.333a.667.667 0 00-1.334 0v3.334c0 .177.07.346.196.471zm0 2a.667.667 0 10.943-.943.667.667 0 00-.943.943z"
        fill="#F91D45"
      />
    </Svg>
  );
}

export default TextFieldErrorIcon;
