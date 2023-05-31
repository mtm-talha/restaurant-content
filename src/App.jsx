import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostPage from "./PostPage";
import NotFoundPage from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/post/:postId" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;