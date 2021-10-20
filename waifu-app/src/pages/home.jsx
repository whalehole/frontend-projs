import GalleryNavigator from "../components/gallery-navigator";
import Gallery from "../components/gallery";
import { Route } from 'react-router-dom';

export default function HomePage() {

    return (
        <div>
            <div className="flex flex-col gap-10">
                <div className="inline-block place-self-center">
                    <a href="/" className="inline-block mt-6">
                        <img src={"/logo.svg"} alt="" width="300" height="30" />
                    </a> 
                </div>
                <div className="inline-block place-self-center mt-20 mb-16">
                    <GalleryNavigator />
                </div>
                <div>
                    <Route path={["/:type", "/"]}>
                        <Gallery />
                    </Route>
                </div>
            </div>
        </div>
    )
}