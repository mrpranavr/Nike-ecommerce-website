import React from 'react'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 mx-auto max-w-[1440px] px-6 py-10 lg:px-12">
        <h1 className='text-heading-1 font-jost mb-8'>Nike</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Nike Air Force 1 Mid '07"
            description="Men's Shoes"
            image="/shoes/shoe-1.jpg"
            price="$130.00"
            badge="Best Seller"
            category="Men's Shoes"
            colorCount={2}
          />
          <Card
            title="Nike Air Max 90"
            description="Women's Shoes"
            image="/shoes/shoe-5.avif"
            price="$120.00"
            category="Women's Shoes"
            colorCount={5}
          />
          <Card
            title="Nike Huarache Run"
            description="Kids' Shoes"
            image="/shoes/shoe-8.avif"
            price="$90.00"
            badge="New Arrival"
            category="Kids' Shoes"
            colorCount={3}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
