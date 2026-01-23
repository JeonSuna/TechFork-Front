import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useUserStore from "../../store/useUserStore";

export const KakaoLogin = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setUser } = useUserStore();

  useEffect(() => {
    const token = searchParams.get("token");
    const isMember = searchParams.get("registered");

    setUser({ accessToken: token, isNewMember: isMember });
    if (!token) {
      navigate("/login");
    }
    if (isMember === "false") {
      navigate("/onboarding");
    } else {
      navigate("/");
    }
  }, []);

  console.log(searchParams);
  return <div>카카오로그인</div>;
};
