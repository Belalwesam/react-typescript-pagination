import MoviesContextProvider from "./MoviesContext";
import { MoviesContext } from "./MoviesContext";
import Movies from "./Movies";
function App() {
  return (
    <MoviesContextProvider>
      <Movies />
    </MoviesContextProvider>
  );
}
export default App;
