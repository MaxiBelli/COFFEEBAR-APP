import Image from 'next/image'
import Layout from '@/layout/Layout'
import useCoffeeBar from '@/hooks/useCoffeeBar'

export default function Home() {

  const { currentCategory } = useCoffeeBar();

  return (
    <Layout page={`Menu ${currentCategory?.name}`}>
    <h1 className="text-4xl font-black">{currentCategory?.name}</h1>
    <p className="text-2xl my-10">
      Choose and customize your order below
    </p>
   </Layout>
  )
}
