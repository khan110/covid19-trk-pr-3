import React, { useState, useEffect } from 'react';

import styles from './Charts.module.css';
import { fetchDailyData } from '../../API';
import { Line } from 'react-chartjs-2';


export const Charts = () => {
    const [dailyData, setDailyData] = useState([]);
    
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
       
        fetchAPI();
    } , [dailyData]);

     const lineChart = (
         dailyData.length
         ? (
             <Line
             data={{
                 labels: dailyData.map(({ date }) => date) ,
                  datasets: [{
                   data: dailyData.map(({ confirmed }) => confirmed) ,
                   label : 'Infected',
                   borderColor: '#3333ff',
                   fill: true,
                 } , {
                    data: dailyData.map(({ deaths }) => deaths) ,
                    label : 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(225, 0, 0, 0.5)',
                    fill: true,

                 }],
             }}
        />): null
     );      
         
         
    return (
        <div className={styles.container}>
            {lineChart}



        </div>
    )
    
    }