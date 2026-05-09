import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const compat = new FlatCompat({
  // This replicates the behavior of the old "extends" logic
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended
});

const eslintConfig = [...compat.extends("next/core-web-vitals")];

export default eslintConfig;
