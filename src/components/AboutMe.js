import React from "react";
import Mine from "../images/mine.jpeg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={Mine} alt="my-pix" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-header">About me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            semper dictum turpis, in sagittis mauris malesuada in. Nulla
            suscipit felis quam, semper congue nunc vulputate commodo. Fusce
            eleifend nibh eleifend, vulputate ipsum at, euismod lacus. Fusce at
            arcu vitae nisl ultrices auctor sed et ante. Maecenas elit risus,
            finibus in est vel, sodales egestas ante. Pellentesque ac semper
            nisl. Sed lectus nibh, facilisis nec elementum a, dapibus eu dolor.
            Proin vitae fermentum lorem. Nullam et orci fermentum, commodo
            ligula a, luctus odio. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Etiam a justo vitae tellus feugiat gravida. Sed vel
            orci vitae neque laoreet mattis a id arcu. Sed sit amet rutrum
            augue. Aliquam erat volutpat. Quisque malesuada maximus mi non
            rhoncus. Mauris sed sollicitudin urna. Donec faucibus molestie
            eleifend. Integer a magna dui. In viverra justo sit amet ex
            fringilla vestibulum. Etiam cursus ipsum id nunc luctus, ut aliquet
            erat pharetra. Proin et consequat tellus. Vestibulum vel tortor
            tempor, lobortis metus vitae, eleifend nisi. Curabitur scelerisque,
            leo nec efficitur vehicula, est nisl consectetur sapien, consequat
            imperdiet diam lorem eu nulla.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
