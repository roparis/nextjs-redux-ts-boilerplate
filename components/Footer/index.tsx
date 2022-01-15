import React from "react";
import styles from './index.module.scss'

interface Props {

}

const Footer: React.FC<Props> = ({}) => {
  return (
    <div className={styles.Footer} data-testid="Footer">
      <h2>Footer</h2>
    </div>
  )
}

export default Footer