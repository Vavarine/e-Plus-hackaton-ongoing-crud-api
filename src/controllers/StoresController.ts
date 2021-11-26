import { db } from '../database/firebase'
import { Store } from 'types'

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
	},

	async show(storeId: string): Promise<Store> {
		const storesRef = db.collection('stores')
		const snapshot = await storesRef.doc(storeId).get()

		const store = snapshot.data() as Store

		return store
	}
}
