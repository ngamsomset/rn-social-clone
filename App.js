import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image } from 'react-native';

const post = {
  id: 'p1',
  createdAt: '19 m',
  User: {
    id: 'u1',
    image:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg',
    name: 'Brian Ngamsom',
  },
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
  numberOfLikes: 11,
  numberOfShares: 2,
};

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        {/* header */}
        <View style={styles.header}>
          <Image
            source={{ uri: post.User.image }}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.name}>{post.User.name}</Text>
            <Text style={styles.subtitle}>{post.createdAt}</Text>
          </View>
          <Entypo
            name="dots-three-horizontal"
            size={18}
            color="grey"
            style={styles.icon}
          />
        </View>
        {/* body */}
        <Text style={styles.description}>{post.description}</Text>
        {post.image && (
          <Image source={{ uri: post.image }} style={styles.image} />
        )}
        {/* footer */}
        <View style={styles.footer}></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  subtitle: {
    color: 'gray',
  },
  name: {
    fontWeight: '500',
  },
  icon: {
    marginLeft: 'auto',
  },
  description: {
    lineHeight: 20,
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});
