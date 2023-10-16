import { Link } from "react-router-dom";

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Capri Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown Doon City, Capri Repairs provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    Capri Repairs<br />
                    +91 9876543210<br />
                    CP, DEHRADUN 12345<br />
                    <a href="tel:+0137444444">(013) 744-4444</a>
                </address>
                <br />
                <p>Owner: Mr. Rawat</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}

export default Public