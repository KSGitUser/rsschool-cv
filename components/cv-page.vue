<template>
  <header class="header">
    <div class="wrapper">
      <h1>CURRICULUM VITAE</h1>
      <div class="personal-details">
        <h2 class="section-header" id="personal-details-header-id">Personal details</h2>
        <div class="layout-2-columns personal-details__content-wrapper">
          <figure class="photo photo__wrapper">
            <img class="cv-photo" src="~/assets/images/Sergey_Krikun_profile_photo.png" alt="Sergey Krikun photo">
            <figcaption>
              <p class="cv-name" id="sergey-krikun"><em>Sergey Krikun</em></p>
            </figcaption>
          </figure>
          <address class="address">
            <ul class="personal-detail__list">
              <li class="personal-detail__list-item">
                <span class="list-item__description">Location:</span>
                Tbilisi, Georgia
              </li>
              <li class="personal-detail__list-item">
                <span class="list-item__description">Mobile phone:</span>
                <a class="list-item__value" href="tel:+79624033427">+7-962-403-34-27</a>
              </li>
              <li class="personal-detail__list-item">
                <span class="list-item__description">Email:</span>
                <a class="list-item__value" href="mailto:sergey.a.krikun@gmail.com">sergey.a.krikun@gmail.com</a>
              </li>
            </ul>
          </address>
        </div>
      </div>
    </div>
  </header>
  <main class="main">
    <section class="experience">
      <div class="wrapper">
        <h2 class="section-header" id="experience-header-id">Experience</h2>
        <div class="section-content">
          <p>I'm an experienced <b>Frontend developer</b>. I got my university degree in Computer Science with the
            specialization "Informatics. Linguistics and intercultural communication". I didn’t have many opportunities
            to practice coding for a long time, but I had a good base to get some knowledge of modern computer
            languages. In 2018, I decided to learn Web Development online at Geekbrains. I studied HTML, JavaScript and
            PHP for about a year. After that, I got a job as a front-end developer. And now I have a good experience in
            coding, working in team, code reviewing, creating architecture for new projects.
          </p>
          <p> My experience as an entrepreneur made it possible for me to practice my soft skills related to time
            management, communication, and problem-solving. </p>
        </div>
      </div>
    </section>
    <section class="skills">
      <div class="wrapper">
        <h2 class="section-header" id="skills-header-id">Skills</h2>
        <div class="section-content">
          <p>My everyday tools:</p>
          <ul class="skills-list">
            <li class="first-level-list-item-1">HTML</li>
            <li class="first-level-list-item-2"> CSS
              <ul>
                <li class="second-level-list-item-1">Stylus</li>
                <li class="first-level-list-item-3">SASS</li>
              </ul>
            </li>
            <li class="first-level-list-item-3">JavaScrip
              <ul>
                <li class="second-level-list-item-1">Vue - SPA
                  <ul>
                    <li class="second-level-list-item-2">Nuxt - SSR</li>
                    <li>Vuex</li>
                    <li>Vuetify - as a UX libraty</li>
                  </ul>
                </li>
                <li class="first-level-list-item-1">React
                  <ul>
                    <li class="second-level-list-item-1">Next - SSR</li>
                    <li class="second-level-list-item-1">Redux</li>
                    <li class="second-level-list-item-1">ReduxToolkit</li>
                  </ul>
                </li>
                <li class="second-level-list-item-3">TypeScript</li>
                <li class="first-level-list-item-2">Jest</li>
                <li class="first-level-list-item-3">Meteor</li>
                <li class="first-level-list-item-3">GoHugo</li>
                <li class="second-level-list-item-4">JQuery - occasionally</li>
                <li class="second-level-list-item-5">Stencil.js - to create custom elements</li>
                <li class="second-level-list-item-6">JSDoc</li>
              </ul>
            </li>
            <li class="first-level-list-item-4">Figma</li>
            <li class="first-level-list-item-5">Fiddler, HTTP Toolkit - to mock requests</li>
            <li class="first-level-list-item-6">Postman - to make requests</li>
            <li class="first-level-list-item-7">Webpack, Gulp, Babel, ESLint, Prettier</li>
            <li class="first-level-list-item-8">Git</li>
          </ul>
          <p>Tools I used during the Geekbrains course:</p>
          <ul class="skills-list">
            <li class="first-level-list-item-4">PHP
              <ul>
                <li class="second-level-list-item-1">Yii 2</li>
              </ul>
            </li>
            <li class="first-level-list-item-5">MySQL</li>
            <li class="first-level-list-item-6">HTTP/HTTPS, some base of networks</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="employment-history">
      <div class="wrapper">
        <h2 class="section-header" id="employment-history-id">Employment history</h2>
        <ul class="employment-list">
          <li>
            <p class="employment-period">May 2021 - present time</p>
            <div class="employer-description">
              <h3 class="employer-description__name"><a href="https://just-work.org" target="_blank">Just Work</a></h3>
              <p class="employer-description__place">Moscow (Russia)</p>
              <ul>
                <li>work simultaneously on 2-3 projects</li>
                <li>decomposition of tasks</li>
                <li>setting and evaluation of tasks</li>
                <li>code reviewing</li>
                <li>projects on Vue, React</li>
                <li>optimization of components and loading</li>
                <li>writing e2e tests</li>
              </ul>
            </div>
          </li>
          <li>
            <p class="employment-period">Dec 2019 - May 2001</p>
            <div class="employer-description">
              <h3 class="employer-description__name"><a href="https://finfort.ru/" target="_blank">Finfort R&D.</a></h3>
              <p class="employer-description__place">Krasnodar (Russia)</p>
              <p class="employer-description__text">Front-End Developer. Worked on a B2B product. Used Nuxt (Vue) and
                Stencil. Since 2020, I have been working remotely.</p>
            </div>
          </li>
          <li>
            <p class="employment-period">Jul 2019 - Dec 2019</p>
            <div class="employer-description">
              <p class="employer-description__name">Ajax, a real estate agency.</p>
              <p class="employer-description__place">Krasnodar (Russia)</p>
              <p class="employer-description__text">Front-End Developer. Worked on an in-house product. Used Vue.</p>
            </div>
          </li>
          <li>
            <p class="employment-period">Jun 2000 - Jul 2018</p>
            <div class="employer-description">
              <p class="employer-description__name">Operated in the real estate market as an entrepreneur.</p>
              <p class="employer-description__place">Stavropol (Russia)</p>
              <p class="employer-description__text"></p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="education">
      <div class="wrapper">
        <h2 class="section-header" id="education-id">Education</h2>
        <div class="qualifications-wrapper">
          <h3>Qualifications</h3>
          <ul class="qualifications-list">
            <li class="qualification-description">
              <p class="qualification-time">January 2021 - July 2021</p>
              <div class="institution">
                <p class="institution__name">
                  <a class="institution__link" href="https://rs.school/"
                     target="_blank">RSSchool</a>
                </p>
                <p class="institution__text">Online course on JavaScript
                </p>
                <img class="certificate-image" src="~/assets/images/RSSchool-JS-2021.webp" alt="RSSchool JS certificate">
              </div>
            </li>
            <li class="qualification-description">
              <p class="qualification-time">July 2021 - November 2021</p>
              <div class="institution">
                <p class="institution__name">
                  <a class="institution__link" href="https://rs.school/"
                     target="_blank">RSSchool</a>
                </p>
                <p class="institution__text">Online course on Node.js & AWS
                </p>
                <img class="certificate-image" src="~/assets/images/RSSchool-Node-AWS-2021.webp" alt="RSSchool Node certificate">
              </div>
            </li>
            <li class="qualification-description">
              <p class="qualification-time">November 2020 - present time</p>
              <div class="institution">
                <p class="institution__name">
                  <a class="institution__link" href="https://design.itmo.ru/courses/web-developer"
                     target="_blank">ITMO University</a>
                </p>
                <p class="institution__place">St. Petersburg, Russia</p>
                <p class="institution__text">Online course on JavaScript and Node.js. Training projects on <a
                    class="projects-link" href="https://github.com/KSGitUser/ITMO" target="_blank">Github</a>
                </p>
              </div>
            </li>
            <li class="qualification-description">
              <p class="qualification-time">Jun 2018 - Jul 2019</p>
              <div class="institution">
                <p class="institution__name">
                  <a class="institution__link" href="https://geekbrains.ru/geek_university/web"
                     target="_blank">Geekbrains</a>
                </p>
                <p class="institution__place">Moscow, Russia</p>
                <p class="institution__text">Online Web Developer course. Training projects on <a
                    class="projects-link" href="https://github.com/KSGitUser?tab=repositories"
                    target="_blank">Github</a>
                </p>
              </div>
            </li>
          </ul>
          <p>I’m trying to get a continuing education including, but not all of them: TypeScript course on
            learn.javascript.ru, Nuxt.js and Vue.js by Maximilian Schwarzmüller on Udemy.</p>
        </div>
        <div class="higher-education-wrapper">
          <h3>Higher education</h3>
          <ul class="higher-educations-list">
            <li class="higher-education-description">
              <p class="higher-education-time">2002 - 2005</p>
              <div class="institution">
                <p class="institution__name"> North Caucasian Polytechnic University </p>
                <p class="institution__place">Stavropol, Russia</p>
                <p class="institution__text">Full-time postgraduate studies Academic degree: Candidate of Technical
                  Sciences</p>
              </div>
            </li>
            <li class="higher-education-description">
              <p class="higher-education-time">1997 - 2002</p>
              <div class="institution">
                <p class="institution__name">Stavropol State University</p>
                <p class="institution__place">Stavropol, Russia</p>
                <p class="institution__text">Faculty of Romance-Germanic Languages. Specialty: Computer Science and
                  English Teacher</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="language">
      <div class="wrapper">
        <h2 class="section-header">English language</h2>
        <p>According to EF SET <a class="language__link" href="https://www.efset.org/cert/RymtkQ" target="_blank">C1
          Advanced</a></p>
        <img class="certificate-image" src="~/assets/images/ES-Set-certificate-2001-Krikun.png" alt="English certificate">
      </div>
    </section>
    <footer class="footer">
      <div class="wrapper">
        <div class="layout-4-columns">
          <a class="layout-column github-link" href="https://github.com/KSGitUser" target="_blank">My GitHub</a>
          <span class="layout-column foundation-year">2021</span>
          <a class="layout-column footer-logo" href="https://rs.school" target="_blank">
<!--            <object class="footer-logo-object" type="image/svg+xml" data="./img/footer/rs-school-logo.svg"> Your-->
<!--              browser does not support svg-->
<!--            </object>-->
            RSSchool
          </a>
        </div>
      </div>
    </footer>
  </main>
</template>

<script>
export default {
  name: "CvPage"
}
</script>

<style scoped lang="scss">
.cv-photo {
  border-radius:50%
}

.certificate-image {
  width: 80%;
  padding: 16px;
  max-width: 640px;
  height: auto;

  @media (max-width: 400px) {
    width: 100%;
  }
}

.personal-details__content-wrapper {
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap:64px;
  padding: 0 32px;

  @media (max-width: 640px) {
    padding: 0;
    gap:8px;
  }
}
</style>
