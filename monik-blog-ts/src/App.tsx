import './App.css';
import Navbar from './components/Navbar/Navbar';
import Content from './routes/MainContent/content';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import Profile from './routes/Profile';
import Side from './components/SideContent/side';
import Blog from './components/Blog';
import SearchSec from './routes/searchSection';

const AppLayout = () => (
  <>
    <Navbar />
    <div className="content-area">
      <Side />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  </>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AppLayout />}>
        <Route index path="/content" element={<Content />} />
        <Route path="/blog/:blogid" element={<Blog />} />
        <Route path="/search/:searchid" element={ <SearchSec/> } >
        </Route>
      </Route>
      <Route path="/profile" element={<Profile />} />

      {/* </Route> */}
    </>
  )
);

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
