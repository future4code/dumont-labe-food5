import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {goToFeedPage} from '../router/Coordinator'

export const useUnprotectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if(token) {
            goToFeedPage(history)
        }
    }, [history])
}