import { GOOGLE_LOGIN_URL,GOOGLE_LOCAL_LOGIN_URL} from "../constant.js"
import google from "/Login-img/google.png";
import MainLogo from "/Login-img/MainLogo.png";

const Login = () => {
  return (
    <main>
      <div className="bg-black max-w-[1440px] h-screen m-auto text-white flex flex-col justify-between border-[#25262B]  ">
        <div className="w-full h-16 flex justify-center items-center border border-slate-800">
          <img src={MainLogo} alt="ReachinBix-Logo" />
        </div>
        <div className="w-auto flex justify-center items-center ">
          <div className="m-auto w-[460px] h-auto md:h-[312px] bg-gradient-to-r from-[#111214] to-[#121212] rounded-2xl border border-[#343A40] pt-6 px-10">
            <div className="w-[380px] m-auto">
              <p className="text-xl mb-6 text-center leading-[31px] font-sans">
                Create a new account 
              </p>
              {/* local development redirection link for OAuthentication*/ }
                 {/* <a href={GOOGLE_LOCAL_LOGIN_URL}>  */}

              {/* Production  development redirection link for OAuthentication*/ }
                   <a href={GOOGLE_LOGIN_URL}>
                <button className="rounded border border-[#707172] h-12 flex justify-center items-center gap-2.5 mb-12 w-full hover:bg-[#333]">
                  <img src={google} alt="google-logo" />
                  Sign Up with Google
                </button> 
              </a>

              <p
                className="w-[195px] h-12 bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC]
             rounded m-auto text-center pt-2.5 mb-6 cursor-pointer font-sans"
              >
                Create an Account
              </p>
              <p className="text-base text-center text-[#909296] leading-[24.8px] font-sans">
                Already have an account?{" "}
                <span className="font-normal text-[#C1C2C5]">Sign In</span>
              </p>
            </div>
          </div>
        </div>
        <footer className="w-full h-8 flex justify-center items-center border-[#25262B]">
          <p className="h-[19px] text-[#5C5F66] gap-[10px] font-normal text-xs leading-[18.6px]">
            ©️ 2023 Reachinbox. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Login;
