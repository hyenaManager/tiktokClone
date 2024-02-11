import React, { useEffect } from "react";
import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { useAppSelector } from "../hooks";
import { useIsFocused, useRoute } from "@react-navigation/native";
//const myTry = require("../../../assets/tiktok/bGirl.mp4");

type videoProps = {
  uri: string;
  idx?: number;
  id?: number;
  mode?: "uri" | "mp4";
  route: string; ///what route is using this player
};

export default function ExpoPlayer({
  uri,
  idx = 0,
  id,
  mode = "uri",
  route,
}: videoProps) {
  const isFocused = useIsFocused();
  const videoInstance = React.useRef<any>(null);
  const [status, setStatus] = React.useState<AVPlaybackStatus | any>({
    isPlaying: true,
  });
  //console.log(" error :", status.error);

  const handlePlayPause = async () => {
    if (status.isPlaying) {
      await videoInstance.current?.pauseAsync();
    } else {
      await videoInstance.current?.playAsync();
    }
  };

  useEffect(() => {
    const handleAsync = async () => {
      if (idx === id) {
        await handlePlayPause();
      } else {
        await videoInstance.current?.pauseAsync();
        await videoInstance.current?.setPositionAsync(0);
      }
    };
    handleAsync();
  }, [idx]);
  useEffect(() => {
    const handlePause = async () => {
      if (!isFocused) {
        await videoInstance.current?.pauseAsync();
      }
    };
    handlePause();
  }, [isFocused]);

  return (
    <TouchableOpacity onPress={handlePlayPause} activeOpacity={1}>
      <Video
        ref={videoInstance}
        source={mode === "mp4" ? uri : ({ uri: uri } as any)}
        style={styles.mainContainer}
        useNativeControls={false}
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      {!status.isPlaying && (
        <View style={styles.controls}>
          <Ionicons name="play" size={60} color="white" style={styles.play} />
        </View>
      )}
      {status.error && (
        <View style={styles.controls}>
          <EvilIcons
            name="spinner"
            size={100}
            color="red"
            style={{ ...styles.play, opacity: 10 }}
          />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
  },
  video: {},
  play: {
    opacity: 0.8,
  },
  pause: {},
  controls: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  statusTex: {
    position: "absolute",
    top: 50,
    right: 50,
    zIndex: 50,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "red",
  },
});
