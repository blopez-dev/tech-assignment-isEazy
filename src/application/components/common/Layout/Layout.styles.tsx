import styled from "styled-components";

interface LayoutProps {
  color?: string;
}

export const StyledLayout = styled.div<LayoutProps>`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: rgba(246, 244, 244, 0.63);
  box-shadow: 5px 12px 8px -7px #d1d1d175;
  color: ${(props) => props.color || "black"};
  margin: 0;
  padding: 0;
`;
