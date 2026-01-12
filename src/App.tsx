import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return (
    <div className="w-full min-h-dvh mx-auto overflow-y-auto bg-bgPrimary">
      <main className=" max-w-480 mx-auto px-14 ">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
