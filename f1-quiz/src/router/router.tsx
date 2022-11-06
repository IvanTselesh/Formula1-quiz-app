import {Route, Routes} from "react-router-dom";
import {MainPage} from "../pages/MainPage/MainPage";
import {RegConfirm} from "../pages/RegConfirm/RegConfirm";
import {EmailConfirm} from "../pages/EmailConfirm/EmailConfirm";
import {DriversPage} from "../pages/DriversPage/Drivers";
import {ConstructorsPage} from "../pages/ConstructorsPage/ConstructorsPage";
import {CircuitsPage} from "../pages/CircuitsPage/CircuitsPage";
import {LoginFormPage} from "../pages/LoginFormPage/LoginFormPage";
import {RegFormPage} from "../pages/RegFormPage/RegFormPage";
import {QuizPage} from "../pages/QuizPage/QuizPage";
import {ErrorPage} from "../pages/ErrorPage/ErrorPage";
import {CircuitItemPage} from "../pages/CircuitItemPage/CircuitItemPage";
import {ConstructorItemPage} from "../pages/ConstructorItemPage/ConstructorItemPage";
import {DriverItemPage} from "../pages/DriverItemPage/DriverItemPage";

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/reg-success" element={<RegConfirm />} />
      <Route path="/email-confirm" element={<EmailConfirm />} />
      <Route path="/drivers" element={<DriversPage />} />
      <Route path="/constructors" element={<ConstructorsPage />} />
      <Route path="/circuits" element={<CircuitsPage />} />
      <Route path="/login" element={<LoginFormPage />} />
      <Route path="/registration" element={<RegFormPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/circuits/:id" element={<CircuitItemPage />} />
      <Route path="/constructors/:id" element={<ConstructorItemPage />} />
      <Route path="/drivers/:id" element={<DriverItemPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}