import {useLocation} from 'react-router-dom';

function Users() {
        let url = useLocation();
    return(
        <>
            <h1>Users</h1>
            <ul>
                <li><a href={`${url.pathname}/ivanov`}>Ivanov</a></li>
                <li><a href={`${url.pathname}/petrov`}>Petrov</a></li>
            </ul>
        </>
    );
}

export default Users;