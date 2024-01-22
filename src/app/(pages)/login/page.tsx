import { Metadata } from 'next'

import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'

import Image from 'next/image'
import Link from 'next/link'
import { RenderParams } from '../../_components/RenderParams'
import LoginForm from './LoginForm'
import styles from './index.module.scss'

export default async function Login() {
  await getMeUser({
    validUserRedirect: `/account?warning=${encodeURIComponent('You are already logged in.')}`,
  })

  return (
    <section className={styles.login}>
      <div className={styles.heroImg}>
        <Link href="/">
          <Image
            src='/logo-black.svg'
            alt="logo"
            width={250}
            height={23}
            className={styles.logo}
          />
        </Link>
      </div>

      <div className={styles.formWrapper}>
        <div className={styles.formContainer}>
          <RenderParams className={styles.params} />
          <div className={styles.formTitle}>
            <h3>Bem Vindo!</h3>
            <Image src='/assets/icons/hand.png' alt='hand' width={30} height={30} />
          </div>
          <p>Faça login para continuar</p>
          <LoginForm />
        </div>
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Entrar',
  description: 'Entre ou crie uma conta para começar.',
  openGraph: mergeOpenGraph({
    title: 'Login',
    url: '/login',
  }),
}
