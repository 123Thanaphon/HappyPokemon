import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Text style={styles.textTitle}>Pokemon Yeah!!</Text>
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textTitle: {
		fontSize: 30,
		fontWeight: 'bold',
	}
});
