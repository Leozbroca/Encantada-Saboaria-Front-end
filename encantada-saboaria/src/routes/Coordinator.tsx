import { NavigateFunction } from "react-router-dom";

export const goToHome = (navigate: NavigateFunction) => {
  navigate("/");
};

export const goTo = (navigate: NavigateFunction, url: string) => {
  navigate(url);
};
