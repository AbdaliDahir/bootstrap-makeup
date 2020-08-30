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

  const calculatedClassName = `${className} item ${active ? 'active text-primary bg-white shadow-sm rounded' : ' '}`;

  return (
    <li className="mb-3">
      {title && (
        <Link to={url} className={calculatedClassName + " py-2 text-decoration-none d-block"}>
          {!config.sidebar.frontLine && title && hasChildren ? (
            <span onClick={collapse} aria-label="collapse" className="collapser pr-2">
              {!isCollapsed ? <ChevronDown width="18" /> : <ChevronRight width="18" />}
            </span>
          ) : null}
          <span> {title} </span>
        </Link>
      )}

      {!isCollapsed && hasChildren ? (
        <ul className="list-unstyled border-primary">
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
