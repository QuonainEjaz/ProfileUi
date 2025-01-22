import React from "react";
import { View , StatusBar} from "react-native";
import  ProfileUI  from "./components/ProfileUI";

export default function App() {
  const profileInfo = {
    name: "Dr. Floyd Miles",
    licenseno: "1225466652",
  };
  return (
    <View style={{ flex: 1}}>
      <ProfileUI props={profileInfo}/>
    </View>
  );
}