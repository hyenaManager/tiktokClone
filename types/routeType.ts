import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home: undefined;
    Search: undefined;
    NewFollower:undefined;
    SystemNotification:undefined;
    Activity:undefined;
    EditProfile:undefined;
    AddNewFriend:undefined
  };
  
export  type HomeScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "Home"
  >;
    
export  type SearchScreenNavigationProp = NativeStackNavigationProp<
RootStackParamList,
"Search"
>;
  
export  type NewFollowerScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "NewFollower"
  >;
    
export  type SystemNotificationScreenNavigationProp = NativeStackNavigationProp<
RootStackParamList,
"SystemNotification"
>;
  
export  type ActivityScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "Activity"
  >;

export  type EditProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "EditProfile"
>;

export  type AddNewFriendScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "AddNewFriend"
>;