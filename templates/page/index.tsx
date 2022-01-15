import React from "react";
import type { NextPage } from 'next'
import styles from './index.module.scss'
import Layout from "../../components/Layout";

interface Props {

}

const TemplateName: NextPage = () => {
  return (
    <Layout className={styles.TemplateName} data-testid="TemplateName">
      <h2>TemplateName</h2>
    </Layout>
  )
}

export default TemplateName