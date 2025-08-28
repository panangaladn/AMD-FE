import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Slot } from 'expo-router';
import "expo-router/entry";


export default function App() {
    return (
        <Provider store={store}>
            <Slot />
        </Provider>
    );
}
