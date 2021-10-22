import React from 'react';


function Contact() {
    return (

        <div id="contact">
            <h2> Contact Me Here </h2>
                
                    <div><a href="https//github.com/chelssmith">GitHub</a></div>
                    <div><a href="mailto:smith2chelsea2@gmail.com">Email: smith2chelsea2@gmail.com</a></div>
           
            <h2> Or Fill Out This From </h2>
            <div id="contact-form">
                <form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <br />
                        <input type="text" id="name" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="email" id="email" required />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <br />
                        <textarea id="message" required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;