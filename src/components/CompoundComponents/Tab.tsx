import React, { ReactNode } from 'react';
import classes from './CompoundComponents.module.css'

interface TabProps {
  label: string;
  children: ReactNode;
}
const Tab: React.FC<TabProps> = ({ label, children }) => {
  return (
    <>
      <em>{label}</em>
      <span>{children}</span>
    </>
  );
};

export default Tab;
