export default function bookmarkChecker(waifu) {
    const waifus = JSON.parse(localStorage.getItem('bookmarked')) || [];

    return waifus.find(bookmarked => bookmarked === waifu);
}