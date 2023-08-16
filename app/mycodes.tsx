import { View, StyleSheet, Text } from "react-native";

export default function MyCodes() {
    return (
        <View style={styles.container}>
            <Text>My Codes</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
