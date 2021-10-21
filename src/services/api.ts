const mapToQuery = (map) => Object.keys(map).reduce((acc, val) => `${acc}${val}=${map[val]}&`, '?').slice(0, -1)
const headers = {
     'Content-Type': 'application/json'
}

export const list = async (endpoint, options = {}) => {
    const response = await fetch(`${endpoint}${mapToQuery(options)}`, { method: 'GET', headers: headers})
    if (!response.ok) {
        throw new Error([response.status, response.statusText].join(','))
    }
    // sets the the count of the total number of items as second value in the returned array -> [items (json), count (number)] -> pageing
    return [await response.json(), parseInt(response.headers.get("x-total-count") || '', 10)]
}

export const read = async (endpoint, id, options = {}) => {
    const response = await fetch(`${endpoint}/${id}${mapToQuery(options)}`, { method: 'GET', headers: headers})
    if (!response.ok) {
        throw new Error([response.status, response.statusText].join(','))
    }
    return response.json()
}

export const create = async (endpoint, payload = {}, options = {}) => {
    const response = await fetch(`${endpoint}${mapToQuery(options)}`, { method: 'POST', body: JSON.stringify(payload), headers: headers})
    if (!response.ok) {
        throw new Error([response.status, response.statusText].join(','))
    }
    return response.json()
}

export const update = async (endpoint, id, payload = {}, options = {}) => {
    const response = await fetch(`${endpoint}/${id}${mapToQuery(options)}`, { method: 'PUT', body: JSON.stringify(payload), headers: headers})
    if (!response.ok) {
        throw new Error([response.status, response.statusText].join(','))
    }
    return response.json()
}

export const patch = async (endpoint, id, payload = {}, options = {}) => {
    const response = await fetch(`${endpoint}/${id}${mapToQuery(options)}`, { method: 'PATCH', body: JSON.stringify(payload), headers: headers})
    if (!response.ok) {
        throw new Error([response.status, response.statusText].join(','))
    }
    return response.json()
}

export const remove = async (endpoint, id, payload = {}, options = {}) => {
    const response = await fetch(`${endpoint}/${id}${mapToQuery(options)}`, { method: 'DELETE', body: JSON.stringify(payload), headers: headers})
    if (!response.ok) {
        throw new Error([response.status, response.statusText].join(','))
    }
    return response.json()
}
