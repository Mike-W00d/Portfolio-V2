const About = () => {
  return (
    <div className="flex justify-center px-10">
      <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-center text-4xl font-bold text-fedblue">
          About Me
        </h1>
        <a href="/about"></a>
        <section className="mb-8">
          <p className="mt-4 text-lg text-fedblue">
            I&apos;m a 25-year-old full-stack software engineer I work at
            StuRents and I am lucky I get to spend my days constantly solving
            problems and coming up with (sometimes) elegant solutions alongside
            other great engineers. I have spent the over two years of
            consistently coding, learning and building and I am constantly
            looking to improve and grow as an engineer. My passion for coding
            began when I was in my final year of university. After deciding to
            take a short break from my full time job in commerical sales while I
            finished my degree, I found myself with extra time on my hands. In a
            mixture of procrastination over my actual exams and curiosity, I
            decided to use this time to explore something that had always
            interested me - coding. Since then, I have been on a journey of
            continuous learning and growth, attending Makers Academy bootcamp
            before getting a job as an engineer at StuRents. I really enjoy
            having ownership of my code from start to finish and I want to be
            part of the teams that are driving me to learn and improve every
            day.
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
