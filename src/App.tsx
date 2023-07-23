import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Details from "./components/pages/Details";
import Landing from "./components/pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
]);

function App() {
  console.log("render");
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
