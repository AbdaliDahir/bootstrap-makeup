import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

// import Link from './link';
import config from '../../../data/config';
import { Sidebar, ListItem } from '../../styles/Sidebar';

const SidebarLayout = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
              tableOfContents
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      let navItems = [];

      let finalNavItems;

      if (allMdx.edges !== undefined && allMdx.edges.length > 0) {
        const navItems = allMdx.edges.map((item, index) => {
          let innerItems;

          if (item !== undefined) {
            if (
              item.node.fields.slug === location.pathname ||
              config.gatsby.pathPrefix + item.node.fields.slug === location.pathname
            ) {
              if (item.node.tableOfContents.items) {
                innerItems = item.node.tableOfContents.items.map((innerItem, index) => {
                  const itemId = innerItem.title
                    ? innerItem.title.replace(/\s+/g, '').toLowerCase()
                    : '#';

                  return (
                    <ListItem key={index} to={`#${itemId}`} level={1}>
                      {innerItem.title}
                    </ListItem>
                  );
                });
              }
            }
          }
          if (innerItems) {
            finalNavItems = innerItems;
          }
        });
      }

      if (finalNavItems && finalNavItems.length) {
        return (
          <aside className="px-2 py-5">
            <ul className="list-unstyled">
              <li className="h6 text-capitalize">Contents</li>
                {finalNavItems}
            </ul>
          </aside>
        );
      } else {
        return (
          <aside>
            <ul></ul>
          </aside>
        );
      }
    }}
  />
);

export default SidebarLayout;
