import React, { createContext, useState, useContext, useEffect } from 'react';


interface ModalContextData {
  twoButtons: boolean;
  isVisible: boolean;
  tittle: string;
  message: string;
  buttonOneMessage: string;
  buttonTwoMessage: string;
  handlewActionOne: any;
  handlewActionTwo: any
  CloseModal(): void;
  ShowModal(
    twoButtons?: boolean,
    tittle?: string,
    message?: string,
    buttonOneText?: string,
    buttonTwoText?: string,
    onPressOne?: any,
    onPressTwo?: any,
  ): void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [twoButtons, setTwoButtons] = useState(false);
  const [message, setMessage] = useState('');
  const [tittle, setTittle] = useState('Alerta');
  const [buttonOneMessage, setButtonOneMessage] = useState('Ok');
  const [buttonTwoMessage, setButtonTwoMessage] = useState('');
  const [handlewActionOne, setHandlewActionOne] = useState(() => console.log('Configure o onePressOne'));
  const [handlewActionTwo, setHandlewActionTwo] = useState(() => console.log('Configure o onePressTwo'));

  useEffect(() => {

  }, [isVisible])

  function CloseModal() {
    setIsVisible(false)
    return
  }

  function ShowModal(
    type: boolean,
    tittle: string,
    message: string,
    buttonOneText: string,
    buttonTwoText: string,
    onPressOne: any,
    onPressTwo: any,
  ) {
    if(type) setTwoButtons(type);
    if (tittle) setTittle(tittle);
    if (message) setMessage(message);
    if (buttonOneText) setButtonOneMessage(buttonOneText);
    if (buttonTwoText) setButtonTwoMessage(buttonTwoText);
    if (onPressOne) setHandlewActionOne(onPressOne)
    if (onPressTwo) setHandlewActionTwo(onPressTwo)
    setIsVisible(true)
    return
  }


  return (
    <ModalContext.Provider
      value={{
        isVisible,
        tittle,
        message,
        twoButtons,
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