import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCubes, faChartBar, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

import Chart from 'react-apexcharts'; 

const Dashboard = ({products, transactions}) => {

  // ---------------------------------------------------------------------------------------------------------------------------------------------
  // HOVER STYLES LANG YAA
  const [isHovered1, setHover1] = useState(false);
  const [isHovered2, setHover2] = useState(false);
  const [isHovered3, setHover3] = useState(false);
  const [isHovered4, setHover4] = useState(false);
  const [isHovered5, setHover5] = useState(false);
  const [isHovered6, setHover6] = useState(false);

  const boxStyles = {
    borderRadius: '20px',
    minHeight: '130px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    
  };
  
  const hoverStyles = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19)',
  };



// ----------------------------------------------------------------------------------------------------------------------------------------------
// BAR GRAPHS
  const groupedTransactions = [];
  for (const transaction of transactions) {
    let existingProduct = null;
  
    for (const groupedTransaction of groupedTransactions) {
      if (groupedTransaction.name === transaction.name) {
        existingProduct = groupedTransaction;
        break;
      }
    }
  
    if (existingProduct) {
      existingProduct.quantity += transaction.quantity;
    } else {
      groupedTransactions.push({
        name: transaction.name,
        quantity: transaction.quantity,
        price: transaction.price,
      });
    }
  }


  const barChartOptions = {
    series: [{
      name: 'Inflation',
      data:  groupedTransactions.map((transaction) => transaction.quantity * transaction.price),
    }],
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: 'top', 
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return "₱" + val ;
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ["#304758"],
      },
    },
    xaxis: {
      categories: groupedTransactions.map((transaction) => transaction.name),
      position: 'top',
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        },
      },
    },
  };


  const lineChartOptions = {
    series: [
      {
        name: 'Desktops',
        data: products.map((product) => product.stock),
      },
    ],
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    title: {
      text: 'Line Graph for Stocks',
      align: 'left',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: products.map((product) => product.name),
    },
  };
  return (<>
    
        <div className="Container-fluid mt-5 " style={{ height: '100vh', width:'85vw', marginLeft:'5%'  }}>
          <div className="row " >
            <div className="col-md-6 col-lg-3 col-sm-10 mb-4 ">
              <div  className="p-3" 
              style={{...boxStyles,
                      ...(isHovered1 ? hoverStyles : {}), 
                      borderRadius: '20px', 
                      minHeight: '130px', 
                      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.05)' }}
                      onMouseEnter={() => setHover1(true)}
                      onMouseLeave={() => setHover1(false)}>
                        
                <FontAwesomeIcon icon={faBoxOpen} className="mb-2" style={{ fontSize: '23px' }} />
                <span className="d-block mb-" style={{ fontSize: '10px' }}>Add, Update, and Delete products</span>
                <b className="d-block" style={{ fontSize: '19px' }}>Product Management</b>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-10 mb-4 ">
              <div className="p-3" 
              style={{...boxStyles,
                ...(isHovered2 ? hoverStyles : {}), 
                borderRadius: '20px', 
                minHeight: '130px', 
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.05)' }}
                onMouseEnter={() => setHover2(true)}
                onMouseLeave={() => setHover2(false)}>

                <FontAwesomeIcon icon={faChartBar} className="mb-2" style={{ fontSize: '23px' }} />
                <span className="d-block mb-" style={{ fontSize: '10px' }}>Add, Update, and Delete Categories.</span>
                <b className="d-block" style={{ fontSize: '19px' }}>Category Management</b>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-10 mb-4 ">
              <div className="p-3" 
              style={{...boxStyles,
                ...(isHovered3 ? hoverStyles : {}), 
                borderRadius: '20px', 
                minHeight: '130px', 
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.05)' }}
                onMouseEnter={() => setHover3(true)}
                  onMouseLeave={() => setHover3(false)}>

                <FontAwesomeIcon icon={faCubes} className="mb-2" style={{ fontSize: '23px' }} />
                <span className="d-block" style={{ fontSize: '10px' }}>Edit product stocks</span>
                <b className="d-block" style={{ fontSize: '19px' }}>Stocks Management</b>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-10 mb-4 ">
              <div className="p-3" style={{...boxStyles,
                      ...(isHovered4 ? hoverStyles : {}), 
                      borderRadius: '20px', 
                      minHeight: '130px', 
                      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.05)' }}
                      onMouseEnter={() => setHover4(true)}
                      onMouseLeave={() => setHover4(false)}>

                <FontAwesomeIcon icon={faExchangeAlt} className="mb-2" style={{ fontSize: '23px' }} />
                <span className="d-block" style={{ fontSize: '10px' }}>Add, update, and delete products</span>
                <b className="d-block" style={{ fontSize: '19px' }}>Transactions Management</b>
              </div>



            </div>
            
          </div>


          <div className="row" style={{ height: '395px' }}>
            
          <div className="col-md-6 col-lg-6 col-sm-10 mb-4" style={{ height: '100%' }}>
              <div
                className="p-3 "
                style={{
                  height: '100%',
                  ...boxStyles,
                  ...(isHovered5 ? hoverStyles : {}), 
                  borderRadius: '20px', 
                  minHeight: '130px', 
                  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.05)'
                }}
                      onMouseEnter={() => setHover5(true)}
                      onMouseLeave={() => setHover5(false)}
              >
                <b className='ms-2' style={{fontSize:'14px'}}>Bar Graph for Sales</b>
                <Chart options={barChartOptions} series={barChartOptions.series} type="bar" height={350} />
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-10 mb-4" style={{ height: '100%' }}>
              <div
                className="p-3 "
                style={{
                  height: '100%',
                  ...boxStyles,
                      ...(isHovered6 ? hoverStyles : {}), 
                      borderRadius: '20px', 
                      minHeight: '130px', 
                      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.05)'
                }}
                      onMouseEnter={() => setHover6(true)}
                      onMouseLeave={() => setHover6(false)}
              >
                <Chart
                  options={lineChartOptions}
                  series={lineChartOptions.series}
                  type="line"
                  height={350}
                />
              </div>
          </div>

            
          </div>








        </div>
        </>
     
    
  );
};

export default Dashboard;





 