import './App.scss';
import { BlogPage } from "./pages/BlogPage/blogPage";
import { useTheme } from './features/theme/useTheme'

function App() {
  
  const {theme} = useTheme()

  return (
    <div className={`App theme--${theme}`}>
      <BlogPage />
    </div>
  );
}

export default App