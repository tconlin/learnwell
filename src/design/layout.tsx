/* eslint-disable react/display-name */

import { ComponentProps, forwardRef } from "react";

interface PageContainerProps extends ComponentProps<"div"> {}

export const PageContainer = forwardRef<HTMLDivElement, PageContainerProps>(
  (props, ref) => (
    <main
      ref={ref}
      className="flex min-h-screen justify-center w-screen max-w-7xl mx-auto"
    >
      <div className="px-6 py-14">{props.children}</div>
    </main>
  )
);
