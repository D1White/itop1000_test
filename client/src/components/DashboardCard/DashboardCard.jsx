import React from 'react'

import './dashboard_card.scss'

const DashboardCard = ({ title, value }) => (
  <div className="dashboardCard">
    <span className="dashboardCard__title">{title}</span>
    <span className="dashboardCard__value">{value}</span>
  </div>
)

export default DashboardCard
