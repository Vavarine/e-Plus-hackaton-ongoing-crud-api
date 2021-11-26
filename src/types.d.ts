export interface Store {
	id?: string
	name: string
	initialDay: string
	hours: number
}

export interface Ticket {
	storeId: string
	number: number
	hours: number
	date: string
}
