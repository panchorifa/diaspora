import React from 'react'

export default class Barchart extends React.Component {
  render() {
    return (
      <div className="row">
          <div className="col-md-12">
              <div className="my-4">
                  <div className="chart-wrapper" style={{height:'400px'}}>
                      <canvas id="main-chart" height="400"></canvas>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
