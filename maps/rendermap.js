import React, { useState } from "react";
import Map from "./map.js";

import results1996 from './results1996.json'
// import results2000 from './results2000.json'
// import results2004 from './results2004.json'
// import results2008 from './results2008.json'
// import results2012 from './results2012.json'
// import results2016 from './results2016.json'
import results2020 from './results2020.json'

class RenderMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: results1996};

    this.handleClick1996 = this.handleClick1996.bind(this) 
    this.handleClick2020 = this.handleClick2020.bind(this) 
  }

  handleClick1996(){ 
    // Changing state 
    this.setState({data: results1996}) 
  } 

  handleClick2020(){ 
    // Changing state 
    this.setState({data: results2020}) 
  } 
  
  render()  {
    return (
      <>
      <div>
        <Map data={this.state.data} />
      </div>
        <div className="row btn-row">
        <button onClick={this.handleClick1996}>1996</button>
        {/* <button>2000</button>
        <button>2004</button>
        <button>2008</button>
        <button>2012</button>
        <button>2016</button> */}
        <button onClick={this.handleClick2020}>2020</button>
      </div>
      </>
    );
  } 
}


export default RenderMap;