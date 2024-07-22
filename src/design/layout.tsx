/* eslint-disable react/display-name */
import { ComponentProps, forwardRef } from "react";

interface PageContainerProps extends ComponentProps<"div"> {}

export const PageContainer = forwardRef<HTMLDivElement, PageContainerProps>(
  (props, ref) => (
    <main ref={ref} className={`flex min-h-screen justify-center w-screen`}>
      {props.children}
    </main>
  )
);
