import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Card, TouchableRipple, useTheme, IconButton } from "react-native-paper";
import Product from "../models/product";
import { ProductStackParamList } from "../navigation/ShopNavigation";
import { toggleFavourite } from "../redux/slices/products";
import { useAppDispatch, useAppSelector } from "../redux/store";

type NavigationProp = NativeStackNavigationProp<ProductStackParamList, "Overview">;
type Props = {
  navigation: NavigationProp,
  product: Product,
}

const ProductListItem = ({ navigation, product }: Props) => {
  const theme = useTheme();
  const isFav = useAppSelector((state) => state.products.favourites.includes(product.id));
  const dispatch = useAppDispatch();
  
  return (
    <TouchableRipple
      style={{ borderRadius: theme.roundness }}
      onPress={() => {
        navigation.push("Details", {
          product: product,
        });
      }}
    >
      <Card>
        <Card.Cover source={{ uri: product.imageUrl }} />
        <Card.Title title={product.title} subtitle={product.description} />
        <Card.Actions style={{justifyContent: "space-between"}}>
          <IconButton icon="cart" color={theme.colors.primary}/>
          <IconButton icon={isFav ? "star" : "star-outline"} color={theme.colors.primary} onPress={() => dispatch(toggleFavourite(product.id))}/>
        </Card.Actions>
      </Card>
    </TouchableRipple>
  );
};

export default ProductListItem;
