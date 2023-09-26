import React from 'react'
import { Carousel, Movies } from '../components'
const Home = () => {
  return (
   <>
  <Carousel/>
  <Movies name="Trending" onbasisof="watchedCount" />
      <Movies name="This Year" onbasisof="year" />
   </>
  )
}

export default Home