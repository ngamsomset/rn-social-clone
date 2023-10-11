import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Text,
  Image,
  Pressable,
} from 'react-native';
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Entypo,
} from '@expo/vector-icons';
import user from '../../assets/data/user.json';

const dummy_img =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png';

const bg = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg';
const profilePictureWidth = Dimensions.get('window').width * 0.4;

function signOut() {}

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: bg }} style={styles.bg} />
      <Image source={{ uri: user?.image || dummy_img }} style={styles.image} />
      <Text style={styles.userName}>{user.name}</Text>
      {/* button container */}
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, { backgroundColor: 'royalblue' }]}>
          <AntDesign name="pluscircle" size={16} color="white" />
          <Text style={[styles.buttonText, { color: 'white' }]}>
            Add to story
          </Text>
        </Pressable>
        <Pressable style={styles.button}>
          <MaterialCommunityIcons name="pencil" size={16} color="black" />
          <Text style={styles.buttonText}>Edit Profile</Text>
        </Pressable>
        <Pressable
          onPress={signOut}
          style={[styles.button, { flex: 0, width: 50 }]}
        >
          <MaterialIcons name="logout" size={16} color="black" />
        </Pressable>
      </View>
      {/* personal details block */}
      <View style={styles.personalBlock}>
        <Entypo
          name="graduation-cap"
          size={18}
          color="gray"
          style={{ width: 25 }}
        />
        <Text>Graduated from</Text>
      </View>
      <View style={styles.personalBlock}>
        <Ionicons name="time" size={18} color="gray" style={{ width: 25 }} />
        <Text>Joined since 2020</Text>
      </View>
      <View style={styles.personalBlock}>
        <Entypo
          name="location-pin"
          size={18}
          color="gray"
          style={{ width: 25 }}
        />
        <Text>Joined since 2020</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  personalBlock: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  buttonContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    borderColor: 'lightgray',
    paddingVertical: 5,
  },
  button: {
    flexDirection: 'row',
    padding: 7,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'gainsboro',
    alignSelf: 'stretch',
    margin: 5,
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: '500',
    marginHorizontal: 5,
  },
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
