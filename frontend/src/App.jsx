import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import RootLayout from "./layouts/RootLayout.jsx";
import { Routes, Route } from "react-router-dom";
import { menuItems } from "./data/menu-items.jsx";
import NotFound from "./pages/NotFound.jsx";
import { useReducer } from "react";
import AppReducer from "./data/AppReducer";
import AppContext from "./data/AppContext.jsx";
import { useEffect } from "react";
import useFetch from "./data/functions/useFetch.jsx";
import { ClipLoader } from "react-spinners";

function App() {
  const {
    data: data,
    loading: loading,
    error: error,
  } = useFetch("http://localhost:4000/");

  const [state, appDispatch] = useReducer(AppReducer, []);

  function getRoutes(items) {
    return items.map((item) => (
      <Route path={item.urlPattern} element={item.element} key={item.id}>
        {item.children ? getRoutes(item.children) : null}
      </Route>
    ));
  }
  useEffect(() => {
    if (!loading && !error) {
      appDispatch({ type: "setData", payload: data });
    }
  }, [loading, error, data]);

  if (loading)
    return <ClipLoader color="#0d6efd" size={100} speedMultiplier="2" />;
  if (error) return <p>Error loading data.</p>;
  return (
    <>
      <AppContext.Provider
        value={{
          items: state,
          dispatch: appDispatch,
          nextId: state.length,
        }}
      >
        <RootLayout menuItems={menuItems}>
          <Routes>
            {getRoutes(menuItems)}
            <Route path="/*" element={<NotFound></NotFound>} />
          </Routes>
        </RootLayout>
      </AppContext.Provider>
    </>
  );
}

export default App;
