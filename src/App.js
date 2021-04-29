import { Provider } from "react-redux";
import Amount from "./components/Amount";
import Auth from "./components/Auth";
import Banking from "./components/Banking";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Auth />
        <Amount />
        <Banking />
      </div>
    </Provider>
  );
}

export default App;
