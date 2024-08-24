import schemas from '../schemas/schemas.js';

export default function schemasValidation(schema) {
	return (req, res, next) => {
		const data = req.body;
		const { error } = schemas[schema].validate(data, { abortEarly: false });

		if (error) {
			return res.status(422).send(error.details.map((err) => err.message));
		}

		return next();
	};
}
