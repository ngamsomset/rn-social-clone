# Navigation

The main library for navigation is RN is `react navigation`. There are few dependencies that needed to be install.

1. @react-navigation/native - which is the core navigation.
2. @react-navigation/native-stack - this is a stack navigator.
3. react-native-screen
4. react-native-safe-area-context

To create a navigation, you will need a `NavigationContainer` act as a wrapper which contains `Stack`. Stack render components just like routes. `Stack.Navigator` is a wrapper of `Stack.Screen` and each screen will navigate to different component based on what we passed into `component` props, `name` props also important as it's use to navigate to if needed.
See `/src/navigation/index.js`

To use Navigation, go to the component that we want to be the place to start the navigation. In this case, `/src/screens/FeedScreen.js`. Don't forget to render `Navigator` in the `App.js` instead of manually render component in the beginning.

In `/src/screens/FeedScreen.js`, import `useNavigation` which we will use to navigate to the `createpost` page after user click on the createpost component. `FlatList` prop called `ListHeaderComponent` used to embeded a component on the top of the screen and it will take in a callback function that return a `Pressable` component which we pass the `onPress` to it. You can styles that component as you like.

## styles

- `alignSelf` control how child aligns in the cross direction, overriding the `alignItem` of the parent element.
https://reactnative.dev/docs/layout-props, if the main container is align center and you want some of the child to align to the left, you can use `alignSelf`