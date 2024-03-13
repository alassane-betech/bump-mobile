import { EggIcon } from "@src/assets/svgs/EggIcon";
import { CustomCard } from "@src/components/shared/CustomCard/CustomCard";
import { FONTS } from "@src/styles/BaseStyle";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CustomText } from "../CustomText/CustomText";

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
    <View style={styles.eggElementBlock}>
      <CustomCard>
        <View style={styles.eggElement}>
          <EggIcon color={eggColor} />
          <View style={styles.textBlock}>
            <CustomText style={styles.eggElementTitle}>{title}</CustomText>
            <CustomText style={styles.eggElementSubTitle}>
              {subTitle}
            </CustomText>
          </View>
        </View>
      </CustomCard>
    </View>
  );
};

const styles = StyleSheet.create({
  eggElementBlock: {
    marginTop: 15,
  },
  eggElement: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 18,
    paddingVertical: 10,
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
