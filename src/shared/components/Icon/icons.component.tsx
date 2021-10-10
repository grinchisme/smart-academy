import React from "react"
import { View } from 'react-native'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import IcomoonConfig from '../../../theme/selection.json'
import { IconProps } from './types'


const Icomoon = createIconSetFromIcoMoon(
    IcomoonConfig,
    'icomoon',
    'icomoon.ttf'
);

const Icon = ({
    name,
    color='white',
    size=27
}: IconProps) => {
    return (
        <View>
            <Icomoon
                color={color}
                size={size}
                name={name}
            />
        </View>
    )
}

export default Icon;