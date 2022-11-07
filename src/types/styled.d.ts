import { GlobalTheme } from "../styles/theme";

declare module "styled-components" {
  export interface DefaultTheme extends GlobalTheme {}
}
