const About = () => {
  return (
    <div className="flex justify-center px-10">
      <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-center text-4xl font-bold text-fedblue">
          About Me
        </h1>
        <a href="/about">
          <h2 className="font-style: text-center text-lg italic text-fedblue hover:text-honblue">
            {" "}
            Don&apos;t like Reading? Click to see About Me Video{" "}
          </h2>
        </a>
        <section className="mb-8">
          <p className="mt-4 text-lg text-fedblue">
            I&apos;m a 24-year-old full-stack software developer with over a
            year of consistent coding experience. My passion for coding began
            after transitioning from my previous career in commercial sales. In
            the construction industry, I was constantly witnessing
            inefficiencies that could be solved by simple, intuitive software,
            and this sparked my desire to make a change. I want to be part of
            the teams that are driving this change and constantly enjoying the
            challenge of learning and improving as technology grows.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-honblue">
            Education & Bootcamp Experience
          </h2>
          <p className="mt-4 text-lg text-fedblue">
            In September 2023, I attended <strong>Makers Academy</strong>, a
            highly selective software development bootcamp in London. I learned
            key principles like <strong>OOP</strong>, <strong>TDD</strong>, and
            gained hands-on experience with <strong>Agile</strong> practices. My
            projects ranged from Python to JavaScript, including two full-stack{" "}
            <strong>MERN</strong> applications.
          </p>
          <p className="mt-4 text-lg text-fedblue">
            Since completing the bootcamp, I have worked on solo projects,
            focusing on frameworks like <strong>Next.js</strong>, and learning{" "}
            <strong>Typescript</strong>, and <strong>Tailwind CSS</strong>. Feel
            free to explore my{" "}
            <a href="/projects" className="font-semibold text-fedblue">
              projects page
            </a>{" "}
            or my{" "}
            <a href="https://github.com" className="font-semibold text-fedblue">
              GitHub
            </a>{" "}
            to see what I&apos;ve been building lately!
          </p>
          <p className="mt-4 text-lg text-fedblue">
            I built this portfolio website using <strong>Next.js</strong>,{" "}
            <strong>Typescript</strong>, <strong>Tailwind CSS</strong>, and a{" "}
            <strong>MongoDB</strong> database.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-honblue">
            Business Background
          </h2>
          <p className="mt-4 text-lg text-fedblue">
            I have a degree in Business Management & Accounting and Finance from
            Nottingham Trent University. During my degree, I completed a
            year-long industry placement in the construction sector. Initially,
            I started in management but quickly transitioned into sales due to
            my strong interpersonal skills. I decided to keep my full time job
            in sales while going back to university. Balancing full-time work
            while studying gave me excellent time management and self-motivation
            skills. During my time in the industry I had the opportunity to work
            on some of the UK&apos;s largest infrastructure projects, including{" "}
            <strong>HS2</strong>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-honblue">
            Interests & Hobbies
          </h2>
          <p className="mt-4 text-lg text-fedblue">
            Outside of coding, I am passionate about staying active. I&apos;m a{" "}
            <strong>scratch golfer</strong> and enjoy running, going to the gym,
            and skiing. Recently, I&apos;ve taken up tennis. Feel free to check
            out my{" "}
            <a href="/gallery" className="font-semibold text-fedblue">
              gallery
            </a>{" "}
            to see some moments I&apos;ve captured over the years.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
