import { TabSelectList } from "./components/TabSelectList";
import PopOn from "@/assets/icons/pop-on.svg";
// import PopOff from "@/assets/icons/pop-ff.svg";
import User from "@/assets/images/user.png";

import { CardItem } from "../../shared/CardItem";
import { CompanyItem } from "./components/CompanyItem";
import { useState } from "react";
import { CompaniesModal } from "./components/CompaniesModal";
import { HomeCompanySelectBtn } from "./components/HomeCompanySelectBtn";
import { Button } from "../../shared/button/Button";
import { SelectionBtn } from "../../shared/select-button/SelectionBtn";

export const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState(0); // 0 = 기업별 게시글
  const [modal, setModal] = useState(false);
  console.log(modal);

  return (
    <div className="bg-bgPrimary pt-12 ">
      <TabSelectList
        className="mb-12"
        onChange={setSelectedTab}
        selected={selectedTab}
      />

      {/* 기업별 게시글 */}
      {selectedTab === 0 && (
        <>
          <div className="mb-10 flex items-center gap-4">
            <div className=" body-sb-14">선택된 기업:</div>
            <HomeCompanySelectBtn />
            <HomeCompanySelectBtn />
          </div>
          {/* 게시글일때  */}
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
                <CompaniesModal />
              </>
            )}
          </section>
        </>
      )}

      {/* 나와맞는 게시글 */}

      {selectedTab === 1 && (
        <>
          <div className="mb-10 flex gap-4">
            <SelectionBtn>전체</SelectionBtn>
            <SelectionBtn>React</SelectionBtn>
            <SelectionBtn>TypeScript</SelectionBtn>
            <SelectionBtn>전체</SelectionBtn>
          </div>
        </>
      )}

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
