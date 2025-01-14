import { useCallback, useState } from 'react';

function useBoolean(initialValue) {
  const [value, setValue] = useState(initialValue);

  const updateValue = {
    toggle: useCallback(() => {
      setValue((prev) => !prev);
    }, []),
    on: useCallback(() => {
      setValue(true);
    }, []),
    off: useCallback(() => {
      setValue(false);
    }, []),
  };

  return [value, updateValue];
}

export default useBoolean;
