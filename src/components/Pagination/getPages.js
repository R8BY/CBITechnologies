function getPages(current, total, maxPages) {
    let length = maxPages;

    if (length > total) {
        length = total;
    }

    let start = current - Math.floor(length / 2);
    start = Math.max(start, 1);
    start = Math.min(start, 1 + total - length);

    return Array.from({ length }, (el, i) => start + i);
}

export default getPages;