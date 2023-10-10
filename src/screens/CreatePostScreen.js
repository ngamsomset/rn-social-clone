import { useState } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from 'react-native';
import {} from 'react-native';

const user = {
  id: 'u1',
  image:
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
  name: 'Vadim Savin',
};

const CreatePostScreen = () => {
  const [inputText, setInputText] = useState('');

  function onPost() {
    console.warn(inputText);
    setInputText('');
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container, { marginBottom: 10 }]}
      contentContainerStyle={{ flex: 1 }}
      keyboardVerticalOffset={150}
    >
      <View style={styles.header}>
        <Image source={{ uri: user.image }} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <TextInput
        placeholder="what's on your mind?"
        value={inputText}
        onChangeText={setInputText}
        multiline
      />
      <View style={styles.buttonContainer}>
        <Button onPress={onPost} title="Post" disabled={!inputText} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 10,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: '500',
  },
  buttonContainer: {
    marginTop: 'auto',
  },
});

export default CreatePostScreen;
