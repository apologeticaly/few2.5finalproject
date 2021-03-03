import Head from 'next/head'
import RenderMap from '../maps/rendermap.js';

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md">
          <RenderMap />
        </div>
      </div>

      <div className="row btn-row">
        <button>1996</button>
        <button>2000</button>
        <button>2004</button>
        <button>2008</button>
        <button>2012</button>
        <button>2016</button>
        <button>2020</button>
      </div>
    </div>
  )
}
