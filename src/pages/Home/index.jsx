import React from 'react'
import AccountStat from './AccoutStat'
import Chart from './Chart'
import Table from './Table'

import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <AccountStat />
        <Chart />
        <Table />
      </div>
    </div>
  )
}

export default Home
