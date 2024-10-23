import { MenuOption } from "react-native-popup-menu";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { View, Text } from "react-native";

export const MenuItems = ({ text, action, value, icon }) => {
  return (
    <MenuOption onSelect={() => alert(`Profile Selected`)}>
      <View className="px-4 py-1 flex-row justify-between items-center">
        <Text> icon1 </Text>
        <Text> icon2 </Text>
      </View>
    </MenuOption>
  );
};
