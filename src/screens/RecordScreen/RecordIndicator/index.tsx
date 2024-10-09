import { Animated, Text, View } from "react-native";
import styles from "./RecordIndicator.styles";
import { useEffect, useRef } from "react";

type Props = {
  text: string;
};

export default function RecordingIndicator({ text }: Props) {
  const opacityAnim = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacityAnim, {
          toValue: 0.5,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [opacityAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.shadowCircle, { opacity: opacityAnim }]}>
        <View style={styles.redCircle} />
      </Animated.View>
      <Text style={styles.text}>{text} </Text>
    </View>
  );
}
