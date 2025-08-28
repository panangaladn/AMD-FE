import { Tabs } from "expo-router";
import { Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
            }}
        >

            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require("../../assets/images/home.png")}
                            style={{
                                width: 28,
                                height: 28,
                                tintColor: focused ? Colors[colorScheme ?? "light"].tint : "gray",
                            }}
                        />
                    ),
                }}
            />


            <Tabs.Screen
                name="help"
                options={{
                    title: "Help",
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require("../../assets/images/explore.png")}
                            style={{
                                width: 28,
                                height: 28,
                                tintColor: focused ? Colors[colorScheme ?? "light"].tint : "gray",
                            }}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
