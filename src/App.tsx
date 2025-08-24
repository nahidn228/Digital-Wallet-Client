import { Outlet } from "react-router";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Button>Click</Button>

      <Outlet />
    </>
  );
}

export default App;
