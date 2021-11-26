import { db } from '../database/firebase'
import { Ticket } from 'types'

export default {
	async create(ticket: Ticket): Promise<void> {
		const storesRef = db.collection('tickets')

		await storesRef.add(ticket)

		return
	}
}
