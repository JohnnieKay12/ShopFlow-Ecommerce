import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals")];

// Add parser metadata to assist ESLint in serialization
eslintConfig.forEach(config => {
  if (config.parser) {
    config.parser = {
      parse: config.parser.parse,
      meta: {
        name: 'custom-parser',
        version: '1.0.0',
      },
    };
  }
});

export default eslintConfig;
