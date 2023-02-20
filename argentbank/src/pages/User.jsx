import UserBank from "../componant/userBank";
import UserDescription from "../componant/userDescription";

function User() {
    return(
        <div>
            <main class="main bg-dark">
                <UserDescription />
                <UserBank />
            </main>
        </div>
    )
}

export default User;