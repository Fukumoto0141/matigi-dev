import { useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { MembersPage } from './components/MembersPage';
import { BillsPage } from './components/BillsPage';
import { BudgetPage } from './components/BudgetPage';
import { IssuesPage } from './components/IssuesPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'members':
        return <MembersPage />;
      case 'bills':
        return <BillsPage />;
      case 'budget':
        return <BudgetPage />;
      case 'issues':
        return <IssuesPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6 pb-24 md:pb-6 mt-[72px] md:mt-[130px]">
        {renderPage()}
      </main>
    </div>
  );
}
