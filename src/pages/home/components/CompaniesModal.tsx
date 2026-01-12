import { useState } from "react";
import { CompanyModalItem } from "./CompanyModalItem";
import User from "@/assets/images/user.png";

const MockData = {
  data: [
    { companies: "무신사", img: User },
    { companies: "HYPERCONNECT", img: User },
    { companies: "여기어때", img: User },
    { companies: "인프랩", img: User },
    { companies: "네이버 D2", img: User },
    { companies: "요기요", img: User },
    { companies: "올리브영", img: User },
    { companies: "쏘카", img: User },
    { companies: "당근마켓", img: User },
    { companies: "29CM", img: User },
    { companies: "우아한형제들", img: User },
    { companies: "토스", img: User },
    { companies: "리디", img: User },
    { companies: "SK C&C", img: User },
    { companies: "카카오엔터프라이즈", img: User },
    { companies: "NHN", img: User },
    { companies: "원티드", img: User },
    { companies: "SSG", img: User },
    { companies: "왓챠", img: User },
    { companies: "롯데ON", img: User },
    { companies: "네이버 플레이스", img: User },
    { companies: "데브시스터즈", img: User },
    { companies: "지마켓", img: User },
    { companies: "번개장터", img: User },
    { companies: "스포카", img: User },
    { companies: "줌인터넷", img: User },
    { companies: "AWS 한국", img: User },
  ],
};

export const CompaniesModal = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (name: string) => {
    setSelected(pre => {
      return pre.includes(name)
        ? pre.filter(item => item !== name) //포함하면 빼고 반환
        : [...pre, name]; //있는거 추가
    });
  };

  return (
    <section className="h-130 w-125 absolute top-25 right-95 shadow-ds100 rounded-2xl overflow-hidden bg-white">
      <div className="h-full overflow-y-auto ">
        {/* header */}
        <div className="sticky top-0 z-10 bg-white px-4 pt-4">
          <div className="flex justify-between border-b border-bgNormal pb-4 mb-4">
            <h4 className="body-sb-18">전체 기업</h4>
            <p>{MockData.data.length}개</p>
          </div>
        </div>

        {/* content */}
        <div className="px-4 pb-4">
          <div className="grid grid-cols-4 gap-4 place-items-center">
            {MockData.data.map(item => (
              <CompanyModalItem
                key={item.companies}
                company={item.companies}
                img={item.img}
                selected={selected.includes(item.companies)}
                onClick={() => toggle(item.companies)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
