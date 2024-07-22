import { forwardRef, ButtonHTMLAttributes } from "react";
import { CircularProgress } from "@/components/utils/circularProgress";
import { P } from "@/design/typography";
import { ButtonTypes } from "@/types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  disabled?: boolean;
  text: string;
  buttonType: ButtonTypes;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, isLoading, disabled, buttonType, text, ...props }, ref) => (
    <button
      disabled={isLoading || disabled}
      ref={ref}
      className={`
      ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"} 
      ${
        buttonType === ButtonTypes.PRIMARY ? "bg-tertiaryColor" : "bg-gray-300"
      } text-white px-6 py-3 rounded-xl hover:bg-tertiaryColorDark w-full flex items-center justify-center focus:ring-2 focus:ring-tertiaryColor focus:ring-opacity-50`}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <P
            color={
              buttonType === ButtonTypes.PRIMARY
                ? "text-white"
                : "text-primaryColor"
            }
          >
            {text}
          </P>
          <div className="ml-2">
            <CircularProgress
              color={buttonType === ButtonTypes.PRIMARY ? "light" : "dark"}
            />
          </div>
        </div>
      ) : (
        <P
          color={
            buttonType === ButtonTypes.PRIMARY
              ? "text-white"
              : "text-primaryColor"
          }
        >
          {text}
        </P>
      )}
    </button>
  )
);

Button.displayName = "Button";
