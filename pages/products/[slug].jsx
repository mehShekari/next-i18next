import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";

const ProductDetail = () => {
  const { t } = useTranslation('common')

  return <div>
    <br />
    <br />

    <p>{t('h1')}</p>
    slug item
    <p>{t('desc')}</p>
  </div>
}

export const getStaticPaths = async (locales) => {
  return {
    paths:
      [
        { params: { slug: "1" }, locale: locales[0] },
        { params: { slug: "1" }, locale: locales[1] }
      ],
    fallback: true
  }
}

export const getStaticProps = async ({ locale, params }) => ({
  props: {
    params,
    ...await serverSideTranslations(locale, ['common']),
  },
});

export default ProductDetail;