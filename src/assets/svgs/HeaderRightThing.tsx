import Svg, { Path, Circle, SvgProps } from "react-native-svg";

interface HeaderProp extends SvgProps {
  dark?: boolean;
}
export function HeaderRightThing({ dark, ...props }: HeaderProp) {
  return (
    <Svg width={75} height={77} viewBox="0 0 75 77" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.938 22.276c-3.225-5.82-10.308-8.561-16.73-6.163-7.07 2.64-10.662 10.514-8.02 17.584 2.318 6.21 8.673 9.736 14.975 8.715-.25 10.836 6.973 20.706 17.802 23.258 12.459 2.937 24.973-4.927 27.951-17.563 2.166-9.19-1.308-18.373-8.157-23.828l-4.062-10.877-23.76 8.874z"
        fill="#F8B60D"
      />
      <Circle
        cx={32.0673}
        cy={25.091}
        r={3.01519}
        transform="rotate(-56.608 32.067 25.091)"
        fill={dark ? "black" : "white"}
      />
      <Path
        d="M58.322 28.323a3.015 3.015 0 01-1.016 4.142c-1.424.862-3.86 2.774-4.722 1.35-.863-1.425.173-5.645 1.597-6.508a3.015 3.015 0 014.141 1.016zM40.873 36.246c3.526.935 4.998 6.916 4.312 9.504-.687 2.588-4.102 3.928-7.627 2.993-3.526-.935-5.827-3.791-5.14-6.38.686-2.588 4.93-7.053 8.455-6.117z"
        fill={dark ? "black" : "white"}
      />
    </Svg>
  );
}
