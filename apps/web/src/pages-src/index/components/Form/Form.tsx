import { FormContextProvider } from "./Form.context";
import { FormItem } from "./sub-components";

function Form() {
  return (
    <FormContextProvider
      // FIXME: Form.context.tsx 에서 실제 권한 체크하는 로직으로 바꾸기
      AUTH_PERMISSION="manager"
    >
      <FormItem />
    </FormContextProvider>
  );
}

export default Form;
