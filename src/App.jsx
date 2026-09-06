import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
// Add page imports here
import Home from './pages/Home';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Add your page Route elements here */}
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Toaster />
      </Router>
    </QueryClientProvider>
  )
}

export default App
