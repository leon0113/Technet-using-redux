import { Toaster } from './components/ui/Toaster';
import Footer from './layouts/Footer';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <div>
      <Toaster />
      <MainLayout />
      <Footer/>
    </div>
  );
}

export default App;
