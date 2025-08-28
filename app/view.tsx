import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contactsSlice";
import type { RootState, AppDispatch } from "../redux/store";
import { router } from "expo-router";

export default function ViewContacts() {
    const dispatch = useDispatch<AppDispatch>();
    const contacts = useSelector((s: RootState) => s.contacts.items);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 12 }}>Contacts</Text>

            <FlatList
                data={contacts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => router.push(`/${item.id}`)}   // 👈 navigate to app/[id].tsx
                        style={{ padding: 12, borderWidth: 1, borderColor: "#ddd", borderRadius: 8, marginBottom: 8 }}
                    >
                        <Text style={{ fontWeight: "600" }}>{item.name}</Text>
                        <Text>{item.phone}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
