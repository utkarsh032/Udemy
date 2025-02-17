import { useState } from 'react';
import AuthPageAnimate from '../assets/AuthUI.png';
import EmailVerification from './SignUpForm/EmailVerification';
import PasswordForm from './SignUpForm/PasswordForm';
import { EmailForm } from './SignUpForm/EmailForm';
import { FullNameForm } from './SignUpForm/FullNameForm';
import { Link } from 'react-router-dom';

export default function SignUpSystem() {

  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    isEmailVerified: false,
  });

  const handleNextStep = (data) => {
    setUserData({ ...userData, ...data });
    setStep(step + 1);
  };
  return (
    <div className='flex items-center p-12'>
      <div className='w-1/2'>
        <img src={AuthPageAnimate} />
      </div>

      {/*SignUp Form*/}

      <div className='w-1/2'>
        {step === 1 && <FullNameForm onNext={handleNextStep} />}
        {step === 2 && <EmailForm onNext={handleNextStep} />}
        {step === 3 && <EmailVerification data={userData} onNext={handleNextStep} />}
        {step === 4 && <PasswordForm data={userData} />}

        <div className='text-center'>
          <p className="text-gray-600">
            Already have an account!{" "}
            <Link to="/login" className="text-[#A435F0] font-bold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
