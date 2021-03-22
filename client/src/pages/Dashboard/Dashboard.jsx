import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './dashboard.scss';
import { Header, DashboardCard } from '../../components'
import { fetchStatistic } from '../../redux/actions/info'

const Dashboard = () => {
    const dispatch = useDispatch();

    const { statistic } = useSelector(({ info }) => info);

    useEffect(() => {
        dispatch(fetchStatistic())
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
