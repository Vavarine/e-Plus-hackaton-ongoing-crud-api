import { Request, Response } from 'express'
import { db } from 'services/firebase'
import { Store } from 'types'
import * as yup from 'yup'

export default {
	async create(req: Request, res: Response) {
		const { storeId } = req.params
		// const { name, initialDay, hours }: Store = req.body

		// const schema = yup.object().shape({
		// 	name: yup.string().required(),
		// 	initialDay: yup.number().required().min(1).max(31),
		// 	hours: yup.number().required().min(1)
		// })

		// const store: Ticket = {
		// 	name,
		// 	initialDay,
		// 	hours
		// }

		// await schema.validate(store, {
		// 	abortEarly: false
		// })

		// const storesRef = db.collection('ticket')

		// await storesRef.add(store)

		return res.json({ message: 'hello' })
	}
}
