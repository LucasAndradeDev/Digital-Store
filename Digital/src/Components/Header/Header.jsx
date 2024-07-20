import Navigation from "../Navigation/Navigation";
import SearchInput from "../SearchInput/SearchInput";

function Header() {
    return (
        <header>
            <SearchInput />
            <Navigation />
        </header>
    );
}

export default Header;
