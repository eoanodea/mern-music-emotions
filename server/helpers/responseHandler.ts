
/**
 * Sort data for a successful response
 * 
 * @param data 
 */
export const handleSuccess = (data: any) => {
    return {
        sucess: true,
        data
    }
}

/**
 * Sort data for a error response
 * 
 * @param error
 */
export const handleError = (error: any) => {
    const errorString = typeof error !== 'string'
    ? error.message
    : error

    return {
        sucess: false,
        error: errorString
    }
}
