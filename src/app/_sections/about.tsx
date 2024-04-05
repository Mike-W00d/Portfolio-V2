const About = () => {
  return (
    <div className="flex px-10 justify-center">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-fedblue text-center mb-6">About Me</h1>
        
        <section className="mb-8">
          <p className="text-lg mt-4">
            I'm a 24-year-old full-stack software developer with over a year of consistent coding experience.
            My passion for coding began after transitioning from my previous career in commercial sales.
            In the construction industry, I was constantly witnessing inefficiencies that could be solved by simple, intuitive software, and this sparked my desire to make a change.
            I want to be part of the teams that are driving this change and constantly enjoying the challenge of learning and improving as technology grows.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl text-honblue font-semibold">Education & Bootcamp Experience</h2>
          <p className="text-lg mt-4">
            In September 2023, I attended <strong>Makers Academy</strong>, a highly selective software development bootcamp in London.
            I learned key principles like <strong>OOP</strong>, <strong>TDD</strong>, and gained hands-on experience with <strong>Agile</strong> practices.
            My projects ranged from Python to JavaScript, including two full-stack <strong>MERN</strong> applications.
          </p>
          <p className="text-lg mt-4">
            Since completing the bootcamp, I have worked on solo projects, focusing on frameworks like <strong>Next.js</strong>, 
            <strong>Typescript</strong>, and <strong>Tailwind CSS</strong>. Feel free to explore my <a href="/projects" className="text-fedblue font-semibold">projects page</a> or my <a href="https://github.com" className="text-fedblue font-semibold">GitHub</a> to see what I've been building lately!
          </p>
          <p className="text-lg mt-4">
            This very portfolio website was built by me using <strong>Next.js</strong>, <strong>Typescript</strong>, <strong>Tailwind CSS</strong>, and a <strong>MongoDB</strong> database.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl text-honblue font-semibold">Business Background</h2>
          <p className="text-lg mt-4">
            I hold a degree in Business Management & Accounting and Finance from Nottingham Trent University.
            During my degree, I completed a year-long industry placement in the construction sector.
            Initially, I started in management but quickly transitioned into sales due to my strong interpersonal skills.
            Balancing full-time work while studying gave me excellent time management and self-motivation skills.
            I even had the opportunity to work on some of the UK's largest infrastructure projects, including <strong>HS2</strong>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl text-honblue font-semibold">Interests & Hobbies</h2>
          <p className="text-lg mt-4">
            Outside of coding, I am passionate about staying active. I'm a <strong>scratch golfer</strong> and enjoy running, going to the gym, and skiing.
            Recently, I've taken up tennis as well! Feel free to check out my <a href="/gallery" className="text-fedblue font-semibold">gallery</a> to see some moments I’ve captured over the years.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
