import React from "react";
import Header from "../block/Header";
import Intro from "../block/Intro";
import Blurb from "../block/Blurb";
import Image1 from "../images/placeholder.png";
import Image2 from "../images/placeholder2.png";
import Image3 from "../images/placeholder3.png";
import Image4 from "../images/placeholder4.png";
import UserGuideTextBox from "../block/UserGuideTextBox";


function UsersGuide() {
      return (
            <>
                  <div>
                        <Header header="Users Guide Page" />
                        <Intro intro="Welcome to the UserGuide Page." />
                        <Blurb blurb="Here you'll be able to learn how to navigate the TDP Events Webpage" />
                  </div>
                  <UserGuideTextBox
                        src={Image1}
                        alt="Landing Page"
                        text="Here is the landing page, from this page you can navigate the rest of the website.
                              This page will also allow you to see the upcoming events which are tailored to your 
                              TDP cohort."
                  />
                  <UserGuideTextBox
                        src={Image2}
                        alt="Registration Page"
                        text="Welcome to the Registration page. Fill out or details and then submit.
                              Once this is done, you'll be re-directed to your personal Homepage."
                  />
                  <UserGuideTextBox
                        src={Image3}
                        alt="Sign In"
                        text="When your visit this site, you'll need to sign in, you can do this by
                              using the Navigation Bar or via a button found on the Home Page."
                  />
                  <UserGuideTextBox
                        src={Image4}
                        alt="Support"
                        text="If you are in need of any help or assistance, please contact TDP Management."
                  />
            </>
      );
}

export default UsersGuide;