import React from "react";

/**
 * Handles a single Tab Panel
 * 
 * @param props 
 */
export const TabPanel = (props: any) => {
    const { children, value, index, ...other } = props;
    
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && { ...children }}
      </div>
    );
  }
  