import { createContext, useState } from 'react'

const GithubContext = createContext()

const GITHUB_API = process.env.REACT_APP_GITHUB_API
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {

    const [ users, setUsers ] = useState([])
    const [ loading, setLoading ] = useState( false )

    const fetchUsers = async () => {
        setLoading( true )
        const response = await fetch(
            `${ GITHUB_API }/users?q=abc`,
            {
               headers: {
                   Authorization: `token ${ GITHUB_TOKEN }`
                } 
            }
        )
        const data = await response.json()
        setUsers( data )
        setLoading( false )
    }

    return (
    <GithubContext.Provider value={{ 
        users,
        loading,
        fetchUsers,
     }}> { children }
    </GithubContext.Provider>
    )
}

export default GithubContext