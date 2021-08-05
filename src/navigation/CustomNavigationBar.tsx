import React from "react";
import { Appbar } from "react-native-paper";
import { DrawerHeaderProps } from "@react-navigation/drawer/lib/typescript/src/types";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";

export function CustomStackNavigationBar(props: NativeStackHeaderProps) {
  const { navigation, back, options, route } = props;
  const title = options.title || route.name;

  const backComponent = back ? (<Appbar.BackAction onPress={navigation.goBack} />) : undefined;
  return _CustomNavigationBar(title, backComponent);
}

export function CustomDrawerNavigationBar(props: DrawerHeaderProps) {
  const { navigation, options, route } = props;
  const title = options.title || route.name;

  const backComponent = <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />;
  return _CustomNavigationBar(title, backComponent);
}

function _CustomNavigationBar(title: string, backComponent?: JSX.Element) {
  return (
    <Appbar.Header>
      {backComponent}
      <Appbar.Content title={title} />

    </Appbar.Header>
  )
}

