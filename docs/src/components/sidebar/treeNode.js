import React from 'react';
import { ChevronDown, ChevronRight } from 'react-feather';
import config from '../../data/config';
import {Link} from './../layout';

const TreeNode = ({ className = '', setCollapsed, collapsed, url, title, items, ...rest }) => {
  const isCollapsed = collapsed[url];

  const collapse = () => {
    setCollapsed(url);
  };

  const hasChildren = items.length !== 0;

  let location;

  if (typeof document != 'undefined') {
    location = document.location;
  }
  const active =
    location && (location.pathname === url || location.pathname === config.gatsby.pathPrefix + url);

  const calculatedClassName = `${className} item ${active ? 'active text-primary bg-light rounded' : 'text-dark '}`;

  return (
    <li className="mb-3 pl-2">
      {title && (
        <Link to={url} className={calculatedClassName + " p-1 text-decoration-none d-flex justify-content-start align-items-center"}>
          {!config.sidebar.frontLine && title && hasChildren ? (
            <span onClick={collapse} aria-label="collapse" className="collapser text-dark pr-2">
              {!isCollapsed ? <ChevronDown width="18" /> : <ChevronRight width="18" />}
            </span>
          ) : null}
          <span> {title} </span>
        </Link>
      )}

      {!isCollapsed && hasChildren ? (
        <ul className="list-unstyled p-0 mt-3">
          {items.map((item, index) => (
            <TreeNode
              key={item.url + index.toString()}
              setCollapsed={setCollapsed}
              collapsed={collapsed}
              {...item}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default TreeNode;
