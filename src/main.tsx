import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { appRouter } from './router'
import { reduxStore } from './redux'
import { RedirectProvider } from './config/providers'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={reduxStore}>
      <RedirectProvider>
        <RouterProvider router={appRouter} />
      </RedirectProvider>
    </Provider>
)
