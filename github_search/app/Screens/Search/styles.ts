import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    main: {
        marginTop: 20,
        shadowColor: "#000",
        width: '90%',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 25,
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 5
    },
    input: {
        height: 50,
        width: '100%',
        alignSelf: 'center',
        fontSize: 18,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5
    },
    card: {
        height: 50,
        padding: 5,
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center',
        borderRadius: 5,
        borderBottomWidth: 0.1,
        paddingHorizontal: 15
    },
    title: {
        fontSize: 18,
        alignSelf: 'center',
        paddingLeft: 20
    },
    image: {
        height: 30,
        width: 30,
        alignSelf: 'center',
        borderRadius: 50,
    }
});