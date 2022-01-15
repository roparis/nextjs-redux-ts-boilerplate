import React from "react";
import styles from './index.module.scss'
import Layout from "../../components/Layout";

interface Props {

}

const Licenses: React.FC<Props> = ({}) => {
  return (
    <Layout className={styles.Licenses} data-testid="Licenses">
      <h2>Licenses</h2>
    </Layout>
  )
}

export default Licenses