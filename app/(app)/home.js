import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ScheduleCell from "../../components/ScheduleCell";
import { scheduledTasks } from "../../utils/common";
import { useAuth } from "../_layout";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    //need to come from firebase-update
    setTasks([...scheduledTasks]);
  };
  return (
    <View
      className="flex-1 bg-white pt-6 pl-3"
      style={{ borderWidth: 2, borderColor: "black" }}
    >
      <View>
        {tasks.length > 0 ? (
          <>
            <Text style={{ fontSize: hp(2.5) }} className="font-medium">
              {user?.role === "patient" ? `Upcoming Tasks` : `Latest Report`}
            </Text>
            <ScheduleCell tasks={tasks} />
          </>
        ) : (
          <Text style={{ fontSize: hp(2.5) }} className="font-medium">
            {" "}
            No Upcoming Tasks
          </Text>
        )}
      </View>
    </View>
  );
}
