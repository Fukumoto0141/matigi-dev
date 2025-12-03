import { TrendingUp, TrendingDown, DollarSign, PieChart as PieChartIcon } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend, PieChart, Pie, Cell } from 'recharts';

export function BudgetPage() {
  const categoryBudget = [
    { category: '教育', budget: 450, change: 8, color: '#4DA9E8' },
    { category: '福祉', budget: 380, change: 5, color: '#FFC93C' },
    { category: 'インフラ', budget: 280, change: -3, color: '#FF6B6B' },
    { category: '環境', budget: 190, change: 12, color: '#51CF66' },
    { category: '医療', budget: 240, change: 6, color: '#9775FA' },
    { category: '経済', budget: 160, change: -2, color: '#FF922B' },
  ];

  const yearlyTrend = [
    { year: '2021', budget: 1520 },
    { year: '2022', budget: 1580 },
    { year: '2023', budget: 1640 },
    { year: '2024', budget: 1680 },
    { year: '2025', budget: 1700 },
  ];

  const pieData = categoryBudget.map(item => ({
    name: item.category,
    value: item.budget,
    color: item.color
  }));

  const totalBudget = categoryBudget.reduce((sum, item) => sum + item.budget, 0);

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E1E8ED]">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-[#4DA9E8]" />
            <p className="text-xs text-[#666666]">総予算</p>
          </div>
          <p className="text-2xl text-[#4DA9E8]">{totalBudget}億円</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E1E8ED]">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-[#51CF66]" />
            <p className="text-xs text-[#666666]">前年比</p>
          </div>
          <p className="text-2xl text-[#51CF66]">+1.2%</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E1E8ED]">
          <div className="flex items-center gap-2 mb-2">
            <PieChartIcon className="w-5 h-5 text-[#FFC93C]" />
            <p className="text-xs text-[#666666]">分野数</p>
          </div>
          <p className="text-2xl text-[#FFC93C]">{categoryBudget.length}分野</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E1E8ED]">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-[#9775FA]" />
            <p className="text-xs text-[#666666]">市民1人当たり</p>
          </div>
          <p className="text-xl text-[#9775FA]">85万円</p>
        </div>
      </div>

      {/* Yearly Trend */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E1E8ED]">
        <h3 className="mb-4 text-[#333333]">予算推移（過去5年）</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={yearlyTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E1E8ED" />
              <XAxis 
                dataKey="year" 
                tick={{ fill: '#666666', fontSize: 12 }}
              />
              <YAxis 
                tick={{ fill: '#666666', fontSize: 12 }}
                label={{ value: '億円', angle: -90, position: 'insideLeft', fill: '#666666' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #E1E8ED',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="budget" 
                stroke="#4DA9E8" 
                strokeWidth={3}
                name="総予算"
                dot={{ fill: '#4DA9E8', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Budget Distribution */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E1E8ED]">
        <h3 className="mb-4 text-[#333333]">分野別予算配分</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryBudget}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E1E8ED" />
                <XAxis 
                  dataKey="category" 
                  tick={{ fill: '#666666', fontSize: 12 }}
                />
                <YAxis 
                  tick={{ fill: '#666666', fontSize: 12 }}
                  label={{ value: '億円', angle: -90, position: 'insideLeft', fill: '#666666' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #E1E8ED',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="budget" fill="#4DA9E8" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="h-[300px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={90}
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

      {/* Category Details */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E1E8ED]">
        <h3 className="mb-4 text-[#333333]">分野別詳細</h3>
        <div className="space-y-3">
          {categoryBudget.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-[#F5F7FA] rounded-lg hover:bg-[#E8EDF2] transition-colors">
              <div className="flex items-center gap-4 flex-1">
                <div 
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: item.color }}
                />
                <div className="flex-1">
                  <h4 className="text-[#333333] mb-1">{item.category}</h4>
                  <p className="text-xs text-[#666666]">総予算の {((item.budget / totalBudget) * 100).toFixed(1)}%</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-xl text-[#333333] mb-1">{item.budget}億円</p>
                  <div className={`flex items-center gap-1 text-xs ${item.change >= 0 ? 'text-[#51CF66]' : 'text-[#FF6B6B]'}`}>
                    {item.change >= 0 ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : (
                      <TrendingDown className="w-3 h-3" />
                    )}
                    <span>{item.change >= 0 ? '+' : ''}{item.change}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explanation */}
      <div className="bg-gradient-to-br from-[#4DA9E8] to-[#3B8AC7] rounded-xl p-6 shadow-sm text-white">
        <h3 className="mb-2">予算の使い道をチェック</h3>
        <p className="text-sm opacity-90">
          市民の税金がどのように使われているか、透明性を持って公開しています。
          各分野の詳細な内訳や具体的な事業内容については、議案ページでご確認いただけます。
        </p>
      </div>
    </div>
  );
}
