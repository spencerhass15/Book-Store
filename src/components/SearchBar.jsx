import React from 'react';
//import Bar from './Bar.css';
import { CookieContext } from '../Context/SessionContext';
import { Link } from 'react-router-dom';
//import Button from '../button/Link';
function SearchBar() {
    const [search, setSearch] = React.useState('');
    const [cookie] = React.useContext(CookieContext);
    return (
        cookie ? (
            <div className='navbar navbar-expand-lg navbar-light bg-light p-3'>
                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" value={search} onChange={e => setSearch(e.target.value)} />
                <Link className="btn btn-outline-primary" to={`/search/${search}`}  >search</Link>
            </div>
        ) : (
                <div></div>
            )
    )
}
export default SearchBar