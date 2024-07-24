import {
  ExclamationCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/20/solid";
import { CircularProgress } from "@/components/utils/circularProgress";
import { P } from "@/design/typography";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
export default function Input({
  value,
  onChange,
  label,
  placeholder,
  chatBubbleIcon = false,
  maxLength,
  error,
  showSuccess,
  successText,
  isLoading,
  errorText,
}: {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  chatBubbleIcon?: boolean;
  placeholder?: string;
  maxLength?: number;
  isLoading?: boolean;
  error?: boolean;
  showSuccess?: boolean;
  successText?: string;
  errorText?: string;
}) {
  return (
    <div>
      {label && (
        <label
          htmlFor="input-field"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      )}
      <div className="relative mt-2 rounded-md shadow-sm">
        {chatBubbleIcon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3">
            <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 text-gray-500" />
          </div>
        )}

        <input
          id="input-field"
          name="text"
          type="text"
          value={value}
          maxLength={maxLength}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder ?? ""}
          aria-invalid={error ? "true" : undefined}
          aria-describedby="input-error"
          className={`${chatBubbleIcon ? "pl-12" : "pl-4"} ${
            error
              ? "border-red-600 ring-red-300 focus:ring-red-500 focus:border-red-500"
              : "border-gray-300 text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-teal/20 focus:border-teal"
          } block w-full rounded-xl border-0 py-2  pr-8 text-gray-900 shadow-sm ring-1 focus:ring-2 text-sm sm:leading-6 font-light`}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          {error && (
            <ExclamationCircleIcon
              aria-hidden="true"
              className="h-5 w-5 text-red-500"
            />
          )}
          {isLoading && <CircularProgress />}
          {showSuccess && !isLoading && !error && (
            <CheckCircleIcon
              aria-hidden="true"
              className="h-5 w-5 text-green-500"
            />
          )}
        </div>
      </div>
      <div className="text-left mt-2">
        {error && errorText && (
          <P size="text-xs" color="text-red-500">
            {errorText}
          </P>
        )}
        {showSuccess && successText && (
          <P size="text-xs" color="text-gray-500">
            {successText}
          </P>
        )}
      </div>
    </div>
  );
}
