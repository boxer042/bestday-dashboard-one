import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import {
  PieChartFilled,
  DatabaseFilled,
  GooglePlusCircleFilled,
  SettingFilled,
  FireTwoTone,
} from '@ant-design/icons';
import styled from 'styled-components';

const { Sider } = Layout;
const { Title } = Typography;

const Logo = styled.div<{ collapsed: boolean }>`
  height: 64px;
  color: ${({ collapsed }) => (collapsed ? '#fff' : 'black')};
  background: ${({ collapsed }) => (collapsed ? '#f5222d' : '#fff')};
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 64px;
  transition: all ease-in-out 700ms;
`;

export type GlobalSiderProps = {
  collapsed: boolean;
};

function GlobalSider({ collapsed }: GlobalSiderProps) {
  return (
    <Sider
      style={{ background: '#fff' }}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      {collapsed ? (
        <Logo collapsed={collapsed}>
          <Title
            level={2}
            style={{
              marginTop: '12px',
              color: '#fff',
            }}
          >
            B
          </Title>
        </Logo>
      ) : (
        <Logo collapsed={collapsed}>
          <Title
            level={2}
            style={{
              marginTop: '12px',
              color: '#f5222d',
            }}
          >
            Best
          </Title>
          <Title
            level={2}
            style={{
              marginTop: '12px',
              color: '#434343',
            }}
          >
            day
          </Title>
        </Logo>
      )}

      <Menu mode="inline">
        <Menu.Item key="1" icon={<PieChartFilled />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<DatabaseFilled />}>
          Product
        </Menu.Item>
        <Menu.Item key="3" icon={<GooglePlusCircleFilled />}>
          User
        </Menu.Item>
        <Menu.Item key="4" icon={<SettingFilled />}>
          Setting
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default GlobalSider;

/* 
<Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          nav 4
        </Menu.Item>
      </Menu>
    </Sider> */
