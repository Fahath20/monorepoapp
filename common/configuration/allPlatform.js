import { darkTheme } from './darkTheme'
import { lightTheme } from './lightTheme'
import {isWeb} from '../utils'
import getEnvVars from './environment';

let current = "light"

const theme = current == "dark" ? darkTheme: lightTheme

const rendering =  {
    renderCardsHorizantally: isWeb,
    numberOfRows: 5
}

const { apiUrl } = getEnvVars();

const api = {
    baseURL: apiUrl,
    userPath: "/users/",
    addUser: "/addUser/",
    listServices: "/services/",
    pagination: false
}

export default {
    api,
    rendering,
    theme,
}