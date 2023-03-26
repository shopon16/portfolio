
import {Icon, Keywords} from "./icons"
import userdata from "../contents/userdata.json"
import Social from "./Social"
import {ProjectCard,MoreCard} from "../components/Cards"


function Technologies() {

 //let image = require("../img/projects/hashnodeclonepng.png")
 //console.log(userdata.projectCard.HahsnodeClone.img)
  return(
    <>
      <Social
      icons = {userdata.technologies}
      />
      {/* Projects Section*/}
      <section id="projects" className="container">
        <h2 className="head-text">
          FEATURED PROJECTS<span className="underline underline-secondary" />
        </h2>
        <div id="project-full">
          {/* Page 1 */}

          {
            userdata.projectCard.map((value,key)=>{
              //console.log(value)
              //console.log(typeof value.img)       //this ensures that i am getting string
              //let image = require(value.img)    //if i do this, i got compilation error showing can not find module
              let image = require("../img/projects/hashnodeclonepng.png")   //this is ok
              return (
              <ProjectCard key={key}
              projectName={value.projectName} 
              contents={value.contents}
              img={image}
              divClass={value.divClass}
              buttonClass={value.buttonClass}
              href={value.href}
              tag1={value.tag1}
              tag2={value.tag2}
              link1={value.link1}
              link2={value.link2}
              />
              );})
          }
        </div>

        {/* Space */}
        <h2 className="head-text">
          More Projects<span className="underline underline-secondary" />
        </h2>
        <div className="project-container">

        {
          userdata.morecard.map((value,key)=>{
            //console.log(value)
            
            return (
              <MoreCard
              key={key}
              icon1={<Icon link={value.link1} title={value.title1} class ={value.class1}/>}
              icon2={<Icon link={value.link2} title={value.title2}  class ={value.class2}/>}
              title = {value.title}
              content={value.content}
              keywords={<Keywords title={value.keyword}/>}
              />
            );})
        }

        </div>
      </section>
      </>
    );
}
export default Technologies;