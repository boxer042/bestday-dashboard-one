import * as React from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Toggle = styled.div`
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: #1890ff;
  }
`;

const { Header } = Layout;

export interface GlobalHeaderProps {
  onToggle: () => void;
  collapsed: boolean;
}

function GlobalHeader({ onToggle, collapsed }: GlobalHeaderProps) {
  return (
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }}>
        <Toggle>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              onClick: onToggle,
            },
          )}
        </Toggle>
      </Header>
    </Layout>
  );
}

export default GlobalHeader;
