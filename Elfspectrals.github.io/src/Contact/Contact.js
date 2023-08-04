import React from 'react';

const Contact = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-indigo-950 text-3xl">
      <form
        action="https://formsubmit.co/jerome.neupert@gmail.com"
        method="POST"
        className="bg-navy-darker p-16 rounded-lg border-4 border-amber-600 "
        >
        <label htmlFor="name" className="text-orange-400 font-black block mb-2">
          Nom :
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="border border-emerald-700 px-2 py-1 mb-4 bg-navy-darkest text-indigo-800"
        />
        <br />
        <label htmlFor="email" className="text-orange-400 font-black block mb-2">
          E-mail :
        </label>
        <input
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
          className="border border-emerald-700 px-2 py-1 mb-4 bg-navy-darkest text-indigo-800"
        ></textarea>
        <br />
        <input
          type="submit"
          value="Envoyer"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Contact;