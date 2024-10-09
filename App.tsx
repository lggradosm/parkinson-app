import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MainContextProvider } from "./src/context/MainContext";
import { NavigationContainer } from "@react-navigation/native";
import { colors } from "./src/styles/globalStyles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "./src/screens/FirstScreen";
import { ClickOutsideProvider } from "react-native-click-outside";
import RecordScreen from "./src/screens/RecordScreen";
import ResultScreen from "./src/screens/ResultScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      <MainContextProvider>
        <ClickOutsideProvider>
          <NavigationContainer>
            <StatusBar backgroundColor={colors.background} />
            <Stack.Navigator initialRouteName="FirstScreen">
              <Stack.Screen
                name="FirstScreen"
                component={FirstScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RecordScreen"
                component={RecordScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ResultScreen"
                component={ResultScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ClickOutsideProvider>
      </MainContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
