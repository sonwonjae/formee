export interface MOCK {
  AUTH_PERMISSION: "manager" | "participant";
}

export interface FormContextValue {
  editablePermission: {
    question: boolean;
    response: boolean;
  };
}
