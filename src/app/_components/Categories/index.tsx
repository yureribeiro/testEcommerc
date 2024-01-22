import Link from 'next/link'

import { Category } from '../../../payload/payload-types'

import CategoryCard from './CategoryCard'
import classes from './index.module.scss'

const Categories = ({ categories }: { categories: Category[] }) => {
  return (
    <section className={classes.container}>
      <div className={classes.titleWrapper}>
        <h3>Compre por categorias</h3>
        <Link href="/products">Ver tudo</Link>
      </div>

      <div className={classes.list}>
        {categories ? categories.map(category => {
          return <CategoryCard key={category.id} category={category} />
        }) : (
          <p>Nenhuma categoria registrada...</p>
        )}
      </div>
    </section>
  )
}

export default Categories
