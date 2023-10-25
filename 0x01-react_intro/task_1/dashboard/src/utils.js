const getFullYear = () => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear() 
    return currentYear
}

const getFooterCopy = (isIndex) => {
    if (isIndex === true) {
        return "Holberton School"
    } else { return "Holberton School main dashboard"}
}

export { getFullYear, getFooterCopy }