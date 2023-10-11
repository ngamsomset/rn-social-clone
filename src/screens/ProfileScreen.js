import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Text,
  Image,
} from 'react-native';
import user from '../../assets/data/user.json';

const dummy_img =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png';

const bg = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg';
const profilePictureWidth = Dimensions.get('window').width * 0.4;

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: bg }} style={styles.bg} />
      <Image source={{ uri: user?.image || dummy_img }} style={styles.image} />
      <Text style={styles.userName}>{user.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  bg: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: -profilePictureWidth / 2,
  },
  image: {
    width: profilePictureWidth,
    aspectRatio: 1,
    borderRadius: 500,
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 10,
  },
});

export default ProfileScreen;
