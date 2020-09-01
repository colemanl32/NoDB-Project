import React from 'react'

const ScoreItem = (props) => {
  const { scoreId } = props.data
  console.log(props)
  return (
    <div className="score-item">
      <img src={props.data.image} alt = "Course View"/>
      <div>
        <p>{props.data.name}</p>
        <p>{props.data.yardage}</p>
        <p>${props.data.par}</p>
        <div className="resetScore">
          <button onClick = {() => props.changeScore(ScoreItem)} />
        </div>
      </div>
    </div>
  )
}
export default ScoreItem