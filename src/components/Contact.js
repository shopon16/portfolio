import Social from "./Social";
import userdata from "../contents/userdata.json"
function Contact(){

 
    return(
        <>
        <Social
        icons={userdata.social}
        />
        {/* Contact */}
        <section id="contact" className="contact">
            <div className="container">
              <div className="form-header">
                <h2 className="head-text">
                  Contact<span className="underline underline-secondary" />
                </h2>
                <h2 className="text-secondary">Get In Touch</h2>
                <p>
                  Want to connect with me or collaborate on projects together, You
                  can send me a message and I'll reply as soon as I can.. Thank You.
                </p>
              </div>
              <div className="form-container">
                <div className="form-image" />
                <div className="form-page">
                  <form action="thankyou.html" data-netlify="true" className="form">
                    <div className="form-group group-bg">
                      <label htmlFor="Name">Name</label>
                      <input type="text" id="Name" placeholder="Enter Name" required />
                    </div>
                    <div className="form-group group-bg">
                      <label htmlFor="Subject">How can I reach you?(Twitter username or Linkedin)</label>
                      <input type="text" id="Subject" placeholder="How can I reach you? (Twitter username or Linkedin)" required />
                    </div>
                    <div className="form-group group-bg">
                      <label htmlFor="Message">Message</label>
                      <textarea name="Message" id="Message" placeholder="Message" defaultValue={""} />
                    </div>
                    <div className="form-group">
                      <button type="submit" value="submit" className="btn">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
    );
}
export default Contact;