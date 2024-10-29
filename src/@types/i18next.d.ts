import translation from "../i18n/fr/translation.json";

const locales = {
  translation,
} as const;

declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof locales;
  }
}
