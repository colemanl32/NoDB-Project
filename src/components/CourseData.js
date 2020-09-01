import React, { Component } from 'react'

class CourseData extends Component {
    constructor() {
        super()
        this.state = {
            scores: [],
        }
    }

    handleAddScore(input) {
        this.setState({
            scores: this.scores.push(input)
        })
    }

    handleAvgScore() {
        this.setState({
            avgerageScore: this.state.scores / this.state.scores.length
        })
    }

    render() {
        return (
            <div className = "courseData">
                <img src = {this.props.data.image} alt = "Course View" />
                <p>{this.props.data.name}</p>
                <p>{this.props.data.par}</p>
                <p>{this.props.data.yardage}</p>
                <div className = "scoreInput">
                    <input type = "text"  placeholder = "Input Score" />
                    <button type = "submit" onSubmit = {this.handleAddScore} />
                </div>
                <div className = "scoreAvg">
                    <p>{this.handleAvgScore}</p>
                </div>
            </div>
        )
    }
}
export default CourseData