import { useEffect, useRef, useState } from "react";
import { INTERESTS_MOCK } from "../../Mock/tag";
import { useEditTagStore } from "../../store/useEditTagStore";
import { TagItem } from "./components/TagItem";
import { TechSelection } from "./components/TechSelection";

export const EditInterestPage = () => {
  const { selectedTags, setFromServer, toggleTag } = useEditTagStore();
  const [selectedCategory, setSelectedCategory] = useState<string>("iOS"); //
  useEffect(() => {
    const serverTags = ["React", "TypeScript", "AWS"];
    setFromServer(serverTags);
  }, [setFromServer]);
  const selectedCategoryData = INTERESTS_MOCK.interests.find(
    item => item.category === selectedCategory,
  );

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollToTop = () => {
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="min-h-screen flex flex-col ">
      <header className="mt-16 mb-8 rounded-xl border border-bgNormal bg-white w-full p-8">
        <h3 className="body-sb-16">관심 분야를 수정해보세요.</h3>
        <h5 className="body-r-14 text-alternative">
          선택 분야를 바탕으로 맞춤형 게시글을 추천해드려요.
        </h5>
      </header>

      <article>
        {/* 선택된관심사 */}
        <div className="bg-white p-8 rounded-t-xl border border-bgNormal">
          <h3 className="mb-4 body-sb-16">선택된 관심사</h3>
          <div className="flex gap-2 flex-wrap">
            {/* {tag.map(item => (
              <InterstBtn label={item} />
            ))} */}
            <button className="rounded-xl ml-auto px-3 py-2 body-sb-14 text-white bg-sub-900">
              저장하기
            </button>
          </div>
        </div>

        <section className="flex min-h-screen" onClick={scrollToTop}>
          {/* 카테고리 */}
          <div
            className=" bg-sub-400 w-75 px-6  text-[#8B95A1] border-x border-b border-bgNormal"
            ref={scrollRef}
          >
            <h6 className="py-4 body-r-14 ">카테고리</h6>
            <ul className=" w-65 flex flex-col h-150 overflow-scroll overflow-x-hidden">
              {INTERESTS_MOCK.interests.map(item => {
                console.log(item);
                return (
                  <TagItem
                    tag={item.category}
                    length={item.keywords.length}
                    selected={item.category === selectedCategory}
                    onClick={() => setSelectedCategory(item.category)}
                  />
                );
              })}
            </ul>
          </div>

          {/* 기술 */}
          <div className="p-10 bg-white w-full">
            <h5 className="body-sb-18">{selectedCategory}</h5>
            <p className="body-r-14 text-alternative mb-6">
              관심있는 기술을 선택하세요.
            </p>

            <div className="grid grid-cols-5 gap-4">
              {selectedCategoryData?.keywords.map(item => {
                return (
                  <TechSelection
                    label={item}
                    selected={selectedTags.includes(item)}
                    onClick={() => toggleTag(item)}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};
