import { Icon } from "./icons";
import userdata from "../contents/userdata.json"
function Social(props){
  //console.log(userdata.social.github.link);

    return(
        <>
        {/* Social */}
        <section className="icons-container">
            <div className="container">
              <div className="social icons">
              {
                props.icons.map((value,key)=>{
                  //console.log(value)
                  
                  return (
                  <Icon key={key}
                  link={value.link} 
                  title={value.title}
                  class={value.class}
                  />
                  );})
              }
              </div>
            </div>
          </section>
        </>
    );
}
export default Social;