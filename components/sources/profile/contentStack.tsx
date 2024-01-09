import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProfileContentTabs from "../../headerNavigation/profileContentTabs";
import Contents from "./content";
import { clips, data } from "../../../dummyData";

const Tab = createMaterialTopTabNavigator();

function ContentTab() {
  const duplicatedData = [...data, ...data, ...data];
  const duplicatedClip = [...clips, ...clips];

  const staticHightGenerator = () => {
    const remainder = duplicatedClip.length % 3;
    const rowCount = duplicatedClip.length / 3;
    console.log("remainder :", remainder);
    console.log("rowCount :", rowCount);

    if (remainder === 0) {
      return 202 * rowCount;
    } else {
      return 200 + 200 * rowCount;
    }
  };
  // above funtion is applied for error in (createMaterialTopTabNavigator tabs static height issue)
  // due to error I added function to calculate the closet height by its number and rendering style

  return (
    <Tab.Navigator
      initialRouteName="all"
      tabBar={(props) => <ProfileContentTabs {...props} />}
      style={{
        height: staticHightGenerator(),
        backgroundColor: "white",
      }}
    >
      <Tab.Screen name="all" component={Contents} />
      <Tab.Screen name="private" component={Contents} />
      <Tab.Screen name="saved" component={Contents} />
      <Tab.Screen name="favourite" component={Contents} />
    </Tab.Navigator>
  );
}

export default ContentTab;
