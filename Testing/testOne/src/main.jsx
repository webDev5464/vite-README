import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Components/styles/globle.css"
import { Provider } from "react-redux"
import ProductStore from "./Components/modules/config/productStore.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={ProductStore}>
    <App />
  </Provider>
);
