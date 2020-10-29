import React, { useState } from 'react';
import { Layout } from 'antd';
import GlobalSider from './../base/sider/GlobalSider';
import GlobalHeader from './../base/header/GlobalHeader';

export interface CollapsedProps {
  collapsed: boolean;
}

function MainLayout() {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed(!collapsed);
    console.log(collapsed);
  };

  return (
    <Layout>
      <GlobalSider collapsed={collapsed} />
      <GlobalHeader onToggle={onToggle} collapsed={collapsed} />
    </Layout>
  );
}

export default MainLayout;
