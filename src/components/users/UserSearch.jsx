import { useState, useContext, useEffect } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'

function UserSearch() {
    const [text, setText] = useState('')

    const { users, searchUsers, loading, clearUsers } =
        useContext(GithubContext)

    const { setAlert } = useContext(AlertContext)

    const handleChange = e => setText(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()
        if (text === '') {
            setAlert('Please enter something', 'error')
        } else {
            searchUsers(text)
            setText('')
        }
    }

    if (users.length === 0 && !loading) {
        return (
            <div className='w-full'>
                <div className='mx-auto w-1/2'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-control'>
                            <div className='relative'>
                                <input
                                    type='text'
                                    className='w-full pr-40 bg-gray-200 input input-lg text-black'
                                    placeholder='Search'
                                    value={text}
                                    onChange={handleChange}
                                />
                                <button
                                    type='submit'
                                    className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
                                >
                                    Go!
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    } else if (users.length >= 0 && !loading) {
        console.log(text)
        return (
            <div className='w-full'>
                <div className='flex justify-between'>
                    <span>{text}</span>
                    <button
                        onClick={clearUsers}
                        className='btn btn-ghost btn-lg bg-base-200'
                    >
                        x Clear
                    </button>
                    <div className='text-base'>
                        You search fetched {users.length} results
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='flex justify-between font-center'>Fetching...</div>
        )
    }
}

export default UserSearch
