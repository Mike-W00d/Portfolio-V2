import Image from "next/image";
import React from "react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Bald Bible Projects Page",
};

const Baldbible = () => {
  return (
    <section className="flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex rounded-lg bg-white flex-col w-full max-w-4xl p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Title and Tech Stack */}
          <h1 className="text-fedblue text-3xl font-bold mt-3">Bald Bible</h1>
          <span className="text-honblue text-xl">Tech Stack</span>
          <span className="text-honblue text-lg text-center">
            Node.js, React, MongoDB, Express, VanillaCSS, Jest, Cypress,
            Cloudinary
          </span>

          {/* Overview */}
          <h2 className="text-fedblue text-2xl font-bold text-center">
            Overview
          </h2>
          <p className="text-fedblue text-center">
            Our final group project while at Makers. Our team consisted of 4
            software developers and 2 quality engineers, and we were given 8
            days to reach MVP building anything we liked which we would then
            present to a live audience at the end of our course. We decided on
            to build Bald Bible to try and create a positive place on the
            internet for those suffering with hair loss. One of our team pitched
            the idea drawing from his own experience of losing his hair where
            all you see online when you google hair loss are websites selling
            you products to try preventing hair loss rather than encouraging you
            to embrace it.
          </p>
          <ul className="text-fedblue list-disc list-inside space-y-1">
            <li>8 days to MVP</li>
            <li>
              Main Language: JavaScript - React frontend & Node.js backend
            </li>
            <li>Database: MongoDB</li>
            <li>Testing: Backend: Jest, Frontend: Cypress</li>
            <li>
              Other Tech: Express, Cloudinary (image storage), Bcrypt, CSS, Vite
            </li>
          </ul>

          {/* Presentation Image */}
          <Image
            src="/BB-Presentation.jpeg"
            alt="My team and I presenting Bald Bible"
            width={1200}
            height={1200}
            className="w-full max-w-sm sm:max-w-md lg:max-w-2xl object-contain"
          />
          <span className="text-fedblue text-center font-bold">
            Myself and my team presenting the tech demo below live at our demo
            day event.
          </span>

          {/* Tech Functionality Demo */}
          <h2 className="text-fedblue text-2xl font-bold text-center">
            Tech Functionality Demo
          </h2>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/aNzYTEQ8lqk?si=3d97ti-vfDPvWStk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full max-w-sm sm:max-w-md lg:max-w-2xl"
          ></iframe>

          <h3 className="text-xl text-honblue font-bold">
            Achieved Functionality
          </h3>
          <ul className="text-fedblue list-disc list-inside space-y-1">
            <li>Login: Must be unique email and correct password</li>
            <li>Signup: Valid format, password length, special character</li>
            <li>Password Security: Bcrypt-hashed passwords</li>
            <li>Dynamic page elements: buttons, login/signup, Feed Page</li>
            <li>Image Feed: Clickable images</li>
            <li>Security: Restricted actions for logged-in users only</li>
            <li>Responsive: Full responsiveness across screen sizes</li>
            <li>
              Image Upload: Cloudinary image storage, auto-display on feed
            </li>
            <li>Comments: Conditional rendering, deletable by user</li>
            <li>Likes: Like/unlike functionality</li>
            <li>Testing: Database, frontend, and API tests in place</li>
          </ul>

          {/* Planning */}
          <h2 className="text-fedblue text-2xl font-bold text-center">
            Planning
          </h2>
          <span className="text-fedblue text-center">
            As a team we quickly agreed upon using the MERN stack, this was
            because we all had experience building using the stack but there
            were still plenty of learning opportunities and optimisations, we
            could do by creating another project in the same stack especially as
            we had a limited timeline. Once decided between us on building the
            Bald Bible when then had to decide what functionality we hoped to
            achieve and what MVP of Bald Bible looked like. To do this we
            created user stories of what as a user we wanted to be able to
            achieve on the site. Using the user stories, we then created wire
            frame pages of what we wanted the site to look like and from this
            drew up a component tree using Excalidraw.
          </span>
          <Image
            src="/BB-Wireframes.png"
            alt="Wireframe pages of Bald Bible made while planning"
            width={1200}
            height={1200}
            className="w-full max-w-sm sm:max-w-md lg:max-w-2xl object-contain"
          />
          <span className="text-fedblue text-center font-bold">
            Our wireframe pages for Bald Bible made during the planning stage
          </span>
          <span className="text-fedblue text-center">
            As a team we followed AGILE working principles and used a trello
            board to break down the tasks which needed doing and make sure we
            got the most out of each sprint. This also made sure each team
            member knew what tasks to needed completing and we were able to
            track the progress we were making.
          </span>
          <Image
            src="/BB-Trello.png"
            alt="Our Trello board for Bald Bible"
            width={1200}
            height={1200}
            className="w-full max-w-sm sm:max-w-md lg:max-w-2xl object-contain"
          />
          <span className="text-fedblue text-center font-bold">
            Our Trello board for Bald Bible showing our progress and tasks to
            complete
          </span>

          {/* My Responsibilities */}
          <h2 className="text-fedblue text-2xl font-bold text-center">
            My Responsibilities
          </h2>
          <ul className="text-fedblue list-disc list-inside space-y-1">
            <li>
              Converting our user stories and wireframe component tree into
              manageable Trello tickets with an accurate time estimate for each.
            </li>
            <li>
              Setting up the MongoDB database model classes and creating a seed
              script to put test data into the database.
            </li>
            <li>
              Configuring Cloudinary to resize uploaded images to make it easier
              to get the correct Pinterest-style look on the UI.
            </li>
            <li>
              The routing to send the image data from the UI to the backend and
              upload it into Cloudinary.
            </li>
            <li>
              Creating the image controller to create new Image instances for
              each upload and then storing user and image data into the MongoDB
              database.
            </li>
            <li>
              Using Bcrypt to hash all user passwords in the database for user
              security.
            </li>
            <li>
              Project managing - we rotated the responsibility to lead
              standups/retros between the group throughout the project.
            </li>
            <li>
              Locking the Upload page so only logged-in users can upload images
              to the site.
            </li>
            <li>
              Pair programming with team members to help with CSS styling on the
              frontend and debugging.
            </li>
          </ul>

          {/* Reflection */}
          <h2 className="text-fedblue text-2xl font-bold text-center">
            Reflection
          </h2>
          <h3 className="text-honblue font-bold"> Image Upload </h3>
          <span className="text-fedblue">
            This was the first time any of us on the team had worked with
            handling images. I took charge of the ticket for image upload as I
            knew for us to achieve MVP before the demo day having a reliant and
            fast way of handling images would be essential. I knew I wanted to
            try out a cloud store for our images and after some research online
            I found Cloudinary was a fast and free way of storing images for the
            project and it also had good SDK documentation I could work from.
            Although it took me longer than I would have hoped to get the upload
            working and connected to the database, it was a good experience
            working on something completely new to me.
          </span>
          <h3 className="text-honblue font-bold"> Version Control </h3>
          <span className="text-fedblue">
            Working in a team of 4 developers all on the same project led to a
            few issues with merge conflicts. We had a clear system in place to
            try and mitigate the risk of this happening which was - all working
            on our own individual separate branches away from the main, regular
            commits and needing 1 other members' approval before merging into
            main on GitHub. We did however run into some issues with
            package.lock.json but all were sorted by using VS Code's merge
            editor. I have since learned more about rebasing which would have
            been helpful when working on this project.
          </span>
          <h3 className="text-honblue font-bold"> Environment Variables </h3>
          <span className="text-fedblue">
            Using both MongoDB Atlas and Cloudinary we had quite a lot of local
            environment variables which you would not get added to your local
            device when pulling down the latest version from GitHub. This caused
            some issues for some of our team who struggled with running their
            local version as they had the incorrect .ENV values. This was a
            quick fix once discussed with the rest of our team, but it
            highlights the importance of communicating when you add values into
            .ENV / config.
          </span>
          <div className="flex space-x-4 items-center">
            <a href="/projects">
              <Button className="bg-fedblue hover:bg-honblue">
                See More Projects
              </Button>
            </a>
            <a href="https://github.com/Mike-W00d/Bald-Bible">
              <Image
                src="/github.png"
                height={50}
                width={40}
                className="hover:cursor-pointer hover:scale-110"
                alt="GitHub logo and link to my Bald Bible GitHub repository"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Baldbible;
