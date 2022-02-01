import linkedin from '../img/linkedin.png'
import facebook from '../img/facebook.png'
import twitter from '../img/twitter.png'

function Contact() {
    return(

    <section class='getInTouch'>
    <form id="form">   
     <br/>
     
     <h3>Get in touch:</h3>

         
        <input class="nameemail" type="text" placeholder="Your Name" id="name"></input>
        <input class="nameemail" type="email" placeholder="Your Email" id="Email"></input>
        <br/>
        <input class="message" type="" placeholder="Your message" id="message"></input>
        <br/>
        <button type="submit">Submit</button>
     </form>  

     <br />
          
            <a href='https://www.linkedin.com/'><img class="socialLogo" src={linkedin} alt="Linkedin" /></a>
            <a href='https://www.twitter.com/'><img class="socialLogo" src={twitter} alt="twitter" /></a>
            <a href='https://www.facebook.com/'><img class="socialLogo" src={facebook} alt="facebook" /></a>
     </section>
     
    )
  }

export default Contact 