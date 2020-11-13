import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const DATA = [
	{
		id: 1,
		isim: 'Aslan',
		sesyolu: 'http://soundbible.com/mp3/Lion-SoundBible.com-621763115.mp3',
		resimyolu: 'https://icons.iconarchive.com/icons/martin-berube/square-animal/72/Lion-icon.png',
		bilgi:
			"Aslan, Panthera cinsindeki büyük kedilerden biridir ve kedigiller ailesinin bir üyesidir. Yaygın olarak kullanılan Afrika aslanı topluca Afrika'daki birkaç alttürü belirtir. Bazı erkek aslanlar 330 kg ağırlığı aşmaktadır. Vahşi aslanlar şu anda Sahra Altı Afrika'da ve Hindistan'da yaşamaktadır. ",
	},
	{
		id: 2,
		isim: 'Kedi',
		sesyolu: 'http://soundbible.com/mp3/Cat_Meow_2-Cat_Stevens-2034822903.mp3',
		resimyolu: 'https://icons.iconarchive.com/icons/martin-berube/square-animal/256/Cat-icon.png',
		bilgi:
			'Kediler anatomik olarak güçlü, esnek bedenleriyle, hızlı refleksleriyle, keskin, geri çekilebilen pençeleriyle ve küçük avları öldürmeye uyarlanmış dişleriyle diğer kedigillere benzerler. Kediler insan kulakları için çok zayıf ya da çok yüksek frekanstaki sesleri duyabilirler. Karanlığa yakın ortamlarda görebilirler. Çoğu memeli gibi, kediler insanlara göre daha zayıf renkli görüşe ve daha güçlü koku alma duyusuna sahiptir.',
	},
	{
		id: 3,
		isim: 'Yunus',
		sesyolu: 'http://soundbible.com/mp3/Dolphins-SoundBible.com-1774583018.mp3',
		resimyolu: 'https://icons.iconarchive.com/icons/martin-berube/square-animal/128/Dolphin-icon.png',
		bilgi:
			'Başta kıta sahanlıklarının görece sığ denizleri olmak üzere, tüm Dünya denizlerinde ve bazı nehirlerde bulunan yunuslar etobur canlılardır ve genellikle balık ve mürekkep balığı ile beslenirler. Omurgalı hayvanların içine girer. Yunusgiller (Delphinidae) familyası, balinalar (Cetacea) takımı içindeki en kalabalık familyadır üyeleri yaklaşık 10 milyon yıl önce, Miyosen devrinde ortaya çıkmıştır. Yunusların hayvanlar âleminin en zeki canlılarından olduğu kabul edilir ve arkadaş canlısı genel görünümleri ile oyuncu tavırları, onları insanların gözünde popüler bir yere koyar.',
	},
	{
		id: 4,
		isim: 'Balık',
		sesyolu: 'http://soundbible.com/mp3/Fishtank_Bubbles-SoundBibleco-amanda-1550139304.mp3',
		resimyolu: 'https://icons.iconarchive.com/icons/martin-berube/square-animal/128/Fish-icon.png',
		bilgi:
			'Bulunmuş olan en eski balık fosilleri 500 milyon yaşındadır. Günümüzün balıkları kıkırdaklı balıklar (Chondrichthyes) ve kemikli balıklar (Osteichthyes) olarak ikiye ayrılırlar. Bunlar gibi diğer iki grubu oluşturmuş olan placodermi (zırhlı balıklar) ve acanthodiinin (dikenli köpek balıkları) nesilleri 300-400 milyon yıl evvel tamamen tükenmiştir.',
	},
	{
		id: 5,
		isim: 'At',
		sesyolu: 'http://soundbible.com/mp3/Horse%20Neigh-SoundBible.com-1740540960.mp3',
		resimyolu: 'https://icons.iconarchive.com/icons/martin-berube/square-animal/128/Horse-icon.png',
		bilgi:
			'At, Atgiller (Equidae) familyasına dâhil otobur bir memeli hayvandır. Evcilleri olduğu gibi, Amerikan bozkırlarında “Mustang” ve Altay dağlarının her iki yanındaki açık arazilerde “Prezewalski” denen yabani atlar sürüler halinde yaşar. En meşhur at türleri Arap, İngiliz, Ahal Teke ve Midillidir.',
	},
	{
		id: 6,
		isim: 'Tavşan',
		sesyolu: 'http://soundbible.com/mp3/Bouncy_Bounce-Bugs_Bunny-1735935456.mp3',
		resimyolu: 'https://icons.iconarchive.com/icons/martin-berube/square-animal/128/Rabbit-icon.png',
		bilgi:
			'Tavşan, tavşangiller (Leporidae) familyasını oluşturan memeli türlerin ortak adıdır. Doğurarak çoğalırlar. Yavru bakımları çok azdır. 7 gün baktıktan sonra anne tavşan yavru tavşanı bırakır.',
	},
	{
		id: 7,
		isim: 'Salyangoz',
		sesyolu: '',
		resimyolu: 'https://icons.iconarchive.com/icons/martin-berube/square-animal/128/Snail-icon.png',
		bilgi:
			'Salyangozlar, tatlısularda, denizlerde ve bütün çevrede görülebilen hayvanlardır. Nemli yerlerde bulunurlar ve yağışın bol olduğu ve havanın tam soğumadığı sonbahar aylarında sürekli görülürler. Vücutlarında bol miktarda su bulunduğu için çok soğuk havalarda donarlar. Çok sıcak havalarda ise su kaybederek kuruyabilirler.',
	},
	{
		id: 8,
		isim: 'Sincap',
		sesyolu: 'http://soundbible.com/mp3/Angry%20Squirrel-SoundBible.com-1620933676.mp3',
		resimyolu: 'https://icons.iconarchive.com/icons/martin-berube/square-animal/128/Squirrel-icon.png',
		bilgi:
			'Sincap, sincapgiller (Latince: Sciuridae) familyasından uzun kuyruk tüyleri ile dikkat çeken kemirici memeli hayvan türlerinin ortak adıdır. Anadolu\'nun çeşitli yörelerinde "çekelez" olarak da bilinir.',
	},
	{
		id: 9,
		isim: 'Zürafa',
		sesyolu: 'http://soundbible.com/mp3/horse_blow-stephan_schutze-1678740304.mp3',
		resimyolu: 'https://icons.iconarchive.com/icons/martin-berube/square-animal/128/Giraffe-icon.png',
		bilgi:
			'Zürafa (Giraffa camelopardalis), soyu tükenmemiş canlılar arasında karada yaşayan en uzun ve gevişgetirenler arasında da en büyük; Afrika’da yaşayan çift toynaklı memelidir. Bilimsel tür adı deveye benzer şekline ve leoparda benzeyen beneklerine ithafen verilmiştir. Ana ayırt edici özelikleri oldukça uzun boynu ve bacakları, tüylü deriyle kaplı boynuzları ve beyaz-krem bir ten üstünde siyah ve kahverengi arasında değişen benekleridir. En yakın yaşayan akrabası okapi ile birlikte zürafagiller (Giraffidae) familyasında sınıflandırılır ve derileri ile beneklerinin renk ve şekillerinden ayırt edilen dokuz alt türü vardır.',
	},
	{
		id: 10,
		isim: 'İnek',
		sesyolu: 'http://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3',
		resimyolu: 'https://icons.iconarchive.com/icons/martin-berube/square-animal/128/Cow-icon.png',
		bilgi:
			'Sığır (Latince: Bos primigenius taurus ile Bos primigenius indicus), memeli hayvanların çift toynaklılar (Artiodactyla) takımının, boynuzlugiller (Bovidae) familyasının sığırlar (Bovinae) alt familyasından evcil büyükbaş hayvan. Çoğunlukla evcil olan, kaba ve hantal yapılı, kuyrukları püsküllü, boynuzlu büyükbaş hayvanlardır. Mideleri dört gözlüdür ve geviş getirirler. Üst çenelerinde kesici dişleri bulunmaz. Otları alt çenelerinin dişleriyle keserler. Boynuzları daimidir. Kırıldığında bir daha yeniden çıkmaz.',
	},
	{
		id: 11,
		isim: 'Köpek',
		sesyolu: 'http://soundbible.com/mp3/labrador-barking-daniel_simon.mp3',
		resimyolu: 'https://icons.iconarchive.com/icons/martin-berube/flat-animal/128/dog-icon.png',
		bilgi:
			"Köpek (Canis lupus familiaris); köpekgiller (Canidae) familyasına mensup, görünüş ve büyüklükleri farklı 400'den fazla ırkı olan, etçil, memeli bir hayvan. Bozkurt'un (C. lupus) alt türlerinden biri olan köpek, tilki ve çakallarla da akrabadır. Kedilerle birlikte dünyanın en geniş coğrafyaya yayılan ve en çok beslenen iki evcil hayvanından biridir. 2001 yılı tahminlerine göre dünyada 400 milyondan fazla köpek vardır.",
	},
	{
		id: 12,
		isim: 'Arı',
		sesyolu: 'http://soundbible.com/mp3/Bee-SoundBible.com-914644763.mp3',
		resimyolu: 'https://icons.iconarchive.com/icons/martin-berube/square-animal/128/Bee-icon.png',
		bilgi:
			'Arı, zar kanatlılar takımına ait Apoidea familyasını oluşturan tüm böcek türlerine verilen isimdir.Zar kanatlıların özelliği; içinde enine ve boyuna damarcıklar bulunan ve iki çift saydam zar şeklinde kanatlarının olmasıdır. Arıların vücudu baş, göğüs ve karın olmak üzere üç kısımdan meydana gelir. Vücutları yumuşak yapıdaki yoğun bir kıl örtüsüyle kaplıdır.Kılların rengi türe göre değişkendir',
	},
];

function Anasayfa({ route, navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.baslik}>Hayvanları Tanıyalım</Text>
			<FlatList
				data={DATA}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item }) => {
					return (
						<View style={{ flex: 1, flexDirection: 'row' }}>
							<TouchableOpacity
								onPress={() =>
									navigation.navigate('Detaylar', {
										name: item.isim,
										bilgi: item.bilgi,
										ses: item.sesyolu,
										resim: item.resimyolu,
									})
								}
								style={styles.opcty}
							>
								<Image resizeMode="contain" style={styles.img} source={{ uri: item.resimyolu }} />
							</TouchableOpacity>
							<Text style={styles.text}>{item.isim}</Text>
						</View>
					);
				}}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#B4EC29',
	},
	baslik: {
		textAlign: 'center',
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
	opcty: {
		width: '30%',
		height: 120,
		borderWidth: 1,
		borderColor: 'black',
		backgroundColor: '#EC297C',
		borderRadius: 30,
		margin: 5,
		marginLeft: 30,
	},
	img: {
		width: '100%',
		height: 120,
	},
});
export default Anasayfa;
