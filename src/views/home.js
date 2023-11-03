import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ListItem from '../components/list-item'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>STEMMED CONNECT</title>
        <meta property="og:title" content="STEMMED CONNECT" />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div className="home-container01">
          <div className="home-card">
            <h1 className="home-text">Explore your Future in Medicine.</h1>
            <h1 className="home-text01 HeadingOne">Prepare your Future.</h1>
            <span className="home-text02">
              Join STEMED Connect today to get started
            </span>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf1OqJz2fDWum4KQDOHPzCIDPG-ZaTrz0CrWBenxIbhLQOTVQ/viewform"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link button"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
      <img alt="image" src="/curved6-1500h.jpg" className="home-image" />
      <section className="home-container02">
        <div className="home-container03">
          <h1 className="home-text03">WHO ARE WE?</h1>
          <span className="home-text04">
            STEMed Connect is a volunteer organization that aims to help youths
            aged between 12-19 explore their future aspirations in medicine. We
            believe that every student deserves access to resources and
            opportunities that can help them achieve their dreams.
          </span>
        </div>
        <div className="home-container04">
          <div className="home-container05">
            <img
              alt="image"
              src="/craiyon_232826_bringing_unique_advantages-500w.png"
              className="home-image1"
            />
            <span className="home-text05">
              Our organization provides a range of activities, programs, and
              competitions to help students develop their skills and knowledge
              in medicine. We work with medical professionals and educators to
              ensure that our programs are informative, engaging, and fun.
            </span>
            <div className="home-container06"></div>
          </div>
          <div className="home-container07">
            <img
              alt="image"
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/tasks.jpg"
              className="home-image2"
            />
            <div className="home-container08">
              <h3 className="HeadingTwo">What Do We Provide?</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testimonials">
        <div className="home-container09">
          <div className="home-container10">
            <div className="home-container11">
              <h2 className="home-text07 HeadingOne">Work With Us</h2>
              <p className="home-text08">
                A different approach. A new opportunity.
              </p>
              <p className="home-text09">
                At STEMed Connect, we are passionate about helping students
                achieve their dreams in medicine. We believe that every student
                deserves access to resources and opportunities that can help
                them explore their future aspirations.
              </p>
            </div>
          </div>
          <div className="home-logos"></div>
        </div>
        <img alt="image" src="/bottom.svg" className="home-bottom-wave-image" />
        <img alt="image" src="/waves-white.svg" className="home-image3" />
        <img alt="image" src="/top.svg" className="home-top-wave-image" />
      </section>
      <section className="home-contaier">
        <div className="home-container12">
          <div className="home-container13">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
            </svg>
            <img
              alt="image"
              src="/stethoscope-logo-free-png-200h.webp"
              className="home-image4"
            />
          </div>
          <h2 className="home-text10 HeadingTwo">Ways To Be Involved</h2>
          <span className="home-text11">Learn and Work with the Best</span>
        </div>
        <div className="home-container14">
          <div className="home-container15">
            <ListItem></ListItem>
            <ListItem
              title="2. Performance Analyze"
              new_prop="Competitions"
              description=" We organize a range of competitions that challenge students to apply their knowledge and skills in medicine. Our competitions are designed to be fun, engaging, and educational, and provide students with the opportunity to showcase their talent and stand out amongst many other medical interests."
            ></ListItem>
            <ListItem
              title="3. Social Conversions"
              new_prop="Workshops"
              description="Our workshops offer students the chance to learn from medical professionals and educators in a hands-on, interactive environment. We cover a range of topics, from anatomy and physiology to medical research and innovation, and provide students with the opportunity to develop practical skills and knowledge."
            ></ListItem>
          </div>
        </div>
        <div className="home-divider"></div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf1OqJz2fDWum4KQDOHPzCIDPG-ZaTrz0CrWBenxIbhLQOTVQ/viewform"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link1 button"
        >
          Apply Now
        </a>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Home
