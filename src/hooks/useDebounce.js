import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      // 설정한 delay시간이 지나기 전에 추가로 글자를 다시 입력했다면([value, delay]) 원래 있던 함수를 clear하고 다시 위의 handler함수를 실행한다는 의미
      clearTimeout(handler);
    };
    // 값이 바뀌어서 다시 들어올 때
  }, [value, delay]);

  return debounceValue;
};
