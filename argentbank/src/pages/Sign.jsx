import FormSign from "../componant/formSign";
import IntroSign from "../componant/introSign";

function Sign() {
    return(
        <div>
            <main class="main bg-dark">
                <section class="sign-in-content">
                    <IntroSign />
                    <FormSign />
                </section>
            </main>
        </div>
    )
}

export default Sign;