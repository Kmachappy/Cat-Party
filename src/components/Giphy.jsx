import {useState,useEffect} from 'react'

const Giphy = ({ giphy }) => {

  return ( !!giphy ?
    <div className="giphy-display">
      {giphy.map((giph,index)=>{
        return<img src={giph.data.images.original.url} key={index}/>

      })}
    </div> : <div className="click-button">
      <h1>Click the BUTTON</h1>
    </div>
  );
};
export default Giphy;
