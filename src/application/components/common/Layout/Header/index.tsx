import React, { ElementType, ReactNode } from "react";
import CustomTitle from "./Title";
import { StyledTitle } from "./Header.styles.tsx";

interface HeaderTitleProps {
  content: ReactNode;
  type: ElementType;
}

export const Header: React.FC<HeaderTitleProps> = ({ content, type }) => {
  return (
    <StyledTitle>
      <CustomTitle tag={type} color="blue" fontSize="16" content={content} />
    </StyledTitle>
  );
};

export default Header;
