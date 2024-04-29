import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Fanta from "./assets/fanta.png";
import Pepsi from "./assets/pepsi.png";
import Cocacola from "./assets/cocacola.png";
import orange2 from "./assets/orange2.png";
import orange from "./assets/orange.webp";
import leaf from "./assets/leaf.webp";
import leaf2 from "./assets/leaf2.png";
import leaf3 from "./assets/coconoutleaf.png";
import lemon from "./assets/lemon.webp";
import "./App.css";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
        // markers: true, // Commented out markers for production
      },
    });

    tl.to(
      "#fanta",
      {
        top: "120%",
        left: "0%",
      },
      "orange"
    )
      .to(
        "#orange-cut",
        {
          top: "160%",
          left: "23%",
        },
        "orange"
      )
      .to(
        "#orange",
        {
          width: "15%",
          top: "160%",
          right: "10%",
        },
        "orange"
      )
      .to(
        "#leaf",
        {
          top: "110%",
          rotate: "130deg",
          left: "70%",
        },
        "orange"
      )
      .to(
        "#leaf2",
        {
          top: "110%",
          rotate: "130deg",
          left: "0%",
        },
        "orange"
      );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",
        end: "20% 50%",
        scrub: true,
        // markers: true, // Commented out markers for production
      },
    });

    tl2

      .to(
        "#orange-cut",
        {
          // width: "18%",
          left: "40%",
          top: "197%",
        },
        "ca"
      )
      .to(
        "#fanta",
        {
          // width: "35%",
          top: "205%",
          left: "30%",
        },
        "ca"
      );

    // Add labels to the timeline
    tl2.addLabel("ca");

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".four",
        start: "0% 100%",
        end: "100% 100%",
        scrub: true,
      },
    });

   
    tl3.to(
      "#cocacola",
      {
        top: "120%",
      },
      "ca"
    );
    tl3.to(
      "#lemon3",
      {
        top: "120%",
        left: "0%"
      },
      "ca"
    );
    tl3.to(
      "#leaf",
      {
        top: "360%",
        rotate: "330deg",
        left:"0%"
      },
      
    )
    tl3.to(
      "#leaf2",
      {
        top: "310%",
        rotate: "330deg",
        right:"0%"
      },
      
    );
    
    tl3.addLabel("ca");

    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".five",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
      },
    });

   
    tl4.to(
      "#pepsi",
      {
        top: "240%",
      },
      "ca"
    );
    tl4.to(
      "#lemon2",
      {
        top: "240%",
        left: "0%"
      },
      "ca"
      
    );
    tl4.to(
      "#leaf",
      {
        top: "440%",
        rotate: "330deg",
        right:"10%"
      },
      
    )
    tl4.to(
      "#leaf2",
      {
        top: "440%",
        rotate: "330deg",
        left:"0%"
      },
      
    )
    
    tl4.addLabel("ca");

    return () => {
      tl.kill();
      tl2.kill();
      tl3.kill();
      tl4.kill();
    };
  }, []);
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);

  return (
    <div id="main">
      <nav>
        <a href="#">Logo</a>
        <div className="cntr-nav">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Shop</a>
          <a href="#">Contact</a>
        </div>
        <i className="ri-menu-fill"></i>
      </nav>
      <div ref={oneRef} className="one">
        <h1>FANTA</h1>
        <img id="orange-cut" src={orange2} alt="Orange Cut" />
        <img id="fanta" src={Fanta} alt="Fanta" />
        <img id="orange" src={orange} alt="Orange" />
        <img id="leaf" src={leaf} alt="Leaf" />
        <img id="leaf2" src={leaf2} alt="Leaf 2" />
        <img id="leaf3" src={leaf3} alt="Leaf 3" />
      </div>
      <div ref={twoRef} className="two">
        <div className="lft-two">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#e04428"
              d="M41.5,-59.5C49.8,-51.1,49.7,-33.6,50.7,-19.2C51.7,-4.7,53.8,6.7,52.4,18.9C51.1,31.1,46.3,44.1,36.9,52.9C27.6,61.8,13.8,66.5,-2.5,70C-18.8,73.4,-37.7,75.6,-52.5,68.5C-67.3,61.5,-78.2,45.2,-84.5,27.1C-90.9,9,-92.7,-10.8,-80.5,-19.3C-68.3,-27.8,-42.1,-24.8,-26.3,-30.8C-10.6,-36.8,-5.3,-51.7,5.7,-59.5C16.6,-67.3,33.2,-68,41.5,-59.5Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="rght-two">
          <h1>Flavour Updated</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
            excepturi sed, itaque placeat id natus soluta veniam obcaecati qui a
            laborum laboriosam dolorem illum labore sit, voluptates commodi
            neque dolores tempore temporibus deleniti? Nobis, ratione hic error
            quis cum neque nulla laudantium nostrum sit nihil dolorum quisquam
            enim quaerat, eaque ex sequi, harum totam quia non! Labore, neque!
            Amet voluptatem illo similique recusandae! Ex quaerat quibusdam
            asperiores, ducimus tempore magni labore. Tenetur voluptas, quos ex
            repellendus provident mollitia laboriosam adipisci alias a impedit,
            cum accusamus rerum delectus eaque facilis veniam quia laborum
            incidunt ea assumenda! Eos magni aspernatur quod distinctio.
          </p>
        </div>
      </div>
      <div ref={threeRef} className="three">
        <div className="card">
          <img id="lemon3" className="lemon lemon1" src={lemon} alt="Lemon 1" />
          <img id="cocacola" src={Cocacola} alt="CocaCola" />
          <h1>CocaCola</h1>
          <button>Buy Now</button>
        </div>
        <div className="card">
          <h1>Fanta</h1>
          <button>Buy Now</button>
        </div>
        <div className="card">
          <img id="lemon2" className="lemon lemon2" src={lemon} alt="Lemon 2" />
          <img id="pepsi" src={Pepsi} alt="Pepsi" />
          <h1>Pepsi</h1>
          <button>Buy Now</button>
        </div>
      </div>
      <div className="four">
        <div className="coc-des">
         <h1 className="coc-heading">COCACOLA</h1>
         
        </div>
      </div>
      <div className="five">
      <div className="pepsi-des">
         <div className="content">
           <h1 className="pep-heading">PEPSI</h1>
           
         </div>
        </div>
      </div>
    </div>
  );
}

export default App;
