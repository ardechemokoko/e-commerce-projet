import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { MaterialIcons } from '@expo/vector-icons';
import GlobalStyle from '../styles/GlobalStyle';

const CUstomHeaderIcon = (props) => {
  return (
    <HeaderButton
        {...props} 
        IconComponent={MaterialIcons}
        iconSize={24}
        color={GlobalStyle.white}
    />
    
  )
}

export default CUstomHeaderIcon

const styles = StyleSheet.create({})