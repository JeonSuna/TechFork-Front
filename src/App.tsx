import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return (
    <div className="w-full min-h-dvh mx-auto overflow-y-auto">
      <main className=" max-w-480 mx-auto px-14 bg-bgPrimary">
        <RouterProvider router={router} />
        {/* <Onboarding /> */}
        {/* <LoginPage /> */}
      </main>
    </div>
  );
}

export default App;
