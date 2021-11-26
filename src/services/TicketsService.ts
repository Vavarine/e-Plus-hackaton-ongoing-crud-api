import { Request, Response } from 'express'
import { Ticket } from 'types'
import * as yup from 'yup'
import TicketsController from '../controllers/TicketsController'

export default {
	async index(req: Request, res: Response) {
		const tickets = await TicketsController.index()

		return res.json(tickets)
	},

	async showByStoreId(req: Request, res: Response) {
		const { storeId } = req.params

		const tickets = await TicketsController.showByStoreId(storeId)

		res.json(tickets)
	},

	async create(req: Request, res: Response) {
		const { storeId } = req.params
		const { number, hours, date } = req.body

		console.log({
			storeId,
			number,
			hours,
			date
		})

		const schema = yup.object().shape({
			storeId: yup.string().required(),
			number: yup.number().required(),
			hours: yup.number().required(),
			date: yup.string().required()
		})

		const ticket: Ticket = {
			storeId,
			number,
			hours,
			date
		}

		await schema.validate(ticket, {
			abortEarly: false
		})

		await TicketsController.create(ticket)

		return res.json({ message: 'success' })
	}
}
