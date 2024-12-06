import type { FormItemContextValue } from "./FormItem.type.ts";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";

// NOTE FormItem
// 1. 특수 기능
// 1-1. 순서 변경
// 1-2. 페이지 변경
// 1-3. 조건문
// 1-4. 아코디언 열림/닫힘

// NOTE: 질문 항목 Input
// 1. 콘텐츠
// 1-1. 마크다운
// 1-2. 이미지
// 1-3. 동영상

// 2. 특수 기능
// 2-1. 질문 항목 용어에 대한 툴팁(부가설명)

// 3. Validation
// 3-1. 질문 란이 비었을 경우

// 4. 설정
// 4-1. 필수, 선택

// NOTE: 응답 항목 Input
// 1. 양식
// 1-1. 단답형
// 1-2. 장문형
// 1-3. 라디오
// 1-4. 체크박스
// 1-5. 파일 업로드
// 1-6. 선형 배율
// 1-7. 등급
// 1-8. 날짜
// 1-9. 시간

// 2. Validation
// 2-1. 필수 값이 비었을 경우
const FormItemContext = createContext<FormItemContextValue>({
  type: "short-text",
  order: 0,
  page: 0,
  isOpenAccordion: false,
  toggleAccordion: () => {},
});

export const useFormItemContext = () => {
  const contextValue = useContext(FormItemContext);
  if (contextValue === undefined) {
    throw new Error("FormItemContextProvider 하위에서 사용해주세요.");
  }
  return contextValue;
};

export function FormItemContextProvider({ children }: PropsWithChildren) {
  const [isOpenAccordion, setIsOpenAccordion] = useState(false);
  const toggleAccordion = () => {
    setIsOpenAccordion(!isOpenAccordion);
  };

  const contextValue = useMemo<FormItemContextValue>(() => {
    return {
      type: "short-text",
      order: 0,
      page: 0,
      isOpenAccordion,
      toggleAccordion,
    };
  }, [isOpenAccordion]);
  return (
    <FormItemContext.Provider value={contextValue}>
      {children}
    </FormItemContext.Provider>
  );
}
