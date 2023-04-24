import styles from '@/styles/Home.module.css'
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

const Products = (props) => {
  const { t } = useTranslation(['common']);
  console.log(props);
  return (
    <>
      <br />
      <br />

      <p>{t('h1')}</p>
      <p>{t('desc')}</p>

      <br />
      <br />

      <Link href="/products/1">{t("link_title")}</Link>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
});

export default Products