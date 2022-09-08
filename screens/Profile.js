import React, {useState, useEffect} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
  Switch,
  SafeAreaView,
} from 'react-native';
import {images, color, fontSizes, icons, colors} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {isValidEmail, isValidPassword} from '../utilities/Validations';
import {UIHeader} from '../components';
import {
  user as UserRepository,
  population as PopulationRepository,
} from '../repositories';
import {convertDateTimeToString} from '../utilities/DateTime';
//chart
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: 'white',
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => colors.primary,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};
const Profile = () => {
  const [user, setUser] = useState({});
  const [populations, setPopulations] = useState([]);
  useEffect(() => {
    //get user
    UserRepository.getUserDetail().then(responseUser => {
      setUser(responseUser);
    });
    //get population
    PopulationRepository.getPopulation({
      drilldowns: 'Nation',
      measures: 'Population',
    }).then(resPopulations => {
      console.log(resPopulations);
      setPopulations(resPopulations);
    });
  }, []);

  const {
    dateOfBirth,
    email,
    gender,
    userId,
    address,
    userName,
    url,
    phone,
    registeredDate,
  } = user;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 50,
        paddingStart: 20,
      }}>
      <Image
        style={{
          width: 150,
          height: 150,
          resizeMode: 'cover',
          borderRadius: 80,
          margin: 10,
          marginBottom: 50,
          alignSelf: 'center',
        }}
        source={{uri: url}}
      />
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{fontWeight: 'bold', fontSize: fontSizes.h5, color: 'black'}}>
          User Name:
        </Text>
        <Text style={{color: 'black'}}>{userName}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{fontWeight: 'bold', fontSize: fontSizes.h5, color: 'black'}}>
          Email:
        </Text>
        <Text style={{color: 'black'}}> {email}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{fontWeight: 'bold', fontSize: fontSizes.h5, color: 'black'}}>
          Date Of Birth:
        </Text>
        <Text style={{color: 'black'}}>
          {convertDateTimeToString(dateOfBirth)}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{fontWeight: 'bold', fontSize: fontSizes.h5, color: 'black'}}>
          Gender:
        </Text>
        <Text style={{color: 'black'}}>{gender}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{fontWeight: 'bold', fontSize: fontSizes.h5, color: 'black'}}>
          Address:
        </Text>
        <Text style={{color: 'black'}}>{address}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{fontWeight: 'bold', fontSize: fontSizes.h5, color: 'black'}}>
          Phone:
        </Text>
        <Text style={{color: 'black'}}>{phone}</Text>
      </View>
      <View>
        <Text style={{color: 'black'}}>Population: </Text>
        <LineChart
          data={{
            // labels: populations
            //   .sort((a, b) => parseInt(a.year) - parseInt(b.year))
            //   .map(item => item.year),
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                // data: populations.map(item =>
                //   Math.floor(item.population / 1000_000, 0),
                // ),
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2, // optional
              },
            ],
            legend: ['Populations'], // optional
          }}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
