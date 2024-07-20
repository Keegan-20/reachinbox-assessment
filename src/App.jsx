import Login from './Pages/Login'
import ThemeContextProvider from './Context/ThemeContext'
import "./App.css";

function App() {
  return (
    <ThemeContextProvider>
      <Login />
    </ThemeContextProvider>
  )
}

export default App
