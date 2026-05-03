import Home from "./Home/Home";
import { WhoIsme , AboutMe , Skills } from "./About";
import { test as Test } from "./About";
import ReactFullpage from '@fullpage/react-fullpage';
export default function FullPage() { 
    return (
<>
    <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
         <Home section="section" />
          <AboutMe section = "section" />
          <Skills section = "section" />
          <Test />
        </ReactFullpage.Wrapper>
      );
    }}
  />
</>
    )
}