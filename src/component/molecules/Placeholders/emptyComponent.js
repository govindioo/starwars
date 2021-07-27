import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { strings } from '../../../constant/strings';
import { fontSizes } from 'res/style/fontStyle';

export const EmptyComponent = ({text='Text', customStyle={}}) => {
    return(
        <Text style={{ ...styles.textStyle,...customStyle,}}>{strings.emptyText}</Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: fontSizes.normal
    }
})