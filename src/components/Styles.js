import styled from "styled-components";
export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & button {
    background: rgba(51, 51, 255, 1) !important;
  }
`;
export const Container = styled.div`
  width: 400px;
`;
export const ListItem = styled.div`
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  text-decoration: ${(props: { complete?: boolean }) =>
    props.complete ? "line-through" : "none"};
`;
export const EmptyContainer = styled.div`
  padding: 30px;
  text-align: center;
`;
export const Header = styled.h4`
  text-transform: capitalize;
  letter-spacing: 1px;
  font-weight: bold;
  text-align: center;
`;
export const Input = styled.input`
  width: 100%;
  border: 1px solid #f2f2f2;
  padding: 10px;
  margin-bottom: 10px;
`;