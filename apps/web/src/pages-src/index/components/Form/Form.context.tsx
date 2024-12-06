import type { MOCK, FormContextValue } from "./Form.type";

import { createContext, PropsWithChildren, useContext, useMemo } from "react";

// NOTE: Form
// 1. 권한
// 1-1. 관리자
// 1-1-1. 질문 항목 수정 권한 O
// 1-1-2. 응답 항목 수정 권한 X
// 1-2. 응답자
// 1-2-1. 질문 항목 수정 권한 X
// 1-2-2. 응답 항목 수정 권한 O
// 2. 페이지
const FormContext = createContext<FormContextValue>({
  editablePermission: {
    question: false,
    response: false,
  },
});

export const useFormContext = () => {
  const contextValue = useContext(FormContext);
  if (contextValue === undefined) {
    throw new Error("FormContextProvider 하위에서 사용해주세요.");
  }
  return contextValue;
};

export function FormContextProvider({
  children,
  AUTH_PERMISSION,
}: PropsWithChildren<MOCK>) {
  const editablePermission = (() => {
    switch (AUTH_PERMISSION) {
      case "manager":
        return {
          question: true,
          response: false,
        };
      case "participant":
        return {
          question: false,
          response: true,
        };
    }
  })();

  const contextValue = useMemo(
    () => {
      return { editablePermission };
    },
    [
      // FIXME: 유저 권한 추가하기
    ],
  );
  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
}
