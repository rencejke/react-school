import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Student from "./components/pages/developper/database/student/Student";
import Staff from "./components/pages/developper/database/staff/Staff";
import Teacher from "./components/pages/developper/database/teacher/Teacher";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StoreProvider } from "./store/StoreContext";

function App() {
 
  const queryClient = new QueryClient();
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
      <Router>
        <Routes>
        <Route path="/database/student" element={<Student/> } />
        <Route path="/database/staff" element={<Staff/> } />
        <Route path="/database/teacher" element={<Teacher /> } />
        </Routes>
      </Router>
      </StoreProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
