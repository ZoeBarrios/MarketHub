import { FUNCTION_BTN } from "../utils/constants";

export const BotonIcono = ({ functionBtn }) => {
  console.log(functionBtn);
  return (
    <button
      className={`productPage-btnIcono ${
        functionBtn == FUNCTION_BTN.VOLVER
          ? "fa-solid fa-chevron-left"
          : "fa-regular fa-heart"
      }`}
    ></button>
  );
};
