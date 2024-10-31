import { useEffect, useState } from "react";

// 그냥 render되게 하는.. hooks!
function useForceUpdate(value: string | null) {
  const [update, setUpdate] = useState(false);

  const updateFunction = () => {
    setUpdate((prev) => !prev);
  };

  useEffect(() => {
    updateFunction();
  }, [value]);

  return updateFunction;
}

export default useForceUpdate;
