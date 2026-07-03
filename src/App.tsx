import { Navbar } from './components/navigation/Navbar';
import { Footer } from './features/footer/Footer';
import { HomePage } from './pages/HomePage';

export default function App() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
