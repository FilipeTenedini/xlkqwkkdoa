import React from "react";

const scrollToTop = (formContainerRef: React.RefObject<HTMLDivElement>) => {
  if (formContainerRef.current) {
    formContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default scrollToTop;