import { StyleSheet } from "react-native";

const stylingSheet = StyleSheet.create({
    shadowStyle: {
        padding: 10,
        width: '100%',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    },
    textStyle: {
        fontSize: 20,
        color: '#333',
    }

})

export default stylingSheet;