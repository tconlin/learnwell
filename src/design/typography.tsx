/* eslint-disable react/display-name */
import { ComponentProps, forwardRef } from "react";

interface TextProps extends ComponentProps<"span"> {
  color?: string;
  size?: string;
}

export const Text = forwardRef<HTMLSpanElement, TextProps>(
  ({ children, color, size, ...props }, ref) => (
    <span
      ref={ref}
      className={`${color ? color : "text-gray-900"} ${
        size ? size : "text-base"
      } font-outfit`}
      {...props}
    >
      {children}
    </span>
  )
);

interface PProps extends ComponentProps<"p"> {
  color?: string;
  size?: string;
  weight?: string;
}

export const P = forwardRef<HTMLParagraphElement, PProps>(
  ({ children, color, size, weight, ...props }, ref) => (
    <p
      ref={ref}
      className={`${color ? color : "text-gray-900"} ${
        size ? size : "text-base"
      } ${weight ? weight : "font-light"} font-outfit`}
      {...props}
    >
      {children}
    </p>
  )
);

interface H1Props extends ComponentProps<"h1"> {}

export const H1 = forwardRef<HTMLHeadingElement, H1Props>(
  ({ children, ...props }, ref) => (
    <h1
      ref={ref}
      className="text-2xl font-semibold text-gray-900 font-outfit"
      {...props}
    >
      {children}
    </h1>
  )
);

interface H2Props extends ComponentProps<"h2"> {}

export const H2 = forwardRef<HTMLHeadingElement, H2Props>((props, ref) => (
  <h2
    ref={ref}
    className="text-xl font-semibold text-gray-900 font-outfit"
    {...props}
  />
));

export const H3 = forwardRef<HTMLHeadingElement, H2Props>((props, ref) => (
  <h2
    ref={ref}
    className="text-lg font-medium text-gray-900 font-outfit"
    {...props}
  />
));
