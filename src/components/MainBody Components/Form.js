const Form = () => {
    return (
        <section className="contact-form">
            <h2>Say hey</h2>
            <form
                id="contact"
                name="contact"
                method="post"
                netlify="true"
                netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                    <input name="bot-field" />
                </div>
                <label className="form-label label-name">
                    Name
                    <br />
                    <input id="name" name="name" type="text" />
                </label>
                <label className="form-label label-email">
                    Email
                    <br />
                    <input type="email" name="email" id="email" />
                </label>
                <label className="form-label label-comment">
                    Comment
                    <br />
                    <textarea name="comment" id="comment"></textarea>
                </label>
                <button className="form-button" type="submit">
                    Submit
                </button>
            </form>
        </section>
    );
};

export default Form;
