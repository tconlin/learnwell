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
        buttonType === ButtonTypes.PRIMARY ? "bg-teal-500" : "bg-gray-300"
      } text-white px-3 py-2 rounded-xl hover:bg-teal-600 w-full flex items-center justify-center focus:ring-2 focus:ring-teal-300 focus:ring-opacity-50`}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <P
            color={
              buttonType === ButtonTypes.PRIMARY
                ? "text-white"
                : "text-gray-900"
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
          size="text-sm"
          color={
            buttonType === ButtonTypes.PRIMARY ? "text-white" : "text-gray-900"
          }
        >
          {text}
        </P>
      )}
    </button>
  )
);

Button.displayName = "Button";
