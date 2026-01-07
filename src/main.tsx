import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalModal, Button } from './components'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="p-10 space-y-4">
      <h1 className="text-2xl font-bold">Library Dev Playground</h1>
      <div className="flex gap-4 items-center">
        <Button onClick={() => alert('Clicked!')}>Unstyled Button</Button>
        <GlobalModal />
      </div>
    </div>
  </React.StrictMode>,
)
