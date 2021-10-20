import { NavLink } from 'react-router-dom';
import { useType } from '../contexts/gallery.type';

export default function GalleryNavigator() {
    const type = useType();

    console.log('gallery navigator: ', type.type);

    return (
        <div className="inline-block place-self-center">
            <div className="flex flex-row gap-4">
                <NavLink exact activeClassName="border-double border-4 border-yellow-300 text-2xl" to="/" onClick={() => type.setType("sfw")}>SFW</NavLink>
                <NavLink activeClassName="border-double border-4 border-yellow-300 text-2xl" to="/nsfw" onClick={() => type.setType("nsfw")}>NSFW</NavLink>
                <NavLink activeClassName="border-double border-4 border-yellow-300 text-2xl" to="/bookmarked" onClick={() => type.setType("bookmarked")}>BOOKMARKED</NavLink>
            </div>
        </div>
    )
}