import User from "@assets/images/user.png";
import { Button } from "../../../shared/button/Button";

interface ProfileHeaderProps {
  onEdit: () => void;
}

export const ProfileHeader = ({ onEdit }: ProfileHeaderProps) => {
  return (
    <div>
      <h2 className="mb-8 subtitle-sb-20">프로필</h2>
      <div className="flex gap-7 mb-7">
        <img src={User} alt="profile image" className="rounded-full size-17" />
        <div className="flex flex-col gap-1">
          <p className="body-r-16">닉네임</p>
          <p className="body-r-14 text-alternative">user@example.com</p>
          <p className="body-r-14 text-alternative">
            한줄소개가 입력되어있어요
          </p>
        </div>
      </div>
      <Button
        color={"grey1"}
        textColor={"black"}
        className=" font-bold"
        onClick={onEdit}
      >
        프로필 편집
      </Button>
    </div>
  );
};
