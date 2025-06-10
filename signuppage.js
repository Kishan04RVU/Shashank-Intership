import React from 'react';
import SignUpForm from '../components/SignUpForm';
import illustration from '../assets/signup-illustration.png';
import './SignUpPage.css'; // Create this for layout styling

const SignUpPage = () => {
  return (
    <div className="signup-page">
      <div className="left-panel">
        <img src={illustration} alt="Illustration" />
      </div>
      <div className="right-panel">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
