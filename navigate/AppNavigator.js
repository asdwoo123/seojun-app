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
               backgroundColor: '#2E9AFE'
           },
            headerTitleStyle: {
               fontWeight: 'bold'
            }
        }
    }
);

export default createAppContainer(AppNavigator);