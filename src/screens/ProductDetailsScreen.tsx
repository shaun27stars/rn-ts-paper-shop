import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RouteProp } from '@react-navigation/native';
import { ProductStackParamList } from "../navigation/ShopNavigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigationProp = NativeStackNavigationProp<ProductStackParamList, "Details">;
type DetailsScreenRouteProp = RouteProp<ProductStackParamList, 'Details'>;

type Props = {
  navigation: NavigationProp,
  route: DetailsScreenRouteProp,
}

const ProductDetailsScreen = ({ route }: Props) => {
  const { product } = route.params;
  return (
    <View>
      <Text>Product Details</Text>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({});
