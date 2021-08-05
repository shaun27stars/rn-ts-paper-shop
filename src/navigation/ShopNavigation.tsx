import React from "react";
import { getFocusedRouteNameFromRoute, Route } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import OrdersScreen from "../screens/OrdersScreen";
import { CustomDrawerNavigationBar, CustomStackNavigationBar } from "./CustomNavigationBar";
import CartScreen from "../screens/CartScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import ProductsOverviewScreen from "../screens/ProductsOverviewScreen";
import { Drawer } from "react-native-paper";
import Product from "../models/product";

const getHeaderTitle = (route: Partial<Route<string, object | undefined>>) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "My Shop";
  console.log(routeName);

  switch (routeName) {
    case "All":
      return "My Shop";
    case "Favourites":
      return "My Favourites";
  }
};

export type DrawerParamList = {
  Shop: undefined,
  Orders: undefined
};
const ShopDrawer = createDrawerNavigator<DrawerParamList>();
export type ProductStackParamList = {
  Overview: undefined,
  Details: { product: Product},
  Cart: undefined
}
const ProductsStack = createNativeStackNavigator<ProductStackParamList>();
export type FavTabsParamList = {
  All: undefined,
  Favourites: {favourites: boolean}
}
const FavTabs = createMaterialBottomTabNavigator<FavTabsParamList>();

const FavTabsNavigator = () => {
  return (
    <FavTabs.Navigator>
      <FavTabs.Screen name="All" component={ProductsOverviewScreen} />
      <FavTabs.Screen name="Favourites" component={ProductsOverviewScreen} initialParams={{favourites: true}}/>
    </FavTabs.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <ShopDrawer.Navigator
      screenOptions={{
        header: (props) => <CustomDrawerNavigationBar {...props} />,
      }}
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <Drawer.Section title="Welcome!">
              <DrawerItemList {...props} />
            </Drawer.Section>
          </DrawerContentScrollView>
        );
      }}
    >
      <ShopDrawer.Screen
        name="Shop"
        component={FavTabsNavigator}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          drawerIcon: (drawerConfig) => (
            <MaterialCommunityIcons
              name="cart"
              size={23}
              color={drawerConfig.color}
            />
          ),
        })}
      />
      <ShopDrawer.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          drawerIcon: (drawerConfig) => (
            <MaterialCommunityIcons
              name="view-headline"
              size={23}
              color={drawerConfig.color}
            />
          ),
        }}
      />
    </ShopDrawer.Navigator>
  );
};

export default () => {
  return (
    <ProductsStack.Navigator
      screenOptions={{
        header: (props) => <CustomStackNavigationBar {...props} />,
      }}
    >
      <ProductsStack.Screen
        name="Overview"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <ProductsStack.Screen
        name="Details"
        component={ProductDetailsScreen}
      />
      <ProductsStack.Screen name="Cart" component={CartScreen} />
    </ProductsStack.Navigator>
  );
};
