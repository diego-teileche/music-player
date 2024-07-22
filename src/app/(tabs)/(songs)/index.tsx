import { TracksList } from '@/components/TracksList'
import { defaultStyles } from '@/styles'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SongsScreen = () => {
	return (
		<SafeAreaView style={defaultStyles.container}>
			<ScrollView style={{ marginTop: 60, marginBottom: 62 }}>
				<TracksList scrollEnabled={false} />
			</ScrollView>
		</SafeAreaView>
	)
}

export default SongsScreen
