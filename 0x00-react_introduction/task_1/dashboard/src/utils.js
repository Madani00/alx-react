
//get year
export const getFullYear = () => {
    const date = new Date();
    return date.getFullYear();
}

//
export const getFooterCopy = (isIndex) => {
    if (isIndex) {
        return 'Holberton School';
    }
    else {
        return 'Holberton School main dashboard'
    }
}