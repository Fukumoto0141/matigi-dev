import { Clock, CheckCircle, XCircle, AlertCircle, Filter } from 'lucide-react';
import { useState } from 'react';

export function BillsPage() {
  const [filterStatus, setFilterStatus] = useState('all');

  const bills = [
    {
      id: 1,
      title: '公園遊具の改修に関する予算案',
      description: '老朽化した公園遊具の安全性向上のため、市内12箇所の公園遊具を順次改修する計画',
      status: '審議中',
      date: '2025/12/01',
      category: '教育・子育て',
      impact: '市内の子どもの安全な遊び場が増えます',
      budget: '2,800万円',
      proposer: '佐藤 太郎'
    },
    {
      id: 2,
      title: '学校給食費の見直しに関する条例改正',
      description: '物価高騰に対応し、給食の質を維持しながら保護者負担を軽減する施策',
      status: '可決',
      date: '2025/11/28',
      category: '教育・子育て',
      impact: '給食費が月額500円減額されます',
      budget: '1億2,000万円',
      proposer: '鈴木 花子'
    },
    {
      id: 3,
      title: '地域医療体制の強化に関する議案',
      description: '夜間救急体制の拡充と訪問診療サービスの充実を図る',
      status: '審議中',
      date: '2025/11/25',
      category: '医療・福祉',
      impact: '24時間安心して医療を受けられる体制に',
      budget: '4,500万円',
      proposer: '山田 美咲'
    },
    {
      id: 4,
      title: '空き家対策条例の制定',
      description: '増加する空き家の適正管理と利活用を促進する条例',
      status: '可決',
      date: '2025/11/20',
      category: 'インフラ',
      impact: '空き家が減り、地域の安全性が向上します',
      budget: '800万円',
      proposer: '田中 次郎'
    },
    {
      id: 5,
      title: '再生可能エネルギー推進計画',
      description: '公共施設への太陽光パネル設置と地域脱炭素化の推進',
      status: '審議中',
      date: '2025/11/18',
      category: '環境',
      impact: 'CO2排出量を20%削減目標',
      budget: '8,000万円',
      proposer: '高橋 優子'
    },
    {
      id: 6,
      title: '商店街活性化支援事業',
      description: '地域商店街のデジタル化支援と集客イベント開催補助',
      status: '否決',
      date: '2025/11/15',
      category: '経済',
      impact: '地域経済の活性化と雇用創出',
      budget: '3,200万円',
      proposer: '伊藤 健一'
    },
  ];

  const filteredBills = filterStatus === 'all' 
    ? bills 
    : bills.filter(bill => 
        filterStatus === 'ongoing' ? bill.status === '審議中' :
        filterStatus === 'passed' ? bill.status === '可決' :
        bill.status === '否決'
      );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case '審議中':
        return <Clock className="w-4 h-4" />;
      case '可決':
        return <CheckCircle className="w-4 h-4" />;
      case '否決':
        return <XCircle className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case '審議中':
        return 'bg-[#FFC93C] text-[#333333]';
      case '可決':
        return 'bg-[#51CF66] text-white';
      case '否決':
        return 'bg-[#FF6B6B] text-white';
      default:
        return 'bg-[#ADB5BD] text-white';
    }
  };

  return (
    <div className="space-y-6">
      {/* Filter Bar */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E1E8ED]">
        <div className="flex items-center gap-2 mb-3">
          <Filter className="w-5 h-5 text-[#4DA9E8]" />
          <h4 className="text-[#333333]">絞り込み</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            { value: 'all', label: 'すべて' },
            { value: 'ongoing', label: '審議中' },
            { value: 'passed', label: '可決' },
            { value: 'rejected', label: '否決' },
          ].map((filter) => (
            <button
              key={filter.value}
              onClick={() => setFilterStatus(filter.value)}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                filterStatus === filter.value
                  ? 'bg-[#4DA9E8] text-white'
                  : 'bg-[#F5F7FA] text-[#666666] hover:bg-[#E8EDF2]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E1E8ED] text-center">
          <p className="text-2xl text-[#FFC93C] mb-1">
            {bills.filter(b => b.status === '審議中').length}
          </p>
          <p className="text-xs text-[#666666]">審議中</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E1E8ED] text-center">
          <p className="text-2xl text-[#51CF66] mb-1">
            {bills.filter(b => b.status === '可決').length}
          </p>
          <p className="text-xs text-[#666666]">可決</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E1E8ED] text-center">
          <p className="text-2xl text-[#FF6B6B] mb-1">
            {bills.filter(b => b.status === '否決').length}
          </p>
          <p className="text-xs text-[#666666]">否決</p>
        </div>
      </div>

      {/* Bills List */}
      <div className="space-y-4">
        {filteredBills.map((bill) => (
          <div key={bill.id} className="bg-white rounded-xl p-5 shadow-sm border border-[#E1E8ED] hover:shadow-md transition-shadow">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs ${getStatusColor(bill.status)}`}>
                    {getStatusIcon(bill.status)}
                    {bill.status}
                  </span>
                  <span className="px-3 py-1 bg-[#F5F7FA] text-[#4DA9E8] text-xs rounded-full">
                    {bill.category}
                  </span>
                </div>
                <h4 className="text-[#333333] mb-2">{bill.title}</h4>
                <p className="text-sm text-[#666666] mb-3">{bill.description}</p>
              </div>
            </div>

            {/* Impact & Details */}
            <div className="bg-[#F5F7FA] rounded-lg p-4 mb-3">
              <div className="flex items-start gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-[#4DA9E8] mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs text-[#666666] mb-1">あなたへの影響</p>
                  <p className="text-sm text-[#333333]">{bill.impact}</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between text-xs text-[#666666]">
              <div className="flex items-center gap-4">
                <span>予算: {bill.budget}</span>
                <span>提案者: {bill.proposer}</span>
              </div>
              <span>{bill.date}</span>
            </div>
          </div>
        ))}
      </div>

      {filteredBills.length === 0 && (
        <div className="bg-white rounded-xl p-12 shadow-sm border border-[#E1E8ED] text-center">
          <p className="text-[#666666]">該当する議案が見つかりませんでした</p>
        </div>
      )}
    </div>
  );
}
