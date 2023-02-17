import './App.css';
import Navbar from './components/Navbar/Navbar';
import Content from './routes/MainContent/content';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
  Routes
} from 'react-router-dom';
import Profile from './routes/Profile';
import ContentRight from './routes/MainContent/content-right';
import Chatbox from './components/Chatbox/chatbox';
import Side from './components/SideContent/side';
import Blog from './components/Blog';

const AppLayout = () => (
  <>
    <Navbar />
    <div className="content-area">
      <div className="content-area-inner">
        <Side />
        <div className="outlet">
          <Outlet />
        </div>
      </div>
      <div>
        <Chatbox />
      </div>
    </div>
  </>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AppLayout />}>
        <Route index path="/content" element={<Content />} />
        {/* <Route path="/content/intro" element={<ContentRight />} />
        <Route path="/content/1" element={<Des />} /> */}
        <Route path="/blog/:blogid" element={<Blog />} />
      </Route>
      {/* <Route element={<Outlet />}>  */}
      <Route path="profile" element={<Profile />} />

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
