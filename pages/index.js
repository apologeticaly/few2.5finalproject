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
    </div>
  )
}
