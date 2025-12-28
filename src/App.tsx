import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TopValues } from './components/TopValues';
import { ExploreDestinations } from './components/ExploreDestinations';
import { UpcomingCruise } from './components/UpcomingCruise';
import { SafetyProtocols } from './components/SafetyProtocols';
import { PhotoGallery } from './components/PhotoGallery';
import { Reviews } from './components/Reviews';
import { DownloadApp } from './components/DownloadApp';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { Auth } from './components/Auth';
import { useState } from 'react';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onLogout={handleLogout} />
      <Hero />
      <TopValues />
      <ExploreDestinations />
      <UpcomingCruise />
      <SafetyProtocols />
      <PhotoGallery />
      <Reviews />
      <DownloadApp />
      <Newsletter />
      <Footer />
    </div>
  );
}