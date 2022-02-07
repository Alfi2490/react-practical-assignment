import MainPageHeader from "./MainPageHeader/MainPageHeader";
import MainPageGalleryOfPosts from './MainPageGalleryOfPosts/MainPageGalleryOfPosts';
import MainPagePagination from './MainPagePagination/MainPagePagination';
import MainPageSearchBar from './MainPageSearchBar/MainPageSearchBar';

export default function MainPage() {
    return <div>
        <MainPageHeader/>
        <MainPageSearchBar/>
        <MainPageGalleryOfPosts/>
        <MainPagePagination/>
    </div>
}