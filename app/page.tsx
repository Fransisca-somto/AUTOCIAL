'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [value, onChange] = useState<Value>(new Date());
  // Check if the system prefers dark mode

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkMode) {
      console.log('System theme is dark mode.');
      console.log(darkMode)
      setDarkMode(true);
    } else {
      console.log('System theme is light mode.');
      setDarkMode(false);
    }
  }, []);

  const handleBookings = () => {
    console.log("Booking date selected:", value);
    alert(`You have booked the date: ${value instanceof Date ? value.toDateString() : ''}`);
  };

  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <nav className="fixed top-0 left-0 w-screen flex justify-between items-center px-8 dark:bg-white/10 backdrop-blur-lg bg-purple-950/90 text-white max-sm:p-0">
        <Image
          src="/ANTOCIAL White.png"
          alt={darkMode ? "Autocial Digital Logo Dark" : "Autocial Digital Logo Light"}
          width={100}
          height={50}
          style={{ display: 'block', margin: '20px' }}
        />
        <div className="hamburger">
          <img src="icons8-menu-50.png" alt="Hamburger Icon" className=" hidden max-sm:flex w-10 px-1 mx-3 z-1 cursor-pointer" />
          <ul className="menu flex space-x-12 ml-auto p-4 items-center max-sm:flex-col max-sm:absolute max-sm:w-full max-sm:space-x-0 max-sm:space-y-4 max-sm:py-6 max-sm:pl-0 max-sm:pr-0 max-sm:text-center max-sm:rounded-b-lg max-sm:top-6/6 max-sm:dark:bg-white/10 max-sm:backdrop-blur-lg max-sm:dark:backdrop-blur-lg max-sm:bg-purple-950/90 max-sm:left-0 z-1">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About Autocial Digital</a></li>
            <li><a href="#what-we-do">What We Do</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
            <a href="#contact-us" className="get-started p-3 px-6 rounded-4xl">Get Started</a>
          </ul>
        </div>


      </nav>

      {/* The Home Section */}
      <div className="home flex items-center justify-between my-20 m-auto w-full h-fit px-16 max-sm:flex-col-reverse max-sm:items-center max-sm:text-center max-sm:gap-10">
        <div className="w-2/5 max-sm:w-full">
          <h1 className="text-7xl">Transforming Businesses Through Smart Automation</h1>
          <p className="my-3 text-md opacity-50">
            Streamline your operations, reduce manual work, and boost efficiency with our intelligent business automation and digital marketing solutions. Let’s Automate Your Success.
          </p>

          <button className="get-started px-16 text-lg font-bold py-4 mt-9 rounded-4xl"><a href="#">Get Started</a></button>
        </div>
        <Image
          src="/—Pngtree—modern flat design concept of_5332902.png"
          alt="Autocial Digital Logo"
          width={600}
          height={200}
        />
      </div>

      {/* About Autocial Digital */}
      <div id="about" className="text-center mx-auto w-3/5 mb-20 max-sm:w-full max-sm:px-4">
        <h2 className="text-3xl font-bold">About Autocial Digital</h2>
        <p className="opacity-55">
          At Autocial Digital, we empower businesses to operate smarter, faster, and more efficiently through innovative automation and digital solutions.
          We understand that the modern business landscape demands agility and efficiency, that’s why we help companies eliminate repetitive tasks, improve customer engagement, and maximize productivity using cutting-edge technology.
        </p>

        <p className="opacity-55">
          Our approach combines strategy, creativity, and automation to help you achieve measurable results and long-term growth.
        </p>
      </div>

      {/* What we do */}
      <div id="what-we-do" className="what-we-do text-center mx-auto w-4/5 my-10 max-sm:w-full max-sm:p-2x-4">
        <h2 className="text-3xl font-bold">What We Do</h2>
        <ul className="flex gap-6 max-sm:flex-col max-sm:items-center max-sm:gap-10">
          <li>
            <h3 className="font-bold">Business Automation Solutions</h3>
            <p className="opacity-50">
              Simplify your workflows, eliminate manual bottlenecks, and integrate intelligent systems that handle repetitive tasks automatically, giving you more time to focus on what matters most.
            </p>
          </li>
          <li>
            <h3 className="font-bold">Consultancy</h3>
            <p className="opacity-50">
              Our expert consultants analyze your business operations, identify growth gaps, and recommend tailored automation and digital strategies that drive success.
            </p>
          </li>
          <li>
            <h3 className="font-bold">Social Media Marketing (SMMA)</h3>
            <p className="opacity-50">
              Grow your online presence with data-driven social media strategies. We help you attract, engage, and convert your target audience using smart marketing automation.
            </p>
          </li>
          <li>
            <h3 className="font-bold">System Development</h3>
            <p className="opacity-50">
              We design and develop robust digital systems, from web apps to internal management platforms, customized to improve your business processes and scalability.
            </p>
          </li>
        </ul>
      </div>

      {/* Contact Us Page */}
      <div id="contact-us" className="what-we-do text-center mx-auto w-4/5 my-10 max-sm:w-full">
        <form action="#">
              <h2 className="text-3xl font-bold">Choose a date on the calendar to book now!</h2>
          <div className="flex mb-1.5">
            <div className="flex flex-col gap-4 mx-auto w-2/5 max-sm:w-full max-sm:px-4">
              <input type="email" placeholder="Enter Email Address" className="border-2 border-fuchsia-900 rounded-2xl p-4" />
              <textarea name="" id="" placeholder="Enter the description" className="border-2 border-fuchsia-900 rounded-2xl p-4" rows={7}></textarea>
            </div>
            <div>
              <div className="calenders">
                <Calendar onChange={onChange} value={value} />
              </div>
            </div>
          </div>


          <button onClick={handleBookings} className="get-started self-start p-3 px-9 rounded-2xl">Book Now!!</button>
        </form>

      </div>

      {/* Footer */}
      <div className="footer bg-purple-950 text-white">
        <div className=" px-9 py-4 flex justify-between w-2/5 m-auto gap-30 items-center max-sm:flex-col max-sm:gap-6 max-sm:w-full">
          <Image
            src="/ANTOCIAL White.png"
            alt={darkMode ? "Autocial Digital Logo Dark" : "Autocial Digital Logo Light"}
            width={200}
            height={100}
            style={{ display: 'block', margin: '20px' }}
          />
          <div>
            <p>Let’s help you simplify your business and unlock your full potential.</p>
            <p>For more Enquiries:</p>
            <a href="@Enquiry@autocial.com" className="font-light text-green-500">Enquiry@autocial.com</a>
            <a href="@Sales@autocial.com" className="font-light text-green-500">Sales@autocial.com</a>
          </div>
        </div>

      </div>
    </div>
  );
}
