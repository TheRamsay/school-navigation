const removeClassAll = (className) => {
    const elements = document.getElementsByTagName("path");
    [...elements].forEach((element) => {
        element.classList.remove(className);
    })
}


export {removeClassAll}
