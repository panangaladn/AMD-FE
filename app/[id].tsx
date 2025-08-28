import React, { useMemo, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { updateContact, deleteContact } from "../redux/contactsSlice";

export default function ContactDetail() {
    const { id } = useLocalSearchParams<{ id: string }>();      // 👈 get id from route
    const dispatch = useDispatch<AppDispatch>();

    const contact = useSelector((s: RootState) =>
        s.contacts.items.find((c) => c.id === Number(id))
    );

    // simple guard
    const initial = useMemo(
        () => contact ?? { name: "", address: "", phone: "", email: "" },
        [contact]
    );
    const [form, setForm] = useState(initial);

    if (!contact) {
        return <Text style={{ padding: 16 }}>Contact not found.</Text>;
    }

    return (
        <View style={{ flex: 1, padding: 16, gap: 8 }}>
            <Text style={{ fontSize: 22, fontWeight: "700" }}>Edit Contact (ID: {id})</Text>

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
                title="Update"
                onPress={() => {
                    dispatch(updateContact({ id: contact.id, data: { ...form } }));
                    router.push("/view"); // back to list
                }}
            />

            <View style={{ marginTop: 8 }}>
                <Button
                    title="Delete"
                    color="red"
                    onPress={() => {
                        dispatch(deleteContact(contact.id));
                        router.push("/view"); // back to list
                    }}
                />
            </View>
        </View>
    );
}
