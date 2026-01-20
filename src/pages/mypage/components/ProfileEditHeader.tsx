import { InputField } from "../../../shared/InputField";
import { Button } from "../../../shared/button/Button";

interface ProfileEditHEaderProps {
  onSubmit: () => void;
  onCancel: () => void;
}

export const ProfileEditHeader = ({
  onSubmit,
  onCancel,
}: ProfileEditHEaderProps) => {
  return (
    <div>
      <InputField
        key={"ss"}
        label={"닉네임"}
        placeholder={"한줄소개"}
        className="body-r-16"
      />
      <InputField
        key={"ss"}
        label={"이메일"}
        placeholder={"한줄소개"}
        className="body-r-16"
      />
      <InputField
        key={"ss"}
        label={"한줄 소개"}
        placeholder={"자기 소개"}
        className="body-r-16"
      />
      <div className="flex gap-4">
        <Button color={"grey1"} className="text-black" onClick={onCancel}>
          취소
        </Button>
        <Button onClick={onSubmit}>저장</Button>
      </div>
    </div>
  );
};
