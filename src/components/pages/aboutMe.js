import React from "react";
import '../styles/aboutMe.css'
import Me from '../../assets/SelfSweateredit.JPG'

export default function AboutMe() {
    return (
        <div className="aboutMe">
            <h1 class='title'>About Me!</h1>
            <img src={Me} alt="Me"></img>
            <p>
                Howdy! My name is Paul Tuemler, I am a 24 year old living in Atlanta Georgia. I am a graduate from Georgia State University with a BA in Film and Media with a certificate in Full Stack Development from the University of Minnesota. I have been working as a freelance Multi-Media Specialist out of Atlanta for several years now while also working as a shift supervisor at Fetch Dog Park and Bar, a start-up local to the city.
                <br></br>
                <br></br>
                I have a tendency to pick up way too many hobbies however, for the longest time I have been an avid gamer, reader, and movie goer. Some of my favorite genres are horror, fantasy, and sci-fi. My favorite movies and IPs are the Halloween and Alien series. During my degree at Georgia state I wrote a multitude of papers on the horror genre and how it relates to the Queer community. One of my favorite pass times is streaming on twitch, where I have built a community of fellow horror game enthusiasts and now close friends. 
                <br></br>
                <br></br>
                I am an active member in my cities LGBTQ+ community, volunteering at local events and helping to organize fundraising and support for LGBTQ+ charities and organizations. I have also helped with several national campaigns for organizations raising money through twitch and youtube. As a member of the community, I find it incredibly rewarding to help these organizations knowing that they can make a difference in others lives.
                <br></br>
                <br></br>
                My husband and I have several fur babies with totally normal names that are not at all drawn out:

                <ul class='pets'>
                    <li>Chipsworth Von Dracula Ramsey the III</li>
                    <li>Mars Chocolate Presents: Left Twix</li>
                    <li>Unlimited Breadsticks from Olive Garden</li>
                </ul>
                <br></br>
                <br></br>
                I am a huge advocate for always learning. One of my passions in life is spending time learning a new skill or concept. A goal of mine in the coming years is to return to school for a masters degree and then later in life, a doctorate. I have been told by several people that in the field a PHD doesn't really matter to get a job however that isn't why I want one, I view it as a great accomplishment and want to leave this life having accomplishment something that makes me feel good.  
                <br></br>
                <br></br>
                Careers!
                <br></br>
                <br></br>
                Because I enjoy learning, I find that I really enjoy jobs that make me feel like I am learning a new skill or something that requires that I continue to learn new things. Ever since highschool I have been working in food service, which was nice for paying the bill however, after a while it became repetitive. My goal for my future career is to find something that makes me learn and constantly find new approaches to new tasks, that is where I found my drive to pursue a Full Stack Development certificate. I enjoy coding and look forward to the day where I can combine my passion and living into one.
                <br></br>
                <br></br>
                I appreciate you if you have made it this far! Thanks for reading through my about me, hope you enjoy the rest of my portfolio!
                <br></br>
                <br></br>
                <span id='thanks'>Thanks!</span>
                </p>
        </div>
    );
};