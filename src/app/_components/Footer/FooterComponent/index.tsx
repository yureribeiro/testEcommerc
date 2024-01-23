'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Footer, Media } from '../../../../payload/payload-types'
import { inclusions, noHeaderFooterUrls } from '../../../constants'
import { Button } from '../../Button'
import { Gutter } from '../../Gutter'
import styles from './index.module.scss'


const FooterComponent = ({ footer }: { footer: Footer }) => {
  const pathname = usePathname()
  const navItems = footer?.navItems || []

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? styles.hide : ''}>
      <Gutter>
        <ul className={styles.inclusions}>
          {inclusions.map((inclusion) => (
            <li key={inclusion.title}  className={styles.contentInclusion}>
              <Image src={inclusion.icon} alt={inclusion.title} width={36} height={36} className={styles.icon} />
              <h5 className={styles.title}>{inclusion.title}</h5>
              <p className={styles.description}>{inclusion.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>

      <div className={styles.footer}>
        <Gutter>
          <div className={styles.wrap}>
            <Link href='/'>
              <Image src='/logo-white.svg' alt="logo" className={styles.logo} width={170} height={50} />
            </Link>
            <p>{footer.copyright}</p>
          </div>

          <div className={styles.socialLinks}>
            {navItems.map((item) => {
              const icon = item?.link?.icon as Media

              return (
                <Button
                  key={item.link.label}
                  el='link'
                  href={item.link.url}
                  newTab={true}
                  className={styles.socialLinkItem}
                >
                  <Image
                    src={icon?.url}
                    alt={item.link.label}
                    width={24}
                    height={24}
                    className={styles.socialIcon}
                  />
                </Button>
              )
            })}
          </div>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent