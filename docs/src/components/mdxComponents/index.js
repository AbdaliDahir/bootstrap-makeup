import React from 'react';
import styled from '@emotion/styled';

import CodeBlock from './codeBlock';
import AnchorTag from './anchor';

export default {
  h1: props => (
    <h1 className="h1" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h2: props => (
    <h2 className="h4 mt-5 mb-4 text-capitalize" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h3: props => (
    <h3 className="h4 mt-5 mb-4 text-capitalize" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h4: props => (
    <h4 className="h5 my-4 text-capitalize" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h5: props => (
    <h5 className="h5 my-4 text-capitalize" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h6: props => (
    <h6 className="h6" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  p: props => <p className="docs-regular-font my-4" {...props} />,
  pre: props => (
    <div {...props} />
  ),
  code: CodeBlock,
  a: AnchorTag,
  // TODO add `img`
  // TODO add `blockquote`
  // TODO add `ul`
  // TODO add `li`
  // TODO add `table`
};
