import { useEffect, useState } from 'react'
// import LoadingLottie from '../../lotties/LoadingLottie'
import LoadingLottie from './../../lotties/LoadingLottie'

function UserResults() {

    const [ users, setUsers ] = useState([])
    const [ loading, setLoading ] = useState( false )

    useEffect( () => {
        fetchUsers()
    }, [10])

    const fetchUsers = async () => {
        setLoading( true )
        const response = await fetch(
            `${ process.env.REACT_APP_GITHUB_API }/users?q=abc`,
            {
               headers: {
                   Authorization: `token ${ process.env.REACT_APP_GITHUB_TOKEN }`
                } 
            }
        )
        const data = await response.json()
        setUsers( data )
        console.log( data )
        setLoading( false )
    }

    if( loading ){
        return(
            <div className="bg-red-400">
                <div className="container main-wrapper">
                    <div className="flex flex-col items-center loading-wrapper w-100">
                        <div className="w-64">
                            <LoadingLottie />
                            <p className="text-2xl text-center">Loading...</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <>
                <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                    {
                        users.map(( user ) => (
                            <h3>{ user.login }</h3>
                        ))
                    }
                </div>            
            </>
        )
    }
}

export default UserResults
