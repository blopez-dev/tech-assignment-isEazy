import React from "react";
import { Header } from "@/application/components/common/Layout/Header";
import { StyledLayout } from "./Layout.styles";

interface LayoutsProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutsProps> = ({ children }) => {
  return (
    <StyledLayout>
      <Header type="h2" content="title" />
      <main>{children}</main>
    </StyledLayout>
  );
};
