import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalCss } from './styles'

// Criamos uma constante chamada rotas e utilizamos a função createBrowserRouter, essa função vai receber um array de objetos.
const rotas = createBrowserRouter([
  {
    // em path colocamos o caminho inicial, que no caso é a barra'/'
    path: '/',
    // em element colocamos o que será renderizado, nesse caso é só o banner por enquanto
    element: <Banner />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
