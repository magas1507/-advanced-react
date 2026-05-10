import React, { ReactNode, Children, useState, ReactElement, isValidElement } from "react";
import classes from "./CompoundComponents.module.css";

interface TabsProps {
  children: ReactNode;
}
export const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  const tabElements = Children.toArray(children).filter((child) =>
    isValidElement(child)
  );

  return (
    <div className={classes.Tabs}>
      <ul>
        {tabElements.map((child: any, index: number) => (
          <li
            key={index}
            className={index === activeIndex ? 'classes.TabActive' : ""}
            onClick={() => handleTabClick(index)}
          >
            {child.props.label}
          </li>
        ))}
      </ul>

      <p className={classes.TabContent}>
        {tabElements[activeIndex] as React.ReactNode}
      </p>
    </div>
  );
};
