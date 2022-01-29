import React from 'react'
import "./testimonials.scss"

export default function testimonials() {
    return (
        <div className="testimonials" id="testimonials">
            <h1>Resume</h1>
            <div className="content">
            <div className="left">
                <div className="container">
                <h1>Education</h1>
                <ul>
                    <li>
                    <div style={{display:'flex', justifyContent:"space-between"}}>
                        <h3>Brandeis University</h3>
                        <h3>May 2023(Expected)</h3>
                    </div>
                        <h3>Master of Science in Computer Science</h3>
                        <p>Related Courses: Advanced Programming Techniques in Java, Mobile Application Development, Discrete Structures</p>

                    </li>
                    <li>
                        <div style={{display:'flex', justifyContent:"space-between"}}>
                        <h3> National Taipei University of Technology</h3>
                        <h3> Sep 2020 - June 2021</h3>
                        </div>
                        <h3>Credit Certification</h3>
                        <p>Related courses: Data Structures, Object-Oriented Programming, Algorithms</p>

                    </li>
                    <li>
                    <div style={{display:'flex', justifyContent:"space-between"}}>
                        <h3>National Taiwan Ocean University</h3>
                        <h3> Sep 2015 - June 2019</h3>
                        </div>
                        <h3>Bachelor of Science in Bioscience and Biotechnology</h3>
                        <p>Related courses: Bioinformatic Scientific Computing, Advanced Calculus</p>

                    </li>
                </ul>
                </div>
            </div>
            <div className="right">
                <div className="container">
                <h1>Work Experience</h1>
                <ul>
                    <li>
                        <div style={{display:'flex', justifyContent:"space-between"}}>
                        <h3>Double Information Technology</h3>
                        <h3>Jan 2021- Jun 2021</h3>
                        </div>
                        <h4>Full-Stack Engineer</h4>
                        <ul>
                            <li>
                            • Created online resume platform APIs in Python to support user authentication using Flask, MySQL.</li>
                            <li>• Deployed and monitored web applications on the Google Cloud Engine and utilized OAuth2 to import Google and
                            Facebook Login Options.</li>
                            <li>• Designed a profile management tool to automate resume management, improving processing times by up to 50%.</li>
                        </ul>

                    </li>
                    <li>
                    <div style={{display:'flex', justifyContent:"space-between"}}>
                        <h3>Double Information Technology</h3>
                        <h3>Sep 2020 - Dec 2020</h3>
                    </div>
                        <h4>Software Engineer Intern</h4>
                        <ul>
                            <li>
                            • Created an online resume platform using Vue, Vuex, and Quasar, helping 300+ users write, manage, monitor their
resumes.</li>
                            <li>• Developed cloud photo storage on AWS S3 using Python and MySQL.</li>
                            <li>• Implemented Search Engine Optimization (SEO) to improve the company’s website ranking by 30%.
</li>
                        </ul>

                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    )
}
