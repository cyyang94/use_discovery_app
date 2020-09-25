import * as React from 'react';
import { Text, View,TouchableOpacity,StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { HomeScreen, EventDetailsScreen, TicketsScreen, ChatScreen, ProfileScreen,TicketDetailsScreen, FormDetailsScreen, OrderCompleteScreen, VendorDetailsScreen } from './pages'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const navOptionHandler = () =>({
  headerMode: none
})

function HomeStack({navigation,route}){
  if (route.state && route.state.routeNames[route.state.index] === "EventDetailsScreen"){
    navigation.setOptions({tabBarVisible: false})
  }else{
    navigation.setOptions({tabBarVisible: true})
  }
  return(
    <Stack.Navigator initialRouteName="HomeScreen" navigation={navigation} headerMode="none" options={navOptionHandler}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="EventDetailsScreen" component={EventDetailsScreen} initialRouteName="EventDetailsScreen"/>
    </Stack.Navigator>
  )
}

function TicketsStack({navigation, route}){
	if (route.state && route.state.routeNames[route.state.index] === "Ticket Details" ){
		navigation.setOptions({tabBarVisible: false})
	}

	if (route.state && route.state.routeNames[route.state.index] === "Form Details"){
		navigation.setOptions({tabBarVisible: false})
	}
	
	if (route.state && route.state.routeNames[route.state.index] === "TicketsScreen"){
		navigation.setOptions({tabBarVisible: true})
	}

	if (route.state && route.state.routeNames[route.state.index] === "OrderCompleteScreen"){
		navigation.setOptions({tabBarVisible: false})
	}
	if (route.state && route.state.routeNames[route.state.index] === "Vendor Details"){
		navigation.setOptions({tabBarVisible: false})
	}
	 
  return(
    <Stack.Navigator initialRouteName="TicketsScreen"  navigation={navigation}>
      <Stack.Screen name="TicketsScreen" component={TicketsScreen} options={{headerShown: false}}/>
	  <Stack.Screen name="Ticket Details" component={TicketDetailsScreen} initialRouteName="TicketDetailsScreen"  
	  	options={{
			headerLeft: () => {
				return(
					<TouchableOpacity style={styles.btnBack} onPress={() => navigation.navigate('TicketsScreen')}>
						<IconFontAwesome5 name="arrow-left" size={20} color={'#000'} />
					</TouchableOpacity>
				)
			}
		  }}
	  />
	  <Stack.Screen name="Form Details" component={FormDetailsScreen} initialRouteName="FormDetailsScreen"  
	  	options={{
			headerLeft: () => {
				return(
					<TouchableOpacity style={styles.btnBack} onPress={() => navigation.navigate('Ticket Details')}>
						<IconFontAwesome5 name="arrow-left" size={20} color={'#000'} />
					</TouchableOpacity>
				)
			}
		  }}
	  />
	   <Stack.Screen name="OrderCompleteScreen" component={OrderCompleteScreen} options={{headerShown: false}} initialRouteName="OrderCompleteScreen"  
	  	
	  />
	  <Stack.Screen name="Vendor Details" component={VendorDetailsScreen} initialRouteName="VendorDetailsScreen"  
	  	options={{
			headerLeft: () => {
				return(
					<TouchableOpacity style={styles.btnBack} onPress={() => navigation.navigate('OrderCompleteScreen')}>
						<IconFontAwesome5 name="arrow-left" size={20} color={'#000'} />
					</TouchableOpacity>
				)
			}
		  }}
	  />
	 
    </Stack.Navigator>
	
  )
}

function ChatStack({navigation}){
  return(
    <Stack.Navigator initialRouteName="ChatScreen" headerMode="none" navigation={navigation}>
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  )
}

function ProfileStack({navigation}){
  return(
    <Stack.Navigator initialRouteName="ProfileScreen" navigation={navigation}>
	  <Stack.Screen 	
		name="My Profile"
		component={ProfileScreen} 
		options={{
			headerRight: () => {
				return(
					<TouchableOpacity style={styles.btnEdit}>
						<IconFontAwesome5 style={styles.btnEditText} name="edit" size={18} color={'#999999'} />
					</TouchableOpacity>
				)
			}
		}}
	  />
    </Stack.Navigator>
  )
}

export default function App() {
	return (
		<NavigationContainer >
			<Tab.Navigator headerMode="none"
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === 'Home') {
						iconName = focused ? 'home' : 'home';
					}
					else if (route.name === 'Tickets') {
						iconName = focused ? 'ticket-alt' : 'ticket-alt';
					}
					else if (route.name === 'Chat') {
						iconName = focused ? 'comment-dots' : 'comment-dots';
					}
					else if (route.name === 'Profile') {
						iconName = focused ? 'user-circle' : 'user-circle';
					}

					// You can return any component that you like here!
					return <IconFontAwesome5 name={iconName} size={size} color={color} />;
					},
				})}
				tabBarOptions={{
					activeTintColor: '#6247AA',
					inactiveTintColor: 'gray',
				}}
			>
				<Tab.Screen name="Home" component={HomeStack} />
				<Tab.Screen name="Tickets" component={TicketsStack} />
				<Tab.Screen name="Chat" component={ChatStack} />
				<Tab.Screen name="Profile" component={ProfileStack} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	btnEdit:{
		paddingHorizontal: 20
	},
	btnBack:{
		paddingHorizontal: 20
	}
})