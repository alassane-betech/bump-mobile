import { Linking } from "react-native";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
export const goToLink = (link: string) => Linking.openURL(link);

export const formatDate = (isoDate: Date) => {
  const date = new Date(isoDate);
  return format(date, "d MMMM yyyy", { locale: fr });
};
