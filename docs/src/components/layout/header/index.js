import React from 'react';
import Link from '../link';
import Loadable from 'react-loadable';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';
import {GitHub, Twitter} from 'react-feather';
import config from '../../../data/config.js';
import LoadingProvider from '../../mdxComponents/loading';
import { DarkModeSwitch } from '../darkModeSwitch/';

const help = require('../../../assets/img/help.svg');

const isSearchEnabled = config.header.search && config.header.search.enabled ? true : true;

let searchIndices = [];

if (isSearchEnabled && config.header.search.indexName) {
  searchIndices.push({
    name: `${config.header.search.indexName}`,
    title: `Results`,
    hitComp: `PageHit`,
  });
}

import Sidebar from '../../sidebar';

const LoadableComponent = Loadable({
  loader: () => import('../../search/index'),
  loading: LoadingProvider,
});

function myFunction() {
  var x = document.getElementById('navbar');

  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

const StyledBgDiv = styled('div')`
  height: 60px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #f8f8f8;
  position: relative;
  display: none;
  background: ${props => (props.isDarkThemeActive ? '#f9f9f9' : undefined)};

  @media (max-width: 767px) {
    display: block;
  }
`;

const Header = ({ isDarkThemeActive, toggleActiveTheme }) => (
  <StaticQuery
    query={graphql`
      query headerTitleQuery {
        site {
          siteMetadata {
            headerTitle
            githubUrl
            twitterUrl
            logo {
              link
              image
            }
            headerLinks {
              link
              text
            }
          }
        }
      }
    `}
    render={data => {
      const {
        site: {
          siteMetadata: { headerTitle, githubUrl, twitterUrl, logo, headerLinks },
        },
      } = data;

      const finalLogoLink = logo.link !== '' ? logo.link : 'https://bootstrap-makeup.io/';

      return (
        <>
          <nav className={`navbar navbar-expand-lg border-bottom ${isDarkThemeActive ? 'navbar-dark border-dark bg-dark' : 'navbar-light bg-light'}`}>
            <div className="container-fluid">
              <Link to={finalLogoLink} className={'navbar-brand font-weight-bold'}>
                Bootstrap Makup
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0 ml-auto">
                  <li className="nav-item">
                    {isSearchEnabled ? (
                      <div className={'position-relative'}>
                        <LoadableComponent collapse={true} indices={searchIndices} />
                      </div>
                    ) : null}
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  {headerLinks.map((link, key) => {
                    if (link.link !== '' && link.text !== '') {
                      return (
                        <li className="nav-item" key={key}>
                          <a
                            className="nav-link sidebarLink"
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            dangerouslySetInnerHTML={{ __html: link.text }}
                          />
                        </li>
                      );
                    }
                  })}

                  { twitterUrl !== '' ? (
                    <li className="nav-item mx-lg-1">
                      <a className="nav-link" href={twitterUrl} alt="twitter page" > <Twitter /> </a>
                    </li>
                  ) : null}
                  {githubUrl !== '' ? (
                    <li className="nav-item mx-lg-1">
                      <a className="nav-link" href={githubUrl} alt="github repo" > <GitHub /> </a>
                    </li>
                  ) : null}
                  <li className="nav-item mx-lg-1">
                    <DarkModeSwitch
                      isDarkThemeActive={isDarkThemeActive}
                      toggleActiveTheme={toggleActiveTheme}
                    />
                  </li>
                  <li className="nav-item ml-lg-1">
                    <button className="btn btn-primary"> v 1.0.0 </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
      );
    }}
  />
);

export default Header;
