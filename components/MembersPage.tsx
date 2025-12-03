import { Search, Award, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export function MembersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const members = [
    { 
      id: 1, 
      name: '佐藤 太郎', 
      party: '市民党', 
      district: '第1区',
      attendance: 95,
      proposals: 12,
      term: 2,
      focus: ['教育', '福祉'],
      image: '👨‍💼'
    },
    { 
      id: 2, 
      name: '鈴木 花子', 
      party: '未来会', 
      district: '第2区',
      attendance: 98,
      proposals: 18,
      term: 3,
      focus: ['環境', 'インフラ'],
      image: '👩‍💼'
    },
    { 
      id: 3, 
      name: '田中 次郎', 
      party: '改革派', 
      district: '第3区',
      attendance: 92,
      proposals: 8,
      term: 1,
      focus: ['経済', '雇用'],
      image: '👨‍💼'
    },
    { 
      id: 4, 
      name: '山田 美咲', 
      party: '市民党', 
      district: '第1区',
      attendance: 96,
      proposals: 15,
      term: 2,
      focus: ['子育て', '医療'],
      image: '👩‍💼'
    },
    { 
      id: 5, 
      name: '伊藤 健一', 
      party: '未来会', 
      district: '第4区',
      attendance: 90,
      proposals: 10,
      term: 1,
      focus: ['農業', '地域活性'],
      image: '👨‍💼'
    },
    { 
      id: 6, 
      name: '高橋 優子', 
      party: '改革派', 
      district: '第2区',
      attendance: 94,
      proposals: 14,
      term: 2,
      focus: ['観光', '文化'],
      image: '👩‍💼'
    },
  ];

  const filteredMembers = members.filter(member =>
    member.name.includes(searchTerm) ||
    member.party.includes(searchTerm) ||
    member.district.includes(searchTerm) ||
    member.focus.some(f => f.includes(searchTerm))
  );

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E1E8ED]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#666666]" />
          <input
            type="text"
            placeholder="議員名、政党、地区、注力分野で検索..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-[#F5F7FA] rounded-lg border-none outline-none text-[#333333] placeholder-[#666666]"
          />
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E1E8ED] text-center">
          <p className="text-2xl text-[#4DA9E8] mb-1">{members.length}名</p>
          <p className="text-xs text-[#666666]">総議員数</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E1E8ED] text-center">
          <p className="text-2xl text-[#FFC93C] mb-1">{Math.round(members.reduce((acc, m) => acc + m.attendance, 0) / members.length)}%</p>
          <p className="text-xs text-[#666666]">平均出席率</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E1E8ED] text-center">
          <p className="text-2xl text-[#51CF66] mb-1">{members.reduce((acc, m) => acc + m.proposals, 0)}件</p>
          <p className="text-xs text-[#666666]">総提案数</p>
        </div>
      </div>

      {/* Members Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMembers.map((member) => (
          <div key={member.id} className="bg-white rounded-xl p-5 shadow-sm border border-[#E1E8ED] hover:shadow-md transition-shadow cursor-pointer">
            {/* Header */}
            <div className="flex items-start gap-3 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-[#4DA9E8] to-[#3B8AC7] rounded-full flex items-center justify-center text-2xl">
                {member.image}
              </div>
              <div className="flex-1">
                <h4 className="text-[#333333] mb-1">{member.name}</h4>
                <p className="text-xs text-[#666666]">{member.party} / {member.district}</p>
                <p className="text-xs text-[#666666]">{member.term}期目</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-[#F5F7FA] rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-[#4DA9E8]" />
                  <span className="text-xs text-[#666666]">出席率</span>
                </div>
                <p className="text-lg text-[#4DA9E8]">{member.attendance}%</p>
              </div>
              <div className="bg-[#F5F7FA] rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-[#FFC93C]" />
                  <span className="text-xs text-[#666666]">提案数</span>
                </div>
                <p className="text-lg text-[#FFC93C]">{member.proposals}件</p>
              </div>
            </div>

            {/* Focus Areas */}
            <div>
              <p className="text-xs text-[#666666] mb-2">注力分野</p>
              <div className="flex flex-wrap gap-2">
                {member.focus.map((area, idx) => (
                  <span key={idx} className="px-3 py-1 bg-[#4DA9E8] bg-opacity-10 text-[#4DA9E8] text-xs rounded-full">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="bg-white rounded-xl p-12 shadow-sm border border-[#E1E8ED] text-center">
          <p className="text-[#666666]">該当する議員が見つかりませんでした</p>
        </div>
      )}
    </div>
  );
}
