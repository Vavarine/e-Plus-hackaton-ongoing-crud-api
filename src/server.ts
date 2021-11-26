import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import errorHandler from './errors/errorHandler'

import routes from './routes/index.routes'

const app = express()

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
	return res.json({ message: 'aooba' })
})

app.use('/api', routes)
app.use(errorHandler)

app.listen(process.env.PORT || 3333, () => {
	console.log(`🚀 Server started on port ${process.env.PORT || 3333}!`)
})
