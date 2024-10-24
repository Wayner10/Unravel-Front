// import { createContext, useContext, useEffect, useState } from "react";

// //* - - - </> [DATA] </> - - - *//
// import Types from '../api/Types';

// //* - - - </> [DATA] </> - - - *//
// const typeProvider = createContext();

// //* - - - </> [DATA] </> - - - *//
// export function useTypeContext()
// {
//     //* - - - </> [DATA] </> - - - *//
//     return useContext(typeProvider);
// }

// export function TypeProvider({children})
// {
//     //* - - - </> [DATA] </> - - - *//
//     const [types, setTypes] = useState([]);

//     //* - - - </> [DATA] </> - - - *//
//     const typeService = new Types();

//     //* - - - </> [DATA] </> - - - *//
//     useEffect(() => {

//         getData();

//     }, []);

//     //* - - - </> [DATA] </> - - - *//
//     const getData = async () => {

//         //* - - - </> [DATA] </> - - - *//
//         const typeData = await typeService.getTypes();
//         setTypes(typeData.data);
//     }

//     return (<typeProvider.Provider value={types}>{children}</typeProvider.Provider>);
// }
import { createContext, useContext, useEffect, useState, useMemo } from "react";
import Types from '../api/Types';

const typeProvider = createContext();

export function useTypeContext() {
  return useContext(typeProvider);
}

export function TypeProvider({ children }) {
  const [types, setTypes] = useState([]);

  // Usar useMemo para memoizar typeService y evitar que cambie en cada render
  const typeService = useMemo(() => new Types(), []);

  useEffect(() => {
    const getData = async () => {
      const typeData = await typeService.getTypes();
      setTypes(typeData.data);
    };

    getData();
  }, [typeService]); // Ahora typeService es seguro como dependencia

  return (
    <typeProvider.Provider value={types}>{children}</typeProvider.Provider>
  );
}
