import { TracksList } from '@/components/TracksList'
import { screenPadding } from '@/constants/tokens'
import { useNavigationSearch } from '@/hooks/useNavigationSearch'
import { defaultStyles } from '@/styles'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SongsScreen = () => {
	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in songs',
		},
	})

	return (
		<SafeAreaView style={defaultStyles.container}>
			<ScrollView
				style={{ marginTop: 60, marginBottom: 62, paddingHorizontal: screenPadding.horizontal }}
				contentInsetAdjustmentBehavior="automatic"
			>
				<TracksList scrollEnabled={false} />
			</ScrollView>
		</SafeAreaView>
	)
}

export default SongsScreen
