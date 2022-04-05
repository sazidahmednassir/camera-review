import React from 'react';
import { Area, AreaChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        
            {
              "id": 1,
              "name": "OLYMPUS  III",
              "img": "https://m.media-amazon.com/images/I/81svbcgk6LL._AC_SX569_.jpg",
              "price": "400",
              "sale" : "570",
              "category": "Camera",
              "rateings": "5.00"
            },
            {
              "id": 2,
              "name": "Rebel T7",
              "img": "https://m.media-amazon.com/images/I/71EWRyqzw0L._AC_SX569_.jpg",
              "price": "300",
              "sale" : "470",
              "category": "Camera",
              "rateings": "5.00"
            },
            {
              "id": 3,
              "name": "Canon R5",
              "img": "https://m.media-amazon.com/images/I/81depb5FkhL._AC_SX679_.jpg",
              "price": "320",
              "sale" : "380",
              "category": "Camera",
              "rateings": "5.00"
            },
            {
              "id": 4,
              "name": "KODAK Astro ",
              "img": "https://m.media-amazon.com/images/I/81bkjVJQeqS._AC_SX569_.jpg",
              "price": "200",
              "sale" : "270",
              "category": "Camera",
              "rateings": "4.79"
            },
            {
              "id": 5,
              "name": "Minolta",
              "img": "https://m.media-amazon.com/images/I/71TVcl5XRXL._AC_SX569_.jpg",
              "price": "278",
              "sale" : "269",
              "category": "Camera",
              "rateings": "4.75"
            },
            {
              "id": 6,
              "name": "Canon  SX420",
              "img": "https://m.media-amazon.com/images/I/41a0leiV5DL._AC_.jpg",
              "price": "189",
              "sale" : "200",
              "category": "Camera",
              "rateings": "4.50"
            }
       
          
      ];
    return (

        <div className="container">
            <h1 class="text-center">Our Camera Price and sale </h1>
            <div class="d-flex flex-column justify-content-center align-items-center mt-3" >
            
            <LineChart width={390} height={250} data={data} margin={{ top: 10, right: 10, bottom: 5, left: 0 }}>
         <Line type="monotone" dataKey="price" stroke="#8884d8" />
         <Line type="monotone" dataKey="sale" stroke="#8884d8" />
         <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
         <XAxis dataKey="name" />
         <YAxis />
         <Tooltip />
       </LineChart>
       <h1 class="text-center">Our Camera Price  and Rateings</h1>
      
       <AreaChart
      width={400}
      height={250}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
     
         
         
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="rateings" stroke="#8884d8" fill="#8884d8" />
      <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>

         
   
            </div>
         
        </div>
        
     
    );
};

export default Dashboard;