import { useParams } from "react-router-dom";

function User() {
    let {userName} = useParams();
    return(
        <>
            <a href="/users">Назад</a>
            <h1>User: {userName}</h1>
        </>
    );
}

export default User;