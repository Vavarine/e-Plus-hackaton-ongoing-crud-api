import { Request, Response } from 'express'
import { db } from '../database/firebase'
import { Store } from 'types'
import * as yup from 'yup'

export default {
	async index(): Promise<Store[]> {
		const storesRef = db.collection('stores')
		const snapshot = await storesRef.get()

		const stores: Store[] = []

		snapshot.forEach((store) => {
			stores.push({ ...(store.data() as Store), id: store.id })
		})

		return stores
	},

	async create(store: Store): Promise<void> {
		const storesRef = db.collection('stores')

		await storesRef.add(store)

		return
	}
}
