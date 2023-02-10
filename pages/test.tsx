import React, { useState } from 'react'
import LoadingSpinner from '../components/loadingSpinner'

const test = () => {
    const [isLoading, setIsLoading] = useState(true);

    return( 
        !!isLoading ? 
        <LoadingSpinner finishLoading={() => setIsLoading(false)} />
        : <h1>Not Loading</h1>
    )
}

export default test