import userdata from "../contents/userdata.json"
function About() {
    return(
        <>
      
        {/* About Section */}
        <section id="about">
        <div className="bio container">
          <h2 className="head-text">
            ABOUT ME<span className="underline underline-primary" />
          </h2>

          {
            userdata.about.shortbio.map((value,key)=>{
            return(
            <p>
              {value}
            </p>);  
            })
          }
          <p>
            Technologies and tools I'm currently exploring and interested about.
          </p>
          <ul className="language">
          {
            userdata.about.tech.map((value,key)=>{
            return(
            <li>
              {value}
            </li>);  
            })
          }       
          </ul>

        </div>
      </section>
      </>
    );
}
export default About;