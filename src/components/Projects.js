import React from 'react';
import ecomm from "../images/ecomm.gif";
import fitness from "../images/fitness.png";
import flicks from '../images/flicks.png';
import tech from '../images/techblog.gif';
import employee from '../images/employee.png';
import work from '../images/work.png';

function Projects() {
    return (
        <div>
            <h2>Projects</h2>
            <section className="container-projects">
                <section className="card" id="ecomm">
                    <h3>E-Commerce</h3>
                    <a href="https://github.com/chelssmith/E-Commerce"> <img src={ecomm} alt="ecomm" width="500" height="250" /></a>
                </section>
                <section className="card" id="fitness">
                    <h3>Workout Tracker</h3>
                    <a href="https://github.com/chelssmith/fitness"> <img src={fitness} alt="fitness" width="500" height="250" /></a>
                </section>
                <section className="card" id="flicks">
                    <h3>Flicks N Liqs</h3>
                    <a href="https://flicks-n-liqs.herokuapp.com/"> <img src={flicks} alt="flicks" width="500" height="250" /></a>
                </section>
                <section className="card" id="tech">
                    <h3>Tech Blog</h3>
                    <a href="https://github.com/chelssmith/tech-blog"> <img src={tech}  alt ="tech"width="500" height="250" /></a>
                </section>
                <section className="card" id="employee">
                    <h3>Employee Tracker</h3>
                    <a href="https://www.youtube.com/watch?v=cCUgrnKzF8U"> <img src={employee}  alt ="employee" width="500" height="250" /></a>
                </section>
                <section className="card" id="work">
                    <h3>Profile Generator</h3>
                    <a href="https://www.youtube.com/watch?v=Kc42xKlkwMg"> <img src={work}  alt ="work" width="500" height="250" /></a>
                </section>
            </section>
        </div>
    )
}
export default Projects