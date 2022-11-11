import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import VendedoresScreen from "./views/VendedoresScreen";
import VentasScreen from "./views/VentasScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Vendedores"
          component={VendedoresScreen}
          options={{ title: "Vendedores" }}
        />
        <Stack.Screen
          name="Ventas"
          component={VentasScreen}
          options={{ title: "Ventas" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
