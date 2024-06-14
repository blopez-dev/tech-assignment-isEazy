import React, { ElementType, ReactNode } from "react";
import { StyledTitle } from "./Title.styles.tsx";

interface CustomTitleProps {
  tag?: ElementType;
  color?: string;
  fontSize?: string;
  content: ReactNode;
}
const CustomTitle: React.FC<CustomTitleProps> = ({
  tag = "h2",
  color,
  fontSize,
  content,
}) => {
  return (
    <title>
      <StyledTitle tag={tag} color={color} fontSize={fontSize}>
        {content}
      </StyledTitle>
    </title>
  );
};

export default CustomTitle;
