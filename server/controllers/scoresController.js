const scores = require('../data.json')

const totalScores = { total: 0, score: [] }
let scoreId = 0

const updateScore = () => {
    const total = totalScores.score.reduce((acc, element) => {
        return acc / totalScores.score.length
    }, 0)

    scores.total = total.toFixed(2)
}

module.exports = {
    getScore: (req, res) => {
      res.status(200).send(scores)
    },
    addScore: (req, res) => {
      const { scoreId, quantity } = req.body
  
      const index = scores.items.findIndex((element) => element.id === +scoreId)
  
      if (index === -1) {
        const score = scores.find((element) => element.id === +scoreId)
  
        product.scoreId = scoreId
        
  
        cart.items.push(score)
  
        scoreId++
      } else {
        scores.items[index].quantity += +quantity
      }
  
      updateScore()
  
      res.status(200).send(scores)
    },
    changeScore: (req, res) => {
      const { score_id } = req.params
      const { action } = req.query
  
      const index = scores.items.findIndex((element) => element.scoreId === +score_id)
  
      if (index === -1) {
        return res.status(404).send('Not possible')
      }
  
      
  
      updateScore()
  
      res.status(200).send(scores)
    },
    removeScore: (req, res) => {
      const { score_id } = req.params
  
      const index = scores.items.findIndex((element) => element.scoreId === +score_id)
  
      if (index === -1) {
        return res.status(404).send('Not Possible')
      }
  
      scores.items.splice(index, 1)
  
      updateCartTotal()
  
      res.status(200).send(scores)
    },
    avgScore: (req, res) => {
      scores.total = 0
      scores.items = []
  
      res.status(200).send(scores)
    },
  }
  