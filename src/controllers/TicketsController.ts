import { Request, Response } from 'express'
import { db } from 'services/firebase'
import { Store, Ticket } from 'types'
import * as yup from 'yup'

export default {
	async create(req: Request, res: Response) {
		const { storeId } = req.params
		const { number, hours, date } = req.body

		console.log({
			storeId,
			number,
			hours,
			date
		})

		// const schema = yup.object().shape({
		// 	storeId: yup.string().required(),
		// 	number: yup.number().required(),
		// 	hours: yup.number().required(),
		// 	date: yup.string().required()
		// })

		// const ticket: Ticket = {
		// 	storeId,
		// 	number,
		// 	hours,
		// 	date
		// }

		// await schema.validate(ticket, {
		// 	abortEarly: false
		// })

		// const storesRef = db.collection('ticket')

		// await storesRef.add(ticket)

		return res.json({ message: 'success' })
	}
}
