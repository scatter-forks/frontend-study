import LoginPage from '../pages/login'
import Welcome from '../pages/welcome'
import { pagePaths } from '../types/constants'
import { IRoute } from '../types/router'
import HomePage from 'src/pages/home-page'

export interface RouteConfig {
  path: string
  component: any
  isNotDefaultLayout?: boolean
  getBreadcrumbs?: (...args: any[]) => IRoute[]
  canDirect?: (...args: any[]) => boolean | undefined
  showChannelSwitch?: boolean
}

export const routes: RouteConfig[] = [
  {
    path: pagePaths.loginPage,
    component: LoginPage,
  },
  {
    path: pagePaths.welcome,
    component: Welcome,
  },
  {
    path: pagePaths.homePage,
    component: HomePage,
  },
]

export default routes