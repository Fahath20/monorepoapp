import { darkTheme } from './darkTheme'
import { lightTheme } from './lightTheme'


let current = "light"

const theme = current == "dark" ? darkTheme: lightTheme

const rendering =  {
    renderCardsHorizantally: false,
    numberOfRows: 5
}

const api = {
    baseURL: "https://jsonplaceholder.typicode.com",
    userPath: "/users/",
    pagination: false
}

export default {
    api,
    rendering,
    theme,
}