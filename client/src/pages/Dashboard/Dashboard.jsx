import React from 'react'

import { Header, DashboardCard } from '../../components'

const Dashboard = () => {
    return (
        <>
            <Header />
            <div className="dashboard">
                <div className="container">
                    <div className="dashboard__content">
                        <h2 className="block__title">Dashboard:</h2>
                        <div className="dashboard__block">
                            <DashboardCard title={'Users:'} value={13} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
