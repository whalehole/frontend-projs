```jsx
import { NavLink } from 'react-router-dom';
import { useType } from '../contexts/gallery.type';

const Demo = () => {
    const [showDetails, setShowDetails] = React.useState(false);

    return (
        <GalleryNavigator />
    )
}
<Demo />
```