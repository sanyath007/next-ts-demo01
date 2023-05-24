
export const getWindowDimensions = function () {
    const { innerWidth: width, innerHeight: height } = window

    return { width, height }
}

export const rawMarkup = (content: string) => {
    return { __html: content }
}

export const stripHtml = (html: string) => {
    if ( typeof DOMParser !== 'undefined') {
        const doc = new window.DOMParser().parseFromString(html, 'text/html');

        return doc.body.textContent || '';
    }

    // return html.replace( /(<([^>]+)>)/ig, '');
}