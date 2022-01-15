import React from "react";
import styles from './index.module.scss'

interface Props {

}

const TemplateName: React.FC<Props> = ({}) => {
  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      <h2>TemplateName</h2>
    </div>
  )
}

export default TemplateName