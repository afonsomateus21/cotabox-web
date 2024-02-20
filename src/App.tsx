import { Header } from "./components/Header"
import { MainContent } from "./components/MainContent"
import { UsersProvider } from "./hooks/useUsers"

function App() {
  return (
    <UsersProvider>
      <Header />
      <MainContent />
    </UsersProvider>
  )
}

export default App
