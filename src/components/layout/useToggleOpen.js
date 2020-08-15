import { useState } from "react";

const useHandleOpen = (initialIsOpen = false) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const setToOpen = () => {
    setIsOpen(true);
  };

  const setToClose = () => {
    setIsOpen(false);
  };

  return [isOpen, setToOpen, setToClose];
};

export default useHandleOpen;
