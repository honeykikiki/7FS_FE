import { useState, useCallback, useMemo } from "react";

function useInputLength(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  // useMemo를 사용하여 value.length를 메모이제이션
  const length = useMemo(() => value.length, [value]);

  // setValue 함수를 useCallback으로 메모이제이션
  const handleChange = useCallback((newValue: string) => {
    setValue(newValue);
  }, []);

  return {
    value,
    setValue: handleChange, // handleChange로 값을 업데이트
    length,
  };
}

export default useInputLength;
