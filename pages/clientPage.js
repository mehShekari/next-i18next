import styles from '@/styles/Home.module.css'
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Client = () =>
{
  const { t, ready } = useTranslation('common');

  return (
    <>
      <main>
        <p className={styles.description}> {t('h1')}</p>
      </main>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
});

export default Client