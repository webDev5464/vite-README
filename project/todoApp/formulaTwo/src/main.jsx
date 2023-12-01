import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TodoProvider from './TodoProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TodoProvider>
    <App />
  </TodoProvider>
)
