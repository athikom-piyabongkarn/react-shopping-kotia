import styled from 'styled-components/macro';

export const Container = styled.div``;

export const TwoColumnGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1200px;
  margin: 50px auto auto;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    grid-template-columns: 1fr 4fr;
    margin-top: 80px;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 14px;
  color: #333;
`;

export const SmallLabel = styled.label`
  display: block;
  font-weight: 500;
  font-size: 12px;
  color: #333;
`;

export const Side = styled.div`
  display: grid;
  justify-content: center;
  padding: 15px;
  box-sizing: border-box;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    align-content: baseline;
  }
`;

export const Main = styled.main``;

export const MainHeader = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: end;
  padding: 0 15px;
`;

export const StyledDropdownWrapper = styled.div`
  .Dropdown-control {
    border-radius: 16px;
    padding: 10px;
    border: 1px solid #ccc;
    font-size: 14px;
    background: white;
    cursor: pointer;
    width: 100%;
  }

  .Dropdown-menu {
    border-radius: 12px;
    overflow: hidden;
    width: 100%;
  }

  .Dropdown-control:hover {
    border-color: #d7b23f;
    width: 100%;
  }

  .Dropdown-control:focus-within {
    border-color: #d7b23f;
    box-shadow: 0 0 0 2px rgba(215, 178, 63, 0.3);
    width: 100%;
  }
`;
