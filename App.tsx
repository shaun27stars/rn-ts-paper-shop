import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";

import { CombinedDefaultTheme } from "./src/theme";

import store from './src/redux/store';
import ShopNavigation from "./src/navigation/ShopNavigation";


export default function App() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={CombinedDefaultTheme}>
        <NavigationContainer theme={CombinedDefaultTheme}>
          <ShopNavigation />
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
}