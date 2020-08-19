import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dashboard29792186Navigator from '../features/Dashboard29792186/navigator';
import Maps9592185Navigator from '../features/Maps9592185/navigator';
import UserProfile9192102Navigator from '../features/UserProfile9192102/navigator';
import Settings9592097Navigator from '../features/Settings9592097/navigator';
import Camera9692096Navigator from '../features/Camera9692096/navigator';
import ArticleList91985Navigator from '../features/ArticleList91985/navigator';
import ArticleList91984Navigator from '../features/ArticleList91984/navigator';
import NotificationList88487Navigator from '../features/NotificationList88487/navigator';
import Settings88478Navigator from '../features/Settings88478/navigator';
import UserProfile88476Navigator from '../features/UserProfile88476/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Dashboard29792186: { screen: Dashboard29792186Navigator },
Maps9592185: { screen: Maps9592185Navigator },
UserProfile9192102: { screen: UserProfile9192102Navigator },
Settings9592097: { screen: Settings9592097Navigator },
Camera9692096: { screen: Camera9692096Navigator },
ArticleList91985: { screen: ArticleList91985Navigator },
ArticleList91984: { screen: ArticleList91984Navigator },
NotificationList88487: { screen: NotificationList88487Navigator },
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
