export interface Store {
	id?: string
	name: string
	initialDay: number
	hours: number
}

export interface Ticket {
	storeId: string
	number: number
	hours: number
}
