import React, { useEffect, useState } from 'react';


const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const result = await res.json();
            setData(result.statewise[0]);
        }
        catch (err) {
            console.log(err);
        }

    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>

            <div className='container'>
                <div className='row text-center'>
                    <h1 className='live my-5'>🛑 Live</h1>
                    <h2 className='mb-5'>COVID-19 Tracking</h2>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='zoom activeCase'>
                            <li className='p-5  m-3 '>
                                <h3>Active Cases</h3>
                                <h2>{data.active}</h2>
                            </li>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='zoom confirmedCase'>
                            <li className='p-5 m-3 '>
                                <h3>Confirmed Cases</h3>
                                <h2>{data.confirmed}</h2>
                            </li>
                        </div>

                    </div>
                    <div className='col-md-4'>
                        <div className='zoom deathsCase'>
                            <li className='p-5 m-3 '>
                                <h3>Deaths</h3>
                                <h2>{data.deaths}</h2>
                            </li>
                        </div>

                    </div>

                </div>
            </div>
        </>

    )
}
export default Covid