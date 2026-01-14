import { createBrowserRouter } from "react-router-dom";
import { OnboardingLayout } from "./layout/OnboardingLayout";
import { LoginPage } from "./pages/Login/LoginPage";
import { Onboarding } from "./pages/onboarding/Onboarding";
import { OnboardingTag } from "./pages/onboarding/OnboardingTag";
import { SystemLayout } from "./layout/SystemLayout";
import { HomePage } from "./pages/home/HomePage";
import { EditInterestPage } from "./pages/mypage/EditInterestPage";
import { MyIntersListPage } from "./pages/mypage/MyInterstListPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SystemLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/edit",
        element: <EditInterestPage />,
      },
      { path: "/interested", element: <MyIntersListPage /> },
    ],
  },
  {
    element: <OnboardingLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/onboarding",
        element: <Onboarding />,
      },
      { path: "/onboarding/tag", element: <OnboardingTag /> },
    ],
  },
]);

export default router;
