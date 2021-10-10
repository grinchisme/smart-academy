import { Text, Pressable } from 'react-native'
import { ButtonProps } from './types'
import React from 'react'
import styles from './styles'

const Button = ({
  text,
  onPress,
}: ButtonProps) => {
    return (
        <Pressable
          onPress={onPress}
          style={styles.button}
        >
          <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
  }

export default Button
