import React from "react";
import styles from './index.module.scss'

interface Props {

}

const Sidebar: React.FC<Props> = ({}) => {
  return (
    <div className={styles.Sidebar} data-testid="Sidebar">
      <h2>Sidebar</h2>
    </div>
  )
}

export default Sidebar