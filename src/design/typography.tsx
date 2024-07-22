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
      className={`${color ? color : "text-primaryColor"} ${
        size ? size : "text-base"
      } font-inter`}
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
      className={`${color ? color : "text-secondaryColor"} ${
        size ? size : "text-base"
      } ${weight ? weight : "font-light"} font-inter`}
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
      className="text-3xl font-bold text-primaryColor font-inter"
      {...props}
    >
      {children}
    </h1>
  )
);

interface H2Props extends ComponentProps<"h2"> {}

export const H2 = forwardRef<HTMLHeadingElement, H2Props>((props, ref) => (
  <h2 ref={ref} className="text-2xl font-bold text-primaryColor" {...props} />
));

export const H3 = forwardRef<HTMLHeadingElement, H2Props>((props, ref) => (
  <h2 ref={ref} className="text-xl font-medium text-primaryColor" {...props} />
));
