export default (array: object[], key:string, type:string, desc: boolean) => {
    return array.sort((a, b) => {
        console.log(a[key], b[key], type)
        switch (type) {
            case 'boolean':
            case 'number':
                return desc ? b[key] - a[key] : a[key] - b[key]
            case 'string':
                return desc ? b[key].localeCompare(a[key]) : a[key].localeCompare(b[key])
            case 'date':
                return desc ? new Date(b[key]).getTime() - new Date(a[key]).getTime() : new Date(a[key]).getTime() - new Date(b[key]).getTime()
            default:
                console.error('Sorting Error: type not found')
                return 0
        }
    })
}