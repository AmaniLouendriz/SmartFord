import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';
import { AppHeader } from './components/AppHeader/AppHeader';
import { View } from './Container/View';
function App() {
    // <div>Life with ford, is a luxury !</div>
    const router = createBrowserRouter(createRoutesFromElements(

      // I need an element from the first englobing Route, and the second.
      <Route path='' element={<AppHeader/>}>
  
        <Route index element={<View/>}/>
  
      </Route>
    ))
  
      return (
        <RouterProvider router={router}/>
      );
}

export default App;
