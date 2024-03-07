import AuthHeader from "@src/components/shared/AuthHeader/AuthHeader";
import { COLORS } from "@src/styles/BaseStyle";
import { StyleSheet, View } from "react-native";

interface AuthContainerProps {
  children: JSX.Element;
  title: string;
}
export default function AuthContainer({ children, title }: AuthContainerProps) {
  return (
    <View style={styles.container}>
      <AuthHeader />
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  content: {
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
  },
});
