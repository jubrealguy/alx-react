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

const getLatestNotification = () => {
    return "<strong>Urgent requirement</strong> - complete by EOD"
}

export { getFullYear, getFooterCopy, getLatestNotification }