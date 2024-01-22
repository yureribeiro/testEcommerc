import { Banner } from 'payload/components'
import React from 'react'

import './index.scss'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>Bem vindo ao seu painel!</h4>
      </Banner>
    </div>
  )
}

export default BeforeDashboard
