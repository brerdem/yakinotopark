import {Dimensions, StyleSheet} from 'react-native';
import colors from "./colors";

export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width
};

export const sizes = {
    xs: 5,
    sm: 10,
    md: 20,
    lg: 30,
    xl: 40,
    xxl: 50
};


export const baseStyles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: sizes.sm,
        paddingVertical: sizes.lg,
        width: dimensions.fullWidth
    },
    rowCenter: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    bold: {
        fontWeight: 'bold'
    },

    round15: {
        borderRadius: 15
    },
    round10: {
        borderRadius: 10
    },
    thinSeparator: {
        height: 1,
        backgroundColor: colors.grey['200'],

    },
    separator: {
        backgroundColor: colors.grey['200'],
        height: sizes.sm
    },

    bottomSpacing: {
        marginBottom: sizes.sm
    },

});
