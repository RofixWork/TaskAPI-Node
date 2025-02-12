class CustomAPIError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}
/**
 * 
 * @param {string} message 
 * @param {number} status 
 * @returns {object} CustomAPIError
 */
const createCustomError = (message, status) => {
    return new CustomAPIError(message, status)
}

module.exports = {CustomAPIError, createCustomError}