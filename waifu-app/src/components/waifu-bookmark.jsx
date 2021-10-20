import { useEffect, useState } from "react"
import { useType } from "../contexts/gallery.type";
import bookmarkChecker from "../lib/bookmark-checker";

export default function WaifuRating({waifuUrl}) {
    const [bookmarked, setBookmarked] = useState(false);
    const type = useType();

    const handleBookmark = e => {
        if (!bookmarked) {
            let bookmarks = JSON.parse(localStorage.getItem('bookmarked')) || [];
            localStorage.clear();
            bookmarks.unshift(waifuUrl);
            localStorage.setItem('bookmarked', JSON.stringify(bookmarks));
            setBookmarked(true);
        }
        else {
            let bookmarks = JSON.parse(localStorage.getItem('bookmarked')) || [];
            localStorage.clear();
            bookmarks = bookmarks.filter(bookmark => bookmark !== waifuUrl);
            localStorage.setItem('bookmarked', JSON.stringify(bookmarks));
            setBookmarked(false);
        }
    }

    useEffect(()=>{
        console.log('bookmark checking')
        if (bookmarkChecker(waifuUrl) === waifuUrl)
            setBookmarked(true);
    }, [type.type])

    return (
        <div>
            <div className="flex flex-row justify-center">
                <img alt="bookmark" onClick={handleBookmark} src={bookmarked ? "/heart_filled.png" : "/heart.png"} />
            </div>
        </div>
    )
}
