/**
 * Created by msioud on 25/08/17.
 */

import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    imageLayout: {
        flex: 3
    },
    inputLayout: {
        flex: 1,
        flexDirection: "row",
        alignItems:"center",
        borderColor: "#e6e6e6",
        borderWidth:3

    },
    inputLayout__Text: {
        flex: 1,
        //alignSelf:"center"
    },
    inputLayout__Input: {
        flex: 3,
        justifyContent:"center",
        height:40

    },
    buttonLayout: {
        flex: 2,
        alignSelf:"center",
        justifyContent:"center"
    },
    buttonDesign: {
        width: 120,
        height: 50,
        borderRadius: 10,
        borderColor: '#da766b',
        backgroundColor: '#e01a3c',
        borderWidth: 1        
    },
    buttonTextDesign: {
        alignSelf:"center",
        fontWeight: "bold"
    }
});

export default styles;
