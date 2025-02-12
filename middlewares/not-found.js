/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 * @returns 
 */
const notFound = (req, res, next) => res.status(404).send(`<h2>Route ${req.baseUrl ? `<span style="color:red; font-weight: bold">${req.baseUrl}</span>` : ''} does not Exist (404)</h2>`)

module.exports = notFound;