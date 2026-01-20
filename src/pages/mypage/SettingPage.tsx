import { Moon, Info, FileText, LockKeyhole, MessageSquare } from "lucide-react";

import type { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SettingList } from "./components/settingList";
import { useState } from "react";
import { ProfileHeader } from "./components/ProfileHeader";
import { ProfileEditHeader } from "./components/ProfileEditHEader";

import { LeaveModal } from "./components/LeaveModal";
interface SettingItem {
  icon: LucideIcon;
  label: string;
  isArrow?: boolean;
  onClick?: () => void;
}
export const SettingPage = () => {
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [IsModal, setIsModal] = useState<boolean>(false);
  const SETTING_LIST_DATA: SettingItem[] = [
    { icon: Moon, label: "다크 모드", onClick: () => console.log("다크모드") },
    {
      icon: Info,
      label: "서비스 버전",
      onClick: () => console.log("다크모드"),
    },
    {
      icon: FileText,
      label: "이용 약관",
      isArrow: true,
      onClick: () => navigate("/"),
    },
    {
      icon: LockKeyhole,
      label: "개인정보 처리방침",
      isArrow: true,
      onClick: () => navigate("/"),
    },
    {
      icon: MessageSquare,
      label: "문의 하기",
      isArrow: true,
      onClick: () => navigate("/"),
    },
  ];

  return (
    <div className="px-20 pb-8">
      <section className="mt-16 mb-8  bg-white p-8 rounded-xl border border-bgNormal">
        {!isEdit ? (
          <ProfileHeader onEdit={() => setIsEdit(true)} />
        ) : (
          <ProfileEditHeader
            onCancel={() => setIsEdit(false)}
            onSubmit={() => {
              setIsEdit(false);
            }}
          />
        )}
      </section>

      <section className="bg-white p-8 rounded-xl border border-bgNormal mb-8">
        <h2 className="subtitle-sb-20 mb-8">테마 및 서비스 정보</h2>
        {SETTING_LIST_DATA.map(item => (
          <SettingList
            key={item.label}
            icon={item.icon}
            label={item.label}
            isArrow={item.isArrow}
            onClick={item.onClick}
          />
        ))}
      </section>

      <button
        className="bg-white rounded-xl px-8 py-4 w-full text-alert body-r-14 cursor-pointer"
        onClick={() => setIsModal(true)}
      >
        회원탈퇴
      </button>
      {IsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <LeaveModal onClose={() => setIsModal(false)} />
        </div>
      )}
    </div>
  );
};
