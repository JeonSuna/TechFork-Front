import { Button } from "../../shared/button/Button";
import { InputField } from "../../shared/InputField";

export const AskPage = () => {
  return (
    <div className="px-20 pb-8">
      <section className="mt-16 mb-8 bg-white p-8 rounded-xl border border-bgNormal">
        <h3 className="body-sb-18 mb-1">문의하기</h3>
        <p className="body-r-14 text-alternative">
          서비스 이용 중 불편한 점이나 문의사항을 남겨주세요.
        </p>
      </section>
      <section className=" bg-white mb-8 p-8 rounded-xl border border-bgNormal">
        <InputField
          key={"."}
          label={"답변 받을 이메일"}
          placeholder={"답변 받으실 이메일을 입력해주세요."}
          className="body-r-16"
          isDot={true}
        />
        <InputField
          key={"ss"}
          label={"문의 유형"}
          placeholder={"문의유형을 선택해주세요."}
          className="body-r-16"
          isDot={true}
        />
        <InputField
          key={"66"}
          label={"제목"}
          placeholder={"문의 제목을 입력해주세요."}
          className="body-r-16"
          isDot={true}
        />
        <InputField
          key={"88"}
          label={"문의 내용"}
          placeholder={"문의하실 내용을 상세히 작성해주세요."}
          className="body-r-16"
          isDot={true}
          area={true}
        />
        <Button color={"grey2"}>문의 제출하기</Button>
      </section>
      <section className="bg-white p-8 rounded-xl border border-bgNormal">
        <h3 className="body-sb-18 mb-1">안내사항</h3>
        <ul className="pl-5 body-r-14 text-alternative">
          <li>• 문의 접수 후 영업일 기준 1~2일 내에 답변드릴 예정입니다.</li>
          <li>• 상담은 고객센터(0000-0000).... </li>
        </ul>
      </section>
    </div>
  );
};
