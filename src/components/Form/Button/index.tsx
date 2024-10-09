import { Text, TouchableOpacity } from "react-native";
import styles from "./Button.styles";

type Props = {
  onPressHandler: () => void;
  title: string;
  disabled?: boolean;
};

export default function Button({
  onPressHandler,
  title,
  disabled = false,
}: Props) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPressHandler}
      activeOpacity={0.7}
      style={[styles.button, disabled ? styles.disabled : styles.enabled]}
    >
      <Text
        style={[
          styles.textButton,
          disabled ? styles.textDisabled : styles.textEnabled,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
