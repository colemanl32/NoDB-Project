import React from 'react'
import ScoreItem from './ScoreInfo'

const AvgScore = (props) => {
    return (
    <div className = "score-container">
        <div className = "scores">
            <h2>Your Average Score</h2>
            {props.scores.map((element) => {
                return (
                    <ScoreItem
                        changeScore = {props.changeScore}
                        removeScore = {props.removeScore}
                        key = {element.scoreId}
                        data = {element}
                    />
                )
            })}
        </div>
        <div className = "averageScore">
            Your average score is: {props.scores.total}
        </div>
    </div>
    )
}
export default AvgScore