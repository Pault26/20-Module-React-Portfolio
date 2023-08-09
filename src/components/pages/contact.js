import React from "react";
import '../styles/contact.css'

export default function Contact() {

const preventDefault = () => {
    document.getElementById("submit").addEventListener("click", function(event){
        event.preventDefault()
      });
}

    return (
        <div className='contact'>
            <br></br>
            <h2 className="title">Contact</h2>
            <br></br>
            <br></br>
            <br></br>
            <form>
                <label for="name">Name:</label><br></br>
                <input type="text" id="name" name="name"></input><br></br>
                <label for="email">Email:</label><br></br>
                <input type="text" id="email" name="email"></input><br></br>
                <label for="message">Message:</label><br></br>
                <textarea id="message" name="message" rows="5" cols="20"></textarea><br></br>
                <input type="submit" id="submit" value="Submit" onClick={preventDefault}></input>
            </form>
            <br></br>

            <br></br>
            <div className='email'>
                My email: paultuemler@yahoo.com<br></br>
            </div>
        </div>
    );
};