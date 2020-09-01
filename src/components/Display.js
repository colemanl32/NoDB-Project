import React, { Component } from 'react'
import Courses from './Courses'
import axios from 'axios'
import AvgScore from './Scores'

class Display extends Component {
    constructor() {
        super()
        this.state = {
            scores: [],
            courses: []
        }
        this.addScore = this.addScore.bind(this)
        this.changeScore = this.changeScore.bind(this)
        this.deleteScore = this.deleteScore.bind(this)
        this.resetScore = this.resetScore.bind(this)
    }





    componentDidMount() {
        axios.get('/api/Courses').then((res) => {
            axios.get('/api/Scores').then((scoresRes) => {
                this.setState({
                    courses: res.data,
                    scores: scoresRes.data,
                })
            })
        })

    }

    addScore(courseId, input) {
        axios.post('/api/Scores', { courseId, input}).then((res) => {
            this.setState({
                scores: res.data,
            })
        })
    }

    changeScore(scoreId, input) {
        axios.put(`/api/Scores/`).then((res) => {
            this.setState({
                scores: res.data,
            })
        })

    }

    deleteScore(scoreId) {
        axios.delete(`/api/Scores/${scoreId}`).then((res) => {
            this.setState({
                scores: res.data,
            })
        })
    }

    resetScore() {
        axios.delete('/api/Scores').then((res) => {
            this.setState({
                scores: res.data,
            })
        })

    }

    render() {
        return(
            <div className = "display">
                <Courses addScore={this.addScore} courses = {this.state.courses} />
                <AvgScore
                    changeScore = {this.changeScore}
                    deleteScore = {this.deleteScore}
                    resetScore = {this.resetScore}
                    scores = {this.state.scores}
                />
            </div>
        )
    }

}
export default Display