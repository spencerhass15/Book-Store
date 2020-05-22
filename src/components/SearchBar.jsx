import React from 'react';
import { CookieContext } from '../Context/SessionContext';
import { Link } from 'react-router-dom';
function SearchBar(props) {
    const [search, setSearch] = React.useState('');
    const [cookie] = React.useContext(CookieContext);
    return (
        cookie ? (

            <div className='navbar navbar-expand-lg navbar-light bg-light p-3 d-flex justify-content-end'>
                <div className="navbar-nav mr-auto">
                    <div className="nav-link"> <Link to="/bookshelf/">Bookshelf</Link></div>
                </div>
                <div className="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" value={search} onChange={e => setSearch(e.target.value)} />
                    <Link className="btn btn-outline-primary my-2 my-sm-0" to={`/search/${search}`}   >search</Link>
                </div>
            </div>
        ) : (
                <div></div>
            )
    )
}
export default SearchBar