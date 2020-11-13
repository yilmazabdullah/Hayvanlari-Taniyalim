import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

function Detaylar({ route }) {
	const { name, bilgi, ses, resim } = route.params;
	var soz = new Audio.Sound();
	soz.loadAsync({ uri: ses });

	return (
		<View style={styles.container}>
			<Text style={styles.baslik}>{name} </Text>
			<TouchableOpacity
				onPress={() => {
					soz.playAsync();
				}}
				style={styles.opcty}
			>
				<Image resizeMode="contain" style={styles.img} source={{ uri: resim }} />
				<Text style={{ textAlign: 'center' }}>Dokunun!!!</Text>
			</TouchableOpacity>
			<Text style={styles.info}>{bilgi}</Text>
			<Text style={{ marginTop: 10 }}>Kaynak:Vikipedi</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#B4EC29',
		alignItems: 'center',
	},
	baslik: {
		textAlign: 'center',
		width: '100%',
		fontSize: 30,
		color: '#000',
		backgroundColor: '#EC297C',
		fontFamily: 'Cochin',
		padding: 10,
	},
	text: {
		textAlign: 'center',
		fontSize: 26,
		color: '#000',
		backgroundColor: '#EC297C',
		margin: 4,
		width: '50%',
		paddingTop: 36,
		marginLeft: 20,
		marginRight: 30,
		borderRadius: 30,
	},
	info: {
		width: '90%',
		height: 320,
		borderWidth: 1,
		borderColor: 'black',
		backgroundColor: '#EC297C',
		borderRadius: 30,
		marginTop: 30,
		textAlign: 'left',
		padding: 10,
		fontSize: 20,
		overflow: 'scroll',
	},
	opcty: {
		width: '30%',
		height: 120,
		marginTop: 30,
	},
	img: {
		width: '100%',
		height: 120,
	},
});
export default Detaylar;
