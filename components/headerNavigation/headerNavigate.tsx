import React from "react";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { changeHeaderRouteName } from "../../features/counter/headerNavRoute";

export default function HeaderNavigation({ navigation }: any) {
  const headerRouteName = useAppSelector(
    (state) => state.headerRouteName.routeName
  );
  const bottomRouteName = useAppSelector(
    (state) => state.bottomRouteName.routeName
  );
  const dispatch = useDispatch();
  return (
    <View style={styles.headerContainer}>
      {/* friend adding button */}
      {bottomRouteName === "friend" && (
        <TouchableOpacity style={{ position: "absolute", left: 9, bottom: 2 }}>
          <Octicons name="person-add" size={30} color="#dadada" />
        </TouchableOpacity>
      )}
      {/* friend header */}
      {bottomRouteName === "friend" && (
        <TouchableOpacity
          style={styles.headerTextContainer}
          // onPress={() => dispatch(changeHeaderRouteName("following"))}
        >
          <Text style={styles.textStyle}>Friend</Text>
        </TouchableOpacity>
      )}
      {/* home headers */}
      {bottomRouteName === "home" && (
        <>
          <TouchableOpacity
            style={styles.headerTextContainer}
            onPress={() => dispatch(changeHeaderRouteName("following"))}
          >
            <Text style={styles.textStyle}>Following</Text>
            {headerRouteName === "following" ? (
              <View
                style={{
                  height: 3,
                  width: 40,
                  backgroundColor: "#dadada",
                  borderRadius: 10,
                }}
              ></View>
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerTextContainer}
            onPress={() => dispatch(changeHeaderRouteName("forYou"))}
          >
            <Text style={styles.textStyle}>For you</Text>
            {headerRouteName === "forYou" ? (
              <View
                style={{
                  height: 4,
                  width: 60,
                  backgroundColor: "#dadada",
                  borderRadius: 10,
                }}
              ></View>
            ) : null}
          </TouchableOpacity>
        </>
      )}
      {/* search navigator absolute mode */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Search")}
        style={{ position: "absolute", right: 9, bottom: 2 }}
      >
        <AntDesign name="search1" size={30} color="#dadada" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    top: 60,
    right: 0,
    left: 0,
    zIndex: 50,
    minHeight: 40,
  },
  header: {
    fontSize: 24,
    padding: 3,
    paddingHorizontal: 4,
    color: "#fdfcfc",
    marginHorizontal: 20,
  },
  headerTextContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 24,
    padding: 3,
    paddingHorizontal: 1,
    color: "#fdfcfc",
    marginHorizontal: 15,
    borderColor: "white",
    textShadowColor: "gray",
    textShadowRadius: 3,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
});
