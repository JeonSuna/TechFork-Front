import { TabSelectList } from "./components/TabSelectList";
import PopOn from "@/assets/icons/pop-on.svg";
// import PopOff from "@/assets/icons/pop-ff.svg";

import { CardItem } from "../../shared/CardItem";
import { CompanyItem } from "./components/CompanyItem";
import { useState } from "react";
import { CompanyModalItem } from "./components/CompanyModalItem";
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
console.log(MockData.data[1]);
export const HomePage = () => {
  const [modal, setModal] = useState(false);
  console.log(modal);

  return (
    <div className="bg-bgPrimary pt-12 ">
      <TabSelectList className="mb-12" />

      {/* 기업별 게시글일때  */}
      <section className="mb-12 flex items-center justify-center gap-12 relative flex-wrap">
        <CompanyItem />
        <CompanyItem />
        <CompanyItem />
        <CompanyItem />
        <CompanyItem />
        <CompanyItem />
        <CompanyItem />
        <CompanyItem />
        <img
          src={PopOn}
          alt=""
          className="mb-6 cursor-pointer"
          onClick={() => setModal(pre => !pre)}
        />

        {/* 모달 */}
        {modal && (
          <>
            <section className="h-130 w-125 absolute top-25 right-95 shadow-ds100 rounded-2xl overflow-hidden bg-white">
              <div className="h-full overflow-y-auto ">
                {/* header */}
                <div className="sticky top-0 z-10 bg-white px-4 pt-4">
                  <div className="flex justify-between border-b border-bgNormal pb-4 mb-4">
                    <h4 className="body-sb-18">전체 기업</h4>
                    <p>30개</p>
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
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </section>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </ul>
    </div>
  );
};
