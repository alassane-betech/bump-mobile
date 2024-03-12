import { EggIcon } from "@src/assets/svgs/EggIcon";
import { FONTS } from "@src/styles/BaseStyle";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface EggElementProps {
  eggColor: string;
  title: string;
  subTitle: string;
}

export const EggElement: React.FC<EggElementProps> = ({
  eggColor,
  title,
  subTitle,
}) => {
  return (
    <View style={styles.eggElement}>
      <EggIcon color={eggColor} />
      <View style={styles.textBlock}>
        <Text style={styles.eggElementTitle}>{title}</Text>
        <Text style={styles.eggElementSubTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eggElement: {
    marginTop: 15,
    backgroundColor: "#F7F8FA",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 18,
    paddingVertical: 10,
    borderRadius: 15,
  },
  textBlock: {
    marginLeft: 15,
  },
  eggElementTitle: {
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
  eggElementSubTitle: {
    fontSize: 14,
    fontFamily: FONTS.regular,
  },
});
