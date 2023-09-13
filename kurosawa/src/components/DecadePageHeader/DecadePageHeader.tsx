import React from "react";
import styles from "./DecadeHeader.module.css";

interface DecadePageHeaderProps {
  children: React.ReactNode;
}

const DecadePageHeader = ({ children }: DecadePageHeaderProps) => {
  return <div className={styles.nameTitle}>{children}</div>;
};

export default DecadePageHeader;
