import React, { useState } from "react";
import Map from "./map.js";

// import results1996 from './results1996.json'
// import results2000 from './results2000.json'
// import results2004 from './results2004.json'
// import results2008 from './results2008.json'
// import results2012 from './results2012.json'
// import results2016 from './results2016.json'
import results2020 from './results2020.json'

function RenderMap() {
  const [content, setContent] = useState("");
    return (
      <div>
        <Map data={results2020} />
      </div>
    );
}


export default RenderMap;