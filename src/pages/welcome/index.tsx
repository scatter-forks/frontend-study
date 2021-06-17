import { Component } from 'react'
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import './index.scss'
import Good from '../../components/good'

const { Header, Content, Footer, Sider } = Layout;

interface Props {}


interface State { }

class Welcome extends Component<Props, State> {

  render() {

    return (
      <Layout>
        <Sider className='main-sider'>
          <div className="logo flex justify-center text-white text-xl my-2" >
            <span className='bg-yellow-400 px-4 py-2 rounded-lg'>Better Compare</span>
          </div>
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
            <Menu.Item key="4" icon={<BarChartOutlined />}>
              nav 4
            </Menu.Item>
            <Menu.Item key="5" icon={<CloudOutlined />}>
              nav 5
            </Menu.Item>
            <Menu.Item key="6" icon={<AppstoreOutlined />}>
              nav 6
            </Menu.Item>
            <Menu.Item key="7" icon={<TeamOutlined />}>
              nav 7
            </Menu.Item>
            <Menu.Item key="8" icon={<ShopOutlined />}>
              nav 8
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header
            className="site-layout-background main-context-header font-serif text-xl"
          >
            一起去流浪~
          </Header>
          <Content className='main-context'>
            <div className="flex site-layout-background main-context-body justify-between">
              <Good />
              <Good />
              <Good />
              <Good />
              <Good />
            </div>
          </Content>
          <Footer className='main-footer'>Compare Better ©2021 Created by Scatter</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Welcome