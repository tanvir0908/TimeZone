import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
        <h1>hi</h1>
      <Outlet />
    </div>
  );
}
