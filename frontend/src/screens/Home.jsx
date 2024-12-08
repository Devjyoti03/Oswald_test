import React from 'react'
import Framework from '../components/Framework'
import Backup from '../components/Backup'
import Features from '../components/Features'
import About from '../components/About'
import Grid from '../components/Grid'
import Commands from '../components/Commands'

const Home = ({contractData}) => {
  return (
    <div className="overflow-x-hidden">
        <Grid/>
        <Framework />
        <Backup contractData={contractData} />
        <Features/>
        <Commands/>
        <About/>
    </div>
  )
}

export default Home
