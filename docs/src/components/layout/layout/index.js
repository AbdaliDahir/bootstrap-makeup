import React from 'react';
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';
import Sticky from 'react-stickynode';
import ThemeProvider from '../../theme/themeProvider';
import mdxComponents from '../../mdxComponents';
import Sidebar from '../../sidebar';
import RightSidebar from '../rightSidebar';


const Content = styled('main')`
  background: ${({ theme }) => theme.colors.background};
  table tr {
    background: ${({ theme }) => theme.colors.background};
  }
`;


const Layout = ({ children, location }) => (
  <ThemeProvider location={location}>
    <MDXProvider components={mdxComponents}>
      <div className="body-main">
        <div className="row gx-0">
          <div className="col-lg-2 px-0">
            <div className="left-sidebar px-lg-3 px-2 h-100 bg-light border-right">
              <Sticky enabled={true} top={50}>
                <Sidebar location={location} />
              </Sticky>
            </div>
          </div>
          <div className="col-lg-8">
            <Content className="mx-5 pt-5">
              <div>{children}</div>
            </Content>
          </div>
          <div className="col-lg-2 px-0">
            <Sticky enabled={true} top={50}>
              <div className="right-sidebar">
                <RightSidebar location={location} />
              </div>
            </Sticky>
          </div>
        </div>
      </div>
    </MDXProvider>
  </ThemeProvider>
);

export default Layout;
