import { createStackNavigator, createAppContainer } from 'react-navigation';
import pageOne from './PageOne';

const AppNavigator = createStackNavigator(
    {
       One: pageOne
    },
    {
       initalRouteName: 'One',
        defaultNavigationOptions: {
           headerStyle: {
               backgroundColor: '#3f51b5',
               elevation: 0,
               shadowOpacity: 0
           },
            headerTintColor: '#fff'
        }
    }
);

export default createAppContainer(AppNavigator);




