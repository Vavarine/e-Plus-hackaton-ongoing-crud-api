import { ErrorRequestHandler } from 'express'
import { ValidationError } from 'yup'

interface ValidationErrors {
	[key: string]: string[]
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
	console.log(error)

	if (error instanceof ValidationError) {
		const errors: ValidationErrors = {}

		error.inner.forEach((err: any) => {
			errors[err.path] = err.errors
		})

		return response.status(400).json({ message: 'Validation errors', errors })
	}

	if (error.name === 'EntityNotFound') {
		return response.status(404).json({ message: 'Not found', error: error.message })
	}

	return response.status(500).json({ message: 'Internal server error' })
}

export default errorHandler
