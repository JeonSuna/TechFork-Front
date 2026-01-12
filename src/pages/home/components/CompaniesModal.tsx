import { CompanyModalItem } from "./CompanyModalItem";
import { useCompanyStore } from "../../../store/uesCompanyStore";
import { MockData } from "../../../Mock/company";
import { useRef } from "react";

export const CompaniesModal = () => {
  const { toggleCompany, companies } = useCompanyStore();
  const headerRef = useRef<HTMLDivElement>(null);
  const scrollToTop = () => {
    headerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  console.log(companies);
  return (
    <section
      className="h-130 w-125  shadow-ds100 rounded-2xl overflow-hidden bg-white"
      onClick={scrollToTop}
      ref={headerRef}
    >
      <div className="h-full overflow-y-auto ">
        {/* header */}
        <div className="sticky top-0 z-10 bg-sub-500 px-4 pt-4">
          <div className="flex justify-between border-b border-bgNormal  pb-4 mb-4">
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
                selected={companies.includes(item.companies)}
                onClick={() => toggleCompany(item.companies)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
