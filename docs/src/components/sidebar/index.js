import React from 'react';
import Tree from './tree';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { ExternalLink } from 'react-feather';
import config from '../../data/config';


// eslint-disable-next-line no-unused-vars
const ListItem = ({ className, active, level, ...props }) => {
  return (
    <li className={className}>
      <a className="text-dark text-decoration-none d-flex align-items-center justify-content-between" href={props.to} {...props} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    </li>
  );
};

const Divider = styled(props => (
  <li {...props}>
    <hr />
  </li>
))`
  list-style: none;
  padding: 0.5rem 0;
`;

const SidebarLayout = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
                title
              }
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      return (
        <aside className="py-5">
          <ul className="list-unstyled list-sidebar">
            <Tree edges={allMdx.edges} />
            {config.sidebar.links && config.sidebar.links.length > 0 && <Divider />}
            {config.sidebar.links.map((link, key) => {
              if (link.link !== '' && link.text !== '') {
                return (
                  <ListItem key={key} to={link.link}>
                    <span> {link.text} </span>
                    <ExternalLink size={14} />
                  </ListItem>
                );
              }
            })}
          </ul>
        </aside>
      );
    }}
  />
);

export default SidebarLayout;
