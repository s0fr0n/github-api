import { useEffect, useContext } from 'react'
import UserCard from './UserCard'
import LoadingLottie from './../../lotties/LoadingLottie'
import GithubContext from './../../context/github/GithubContext'

function UserResults() {

    const {
        users,
        loading,
        fetchUsers } = useContext( GithubContext )

    useEffect( () => {
        fetchUsers()
    }, [10])

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
                            <UserCard
                                // key={ user.id }
                                user={ user }
                            />  
                        ))
                    }
                </div>            
            </>
        )
    }
}

export default UserResults
