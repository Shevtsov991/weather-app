import { Theme } from "../template/data";

export default function ChangeCssRootVariables(theme: Theme) {
  const root = document.querySelector(":root") as HTMLElement;

  const elements = [
    "--body-background-",
    "--components-background-",
    "--card-background-",
    "--card-shadow-",
    "--text-color-",
  ];
  elements.forEach((el) => {
    root.style.setProperty(`${el}default`, `var(${el}${theme})`);
  });
}
