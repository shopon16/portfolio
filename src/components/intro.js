import profile from "../img/projects/guy.jpg"
function Intro(){
    return(
        <>
        <header id="hero">

        <section className="content container">
            <div className="content-text">
              <h1>Omar Faruque Swapon<span className="underline" /></h1>
              <h2 className="text-secondary">Web Developer,</h2>
              <h2 className="text-secondary">IoT Engineer</h2>
              <h2 className="text-secondary">&amp; business enthusiast</h2>
              <p>
                With a passion for building solutions that enhance human efficiency and productivity
              </p>
              <a href="https://docs.google.com/document/d/1zfGurPLEwqT6-QSCl4oQJ1yVDbGZCNDqo7iTOlgNPv0/edit?usp=sharing" className="btn">Resume</a>
            </div>
            <div className="content-image">
              <div className="overlay-icons" />
              <img src={profile} alt="omar faruque swapon"/>
            </div>
          </section>
          </header>
        </>
    );
}
export default Intro;