import React from "react";
import styles from './index.module.scss'

interface Props {

}

const Header: React.FC<Props> = ({}) => {
  return (
    <div className={styles.Header} data-testid="Header">
      <h2>Header</h2>
    </div>
  )
}

export default Header