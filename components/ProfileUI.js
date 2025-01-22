import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions
} from 'react-native';
import ProfileViewTabs from './ProfileViewTabs';
import {launchImageLibrary} from 'react-native-image-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const tabelement = [
  {id: 1, tabs: 'Overview', icon: 'pencil'},
  {id: 2, tabs: 'My Patients', icon: 'heart'},
  {id: 3, tabs: 'Work Schedule', icon: 'calendar-check-o'},
  {id: 4, tabs: 'Prescriptions', icon: 'file-text'},
  {id: 5, tabs: 'Reviews', icon: 'star'},
  {id: 6, tabs: 'Library', icon: 'book'},
  {id: 7, tabs: 'Blog', icon: 'comments'},
  {id: 8, tabs: 'Emergency No.', icon: 'phone'},
  {id: 9, tabs: 'Settings', icon: 'cog'},
  {id: 10, tabs: 'Help', icon: 'question'},
  {id: 11, tabs: 'Logout', icon: 'sign-out'},
];

const ProfileUI = ({props}) => {
  const [imageUri, setImageUri] = useState(null);
  

  const openImagePicker = () => {
    launchImageLibrary(
      {
        mediaType: 'photo', // Or 'video' if you want to pick videos
        includeBase64: false, // Set to true if you want base64 encoded image
        maxWidth: 800, // Optional: scale the image
        maxHeight: 800, // Optional: scale the image
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('Image Picker Error: ', response.errorMessage);
        } else {
          const source = {uri: response.assets[0].uri}; // Access the URI of the image
          setImageUri(source.uri);
        }
      },
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'#27334E'} barStyle="light-content" />
      <View style={styles.bg}>
        <View style={styles.bg1}>
        <Image
            source={imageUri ? { uri: imageUri } : require('../Static/Pics/image_1.jpeg')}
            style={styles.profileImage}
          />
          <View style={styles.getPic}>
            <TouchableOpacity onPress={openImagePicker}>
              <FontAwesome name="camera" size={20} style={styles.camera} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.profileName}>{props.name}</Text>
            <Text style={styles.licenseNo}>License No. {props.licenseno}</Text>
          </View>
        </View>
        <View style={styles.bg2}>
          <View style={styles.dash}>
            <View style={styles.dashboard}>
              <View style={styles.outterPicWrapper}>
                <FontAwesome
                  name="file"
                  size={20}
                  style={styles.innerPicWrapper}
                />
              </View>
              <Text style={styles.walletText}>Wallet</Text>
            </View>
            <View style={styles.dashboard}>
              <View style={styles.outterPicWrapper}>
                <FontAwesome
                  name="file"
                  size={20}
                  style={styles.innerPicWrapper}
                />
              </View>
              <Text style={styles.invoiceText}>Invoice</Text>
            </View>
          </View>
          <ScrollView style={styles.flattlist} showsVerticalScrollIndicator={false}>
            {tabelement.map(item => (
              <ProfileViewTabs key={item.id.toString()} {...item} />
            ))}
          </ScrollView>
          {/* <FlatList
            data={tabelement} // Array of objects
              keyExtractor={(item) => item.id.toString()} // Unique key for each item
                renderItem={({ item }) =>  <ProfileViewTabs {...item}/>}
                style={styles.flattlist}>
          </FlatList> */}
        </View>
      </View>
    </SafeAreaView>
  );
};
const potrait=()=>{
  const { width, height } = useWindowDimensions();
  const isPotrait = width < height;
  return isPotrait;
}

const styles = StyleSheet.create({
  
  bg: {
    flex: 1,
    backgroundColor: '#27334E',
  },
  bg1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: potrait ? 40 : 0,
  },
  bg2: {
    flex: potrait ? 5 : 4,
    alignItems: 'center',
    backgroundColor: '#ECECEC',
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#898989',
    marginLeft: 40,
    marginRight: 10,
  },
  profileName: {
    fontFamily: 'fantasy-medium',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 1,
    marginBottom: 5,
  },
  licenseNo: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 0,
  },
  dash: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '90%',
    height: '18%',
    position: 'relative',
    top: -40,
  },
  dashboard: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 30,
    borderRadius: 8,
    width: '50%',
  },
  outterPicWrapper: {
    width: 45,
    height: 45,
    marginBottom: 10,
    borderRadius: 25,
    borderWidth: 4,
    overflow: 'hidden',
    borderColor: '#8998',
    backgroundColor: '#27334E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerPicWrapper: {
    color: '#FFFFFF',
  },
  walletText: {
    fontFamily: 'barycentric',
    fontSize: 16,
    color: '#27334E',
    fontWeight: 'bold',
  },
  invoiceText: {
    fontFamily: 'barycentric',
    fontSize: 16,
    color: '#27334E',
    fontWeight: 'bold',
  },
  flattlist: {
    flex: 1,
    width: '95%',
    marginTop: potrait ? -22 : 0,
    marginBottom: 20,
  },
  getPic: {
    width: 25,
    height: 25,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 72,
    left: 95,
  },
  camera: {
    color: '#fff',
    fontSize: 12,
    resizeMode: 'contain',
  },
});

export default ProfileUI;
