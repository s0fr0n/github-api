import { createContext, useReducer } from 'react'
import GithubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_API = process.env.REACT_APP_GITHUB_API
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        loading: false,
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    // Get search results
    const searchUsers = async text => {
        setLoading()

        const params = new URLSearchParams({
            q: text,
        })

        const response = await fetch(`${GITHUB_API}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        })

        const { items } = await response.json()

        dispatch({
            type: 'GET_USERS',
            payload: items,
        })
    }

    // Get a single user
    const getUser = async login => {
        setLoading()

        const response = await fetch(`${GITHUB_API}/users/${login}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        })

        if (response.status === 404) {
            window.location = '/notfound'
        } else {
            const data = await response.json()

            dispatch({
                type: 'GET_USER',
                payload: data,
            })
        }
    }

    // Clear users from start
    const clearUsers = () =>
        dispatch({
            type: 'CLEAR_USERS',
        })

    // Set loading
    const setLoading = () =>
        dispatch({
            type: 'SET_LOADING',
        })

    return (
        <GithubContext.Provider
            value={{
                // ...state,
                users: state.users,
                loading: state.loading,
                user: state.user,
                searchUsers,
                clearUsers,
                getUser,
            }}
        >
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext
