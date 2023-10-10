import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { StyleSheet, Text, View, Image } from 'react-native';
import LikeImage from '../../assets/images/like.png';

const FeedPost = ({ post }) => {
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
        <View style={styles.footer}>
          <View style={styles.statsRow}>
            <Image source={LikeImage} style={styles.likeIcon} />
            <Text style={styles.likedBy}>
              Simon and {post.numberOfLikes} others
            </Text>
            <Text style={styles.shares}>
              {post.numberOfShares}{' '}
              {post.numberOfShares === 1 ? 'share' : 'shares'}
            </Text>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.iconButtons}>
              <AntDesign name="like2" size={18} color="gray" />
              <Text style={styles.iconButtonsText}>Like</Text>
            </View>
            <View style={styles.iconButtons}>
              <FontAwesome5 name="comment-alt" size={18} color="gray" />
              <Text style={styles.iconButtonsText}>Comment</Text>
            </View>
            <View style={styles.iconButtons}>
              <MaterialCommunityIcons
                name="share-outline"
                size={18}
                color="gray"
              />
              <Text style={styles.iconButtonsText}>Share</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
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
  footer: {
    paddingHorizontal: 10,
  },
  statsRow: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 10,
    borderColor: 'lightgray',
  },
  likeIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  likedBy: {
    color: 'grey',
  },
  shares: {
    color: 'grey',
    marginLeft: 'auto',
  },
  buttonRow: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButtonsText: {
    color: 'gray',
    marginLeft: 5,
    fontWeight: '500',
  },
});

export default FeedPost;
