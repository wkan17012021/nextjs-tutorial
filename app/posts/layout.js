import React from "react";

export const layout = () => {
  return (
    <div>
      This layout component is different from the main page one. As this layout
      component is nested inside posts directory, Next.js assumes for any page
      component inside this folder, we want to implement reusable UI for these
      pages. This is useful if we want components to exist for blog post pages,
      such as a horizontal scroll to inform the reader how much of the post they
      have read, or perhaps a scroll to top button.
    </div>
  );
};
