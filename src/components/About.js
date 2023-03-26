function About() {
    return(
        <>
      
        {/* About Section */}
        <section id="about">
        <div className="bio container">
          <h2 className="head-text">
            ABOUT ME<span className="underline underline-primary" />
          </h2>  
          <p>
            I'm a frontend developer living in Port-Harcourt, Nigeria,
            specializing in web development and
            <a href="https://www.youtube.com/watch?v=3HqN-YS8eso" >open source</a>.
          </p>
          <p>
            Technologies and tools I'm currently exploring and interested about.
          </p>
          <ul className="language">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>SASS</li>
            <li>Tailwindcss</li>
          </ul>
          <ul className="language">
            <li>Open source</li>
            <li>Blogging &amp; Technical Writing</li>
          </ul>
        </div>
      </section>
      </>
    );
}
export default About;