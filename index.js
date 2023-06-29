const express = require('express')
const cors = require('cors')

const app = express()
const port = 5000

app.use(cors())

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ptm001225:catinipa5907!@cluster0.8hvi4ic.mongodb.net/?retryWrites=true&w=majority', {
}).then(() => console.log('MongoDB Connected...')) // 연결이 잘 됐는지 안됐는지
  .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// app.get('/user/:id', (req, res) => {
//     // const q = req.params
//     // console.log(q)
//     const q = req.query
//     console.log(q)

//     res.json({'name': q.name})
// })

// app.get('/sound/:name', (req, res) => {
//     const { name } = req.params

//     if (name == 'dog'){
//         res.json({'sound': '멍멍'})
//     } else if (name == 'cat'){
//         res.json({'sound': '야옹'})
//     } else if (name == 'pig'){
//         res.json({'sound': '꿀꿀'})
//     } else {
//         res.json({'sound': '알수없음'})
//     }
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})