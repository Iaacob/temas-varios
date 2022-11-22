import React from 'react';
import { View } from 'react-native';
import {Svg, Path} from 'react-native-svg';

export default function SvgButton(params) {
    return (
        <View style={styles.container(params.size == undefined ? "11%" : params.size, params.margin == undefined ? 0 : params.margin)}>
            <View style={styles.button(params.color == undefined ? "#9DDCE0" : params.color, params.aspectRatio == undefined ? 1 : params.aspectRatio)} onClick={params.onClick}>
                <Svg viewBox={params.viewBox == undefined ? "0 0 16 16" : params.viewBox}>
                    <Path 
                    style={styles.path(params.fill == undefined ? "#000000" : params.fill)}
                    fillRule={params.fillRule == undefined ? "evenodd" : params.fillRule} 
                    d={params.path == undefined ? params.children : params.path}></Path>
                </Svg>
            </View>
        </View>
    );
}

const styles = {
    container: (size, margin) => {return {
        width: size,
        margin: margin
    }},
    button: (color, aspectRatio) => {return {
        backgroundColor: color,
        borderRadius: 8,
        width:"100%",
        aspectRatio: aspectRatio
    }},
    path: (color) => {
        return {
            fill: color
        }
    }
};