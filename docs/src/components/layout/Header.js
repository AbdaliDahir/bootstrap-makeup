import React from 'react';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';
import GitHubButton from 'react-github-btn';
import Link from './link';
import Loadable from 'react-loadable';

import config from '../../data/config.js';
import LoadingProvider from '../mdxComponents/loading';
import { DarkModeSwitch } from './DarkModeSwitch';

const help = require('../../assets/img/help.svg');

const isSearchEnabled = config.header.search && config.header.search.enabled ? true : true;

let searchIndices = [];

if (isSearchEnabled && config.header.search.indexName) {
  searchIndices.push({
    name: `${config.header.search.indexName}`,
    title: `Results`,
    hitComp: `PageHit`,
  });
}

import Sidebar from '../sidebar';

const LoadableComponent = Loadable({
  loader: () => import('../search/index'),
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

const Header = ({ location, isDarkThemeActive, toggleActiveTheme }) => (
  <StaticQuery
    query={graphql`
      query headerTitleQuery {
        site {
          siteMetadata {
            headerTitle
            githubUrl
            helpUrl
            tweetText
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
          siteMetadata: { headerTitle, githubUrl, helpUrl, tweetText, logo, headerLinks },
        },
      } = data;

      const finalLogoLink = logo.link !== '' ? logo.link : 'https://bootstrap-makeup.io/';

      return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <Link to={finalLogoLink} className={'navbar-brand'}>
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

                  <li className="nav-item">
                    <div className="dropdown">
                      <button className="btn btn-bd-light dropdown-toggle" id="bd-versions" data-toggle="dropdown" aria-expanded="false" data-display="static">
                        version 1.0.0
                      </button>
                    </div>
                  </li>

                  { tweetText !== '' || githubUrl !== '' ? (
                    <li className="divider hiddenMobile"></li>
                    ) : null}
                    {githubUrl !== '' ? (
                      <li className={'nav-item githubBtn'}>
                        <GitHubButton
                          href={githubUrl}
                          data-show-count="true"
                          aria-label="Star on GitHub"
                        >
                          Star
                        </GitHubButton>
                      </li>
                    ) : null}
                  <li className="nav-item">
                    <DarkModeSwitch
                      isDarkThemeActive={isDarkThemeActive}
                      toggleActiveTheme={toggleActiveTheme}
                    />
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
