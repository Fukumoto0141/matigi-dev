import { Home, Users, FileText, DollarSign, MessageSquare } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const navItems = [
    { id: 'home', icon: Home, label: 'ホーム' },
    { id: 'members', icon: Users, label: '議員' },
    { id: 'bills', icon: FileText, label: '議案' },
    { id: 'budget', icon: DollarSign, label: '財政' },
    { id: 'issues', icon: MessageSquare, label: '課題' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-[#E1E8ED] md:top-0 md:bottom-auto md:border-t-0 md:border-b-2 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-around md:justify-start md:gap-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`flex flex-col md:flex-row items-center gap-1 md:gap-2 py-3 px-2 transition-colors ${
                  isActive
                    ? 'text-[#4DA9E8]'
                    : 'text-[#666666] hover:text-[#4DA9E8]'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs md:text-sm">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
