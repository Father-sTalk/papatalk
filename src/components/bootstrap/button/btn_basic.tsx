import { extendVariants, Button } from "@nextui-org/react";

export const BtnBasic = extendVariants(Button, {
  variants: {
    color: {
      none: "text-primary-500 bg-transparent",
    },
    bordered: {
      primary:
        "border border-solid border-primary-500 text-primary-500 bg-transparent",
      secondary:
        "border border-solid border-secondary-500 text-secondary-500 bg-transparent",
      default:
        "border border-solid border-default-300 text-default-300 bg-transparent",
    },
    isDisabled: {
      true: "bg-[#eaeaea] text-[#000] opacity-50 cursor-not-allowed",
    },
    size: {
      xs: "px-unit-2 min-w-unit-12 h-unit-6 text-tiny gap-unit-1 rounded-small",
      md: "px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-small",
      xl: "px-unit-8 min-w-unit-28 h-unit-14 text-large gap-unit-4 rounded-medium",
    },
  },
  defaultVariants: {
    color: "none",
    size: "xl",
  },
  compoundVariants: [
    {
      isDisabled: true,
      color: "none",
    },
  ],
});
