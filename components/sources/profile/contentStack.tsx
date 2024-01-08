import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProfileContentTabs from "../../headerNavigation/profileContentTabs";
import Contents from "./content";
import { data } from "../../../dummyData";

const Tab = createMaterialTopTabNavigator();

function ContentTab() {
  const duplicatedData = [...data, ...data, ...data];

  const staticHightGenerator = () => {
    const remainder = duplicatedData.length % 3;
    const rowCount = duplicatedData.length / 3;
    if (remainder === 0) {
      return 202 * rowCount;
    } else {
      return (202 + 202) * rowCount;
    }
  };
  // above funtion is applied for error in (createMaterialTopTabNavigator tabs static height issue)
  // due to error I added function to calculate the closet height by its number and rendering style

  return (
    <Tab.Navigator
      //key={1}
      initialRouteName="all"
      tabBar={(props) => <ProfileContentTabs {...props} />}
      style={{ height: staticHightGenerator() }}
    >
      <Tab.Screen name="all" component={Contents} />
      <Tab.Screen name="private" component={Contents} />
      <Tab.Screen name="saved" component={Contents} />
      <Tab.Screen name="favourite" component={Contents} />
    </Tab.Navigator>
  );
}

export default ContentTab;
