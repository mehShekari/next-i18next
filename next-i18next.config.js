const path = require('path');
const HttpBackend = require('i18next-http-backend/cjs')
const ChainedBackend= require('i18next-chained-backend').default
const LocalStorageBackend = require('i18next-localstorage-backend').default

module.exports = {
  backend:
  {
    backendOptions: [{ expirationTime: 60 * 60 * 1000 }], // 1 hour
    backends: typeof window !== 'undefined' ? [LocalStorageBackend, HttpBackend]: [],
  },
  i18n:
  {
    defaultLocale: "en",
    locales:
    [
      "en", "fa"
    ],
  },
  fallbackLng:
  {
    default: ['fa'],
    'en-US': ['en'],
  },
  serializeConfig: false,
  use: typeof window !== 'undefined' ? [ChainedBackend] : [],
}