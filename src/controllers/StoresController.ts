import { Request, Response } from 'express'
import { db } from '../services/firebase'
import { Store } from 'types'
import * as yup from 'yup'

export default {
	async index(req: Request, res: Response) {
		const storesRef = db.collection('stores')
		const snapshot = await storesRef.get()

		const stores: Store[] = []

		snapshot.forEach((store) => {
			stores.push({ ...(store.data() as Store), id: store.id })
		})

		return res.json(stores)
	},

	async create(req: Request, res: Response) {
		const { name, initialDay, hours }: Store = req.body

		console.log(req.body)

		const schema = yup.object().shape({
			name: yup.string().required(),
			initialDay: yup.number().required().min(1).max(31),
			hours: yup.number().required().min(1)
		})

		const store: Store = {
			name,
			initialDay,
			hours
		}

		await schema.validate(store, {
			abortEarly: false
		})

		const storesRef = db.collection('stores')

		await storesRef.add(store)

		return res.json({ message: 'success' })
	}
}
