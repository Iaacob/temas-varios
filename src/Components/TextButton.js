import React from 'react';
import { View, Text } from 'react-native';

export default function TextButton(params) {
    return (
        <View style={params.style}>
            <View style={buttonStyles(params)} onClick={params.onClick}>
                <Text style={params.style}>{params.children}</Text>
            </View>
        </View>
    );
}

const containerStyles = (params) => {
    return {
        flexDirection:"row",
        width: params.width,
        height: params.height,
        aspectRatio: params.aspectRatio
    }
};

const buttonStyles = (params) => {
    return {
        backgroundColor: params.color == undefined ? "#9DDCE0" : params.color,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 15,
    }
};