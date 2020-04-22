
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
export const handleError = (error: String) => {
    return {
        sucess: false,
        data: error
    }
}
