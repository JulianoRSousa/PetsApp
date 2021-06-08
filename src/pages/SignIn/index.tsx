/* eslint-disable prettier/prettier */
import React from 'react';
import { Dimensions,  } from 'react-native';
import { useAuth } from "../../contexts/auth";

const SignIn: React.FC = () => {

  const height = Dimensions.get("window").height;
  const { signIn } = useAuth();

  return (
    <>
    </>
  );
};

export default SignIn;