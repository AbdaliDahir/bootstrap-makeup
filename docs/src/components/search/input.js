import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';

import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Search } from 'react-feather';

const focus = props => css`
  background: white;
  color: ${props => props.theme.darkBlue};
  cursor: text;
  width: 5em;
  + ${SearchIcon} {
    color: ${props => props.theme.darkBlue};
    margin: 0.3em;
  }
`;

const collapse = props => css`
  width: 0;
  cursor: pointer;
  color: ${props => props.theme.lightBlue};
  + ${SearchIcon} {
    color: white;
  }
  ${props => props.focus && focus()}
  margin-left: ${props => (props.focus ? `-1.6em` : `-1em`)};
  padding-left: ${props => (props.focus ? `1.6em` : `1em`)};
  ::placeholder {
    color: ${props => props.theme.gray};
  }
`;

const expand = props => css`
  background: ${props => props.theme.veryLightGray};
  width: 6em;
  margin-left: -1.6em;
  padding-left: 1.6em;
  + ${SearchIcon} {
    margin: 0.3em;
  }
`;

const collapseExpand = props => css`
  ${props => (props.collapse ? collapse() : expand())}
`;

const Input = styled.input`
  {collapseExpand}
`;

const Form = styled.form`
  width: 25rem;
  max-width: 100%;
`;

export default connectSearchBox(({ refine, ...rest }) => {
  const preventSubmit = e => {
    e.preventDefault();
  };

  return (
    <Form className={'bd-search position-relative mb-2 mb-md-0 mr-auto'} onSubmit={preventSubmit}>
      <div class="input-group">
        <Input
          className={'searchInput form-control'}
          type="text"
          placeholder="Search docs..."
          aria-label="Search docs for..."
          onChange={e => refine(e.target.value)}
          {...rest}
        />
        <div class="input-group-text"><Search /></div>
      </div>
    </Form>
  );
});
