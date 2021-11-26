import { db } from '../database/firebase'
import { Ticket } from 'types'

export default {
	async index(): Promise<Ticket[]> {
		const ticketsRef = db.collection('tickets')

		const snapshot = await ticketsRef.get()

		const tickets: Ticket[] = []

		snapshot.forEach((ticket) => {
			tickets.push(ticket.data() as Ticket)
		})

		return tickets
	},

	async create(ticket: Ticket): Promise<void> {
		const ticketsRef = db.collection('tickets')

		await ticketsRef.add(ticket)

		return
	},

	async showByStoreId(storeId: string): Promise<Ticket[]> {
		const ticketsRef = db.collection('tickets').where('storeId', '==', storeId)

		const snapshot = await ticketsRef.get()

		const tickets: Ticket[] = []

		snapshot.forEach((ticket) => {
			tickets.push(ticket.data() as Ticket)
		})

		return tickets
	},

	async showByStoreIdBetweenDates(
		storeId: string,
		fromDate: string,
		toDate: string
	): Promise<Ticket[]> {
		const ticketsRef = db.collection('tickets').where('storeId', '==', storeId)

		const snapshot = await ticketsRef.get()

		let tickets: Ticket[] = []

		snapshot.forEach((ticket) => {
			tickets.push(ticket.data() as Ticket)
		})

		tickets = tickets.filter((ticket) => ticket.date >= fromDate && ticket.date <= toDate)

		return tickets
	}
}
