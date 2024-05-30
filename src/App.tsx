import { MyRouterProvider, QueryProvider } from "./app/providers/";

function App() {
  return (
    <>
      <QueryProvider>
        <MyRouterProvider />
      </QueryProvider>
    </>
  );
}

export default App;
