import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice";
import type { AppDispatch } from "../redux/store";
import { router } from "expo-router";

export default function AddContact() {
    const dispatch = useDispatch<AppDispatch>();
    const [form, setForm] = useState({ name: "", address: "", phone: "", email: "" });

    return (
        <View style={{ flex: 1, padding: 16, gap: 8 }}>
            <Text style={{ fontSize: 22, fontWeight: "700" }}>Add Contact</Text>

            {(["name","address","phone","email"] as const).map((field) => (
                <TextInput
                    key={field}
                    placeholder={field}
                    value={form[field]}
                    onChangeText={(t) => setForm({ ...form, [field]: t })}
                    style={{ borderWidth: 1, borderColor: "#ddd", borderRadius: 8, padding: 10 }}
                />
            ))}

            <Button
                title="Save"
                onPress={() => {
                    dispatch(addContact(form));
                    router.push("/view"); // go to list
                }}
            />
        </View>
    );
}
