import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>

            <Text style={styles.title}>📒 My Contact</Text>

            {/* Add Contact Button */}
            <Pressable onPress={() => router.push("/add")}>
                <Image
                    source={require("../../assets/images/add.png")}
                    style={styles.icon}
                />
                <Text style={styles.label}>Add Contact</Text>
            </Pressable>

            {/* View Contacts Button */}
            <Pressable onPress={() => router.push("/view")}>
                <Image
                    source={require("../../assets/images/view.png")}
                    style={styles.icon}
                />
                <Text style={styles.label}>View Contacts</Text>
            </Pressable>

            {/* Update/Delete Button */}
            <Pressable onPress={() => router.push("/update")}>
                <Image
                    source={require("../../assets/images/update.png")}
                    style={styles.icon}
                />
                <Text style={styles.label}>Update/Delete</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9f9f9",
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 30,
    },
    icon: {
        width: 50,
        height: 50,
        margin: 20,
        resizeMode: "contain",
    },
    label: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: "center",
    },
});
