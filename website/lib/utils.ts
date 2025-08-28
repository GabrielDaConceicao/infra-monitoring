import { cva, VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

// função utilitária para combinar classes
export function cn(...inputs: any[]) {
  return clsx(inputs);
}

export { cva };