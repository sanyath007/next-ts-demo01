
export const getWindowDimensions = function () {
    const { innerWidth: width, innerHeight: height } = window

    return { width, height }
}