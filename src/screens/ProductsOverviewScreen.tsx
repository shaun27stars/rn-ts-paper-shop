import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import ProductListItem from "../components/ProductListItem";
import Spacer from "../components/Spacer";
import { FavTabsParamList, ProductStackParamList } from "../navigation/ShopNavigation";
import { useAppSelector } from '../redux/store';

type NavigationProp = NativeStackNavigationProp<ProductStackParamList, "Overview">;
type OverviewScreenRouteProp = RouteProp<FavTabsParamList, 'Favourites'>;
type Props = {
  navigation: NavigationProp,
  route: OverviewScreenRouteProp
}

const ProductsOverviewScreen = ({ navigation, route }: Props) => {
  let products = useAppSelector((state) => state.products.products);
  const favs = useAppSelector((state) => state.products.favourites);
  const favsOnly = route.params?.favourites;
  if (favsOnly) {
    products = products.filter((prod) => favs.includes(prod.id));
  }
  const { margin } = useTheme();
  const styles = StyleSheet.create({
    list: {
      marginVertical: margin.vertical,
      marginHorizontal: margin.horizontal,
    },
  });
  return (
    <FlatList
      style={styles.list}
      data={products}
      renderItem={(itemData) => (
        <ProductListItem product={itemData.item} navigation={navigation} />
      )}
      ItemSeparatorComponent={Spacer}
    />
  );
};

export default ProductsOverviewScreen;

// const styles = StyleSheet.create({});
