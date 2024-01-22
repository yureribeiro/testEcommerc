'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Header } from "../../../../payload/payload-types"
import { noHeaderFooterUrls } from "../../../constants"
import { Gutter } from "../../Gutter"
import { HeaderNav } from "../Nav"
import styles from './index.module.scss'

const HeaderComponent = ({ header }: { header: Header }) => {
  const pathname = usePathname()

  return (
    <nav className={[styles.header, noHeaderFooterUrls.includes(pathname) && styles.hide].filter(Boolean).join(' ')}>
      <Gutter className={styles.wrap}>
        <Link href="/">
          <Image src='/logo-black.svg' alt="logo" className={styles.logo} width={170} height={40} />
        </Link>
        <HeaderNav header={header} />
      </Gutter>
    </nav>
  )
}

export default HeaderComponent