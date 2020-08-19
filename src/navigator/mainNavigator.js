import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen9092003Navigator from '../features/BlankScreen9092003/navigator';
import ArticleList91985Navigator from '../features/ArticleList91985/navigator';
import ArticleList91984Navigator from '../features/ArticleList91984/navigator';
import ArticleList91983Navigator from '../features/ArticleList91983/navigator';
import UserProfile88516Navigator from '../features/UserProfile88516/navigator';
import Tutorial88515Navigator from '../features/Tutorial88515/navigator';
import NotificationList88487Navigator from '../features/NotificationList88487/navigator';
import Settings88486Navigator from '../features/Settings88486/navigator';
import Settings88478Navigator from '../features/Settings88478/navigator';
import UserProfile88476Navigator from '../features/UserProfile88476/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen9092003: { screen: BlankScreen9092003Navigator },
ArticleList91985: { screen: ArticleList91985Navigator },
ArticleList91984: { screen: ArticleList91984Navigator },
ArticleList91983: { screen: ArticleList91983Navigator },
UserProfile88516: { screen: UserProfile88516Navigator },
Tutorial88515: { screen: Tutorial88515Navigator },
NotificationList88487: { screen: NotificationList88487Navigator },
Settings88486: { screen: Settings88486Navigator },
Settings88478: { screen: Settings88478Navigator },
UserProfile88476: { screen: UserProfile88476Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
