import { FormProvider } from "react-hook-form";

import logo from "../../assets/images/cta-logo-one.svg";
import { useLogin } from "../../hooks";
import { LoginForm, RegisterForm } from "../../components";

export const LoginPage = () => {
  const {
    //state
    isRegister,
    //methods
    formMethodsLogin,
    formMethodsRegister,
    //functions
    handleOnChangeIsLogin,
  } = useLogin();
  return (
    <div className=" flex flex-col items-center sm:mx-auto max-w-sm space-y-6 pt-20 mx-5">
      <div className="space-y-2 text-center">
        <img
          className="mb-3 max-w-[600px] min-h-[1px] block w-full"
          src={logo}
          alt="logo1"
        />
        <p className="text-gray-500 dark:text-gray-400">
          Enter your email below to login to your account
        </p>
      </div>
      {isRegister ? (
        <FormProvider {...formMethodsRegister}>
          <RegisterForm handleOnChangeIsLogin={handleOnChangeIsLogin} />
        </FormProvider>
      ) : (
        <FormProvider {...formMethodsLogin}>
          <LoginForm handleOnChangeIsLogin={handleOnChangeIsLogin} />
        </FormProvider>
      )}
    </div>
  );
};
