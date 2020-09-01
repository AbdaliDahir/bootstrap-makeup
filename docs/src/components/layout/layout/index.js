import React from 'react';
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';
import Sticky from 'react-stickynode';
import ThemeProvider from '../../theme/themeProvider';
import mdxComponents from '../../mdxComponents';
import Sidebar from '../../sidebar';
import RightSidebar from '../rightSidebar';


// const BodyMain = styled('main')`
//   background: ${({ theme }) => theme.colors.background};
// `;


const Layout = ({ children, location }) => (
  <ThemeProvider location={location}>
    <MDXProvider components={mdxComponents}>
      <div className="page-main">
        <div className="row gx-0">
          <div className="col-lg-2 px-0">
            <div className="left-sidebar px-lg-3 px-2 h-100 border-right">
              <Sticky enabled={true} top={0}>
                <Sidebar location={location} />
              </Sticky>
            </div>
          </div>
          <div className="col-lg-8">
            <main className="main-content px-5 pt-5">
              <div>{children}</div>
            </main>
          </div>
          <div className="col-lg-2 px-0">
            <div className="right-sidebar h-100">
              <Sticky enabled={true} top={50}>
                <RightSidebar location={location} />
              </Sticky>
            </div>
          </div>
        </div>
      </div>
    </MDXProvider>
  </ThemeProvider>
);

export default Layout;
