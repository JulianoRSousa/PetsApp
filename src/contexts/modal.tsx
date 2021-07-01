import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './auth'

interface ModalContextData {
  type: 'OneButton' | 'TwoButtons';
  isVisible: boolean;
  tittle: string;
  message: string;
  buttonOneMessage: string;
  buttonTwoMessage: string;
  handlewActionOne: () => void;
  handlewActionTwo: () => void,
  CloseModal(): void;
  ShowModal(
    type: 'OneButton' | 'TwoButtons',
    tittle?: string,
    message?: string,
    buttonOneText?: string,
    onPressOne?: () => void | void,
    buttonTwoText?: string,
    onPressTwo?: () => void | void,
  ): void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {

  const [isVisible, setIsVisible] = useState(false);
  function CloseModal() { setIsVisible(false) }
  const [type, setType] = useState<'OneButton' | 'TwoButtons'>('OneButton');
  const [message, setMessage] = useState('');
  const [tittle, setTittle] = useState('Alerta');
  const [buttonOneMessage, setButtonOneMessage] = useState('Ok');
  const [buttonTwoMessage, setButtonTwoMessage] = useState('');
  const [handlewActionOne, setHandlewActionOne] = useState<() => void | void>(() => CloseModal);
  const [handlewActionTwo, setHandlewActionTwo] = useState<() => void | void>(() => CloseModal);

  useEffect(() => {

  }, [isVisible])



  function ShowModal(
    type: 'OneButton' | 'TwoButtons',
    tittle: string,
    message: string,
    buttonOneText: string,
    onPressOne: () => void | void,
    buttonTwoText: string,
    onPressTwo: () => void | void,
  ) {
    if (type) setType(type);
    if (tittle) setTittle(tittle);
    if (message) setMessage(message);
    if (buttonOneText) setButtonOneMessage(buttonOneText);
    if (buttonTwoText) setButtonTwoMessage(buttonTwoText);
    if (typeof (onPressOne) === "function") setHandlewActionOne(() => onPressOne)
    if (typeof (onPressTwo) === "function") setHandlewActionTwo(() => onPressTwo)
    setIsVisible(true)
    return
  }


  return (
    <ModalContext.Provider
      value={{
        isVisible,
        tittle,
        message,
        type,
        buttonOneMessage,
        buttonTwoMessage,
        handlewActionOne,
        handlewActionTwo,
        CloseModal,
        ShowModal,
      }}>
      {children}
    </ModalContext.Provider>
  );
};

function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('Modal Context Error');
  }

  return context;
}

export { ModalProvider, useModal };