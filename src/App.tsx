// Shared internal imports
import { Header } from "components";
import { PageRouters } from "routes/PageRouters";

// Internal imports
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
