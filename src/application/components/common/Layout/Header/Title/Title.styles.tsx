import { ElementType, ReactNode } from "react";
import styled from "styled-components";

interface CustomTitleProps {
  tag?: ElementType;
  color?: string;
  fontSize?: string;
  children: ReactNode;
}

export const StyledTitle = styled.div<CustomTitleProps>`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "2rem"};
  margin: 0;
  padding: 0;
`;
