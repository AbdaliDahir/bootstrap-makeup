import styled from '@emotion/styled';

export const ListItem = styled(({ className, active, level, ...props }) => {
  return (
    <li className={className}>
      <a className="link pl-2 py-3 d-inline-block" href={props.to} {...props}>
        {props.children}
      </a>
    </li>
  );
})`
  list-style: none;

  a {
    ${props =>
      props.active &&
      `
      color: #1ED3C6;
      border-color: rgb(230,236,241) !important;
      border-style: solid none solid solid;
      border-width: 1px 0px 1px 1px;
      background-color: #fff;
    `} // external link icon
    svg {
      float: right;
      margin-right: 1rem;
    }
  }
`;
