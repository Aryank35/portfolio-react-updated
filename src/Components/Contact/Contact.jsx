import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rwza1ij",
        "template_lqimtsb",
        form.current,
        "V7h4ZfDFvLGl3ecyW"
      )
      .then(
        (result) => {
          setName('');
          setEmail('');
          setMessage('');
          // alert("Message sent Successfully...");
          console.log(result.text);
          console.log("message sent");
          toast.success('Message Sent Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

   

  return (
    <div id="contact" className="flex flex-col justify-center items-center py-8 bg-[#1a2036] w-full">
      <div className="flex flex-col text-white space-y-2 justify-center mx-auto pb-9">
      <h1 className="font-bold text-3xl sm:text-5xl text-center">Contact me</h1>
      <p className="sm:text-lg text-slate-400 w-[90%] sm:w-[50%] text-center mx-auto ">I'd love if you reached out to me. Even if it's just to say "Hey!". Don't hesitate! Drop me a line and I'll get back to you ASAP!</p>
      </div>
    <div className="flex justify-center items-center w-[90%] sm:w-[40%] bg-[#171721] rounded-xl shadow-md shadow-indigo-400 mb-8" >
      <form ref={form} onSubmit={sendEmail} className="flex flex-col  py-6 w-[90%] ">
        <h1 className="text-2xl text-white font-bold text-center py-2">Email Me 🚀</h1>
        <label className="text-xl font-bold text-white">Name:</label>
        <input className=" mb-6 py-1 rounded-sm px-2 text-lg font-semibold bg-gray-200" type="text" name="user_name" placeholder="Your Name..."  required value={name} onChange={(e) => setName(e.target.value)} />
        <label className="text-xl font-bold text-white">Email:</label>
        <input className=" mb-6 py-1 rounded-sm px-2 text-lg font-semibold bg-gray-200" type="email" name="user_email" placeholder="Your Email..." value={email} onChange={(e) => setEmail(e.target.value)} />
        <label className="text-xl font-bold text-white">Message:</label>
        <textarea className=" mb-6 py-1 h-[100px] rounded-sm px-2 text-lg font-semibold bg-gray-200 " name="message" placeholder="Message..." required value={message} onChange={(e) => setMessage(e.target.value)}  />
        <div className="flex items-center w-full justify-center ">
        <input className="w-[50%] sm:w-[30%] my-6 py-2 rounded-md px-5 bg-orange-500 hover:bg-orange-400 text-xl font-semibold  transform hover:scale-75 transition duration-200 ease-in-out" type="submit" value="Send"  />
        </div>
        
      </form>
    </div>
    <ToastContainer />
    </div>
  );
};

export default Contact;
