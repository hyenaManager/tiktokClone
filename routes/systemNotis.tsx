import { ScrollView, View } from "react-native";
import { globalStyle } from "../globalStyle";
import SystemNotiNav from "../components/screens/systemScreen/systemNotiNav";
import SystemNotiCard from "../components/screens/systemScreen/systemNotiCard";

export default function SystemNotification() {
  return (
    <ScrollView contentContainerStyle={globalStyle.column_center}>
      <SystemNotiNav />
      <View style={{ ...globalStyle.column_center, padding: 12 }}>
        <SystemNotiCard
          notiType="tiktok"
          systemTitle="tiktok"
          notiHeader="Story View history update"
          message={
            "you can see now blah the hell is going to break the law of blab and no one care yet. So everyone freak out whom the hell they tring to blame"
          }
        />
        <SystemNotiCard
          notiType="account update"
          systemTitle="blah"
          notiHeader="Story View history update"
          message={
            "you can see now blah the hell is going to break the law of blab and no one care yet. So everyone freak out whom the hell they tring to blame"
          }
        />
        <SystemNotiCard
          notiType="series"
          systemTitle="tiktok"
          notiHeader="Story View history update"
          message={
            "you can see now blah the hell is going to break the law of blab and no one care yet. So everyone freak out whom the hell they tring to blame"
          }
        />
        <SystemNotiCard
          notiType="mlbb"
          systemTitle="tiktok"
          notiHeader="Story View history update"
          message={
            "you can see now blah the hell is going to break the law of blab and no one care yet. So everyone freak out whom the hell they tring to blame"
          }
        />
      </View>
    </ScrollView>
  );
}
