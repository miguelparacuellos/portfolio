import { Header } from "components/Header";
import { PageRouters } from "routes/PageRouters";
import { AppWrapper } from "styles";

function App() {
  return (
    <AppWrapper>
      <Header />
      <PageRouters />
    </AppWrapper>
  );
}

export default App;
