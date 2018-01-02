import  { StackNavigator } from 'react-navigation';
import { Login, Main } from './screens';

export default MainStack = StackNavigator({
  Login: {
    screen: Login,
  },
  Main: {
    screen: Main,
  }}, 
  {
    headerMode: 'none'
  }
)