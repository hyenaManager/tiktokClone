import { StyleSheet, Text, View } from "react-native";
import { globalStyle, globalTextStyle } from "../../../globalStyle";
import { Ionicons } from "@expo/vector-icons";

export default function AboutYou() {
  return (
    <View
      style={{
        ...globalStyle.column_start,
        width: "100%",
        paddingHorizontal: 9,
      }}
    >
      <Text style={{ ...globalTextStyle.lightText, fontSize: 20 }}>
        About you
      </Text>
      <View style={styles.rowContainer}>
        <Text style={{ fontWeight: "bold", color: "black", fontSize: 20 }}>
          Name
        </Text>
        <View style={styles.rowItems}>
          <Text style={{ fontWeight: "bold", color: "black", fontSize: 20 }}>
            Hyena play
          </Text>
          <Text style={styles.icon}>{">"}</Text>
        </View>
      </View>

      <View style={styles.rowContainer}>
        <Text style={{ fontWeight: "bold", color: "black", fontSize: 20 }}>
          Username
        </Text>
        <View style={styles.rowItems}>
          <Text style={{ fontWeight: "bold", color: "black", fontSize: 20 }}>
            Hyenachannel
          </Text>
          <Text style={styles.icon}>{">"}</Text>
        </View>
      </View>

      <View style={styles.rowContainer}>
        <Text
          style={{ fontWeight: "bold", color: "black", fontSize: 20 }}
        ></Text>
        <View style={styles.rowItems}>
          <Text style={{ ...globalTextStyle.lightText, fontSize: 18 }}>
            tiktok.com/@hyenanel
          </Text>
          <Ionicons
            name="md-copy-outline"
            size={13}
            color="gray"
            style={styles.icon}
          />
        </View>
      </View>

      <View style={styles.rowContainer}>
        <Text style={{ fontWeight: "bold", color: "black", fontSize: 20 }}>
          Bio
        </Text>
        <View style={styles.rowItems}>
          <Text style={{ fontWeight: "bold", color: "black", fontSize: 20 }}>
            Hyena play
          </Text>
          <Text style={styles.icon}>{">"}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    ...globalStyle.row_between,
    width: "100%",
    marginBottom: 6,
    padding: 8,
  },
  rowItems: { ...globalStyle.row_end, padding: 7 },
  icon: {
    ...globalTextStyle.lightText,
    marginLeft: 7,
    fontSize: 20,
  },
});
