import logo from './logo.svg';
import './App.css';
// import MultiStepProgressBar from "./components/MultiStepProgressBar/MultiStepProgressBar";
import { useState } from 'react';
import StepOne from './components/StepOne/StepOne';
import StepTwo from './components/StepTwo/StepTwo';
import MultiStepProgress from './components/MultistepProgress/MultiStepProgress';
import StepThird from './components/StepThird/StepThird';
import Navbar from './components/Navbar/Navbar';
import SinglePosts from './components/SinglePosts/SinglePosts';
import Posts from './components/Posts/Posts';

function App() {
  const [page, setPage] = useState("pageone");

  const nextPage = (page) => {
    setPage(page);
  };

  const nextPageNumber = (pageNumber) => {
    switch (pageNumber) {
      case "1":
        setPage("pageone");
        break;
      case "2":
        setPage("pagetwo");
        break;
      case "3":
        setPage("pagethree");
        break;
      case "4":
        alert("Ooops! Seems like you did not fill the form.");
        break;
      default:
        setPage("1");
    }
  };
  return (
    <div>
      <Navbar></Navbar>
      <Posts></Posts>
      {/* <SinglePosts></SinglePosts> */}
    </div>


  );
}

export default App;
