import { MainLayoutProps } from "./MainLayout.types";
import { Header } from "@components/screen";

export const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return (
    <div className="w-full">
      <Header />
      <div className="w-full">{props.children}</div>
    </div>
  );
};

export default MainLayout;
