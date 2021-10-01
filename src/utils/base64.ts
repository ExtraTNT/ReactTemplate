export const getBase64 = (file, callback) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(.../data:(.+);base64,(.+)/.exec(reader.result as string)))
    reader.readAsDataURL(file)
}
