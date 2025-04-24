import { useEffect } from 'react';

export const withLogging = (ComponenteA) => {
  return function ComponentWithLogging(props) {
    useEffect(() => {
      console.log("Componente montado");
    }, []);

    return <ComponenteA {...props} />;
  };
};