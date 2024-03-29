import React from "react";
import Typed from "react-typed";
import Particles from "react-tsparticles";

const Header = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div id="home" className="header-wrapper">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#0d47a1",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="main-info">
        <div>
          <h1>
            Hi I'm <span>"SAM SCRIPT"</span>
          </h1>
          <h2>A Fullstack Developer </h2>
          <h3>
            I'm a <i>specialist</i> in
          </h3>
          <Typed
            className="typed-text"
            strings={[
              "Website Designs",
              "Software Development",
              "Database Management",
              "Website Development",
            ]}
            typeSpeed={40}
            backSpeed={30}
            loop
          />
          <a href="#contacts" className="btn-main-offer">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
