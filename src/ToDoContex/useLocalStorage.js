import React from "react";

function useLocalStorage(itemName, initialValue) {

  const [item, setItems] = React.useState(initialValue);

  const [loading, setLoading] = React.useState(true);

  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      try {
        let localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (localStorageItem) {
          parsedItem = JSON.parse(localStorageItem);
          setItems(parsedItem);

        } else {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
        };

        setLoading(false);
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }, 100);
  }, []);

  const saveItem = (newItem) => {
    setItems(newItem);

    localStorage.setItem(itemName, JSON.stringify(newItem));
  };


  return {
    item,
    saveItem,
    loading,
    error
  }

};

export default useLocalStorage;