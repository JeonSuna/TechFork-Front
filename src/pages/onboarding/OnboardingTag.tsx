import Tag from "@assets/icons/tag.svg";
import ArrowDown from "@assets/icons/arrow_down.svg";
import ArrowUp from "@assets/icons/arrow_up.svg";
import { TAG, TAG_MAP } from "../../constants/tag";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MultiSelectedTag } from "../../shared/MultiSelectedTag";
import { Button } from "../../shared/button/Button";
import { OnboardingHeader } from "./components/OnboardingHeader";
import { useTagStore } from "../../store/useTagStore";

export const OnboardingTag = () => {
  const navigate = useNavigate();

  const [openedCategories, setOpenedCategories] = useState<Set<number>>(
    () => new Set(),
  );

  // 상태관리
  const { tag, toggleTag } = useTagStore();

  const toggleCategory = (idx: number) => {
    setOpenedCategories(prev => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  console.log(tag);
  return (
    <div className="flex flex-col items-center">
      <section className="flex flex-col items-center">
        <OnboardingHeader basic={false} />
        <section className="bg-white rounded-lg shadow-ds50 flex flex-col items-center justify-center p-6 w-100">
          <h1 className="subtitle-sb-20 mb-2">관심 분야를 선택해 주세요</h1>
          <p className="body-r-14 text-alternative mb-2">
            선택 분야를 바탕으로 맞춤형 게시글을 추천해 드려요
          </p>
          <div className="flex gap-2 mb-6">
            <p className="body-r-14">선택한 기술: </p>
            {/* store의 상태로 선택 개수 표시 */}
            <p className="text-point1 body-sb-16">{tag.length}</p>
          </div>

          <article className="w-full max-h-69 overflow-scroll overflow-x-hidden scrollbar-hide">
            {TAG.map((item, idx) => {
              const isOpen = openedCategories.has(idx);
              const itemTitle = item.replace(/[ /]/g, "_");
              const tags = TAG_MAP[itemTitle as keyof typeof TAG_MAP];

              return (
                <div
                  key={idx}
                  className={`rounded-lg border border-sub-600 w-full px-4 py-1 mb-3 cursor-pointer ${
                    isOpen && "bg-sub-400"
                  }`}
                >
                  <div
                    className="justify-between flex items-center"
                    onClick={() => toggleCategory(idx)}
                  >
                    <div className="flex items-center gap-2">
                      <img src={Tag} alt="ios" />
                      <p>{item}</p>
                    </div>
                    <img
                      src={isOpen ? ArrowUp : ArrowDown}
                      alt="toggle open"
                      className="size-10"
                    />
                  </div>

                  {isOpen && (
                    <ul className="flex gap-2 flex-wrap py-2">
                      {tags?.map(tagName => (
                        <MultiSelectedTag
                          key={tagName}
                          tag={tagName}
                          selected={tag.includes(tagName)}
                          onClick={() => toggleTag(tagName)}
                        />
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </article>

          <div className="flex gap-4 w-full pt-4">
            <Button
              color="grey1"
              textColor="black"
              className="body-r-14 p-2.5"
              onClick={() => navigate(-1)}
            >
              이전
            </Button>
            <Button className="body-r-14 p-2.5" onClick={() => navigate("/")}>
              회원가입 완료
            </Button>
          </div>
        </section>
      </section>
    </div>
  );
};
