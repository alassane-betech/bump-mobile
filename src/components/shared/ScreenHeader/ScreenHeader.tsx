import { StyleSheet, View } from "react-native";
import { CustomText } from "@src/components/ui/CustomText/CustomText";
import Typo from "@src/styles/Typo";
import { ReactElement } from "react";
import Hr from "@src/components/ui/Hr/Hr";

interface Props {
  title: string;
  withBottomBorder?: boolean;
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
}
export default function ScreenHeader({
  title,
  withBottomBorder,
  iconLeft,
  iconRight,
}: Props) {
  return (
    <>
      <View style={styles.row}>
        <View style={styles.left}>{iconLeft}</View>
        <View style={styles.center}>
          <CustomText style={styles.headerTitle}>{title}</CustomText>
        </View>
        <View style={styles.right}>{iconRight}</View>
      </View>
      {withBottomBorder && <Hr />}
    </>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    ...Typo.headerTitle,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  left: { width: "20%", alignItems: "flex-start" },
  right: { width: "20%", alignItems: "flex-end" },
  center: { width: "60%", alignItems: "center" },
});
