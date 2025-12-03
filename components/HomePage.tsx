import { TrendingUp, Users, FileText, AlertCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export function HomePage() {
  const budgetData = [
    { category: '教育', amount: 450 },
    { category: '福祉', amount: 380 },
    { category: 'インフラ', amount: 280 },
    { category: '環境', amount: 190 },
    { category: 'その他', amount: 200 },
  ];

  const pieData = [
    { name: '教育', value: 30, color: '#4DA9E8' },
    { name: '福祉', value: 25, color: '#FFC93C' },
    { name: 'インフラ', value: 19, color: '#FF6B6B' },
    { name: '環境', value: 13, color: '#51CF66' },
    { name: 'その他', value: 13, color: '#ADB5BD' },
  ];

  const recentBills = [
    { id: 1, title: '公園整備に関する予算案', status: '審議中', date: '2025/12/01' },
    { id: 2, title: '学校給食費の見直し', status: '可決', date: '2025/11/28' },
    { id: 3, title: '地域医療体制の強化', status: '審議中', date: '2025/11/25' },
  ];

  const stats = [
    { icon: Users, label: '議員数', value: '42名', color: '#4DA9E8' },
    { icon: FileText, label: '今期議案', value: '78件', color: '#FFC93C' },
    { icon: TrendingUp, label: '可決率', value: '89%', color: '#51CF66' },
    { icon: AlertCircle, label: '審議中', value: '12件', color: '#FF6B6B' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-[#E1E8ED]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${stat.color}20` }}>
                  <Icon className="w-4 h-4" style={{ color: stat.color }} />
                </div>
              </div>
              <p className="text-2xl mb-1" style={{ color: stat.color }}>{stat.value}</p>
              <p className="text-xs text-[#666666]">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Budget Overview */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E1E8ED]">
        <h3 className="mb-4 text-[#333333]">今年度予算配分</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={budgetData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E1E8ED" />
                <XAxis dataKey="category" tick={{ fill: '#666666', fontSize: 12 }} />
                <YAxis tick={{ fill: '#666666', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #E1E8ED',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="amount" fill="#4DA9E8" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="h-[250px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Bills */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E1E8ED]">
        <h3 className="mb-4 text-[#333333]">最近の議案</h3>
        <div className="space-y-3">
          {recentBills.map((bill) => (
            <div key={bill.id} className="flex items-center justify-between p-4 bg-[#F5F7FA] rounded-lg hover:bg-[#E8EDF2] transition-colors cursor-pointer">
              <div className="flex-1">
                <h4 className="text-[#333333] mb-1">{bill.title}</h4>
                <p className="text-xs text-[#666666]">{bill.date}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs ${
                bill.status === '可決' 
                  ? 'bg-[#51CF66] text-white' 
                  : 'bg-[#FFC93C] text-[#333333]'
              }`}>
                {bill.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Citizen Voice */}
      <div className="bg-gradient-to-br from-[#4DA9E8] to-[#3B8AC7] rounded-xl p-6 shadow-sm text-white">
        <h3 className="mb-2">あなたの声を届けよう</h3>
        <p className="text-sm mb-4 opacity-90">地域の課題を共有して、より良いまちづくりに参加しましょう</p>
        <button className="bg-white text-[#4DA9E8] px-6 py-2 rounded-lg hover:bg-[#F5F7FA] transition-colors">
          課題を投稿する
        </button>
      </div>
    </div>
  );
}
