import { Search, Award, TrendingUp } from "lucide-react";
import { useState } from "react";

export function MembersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const members = [
    {
      id: 1,
      name: "三浦 由美子",
      party: "無所属",
      district: "なし", // 情報なし
      attendance: 0, // 情報なし
      proposals: 0, // 情報なし
      term: 0, // 情報なし
      focus: ["総務"],
      image: "👨‍💼",
      committee: "総務",
    },
    {
      id: 2,
      name: "高木 直人",
      party: "公明党",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["建設", "水道", "議会運営"],
      image: "👩‍💼",
      committee: "建設水道（副）, 議会運営",
    },
    {
      id: 3,
      name: "遠藤 幸一",
      party: "市民21",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["経済", "民生", "議会運営"],
      image: "👨‍💼",
      committee: "経済民生, 議会運営",
    },
    {
      id: 4,
      name: "菅原 美智子",
      party: "真結の会",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["文教", "福祉"],
      image: "👩‍💼",
      committee: "文教福祉",
    },
    {
      id: 5,
      name: "二階堂 利枝",
      party: "真結の会",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["建設", "水道", "議会運営"],
      image: "👩‍💼",
      committee: "建設水道, 議会運営",
    },
    {
      id: 6,
      name: "鈴木 哲",
      party: "真政会",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["総務"],
      image: "👨‍💼",
      committee: "総務",
    },
    {
      id: 7,
      name: "浦野 洋太朗",
      party: "真政会",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["文教", "福祉", "議会運営"],
      image: "👨‍💼",
      committee: "文教福祉, 議会運営",
    },
    {
      id: 8,
      name: "佐藤 勢",
      party: "真政会",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["経済", "民生", "議会運営"],
      image: "👨‍💼",
      committee: "経済民生, 議会運営",
    },
    {
      id: 9,
      name: "山田 裕",
      party: "日本共産党",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["経済", "民生", "議会運営"],
      image: "👨‍💼",
      committee: "経済民生（副）, 議会運営",
    },
    {
      id: 10,
      name: "丹治 誠",
      party: "公明党",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["文教", "福祉"],
      image: "👨‍💼",
      committee: "文教福祉",
    },
    {
      id: 11,
      name: "佐原 真紀",
      party: "市民21",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["文教", "福祉", "議会運営"],
      image: "👩‍💼",
      committee: "文教福祉（副）, 議会運営",
    },
    {
      id: 12,
      name: "根本 雅昭",
      party: "真結の会",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["文教", "福祉", "議会運営"],
      image: "👨‍💼",
      committee: "文教福祉（正）, 議会運営",
    },
    {
      id: 13,
      name: "斎藤 正臣",
      party: "真結の会",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["経済", "民生"],
      image: "👨‍💼",
      committee: "経済民生（正）",
    },
    {
      id: 14,
      name: "川又 康彦",
      party: "真結の会",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["建設", "水道"],
      image: "👨‍💼",
      committee: "建設水道（正）",
    },
    {
      id: 15,
      name: "七島 奈緒",
      party: "真政会",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["建設", "水道"],
      image: "👩‍💼",
      committee: "建設水道",
    },
    {
      id: 16,
      name: "石山 波恵",
      party: "真政会",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["総務"],
      image: "👩‍💼",
      committee: "総務（副）",
    },
    {
      id: 17,
      name: "白川 敏明",
      party: "真政会",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["議長"],
      image: "👨‍💼",
      committee: "議長",
    },
    {
      id: 18,
      name: "佐々木 優",
      party: "日本共産党",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["文教", "福祉"],
      image: "👨‍💼",
      committee: "文教福祉",
    },
    {
      id: 19,
      name: "後藤 善次",
      party: "公明党",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["総務"],
      image: "👨‍💼",
      committee: "総務",
    },
    {
      id: 20,
      name: "沢井 和宏",
      party: "市民21",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["総務"],
      image: "👨‍💼",
      committee: "総務（正）",
    },
    {
      id: 21,
      name: "鈴木 正実",
      party: "真結の会",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["総務", "議会運営"],
      image: "👨‍💼",
      committee: "総務, 議会運営（副）",
    },
    {
      id: 22,
      name: "二階堂 武文",
      party: "真結の会",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["建設", "水道"],
      image: "👨‍💼",
      committee: "建設水道",
    },
    {
      id: 23,
      name: "尾形 武",
      party: "真結の会",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["経済", "民生"],
      image: "👨‍💼",
      committee: "経済民生",
    },
    {
      id: 24,
      name: "萩原 太郎",
      party: "真政会",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["文教", "福祉"],
      image: "👨‍💼",
      committee: "文教福祉",
    },
    {
      id: 25,
      name: "大平 洋人",
      party: "真政会",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["建設", "水道", "議会運営"],
      image: "👨‍💼",
      committee: "建設水道, 議会運営（正）",
    },
    {
      id: 26,
      name: "小松 良行",
      party: "真政会",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["建設", "水道"],
      image: "👨‍💼",
      committee: "建設水道",
    },
    {
      id: 27,
      name: "村山 国子",
      party: "日本共産党",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["総務"],
      image: "👩‍💼",
      committee: "総務",
    },
    {
      id: 28,
      name: "小野 京子",
      party: "公明党",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["経済", "民生"],
      image: "👩‍💼",
      committee: "経済民生",
    },
    {
      id: 29,
      name: "羽田 房男",
      party: "市民21",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["副議長", "文教", "福祉"],
      image: "👨‍💼",
      committee: "副議長, 文教福祉",
    },
    {
      id: 30,
      name: "高木 克尚",
      party: "市民21",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["建設", "水道"],
      image: "👨‍💼",
      committee: "建設水道",
    },
    {
      id: 31,
      name: "真田 広志",
      party: "真結の会",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["文教", "福祉"],
      image: "👨‍💼",
      committee: "文教福祉",
    },
    {
      id: 32,
      name: "宍戸 一照",
      party: "真結の会",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["総務"],
      image: "👨‍💼",
      committee: "総務",
    },
    {
      id: 33,
      name: "半沢 正典",
      party: "真政会",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["総務", "議会運営"],
      image: "👨‍💼",
      committee: "総務, 議会運営",
    },
    {
      id: 34,
      name: "黒沢 仁",
      party: "真政会",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["経済", "民生"],
      image: "👨‍💼",
      committee: "経済民生",
    },
    {
      id: 35,
      name: "渡辺 敏彦",
      party: "真政会",
      district: "なし",
      attendance: 0,
      proposals: 0,
      term: 0,
      focus: ["経済", "民生"],
      image: "👨‍💼",
      committee: "経済民生",
    },
  ];

  const filteredMembers = members.filter(
    (member) =>
      member.name.includes(searchTerm) ||
      member.party.includes(searchTerm) ||
      member.district.includes(searchTerm) ||
      member.focus.some((f) => f.includes(searchTerm))
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
          <p className="text-2xl text-[#FFC93C] mb-1">
            {Math.round(
              members.reduce((acc, m) => acc + m.attendance, 0) / members.length
            )}
            %
          </p>
          <p className="text-xs text-[#666666]">平均出席率</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E1E8ED] text-center">
          <p className="text-2xl text-[#51CF66] mb-1">
            {members.reduce((acc, m) => acc + m.proposals, 0)}件
          </p>
          <p className="text-xs text-[#666666]">総提案数</p>
        </div>
      </div>

      {/* Members Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-xl p-5 shadow-sm border border-[#E1E8ED] hover:shadow-md transition-shadow cursor-pointer"
          >
            {/* Header */}
            <div className="flex items-start gap-3 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-[#4DA9E8] to-[#3B8AC7] rounded-full flex items-center justify-center text-2xl">
                {member.image}
              </div>
              <div className="flex-1">
                <h4 className="text-[#333333] mb-1">{member.name}</h4>
                <p className="text-xs text-[#666666]">
                  {member.party} / {member.district}
                </p>
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
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#4DA9E8] bg-opacity-10 text-[#4DA9E8] text-xs rounded-full"
                  >
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
