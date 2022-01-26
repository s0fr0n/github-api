import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import { useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'

function User() {
    const { getUser, user, loading } = useContext(GithubContext)

    const params = useParams()

    useEffect(() => {
        getUser(params.login)
    }, [])

    console.log(user)

    // [avatar_url] = user

    if (loading) {
        console.log('loading')
    }

    return (
        <>
            <div className='w-full mx-auto lg:w-10/12'>
                <div className='mb-4'>
                    <Link to='/' className='btn btn-ghost'>
                        Back to search
                    </Link>
                </div>

                <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
                    <div className='custom-card-image mb-6 md:mb-0'>
                        <div className='rounded-lg shadow-xl card image-full'>
                            <figure>
                                <img src={user.avatar_url} alt='' />
                            </figure>
                            <div className='card-body justify-end'>
                                <h2 className='card-title mb-0'>{user.name}</h2>
                                <p>{user.login}</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-2'>
                        <div className='mb-6'>
                            <h1 className='text-3xl card-title'>
                                {user.name}

                                <div className='ml-2 mr-1 badge badge-success'>
                                    {user.type}
                                </div>
                                {user.hireable && (
                                    <div className='mx-1 badge badge-info'>
                                        Hirable
                                    </div>
                                )}
                            </h1>
                            <p>{user.bio}</p>
                            <div className='mt-4 card-actions'>
                                <a
                                    href={user.html_url}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='btn btn-outline'
                                >
                                    Visit Github Profile
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User
