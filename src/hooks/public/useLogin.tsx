import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginCredentials, RegisterCredentials } from "../../types/auth";
import { RoutesString, yupValidations } from "../../utils";
import { AppDispatch, RootState } from "../../redux/store";
import {
  setIsRegister,
  signIn,
  signUp,
  signWithGoogle,
} from "../../redux/slices/auth";

export const useLogin = () => {
  const navigation = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const { loading, isLogin, isRegister } = useSelector(
    (state: RootState) => state.auth
  );

  const handleOnChangeShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleOnChangeShowPasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  const handleOnChangeIsLogin = () => {
    dispatch(setIsRegister(!isRegister));
  };

  const formMethodsLogin = useForm<LoginCredentials>({
    resolver: yupResolver(yupValidations.validateLogin),
  });

  const formMethodsRegister = useForm<RegisterCredentials>({
    resolver: yupResolver(yupValidations.validateRegister),
  });

  useEffect(() => {
    formMethodsLogin.reset();
    formMethodsRegister.reset();

    return () => {
      formMethodsLogin.reset();
      formMethodsRegister.reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRegister]);

  useEffect(() => {
    if (isLogin) {
      navigation(RoutesString.Home);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  const loginOrCreateUser = (data: LoginCredentials | RegisterCredentials) => {
    if (isRegister) {
      dispatch(signUp(data as RegisterCredentials));
    } else {
      dispatch(signIn(data as LoginCredentials));
    }
  };

  const handleGoogleLogin = () => {
    dispatch(signWithGoogle());
  };

  return {
    //state
    loading,
    isRegister,
    showPassword,
    showPasswordConfirm,
    //methods
    formMethodsLogin,
    formMethodsRegister,
    //functions
    loginOrCreateUser,
    handleGoogleLogin,
    handleOnChangeIsLogin,
    handleOnChangeShowPassword,
    handleOnChangeShowPasswordConfirm,
  };
};
