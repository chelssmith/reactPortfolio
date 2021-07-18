import React from 'react';
import 'Style.css';

export default function Contact() {
    return (

        <div id="contact">
            <h2>- Contact -</h2>
            <div id="contact-form">
                <form>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <br />
                        <input type="text" id="name" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <br />
                        <input type="email" id="email" required />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <br />
                        <textarea id="message" required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            </div>
            )}