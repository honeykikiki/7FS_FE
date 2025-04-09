import { FocusEventHandler, InputHTMLAttributes, forwardRef, useState } from "react";
import { Colors } from "@styles/colorPlatte";
import Flex from "./Flex";
import Input from "./Input";
import Spacing from "./Spacing";
import MyText from "./Text";
import AutoResizingTextarea from "./TextArea";

export interface InputFiledProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: React.ReactNode;
  hasError?: boolean;
  helpMessage?: React.ReactNode;
  maxLength?: number;
  currentLength?: number;
  bTextArea?: boolean;
  enterClick?: () => void;
}

export const InputFiled = forwardRef<HTMLInputElement, InputFiledProps>(function InputFiled(
  { label, hasError, onFocus, onBlur, helpMessage, maxLength, currentLength, bTextArea = false, enterClick, ...props },
  ref,
) {
  const [focused, setFocused] = useState(false);

  const labelColor: Colors | undefined = hasError ? "danger" : focused ? "primary" : undefined;

  const handleFocus: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    setFocused(true);
    onFocus?.(event);
  };

  const handleBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    setFocused(false);
    onBlur?.(event);
  };

  return (
    <div>
      {label ? (
        <>
          <MyText typography="t7" color={labelColor} display="inline-block">
            {label}
          </MyText>
          <Spacing size="xs" />
        </>
      ) : null}

      {bTextArea ? (
        <AutoResizingTextarea
          aria-invalid={hasError}
          onFocus={handleFocus}
          onBlur={handleBlur}
          maxLength={maxLength}
          {...props}
        />
      ) : (
        <Input
          ref={ref}
          aria-invalid={hasError}
          onFocus={handleFocus}
          onBlur={handleBlur}
          maxLength={maxLength}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              enterClick?.();
            }
          }}
          {...props}
        />
      )}

      {helpMessage && hasError ? <Spacing size="xs" /> : null}
      <Flex justify={helpMessage && hasError ? "space-between" : "end"}>
        {helpMessage && hasError ? (
          <MyText typography="t7" color={labelColor}>
            {helpMessage}
          </MyText>
        ) : null}

        {maxLength !== null && currentLength !== undefined ? (
          <Flex>
            <MyText typography="t7">{currentLength}</MyText>
            <MyText typography="t7" color="textMutedColor">
              /{maxLength}
            </MyText>
          </Flex>
        ) : null}
      </Flex>
    </div>
  );
});
