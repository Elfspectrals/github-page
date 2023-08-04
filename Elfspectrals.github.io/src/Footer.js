import React from 'react'

const Footer = () => {


  const redirectToLinkedin = () => {
    window.open('https://www.linkedin.com/in/jerome-neupert/','_blank');
  };

  const redirectToArtstation = () => {
    window.open('https://www.artstation.com/elfspectral','_blank');
  };

  return (
    <footer className="flex-shrink-0 bg-gray-800 p-6 text-white mt-auto">
      <div className="flex justify-between items-center">
        <div>
          <p>Téléphone : 07 67 19 62 73</p>
        </div>
        <div>
          <p>Email : jerome.neupert@gmail.com</p>
          </div>
        <div className="flex items-center">
          <img src={process.env.PUBLIC_URL + "/assets/img/Linkedin.png"} className="h-8 w-8 mr-2 " alt="Linkedin" onClick={redirectToLinkedin} />
          <img src={process.env.PUBLIC_URL + "/assets/img/artstation.jpeg"} className="h-8 w-8 mr-2" alt="ArtStation" onClick={redirectToArtstation} />
        </div>
      </div>
    </footer>
  )
}

export default Footer