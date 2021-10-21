export const set = (key: string, value: object) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const get = (key: string) => {
    const value = localStorage.getItem(key)

    // not needed, but better for performance
    if (!value) return null

    // to not throw an error if the value is not a valid json -> normal use of localStorage
    try {
        return JSON.parse(value)
    } catch (e) {
        // no need to log the "error"
        // just returns the value -> in this case it's a normal use of the localStorage
        return value
    }
}

export const remove = (key: string) => {
    localStorage.removeItem(key)
}

// use only for testng purpose and for deleting all user data (except if you have a backend where user data is stored -> pls only store userdata, if really nessary)
export const clear = () => {
    localStorage.clear()
}

// also includes "normal" values form the localStorage
export const getAll = () => {
    const keys = Object.keys(localStorage)
    const values = keys.map(key => get(key))
    return values
}