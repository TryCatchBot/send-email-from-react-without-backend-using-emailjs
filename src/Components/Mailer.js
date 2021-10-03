import React from "react";
import emailjs from "emailjs-com";

export default function Mailer () {

    function sendEmail (e) {
        e.preventDefault();

        emailjs.sendForm("service_2rarn6r", "template_6qejp8j", e.target, "user_NqY4efqWPrnKgmlpGbSJQ")
        .then(res => {
          console.log(res);
        }).catch(
          err => {
            console.log(err)
          }
        );
    }


  return (
    <div
      className="container border"
      style={{
        marginTop: "50px",
        width: "50%",
        backgroundImage: `url("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <h1 style={{marginTop: "25px", color:"white"}}>Contact Form</h1>
      <form className="row" style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}>
        <label style={{color:"white"}}>Name</label>
        <input type="text" name="name" className="form-control" />

        <label style={{color:"white"}}>Email</label>
        <input type="email" name="user_email" className="form-control" />

        <label style={{color:"white"}}>Message</label>
        <textarea type="message" rows="4" className="form-control" />
        <input type="submit" value="Send" className="form-control btn btn-primary"
        style={{marginTop: "30px"}} />
      </form>
    </div>
  );
};


