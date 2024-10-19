import React from "react";
import Image1 from '../images/CostaRica.jpg';
import Image2 from '../images/CostaRica2.jpg';
import Image3 from '../images/CostaRica4.jpg';
import "../styles/about.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>Sobre Nosotros</h1>
      <div className="content">
        <p>
          Somos una empresa dedicada a brindar soluciones innovadoras y de
<<<<<<< HEAD
          calidad en el ámbito de la tecnología. Nuestro equipo de expertos está
=======
          calidad en el ámbito de turismo. Nuestro equipo de expertos está
>>>>>>> f43dac2a04b32506aa8094ef30c3381d2669d6fd
          comprometido en ofrecer servicios que superen las expectativas de
          nuestros clientes.
        </p>

        <div className="gallery-container">
          <h1>Galería de Imágenes</h1>
          <div className="images">
            <img src={Image1} alt="Descripción de la imagen 1" />
            <img src={Image2} alt="Descripción de la imagen 2" />
            <img src={Image3} alt="Descripción de la imagen 3" />
          </div>
        </div>

        <div className="cards">
          <div className="card">
            10+
            <p>Años de Experiencia en el sector.</p>
          </div>
          <div className="card">
            500+
            <p>Proyectos Completados.</p>
          </div>
          <div className="card">
            200+
            <p>Clientes Satisfechos.</p>
          </div>
          <div className="card">
            100%
            <p>Compromiso con la Calidad.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
