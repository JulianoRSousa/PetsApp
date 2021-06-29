import React, { createContext, useState, useContext } from 'react';


interface StateContextData {
  isVisible: boolean;
  setModalVisibility(visible: boolean): void;
  setModalTittle(tittle: string): void;
  setModalMessage(Message: string): void;
  setModalButtonOneText(ButtonOneText: string): void;
  setModalButtonTwoText(ButtonTwoText: string): void;
  onHandlew(): void;
  onClose(): any;
}

const StateContext = createContext<StateContextData>({} as StateContextData);

const StateProvider: React.FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState(false);
  const [tittle, setTittle] = useState(false);
  const [buttonOneText, setButtonOneText] = useState('Ok');
  const [buttonTwoText, setButtonTwoText] = useState('Cancelar');


  function setModalVisibility(visible) {
    setIsVisible(visible)
    return
  }
  function setModalTittle(tittle) {
    setTittle(tittle)
    return
  }
  function setModalMessage(message) {
    setMessage(message)
    return
  }
  function setModalButtonOneText(text1) {
    setButtonOneText(text1)
    return
  }
  function setModalButtonTwoText(text2) {
    setButtonTwoText(text2)
    return
  }

  async function onHandlew() {
    console.log('onHandlew active')
  }
  function onClose() {
    console.log('onClose active')
  }


  return (
    <StateContext.Provider
      value={{
        isVisible,
        setModalTittle,
        setModalMessage,
        setModalVisibility,
        setModalButtonOneText,
        setModalButtonTwoText,
        onClose,
        onHandlew
      }}>
      {children}
    </StateContext.Provider>
  );
};

function useAppState() {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error('Modal Context Error');
  }

  return context;
}

export { StateProvider, useAppState };