export interface FormItemContextValue {
  isOpenAccordion: boolean;
  toggleAccordion: () => void;
  page: number;
  order: number;
  type:
    | "short-text" // 단답형
    | "long-text" // 장문형
    | "radio" // 라디오
    | "checkbox" // 체크박스
    | "file-upload" // 파일 업로드
    | "linear-scale" // 선형 배율
    | "rate" // 등급
    | "date" // 날짜
    | "time"; // 시간
}
