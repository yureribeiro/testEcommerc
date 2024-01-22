'use client'

import Link from 'next/link'
import React from 'react'

import { Header as HeaderType } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'

import { Button } from '../../Button'
import styles from './index.module.scss'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()

  return (
    <nav
      className={[
        styles.nav,
        user === undefined && styles.hide,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="none" />
      })}
      <CartLink />
      {user && <Link href="/account">Conta</Link>}
      {!user && <Button
        el='link'
        href='/login'
        label='Entrar'
        appearance='primary'
        onClick={() => {
          window.location.href = '/login'
        }}
      />}
      {user && <CartLink />}
    </nav>
  )
}
