import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <header>{/* 헤더 네비게이션 */}</header>

      <main>
        <Outlet />
      </main>

      <footer>{/* 푸터 */}</footer>
    </div>
  );
};

export default MainLayout;
