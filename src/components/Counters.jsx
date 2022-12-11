import React from 'react'


export default class Counters extends React.Component{
  render(){
    const { total,doneCount} = this.props;
     return (
      <div className="counters">
        <div>All: {total}</div>
        <div>Done: {doneCount}</div>
        <div>Left: {total - doneCount}</div>
      </div>
     )
   }
}