import React from 'react';
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';

import ThemeProvider from '../theme/themeProvider';
import mdxComponents from '../mdxComponents';
import Sidebar from '../sidebar';
import RightSidebar from './rightSidebar';
import config from '../../data/config.js';


const Content = styled('main')`
  background: ${({ theme }) => theme.colors.background};
  table tr {
    background: ${({ theme }) => theme.colors.background};
  }
`;


const Layout = ({ children, location }) => (
  <ThemeProvider location={location}>
    <MDXProvider components={mdxComponents}>
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="left-sidebar">
              <Sidebar location={location} />
            </div>
          </div>
          <div className="col-lg-8">
            <Content className="mx-5 pt-5">
              <div>{children}</div>
            </Content>
          </div>
          <div className="col-lg-2">
            <div className="right-sidebar">
              <RightSidebar location={location} />
            </div>
          </div>
        </div>
      </div>
    </MDXProvider>
  </ThemeProvider>
);

export default Layout;
