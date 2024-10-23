import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function ScheduleCell({ tasks }) {
  const openCameraRoom = (task) => {
    router.push({ pathname: "/welcome", params: task });
  };

  const handleScheduleCell = (task, index) => {
    openCameraRoom(task);
  };

  return (
    <View>
      {tasks.map((task, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleScheduleCell(task, index)}
        >
          <View>
            <View className="pt-4 pl-2 pr-2">
              <View className="flex-row border border-indigo-400">
                <View className="border-8 border-indigo-400"></View>
                <View className="p-5">
                  <Text style={{ fontSize: hp(1.7) }} className="font-small">
                    {task.name}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
