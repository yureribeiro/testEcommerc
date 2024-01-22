import { Metadata } from 'next'

import { RenderParams } from '../../_components/RenderParams'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import CreateAccountForm from './CreateAccountForm'

import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.scss'

export default async function CreateAccount() {
  await getMeUser({
    validUserRedirect: `/account?warning=${encodeURIComponent(
      'Cannot create a new account while logged in, please log out and try again.',
    )}`,
  })

  return (
    <section className={styles.createAccount}>
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
            <h3>Criar conta!</h3>
            <Image src='/assets/icons/hand.png' alt='hand' width={30} height={30} />
          </div>
          <p>Porfavor cria uma conta para continuar</p>
          <CreateAccountForm />
        </div>
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Conta',
  description: 'Crie uma conta ou faça login para continuar.',
  openGraph: mergeOpenGraph({
    title: 'Account',
    url: '/account',
  }),
}
