import { Badge, Calendar } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import './calendarstyle.css';
import { dummyData } from './data.js';



const getListData = (value) => {
  let listData = [];
  let newDate = `${value.date()}-${value.month() + 1}-${value.year()}`;
  console.log(newDate)
  const _blockDate = value.month();
  console.log("_blockDate", _blockDate);

  for (let _k in dummyData) {
    const k = dummyData[_k];
    if (k.createdAt === newDate) {
      listData.push(k);
    }
  }
  // listData=dummyData.map((k)=> k.createdAt === _blockDate);


  return listData
};

const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};
export default function CalenderComp() {

  console.log(dummyData);
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };


  const cardElement = (cardData) => {
    return (
      <div className='container' >

        <div className='img-div'>
          <img className='blogimage' src={cardData.imgurl}  alt=" "></img>
        </div>
        <h4> {cardData.title} </h4>
        <p >{cardData.description}...</p>
        <div className='lower-div' >
          <span className='authname' >
             {cardData.authorName}
          </span>

          <span class='read-time' >
            {cardData.readingTime} read
          </span>
        </div>

      </div>




    )
  }


  const dateCellRender = (value) => {
    const listData = getListData(value);
    console.log("xhxhx", listData);

    return (

      <ul className="events">
        {listData.map((item) => (
          cardElement(item)
        ))}
      </ul>
    );
  };

  return <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />;
};

