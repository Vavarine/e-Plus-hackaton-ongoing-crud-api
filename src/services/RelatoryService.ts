import { Request, Response } from 'express'
import StoresController from '../controllers/StoresController'
import TicketsController from '../controllers/TicketsController'

export default {
	async get(req: Request, res: Response) {
		const { storeId } = req.params
		const { dates } = req.body

		const finalDates = dates.map((date) => {
			const finalDate = date.split('-')
			finalDate[1] = parseInt(finalDate[1])
			finalDate[1] = finalDate[1] + 1 > 12 ? 1 : finalDate[1] + 1

			finalDate[1] = finalDate[1].toLocaleString('en-US', {
				minimumIntegerDigits: 2,
				useGrouping: false
			})

			return finalDate.join('-')
		})

		const store = await StoresController.show(storeId)

		const ticketsByMonths = await Promise.all(
			dates.map(async (date, index) => {
				const ticketByMonth = await TicketsController.showByStoreIdBetweenDates(
					storeId,
					date,
					finalDates[index]
				)

				return ticketByMonth
			})
		)

		const hoursByMonth = ticketsByMonths.map((ticketsByMonth: any[]) => {
			const totalHours = ticketsByMonth.reduce((prev, cur) => prev + cur.hours, 0)

			console.log(ticketsByMonth)
			console.log(totalHours)

			return totalHours
		})

		const data = hoursByMonth.map((item, index) => {
			const fromDate = dates[index].split('-').reverse().join('-')
			const toDate = finalDates[index].split('-').reverse().join('-')

			return { totalHours: store.hours, comsumedHours: item, fromDate: fromDate, toDate: toDate }
		})

		return res.send(data)
	}
}
