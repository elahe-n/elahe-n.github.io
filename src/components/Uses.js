import React from 'react';
import vs from '../img/vs2.png'
import github from '../img/github.png'
import mongoDB from '../img/mongoDB.png'
import linux from '../img/linux.png'
import adobe from '../img/adobeCloud.png'
import firebase from '../img/firebase.png'

class Uses extends React.Component {
  render() {
    return(
    <>
    
        <section class="uses">
        <h3> Uses:</h3>
        <br/>
        <div class='frames'>
          <figure > 
          <img class="usesimg" src={vs} alt="Microsoft Visual Studio Code " />
          <figcaption>Microsoft Visual Studio Code</figcaption>
          </figure>

          <figure > 
          <img class="usesimg" src={firebase} alt="firebase" />
          <figcaption>Firebase</figcaption>
          </figure>

          <figure > 
          <img class="usesimg" src={github} alt="GitHub"  />
          <figcaption>GitHub</figcaption>
          </figure>

          <figure > 
          <img class="usesimg" src={mongoDB} alt="MongoDB"  />
          <figcaption>MongoDB</figcaption>
          </figure>

          <figure > 
          <img class="usesimg" src={linux} alt="Linux"/>
          <figcaption>Linux</figcaption>
          </figure>

          <figure > 
          <img class="usesimg" src={adobe} alt="Adobe Cloud"/>
          <figcaption>Adobe Cloud</figcaption>
          </figure>

          </div>
        </section>
        </>
    )
  }
}

export default Uses