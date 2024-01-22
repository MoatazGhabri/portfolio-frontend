import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function YourComponent() {
  const [isProfileImageSpinning, setIsProfileImageSpinning] = useState(false);
  const [isProfileSpinning, setIsProfileSpinning] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [feedbacks, setFeedbacks] = useState([]);

  const [loading, setLoading] = useState(false); // State to track loading state

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const form = event.target.closest('form');
    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    axios
      .post(`${REACT_APP_API_URL}/submit-feedback`, data)
      .then((response) => {
        toast.success('Feedback submitted successfully', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
                form.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('Failed to submit feedback', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        form.reset();
        setLoading(false);
      });
  };

  useEffect(() => {
    axios
      .get(`${REACT_APP_API_URL}/feedbacks`)
      .then((response) => {
        setFeedbacks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching feedbacks:', error);
      });
  }, []);

  const toggleProfileImageSpinning = () => {
    setIsProfileImageSpinning((prev) => !prev);
  };

  const toggleProfileSpinning = () => {
    setIsProfileSpinning((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-up");
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    const bgAnimation = document.getElementById('bgAnimation');

    const numberOfColorBoxes = 400;

    for (let i = 0; i < numberOfColorBoxes; i++) {
      const colorBox = document.createElement('div');
      colorBox.classList.add('colorBox');
      bgAnimation.append(colorBox)
    }

    // Use the 'isProfileImageSpinning' state here
    const profileImage = document.getElementById('profile-image');

    function toggleSpinningLight() {
      profileImage.classList.toggle('contour');
    }

    setInterval(toggleSpinningLight, 1000 * 2); // Adjust the interval as needed

    // Use the 'isProfileSpinning' state here
    const profile = document.getElementById('profile');

    function toggleSpinningLight() {
      profile.classList.toggle('contour');
    }

    setInterval(toggleSpinningLight, 1000 * 2); // Adjust the interval as needed

    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.classList.add("light-spin");
      });

      card.addEventListener("mouseleave", () => {
        card.classList.remove("light-spin");
      });
    });

    const skillCards = document.querySelectorAll(".skill");

    skillCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.classList.add("light-spin");
      });

      card.addEventListener("mouseleave", () => {
        card.classList.remove("light-spin");
      });
    });
  }, [isProfileImageSpinning, isProfileSpinning]);

  useEffect(() => {
    // Toggle the mobile menu when the hamburger icon is clicked
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    menuIcon.addEventListener('click', () => {
      toggleMobileMenu(); // Use the toggle function
    });


  }, []);

  return (
 <div>
  
  <div className="containe">
    
    <div className="bgAnimation" id="bgAnimation">
      <div className="backgroundAmim">
      </div>
    </div>
    
    <nav>
      <div className="container">
        <div className="mobile-nav">
          <ul className="mobile-menu" id="mobile-menu" style={{display: 'none'}}>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <i className="fas fa-bars menu-icon" id="menu-icon" />
        </div>
        <div className="logo">
          <img src="logo.png" style={{height: 55}} alt />
        </div>
        <ul className="menu">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar closeButton={false} />

    </nav>
    {/* Desktop version of the About section */}
    <section className="about" id="desktop-about">
      <div className="header">
        <div className="left">
          <div className="text-info">
            <h1 className="name" style={{fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif'}}>Moatez Ghabri</h1>
            <p style={{fontSize: 80, fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif'}}> <span style={{color: 'aqua'}}> web </span>developer</p>
            <p style={{fontSize: 60, fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif'}}>  Full stack<span style={{color: 'aqua'}}> JS</span></p>
            <p style={{fontSize: 30}}><span className="contact-info">moatazghabri@gmail.com</span></p>
            <p style={{fontSize: 30}}><span className="contact-info">+216 52 030 150</span></p>
            <a href="cv.pdf" download className="download-button">Download My CV</a>
          </div>
        </div>
        <div className="right">
          <img src="photo.jpg" alt="Photo" className="circular-image contour" id="profile-image" />
        </div>
      </div>
    </section>
    {/* Mobile version of the About section */}
    <section className="about" id="mobile-about">
      <div className="container">
        <div className="about-content">
          <img src="photo.jpg" alt="Photo" className="circular-image contour" id="profile" style={{width: 200, height: 200}} />
          <div className="text-content">
            <h1 className="name" style={{fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif', fontSize: 80}}>Moatez Ghabri</h1>
            <p style={{fontSize: 60, fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif'}}> <span style={{color: 'aqua'}}> web </span>developer</p>
            <p style={{fontSize: 40, fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif'}}>  Full stack<span style={{color: 'aqua'}}> JS</span></p>
            <p style={{fontSize: 20}}><span className="contact-info">moatazghabri@gmail.com</span></p>
            <p style={{fontSize: 20}}><span className="contact-info">+216 52 030 150</span></p>
            <a href="cv.pdf" download className="download-button">Download My CV</a>
          </div>
        </div>
      </div>
    </section>
    <section id="education-experience">
            <div className="container">
                <h2 style={{fontSize: 60}}>Education <span style={{color: 'aqua' }}>&</span> Experience</h2>
                <ul>
                    <li>
                        <strong>2023 - Present</strong><br />
                        <span>Student in master degree of information system and new technology</span><br />
                        <span>FSEG Sfax</span>
                    </li>
                    <li>
                        <strong>2020 - 2023</strong><br />
                        <span>Student in Bachelor's degree software engineering and information system</span><br />
                        <span>FST Sidi Bouzid</span>
                    </li>
                    
                  
                    <li>
                        <strong>2020</strong><br />
                        <span>Technical baccalaureate</span><br />
                        <span>Meknassy High School, Sidi Bouzid</span>
                    </li>
                </ul>
            </div>
        </section>
    <section id="projects">
      <div className="container">
        <h2 style={{fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize: 60}}>My <span style={{color: 'aqua'}}>Pro</span>jects</h2>
        <div className="project-scroll">
          <div className="project-card">
            <img src="port.png" alt="Project 1" />
            <h3>E-learning website</h3>
            <p>website contains a course <br />of programming Languages <br />  building by <span style={{color: 'rgb(228, 77, 38)', fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'}}>HTML</span>, <span style={{color: 'rgb(37, 77, 228)', fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'}}>CSS</span>, <span style={{fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'}}>Java</span><span style={{color: 'rgb(230, 199, 45)', fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'}}>Script</span> and <span style={{color: 'rgb(132, 136, 186)', fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'}}>PHP</span></p>
          </div>
          <div className="project-card">
            <img src="port.png" alt="Project 2" />
            <h3>E-commerce website</h3>
            <p>travel agency website<br /> building by <span style={{color: 'rgb(228, 77, 38)', fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'}}>HTML</span>, <span style={{color: 'rgb(37, 77, 228)', fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'}}>CSS</span>, <span style={{fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'}}>Java</span><span style={{color: 'rgb(230, 199, 45)', fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'}}>Script</span> and <span style={{color: 'rgb(132, 136, 186)', fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'}}>PHP</span></p>
          </div>
          <div className="project-card">
            <img src="port.png" alt="Project 2" />
            <h3>Portfolio website</h3>
            <p>website describe a socity <br /> building by <span style={{color: 'rgb(26, 220, 255)', fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif'}}>react</span></p>
          </div>
          <div className="project-card">
            <img src="port.png" alt="Project 2" />
            <h3>E-commerce website</h3>
            <p>online shopping website<br /> building by <span style={{color: 'rgb(26, 220, 255)', fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif'}}>react</span>,<span style={{fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif'}}> node.</span><span style={{color: 'rgb(115, 237, 115)'}}>js</span> and <span style={{color: 'rgb(105, 176, 93)', fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif'}}>Mongo</span><span style={{color: 'rgb(166, 145, 122)'}}>DB</span></p>
          </div>
        </div>
      </div>
    </section>
    <section id="projects-mobile">
      <div className="container">
        <h2 style={{fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize: 60}}>My <span style={{color: 'aqua'}}>Pro</span>jects</h2>
        <div className="project">
          <div className="project-card">
            <img src="port.png" alt="Project 1" />
            <h3>E-learning website</h3>
            <p>website contains a course <br />of programming Languages <br />  building by <span style={{color: 'rgb(228, 77, 38)', fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'}}>HTML</span>, <span style={{color: 'rgb(37, 77, 228)', fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'}}>CSS</span>, <span style={{fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'}}>Java</span><span style={{color: 'rgb(230, 199, 45)', fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'}}>Script</span> and <span style={{color: 'rgb(132, 136, 186)', fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'}}>PHP</span></p>
          </div>
          <div className="project-card">
            <img src="port.png" alt="Project 2" />
            <h3>E-commerce website</h3>
            <p>travel agency website<br /> building by <span style={{color: 'rgb(228, 77, 38)', fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'}}>HTML</span>, <span style={{color: 'rgb(37, 77, 228)', fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'}}>CSS</span>, <span style={{fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'}}>Java</span><span style={{color: 'rgb(230, 199, 45)', fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'}}>Script</span> and <span style={{color: 'rgb(132, 136, 186)', fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'}}>PHP</span></p>
          </div>
          <div className="project-card">
            <img src="port.png" alt="Project 2" />
            <h3>Portfolio website</h3>
            <p>website describe a socity <br /> building by <span style={{color: 'rgb(26, 220, 255)', fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif'}}>react</span></p>
          </div>
          <div className="project-card">
            <img src="port.png" alt="Project 2" />
            <h3>E-commerce website</h3>
            <p>online shopping website<br /> building by <span style={{color: 'rgb(26, 220, 255)', fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif'}}>react</span>,<span style={{fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif'}}> node.</span><span style={{color: 'rgb(115, 237, 115)'}}>js</span> and <span style={{color: 'rgb(105, 176, 93)', fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif'}}>Mongo</span><span style={{color: 'rgb(166, 145, 122)'}}>DB</span></p>
          </div>
        </div>
      </div>
    </section>
    <section id="skills">
      <div className="container">
        <h2 style={{fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize: 60}}>Skills</h2>
        <div className="skills-card">
          <div className="skill">
            <img src="html.png" alt="HTML" />
            <h3>HTML5</h3>
            <p>Proficient in creating well-structured and semantic HTML.</p>
          </div>
          <div className="skill">
            <img src="css.png" alt="CSS" />
            <h3>CSS3</h3>
            <p>Skilled in designing responsive and visually appealing websites.</p>
          </div>
          <div className="skill">
            <img src="js.png" alt="JavaScript" />
            <h3>JavaScript</h3>
            <p>Experienced in building dynamic and interactive web applications.</p>
          </div>
          <div className="skill">
            <img src="php.png" alt="PHP" />
            <h3>PHP</h3>
            <p>Proficient in server-side scripting using PHP for web development.</p>
          </div>
          <div className="skill">
            <img src="node.png" alt="JavaScript" />
            <h3>Node.js</h3>
            <p>Skilled in server-side development using Node.js and Express.</p>
          </div>
          <div className="skill">
            <img src="react.png" alt="JavaScript" />
            <h3>React</h3>
            <p>Proficient in building modern and efficient user interfaces using React.</p>
          </div>
          <div className="skill">
            <img src="mongo.png" alt="JavaScript" />
            <h3>MongoDB</h3>
            <p>Experience in working with MongoDB for database management.</p>
          </div>
         
        </div>
      </div>
    </section>
    <section id="contact">
      <div className="container">
        <h2 style={{fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize: 60}}>Get in <span style={{color: 'aqua'}}>Touch</span> </h2>
        <div className="social-media-icons">
          <a href="https://www.facebook.com/profile.php?id=100005326681539" target="_blank" className="social-icon"><img src="facebook.png" alt="Facebook" /></a>
        </div>
        <div className="social-media-icons">
          <a href="https://www.linkedin.com/in/moataz-ghabri-153a23234/" target="_blank" className="social-icon"><img src="linkedin.png" alt="Twitter" /></a>
        </div>
        <div className="social-media-icons">
          <a href="mailto:moatazghabri@gmail.com" className="social-icon">
            <img src="gmail.png" alt="Email" />
          </a>
        </div>
        <div className="social-media-icons">
          <a href="https://github.com/MoatazGhabri" target="_blank" className="social-icon"><img src="github.png" alt="LinkedIn" /></a>
        </div>
        <form className="contact-form" action="/submit-feedback" method="POST">
          <div className="name-container">
            <input placeholder="First Name" type="text" id="firstname" name="firstname" required />
            <input placeholder="last Name" type="text" id="lastname" name="lastname" required />
          </div>
          <input placeholder="Email" type="email" id="email" name="email" required />
          <textarea placeholder="Feedback" id="message" name="message" rows={4} required defaultValue={""} />
          <button type="submit" onClick={handleSubmit} disabled={loading}>
          {loading ? 'Sending...' : 'SEND'}</button>        </form>
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback.id}>
            <strong>{feedback.firstname} {feedback.lastname}</strong>: {feedback.message}
          </li>
            ))}
          </ul>
      </div>
    </section>
    <footer>
      <div className="container" style={{fontSize: 'large', fontFamily: '"Graffiti font", sans-serif'}}>
        © 2023 Moatez <span style={{color: 'rgba(16, 211, 211, 0.489)'}}>Ghabri</span> 
      </div>
    </footer>
  </div>

</div>

  )};

export default YourComponent;
