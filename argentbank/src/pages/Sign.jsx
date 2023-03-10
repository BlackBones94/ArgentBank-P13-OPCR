import FormSign from "../componant/formSign";
import Header from "../componant/header";
import IntroSign from "../componant/introSign";

function Sign() {
    return(
        <div>
            <Header />
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