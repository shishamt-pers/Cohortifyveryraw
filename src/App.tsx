import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { ThemeProvider } from "./context/ThemeContext";
import { EnrollProvider } from "./context/EnrollContext";

declare const __BASE_PATH__: string | undefined;

function App() {
  const basename =
    typeof __BASE_PATH__ !== "undefined"
      ? __BASE_PATH__
      : import.meta.env.BASE_URL || "/";

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <EnrollProvider>
          <BrowserRouter basename={basename}>
            <AppRoutes />
          </BrowserRouter>
        </EnrollProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;