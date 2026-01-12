import { TabSelectList } from "./components/TabSelectList";
import PopOn from "@/assets/icons/pop-on.svg";
import PopOff from "@/assets/icons/pop-off.svg";

import { CardItem } from "../../shared/CardItem";
import { CompanyItem } from "./components/CompanyItem";
import { useState } from "react";
import { CompaniesModal } from "./components/CompaniesModal";
import { HomeCompanySelectBtn } from "./components/HomeCompanySelectBtn";
import { SelectionBtn } from "../../shared/select-button/SelectionBtn";
import { useCompanyStore } from "../../store/uesCompanyStore";
import { MockData } from "../../Mock/company";

export const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState(0); // 0 = 기업별 게시글
  const [modal, setModal] = useState(false);
  console.log(modal);
  const { companies } = useCompanyStore();

  const maxCompany = MockData.data.slice(0, 8); //최대 8개까지
  console.log(maxCompany);

  return (
    <div className="bg-bgPrimary py-12 " onClick={() => setModal(false)}>
      <TabSelectList
        className="mb-12"
        onChange={setSelectedTab}
        selected={selectedTab}
      />

      {/* 기업별 게시글 */}
      {selectedTab === 0 && (
        <>
          <div className="mb-10 flex items-center gap-4">
            {companies.length !== 0 && (
              <>
                <div className=" body-sb-14">선택된 기업:</div>
                {companies.map(company => (
                  <HomeCompanySelectBtn
                    company={company}
                    onClick={e => e.stopPropagation()}
                  />
                ))}
              </>
            )}
          </div>
          {/* 게시글일때 회사 네모item */}
          <section className="mb-12 flex items-center justify-center gap-12 relative flex-wrap">
            {maxCompany.map(item => {
              return (
                <CompanyItem
                  company={item.companies}
                  selected={companies.includes(item.companies)}
                />
              );
            })}
            <img
              src={modal ? PopOn : PopOff}
              alt=""
              className="mb-6 cursor-pointer"
              onClick={e => {
                e.stopPropagation();
                setModal(pre => !pre);
              }}
            />
            {/* 모달 */}
            {modal && (
              <div
                onClick={e => e.stopPropagation()}
                className="absolute  top-25 right-40"
              >
                <CompaniesModal />
              </div>
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
