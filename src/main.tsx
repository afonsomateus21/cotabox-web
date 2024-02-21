import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: import.meta.env.MODE === "development" 
    ? `${import.meta.env.VITE_API_URI_DEVELOPMENT_MODE}`
    : `${import.meta.env.VITE_API_URI_PRODUCTION_MODE}`,
  cache: new InMemoryCache(),
});

console.log(import.meta.env.MODE)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
