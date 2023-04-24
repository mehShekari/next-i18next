import '@/styles/globals.css'
import { appWithTranslation } from "next-i18next";
import nextI18nConfig from '../next-i18next.config'

const App = ({ Component, pageProps }) =>
{
  return <Component {...pageProps} dir="rtl" />
}

export default appWithTranslation(App, nextI18nConfig);
