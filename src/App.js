import { Route, Routes } from "react-router-dom";
import AllMeetupPage from "./AllMeetupPage";
import NewMeetsPage from "./NewMeet";
import FaviouritiesPage from "./faviourites";
import Mainnavigation from "./Mainnavigation";
import Layout from "./Layout";
import NewMeetUpForm from "./NewMeetUpForm";
import NewMeet from "./NewMeet"

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<AllMeetupPage />} />
        <Route exact path="/newmeet" element={<NewMeet />} />
        <Route exact path="/faviourites" element={<FaviouritiesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
