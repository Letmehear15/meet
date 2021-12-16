import { useHistory } from "react-router-dom"

export const useRedirect = (path: string) => {
    const history = useHistory()

    const redirect = () => {
        history.push(`/${path}`)
    }

    return {
        redirect
    }
    
}