import Aboutus from '@/components/Aboutus'
import Afterhero from '@/components/Afterhero'
import Blog from '@/components/Blog'
import Casestudies from '@/components/Casestudies'
import Freeconsultant from '@/components/Freeconsultant'
import Herosection from '@/components/Herosection'
import Howcanwehelp from '@/components/Howcanwehelp'
import Percentagebox from '@/components/Percentagebox'
import Qualifiedattorneys from '@/components/Qualifiedattorneys'
import Testimonial from '@/components/Testimonial'
import React from 'react'

const Homepage = () => {
  return (
    <div>
      <Herosection/>
      <Afterhero/>
      <Aboutus/>
      <Howcanwehelp/>
      <Casestudies/>
      <Testimonial/>
      <Freeconsultant/>
      <Qualifiedattorneys/>
      <Percentagebox/>
      <Blog/>
    </div>
  )
}

export default Homepage
