import React from 'react'
import Framework from '../components/Framework'
import Card from '../components/Card'
import Backup from '../components/Backup'
import Features from '../components/Features'
import About from '../components/About'
import Grid from '../components/Grid'
import Chains from '../components/Chains'

const Home = () => {
  return (
    <div className="overflow-x-hidden">
        <Card/>
        <Framework />
        <Grid/>
        <Backup/>
        <Chains/>
        <Features/>
        <About/>
    </div>
  )
}

export default Home
