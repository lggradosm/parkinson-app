import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./SelectInput";
import { AntDesign } from "@expo/vector-icons";
import useBoolean from "../../../hooks/useBoolean";
import { useClickOutside } from "react-native-click-outside";

type Props = {
  text: string;
  list: ArrayLike<any>;
  value: string | null;
  onChange: (value: string) => void;
};

export default function SelectInput({ text, list, value, onChange }: Props) {
  const expanded = useBoolean();
  const ref = useClickOutside<View>(expanded.desactivate);
  
  const selectHandler = (item: string) => {
    onChange(item);
    expanded.desactivate();
  };

  return (
    <View collapsable={false} style={styles.container} ref={ref}>
      <Text style={styles.label}>{text}</Text>

      <TouchableOpacity
        activeOpacity={0.95}
        style={styles.button}
        onPress={expanded.toggle}
        onBlur={expanded.desactivate}
      >
        <Text style={styles.textButton}>
          {value ? value : "Selecciona una opción"}
        </Text>
        <AntDesign
          style={styles.textButton}
          name={expanded.status ? "caretup" : "caretdown"}
        />
      </TouchableOpacity>

      {expanded.status ? (
        <View style={styles.options}>
          <FlatList
            keyExtractor={(item) => item}
            data={list}
            renderItem={( {item}) => (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => selectHandler(item)}
                style={styles.optionItem}
              >
                <Text style={styles.optionItemText}>{item}</Text>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => (
              <View style={styles.separatorContainer}>
                <View style={styles.separator} />
              </View>
            )}
          />
        </View>
      ) : null}
    </View>
  );
}
