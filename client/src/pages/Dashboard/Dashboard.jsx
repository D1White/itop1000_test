import { useEffect, useState } from 'react'
import axios from 'axios'

import './dashboard.scss';
import { Header, DashboardCard } from '../../components'

const Dashboard = () => {
    const [statistic, setStatistic] = useState(null);

    useEffect(() => {
        axios.get('/api/profiles/statistic', {
            headers: {
                token: localStorage.getItem('token')
            }
        }).then( statistic => {
            setStatistic(statistic.data);
        })
    }, [])


    return (
        <>
            <Header />
            <div className="dashboard">
                <div className="container">
                    <div className="dashboard__content">
                        <h2 className="block__title">Dashboard:</h2>
                        { statistic && (
                            <div className="dashboard__block">
                                <DashboardCard title={'Users:'} value={statistic.users} />
                                <DashboardCard title={'Profiles:'} value={statistic.profiles} />
                                <DashboardCard title={'Profiles over 18 years old:'} value={statistic.adults} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
