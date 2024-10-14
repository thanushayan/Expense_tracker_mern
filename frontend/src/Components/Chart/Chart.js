 import React from 'react'
 import {Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, 
    ArcElement,} from 'chart.js';


 import {Line} from 'react-chartjs-2';   
import styled from 'styled-components';

 ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, 
    ArcElement,

 )
 
 function Chart() {
   return (
     <ChartStyled>
        <Line/>
     </ChartStyled>
   )
 }
 
 const ChartStyled = styled.div`
 background:#FCF6F9;
 border:2px solid #FFFFFF;
 box-shadow:0px 1px 15px rgba(0,0,0,0.06);
 padding:1rem;
 border-radius:20px;
 height:100%;`;
 export default Chart
 