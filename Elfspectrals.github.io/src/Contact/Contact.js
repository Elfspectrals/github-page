import React, { useRef } from 'react';
import 'animate.css/animate.min.css';

const Contact = () => {
  const buttonRef = useRef(null);

  const buttonAnimation = () => {
    const button = buttonRef.current;
    button.classList.add("animate__fadeOut");

    setTimeout(() => {
      button.classList.remove("animate__fadeOut");
    }, 1500); // Change the delay (in milliseconds) as needed
  };

  return (
    <div className="flex justify-center items-center h-screen bg-indigo-950 text-3xl">
      <form
        action="https://formsubmit.co/jerome.neupert@gmail.com"
        method="POST"
        className="bg-navy-darker p-16 rounded-lg border-4 border-amber-600 "
      >
        <h3 className="text-white text-4xl mb-8 animate__animated animate__backInRight ">
          Pour m'envoyer un message plein de{' '}
          <span className="text-yellow-400 font-bold">joie </span> et
          <span className="text-pink-500 font-bold"> d'amour</span>
        </h3>
        <label htmlFor="name" className="text-orange-400 font-black block mb-2">
          Nom :
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder='Qui es tu ?'
          required
          className="border border-emerald-700 px-2 py-1 mb-4 bg-navy-darkest text-indigo-800"
        />
        <br />
        <label htmlFor="email" className="text-orange-400 font-black block mb-2">
          E-mail :
        </label>
        <input
          placeholder="L'email que je dois contacter"
          type="email"
          id="email"
          name="email"
          required
          className="border border-emerald-700 px-2 py-1 mb-4 bg-navy-darkest text-indigo-800"
        />
        <br />
        <label htmlFor="message" className="text-orange-400 font-black block mb-2">
          Message :
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="border border-emerald-700 px-2 py-1 mb-4 bg-navy-darkest text-indigo-800 w-full resize-y"
          placeholder="Bonjour Jérôme,nous serions honorés de t'avoir avec nous 🤩"
        ></textarea>
        <br />
        <input
          type="submit"
          value="Envoyer"
          onClick={buttonAnimation}
          ref={buttonRef}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer animate__animated"
        />
      </form>
    </div>
  );
};

export default Contact;