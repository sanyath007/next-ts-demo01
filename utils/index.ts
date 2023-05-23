
export const getWindowDimensions = function () {
    const { innerWidth: width, innerHeight: height } = window

    return { width, height }
}

export const rawMarkup = (content: string) => {
    return { __html: content }
}