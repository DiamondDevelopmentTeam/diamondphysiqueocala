import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ScrollToTop } from './components/ScrollToTop';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { BookYourSession } from './pages/BookYourSession';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { MeetTheTrainer } from './pages/MeetTheTrainer';
import { NotFound } from './pages/NotFound';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Services } from './pages/Services';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/meet-the-trainer" element={<MeetTheTrainer />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book-your-session" element={<BookYourSession />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
