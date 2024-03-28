import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  CustomText,
  ETextVariant,
} from "@src/components/ui/CustomText/CustomText";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, FONTS } from "@src/styles/BaseStyle";
import { useThemeContext } from "@src/context/ThemeContext";

export const DuelItem = () => {
  const { theme } = useThemeContext();
  return (
    <TouchableOpacity style={styles.duelItemContainer}>
      <View style={styles.duelThumbnail} />
      <View style={styles.duelDetailsContainer}>
        <CustomText variant={ETextVariant.Button} style={styles.duelStatus}>
          VICTOIRE
        </CustomText>
        <CustomText variant={ETextVariant.Button} numberOfLines={2}>
          Spaghettis Carbonara
        </CustomText>
        <View style={[styles.row, styles.top5]}>
          <View style={styles.row}>
            <CustomText variant={ETextVariant.Subtitle}>20</CustomText>
            <AntDesign
              name="star"
              size={14}
              color={theme.text.input}
              style={styles.left5}
            />
          </View>
          <View style={styles.left15}>
            <CustomText variant={ETextVariant.Subtitle}>12 Janvier</CustomText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  duelItemContainer: {
    marginBottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  duelThumbnail: {
    width: "25%",
    height: 90,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  duelDetailsContainer: {
    width: "70%",
  },
  duelStatus: { color: COLORS.primary, fontFamily: FONTS.extraBold },
  row: { flexDirection: "row", alignItems: "center" },
  top5: { marginTop: 5 },
  left5: { marginLeft: 5 },
  left15: { marginLeft: 15 },
});
