function Skills() {
  console.log("hello")
    return(
        <>
      
        {/* Skills Section */}
        <section id="skills">
            <div id="skills" className="container">
              <div className="skills">
                <div className="box-header">
                  <h3 className="text-primary head-text">
                    Benefits<span className="underline underline-primary" />
                  </h3>
                  <h3>Why should you hire me?</h3>
                  <p>
                    When buidling or cloning web projects, I strongly adhere to
                    these principles which make my websites both unique and
                    scaleable.
                  </p>
                </div>
                <div className="box-container">
                  <div className="card">
                    <span className="fas fa-search color-1" />
                    <h3>SEO(Search Engine Optimization)</h3>
                    <p>
                      I employ best SEO practices like "Semantic HTML" and more on
                      websites and projects I work on to improve the site visibility
                      and rankings on Google.
                    </p>
                  </div>
                  <div className="card">
                    <span className="fas fa-mobile-alt color-2" />
                    <h3>Responsive Design</h3>
                    <p>
                      I am passionate about responsiveness and making the websites I
                      build look good on different devices, browsers and cross
                      platforms using both "mobile first" approach and desktop
                      "media queries"
                    </p>
                  </div>
                  <div className="card">
                    <span className="fas fa-code color-3" />
                    <h3>Reusable &amp; Minimal code</h3>
                    <p>
                      I try my best to write as minimal code as possible by using
                      tools like CSS Variables and writing custom utility classes.
                    </p>
                  </div>
                  <div className="card">
                    <span className="fas fa-palette color-4" />
                    <h3>Great UI/UX &amp; Accessibility</h3>
                    <p>
                      I have a strong eye for designs, which allows me to transform
                      templates into pixel-perfect code while making it accessible
                      to all users. Principles I picked up from solving various
                      <a href="https://www.frontendmentor.io/challenges" className="link-style" >frontendmentor</a>
                      challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </>
    );
}
export default Skills;