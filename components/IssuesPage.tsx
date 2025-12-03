import { ThumbsUp, MessageCircle, MapPin, Plus, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export function IssuesPage() {
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [newIssue, setNewIssue] = useState({
    title: '',
    description: '',
    category: '道路・交通',
    location: ''
  });

  const issues = [
    {
      id: 1,
      title: '駅前の街灯が暗くて夜間の通行が不安',
      description: '駅から住宅街までの道のりで街灯が少なく、特に冬場は早く暗くなるため危険を感じています。',
      category: '安全・防犯',
      location: '福島駅前エリア',
      likes: 124,
      comments: 18,
      status: '対応中',
      date: '2025/11/30',
      relatedBill: '公共照明設備改善計画'
    },
    {
      id: 2,
      title: '公園の遊具が古くなっていて心配',
      description: '近所の公園の遊具がサビや劣化が目立ち、子どもを遊ばせるのに不安があります。',
      category: '教育・子育て',
      location: '中央公園',
      likes: 98,
      comments: 24,
      status: '議案化',
      date: '2025/11/28',
      relatedBill: '公園遊具の改修に関する予算案'
    },
    {
      id: 3,
      title: '地域のバス本数を増やしてほしい',
      description: '高齢者が多い地域で、バスの本数が少なく通院や買い物に不便を感じています。',
      category: '道路・交通',
      location: '西部地区',
      likes: 156,
      comments: 32,
      status: '検討中',
      date: '2025/11/25',
      relatedBill: null
    },
    {
      id: 4,
      title: '空き家が増えて防犯面が心配',
      description: '近隣に空き家が増えており、不審者の出入りや火災のリスクが心配です。',
      category: '安全・防犯',
      location: '東部地区',
      likes: 87,
      comments: 15,
      status: '解決済み',
      date: '2025/11/20',
      relatedBill: '空き家対策条例の制定'
    },
    {
      id: 5,
      title: 'ゴミ収集日を増やしてほしい',
      description: '資源ごみの収集が月2回では少なく、家にゴミが溜まってしまいます。',
      category: '環境',
      location: '南部地区',
      likes: 72,
      comments: 11,
      status: '検討中',
      date: '2025/11/18',
      relatedBill: null
    },
  ];

  const categories = ['道路・交通', '教育・子育て', '環境', '安全・防犯', '医療・福祉', '経済', 'その他'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case '対応中':
        return 'bg-[#FFC93C] text-[#333333]';
      case '議案化':
        return 'bg-[#4DA9E8] text-white';
      case '検討中':
        return 'bg-[#ADB5BD] text-white';
      case '解決済み':
        return 'bg-[#51CF66] text-white';
      default:
        return 'bg-[#E1E8ED] text-[#666666]';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setShowSubmitForm(false);
    setNewIssue({
      title: '',
      description: '',
      category: '道路・交通',
      location: ''
    });
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E1E8ED] text-center">
          <p className="text-2xl text-[#4DA9E8] mb-1">{issues.length}</p>
          <p className="text-xs text-[#666666]">投稿された課題</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E1E8ED] text-center">
          <p className="text-2xl text-[#51CF66] mb-1">
            {issues.filter(i => i.status === '解決済み').length}
          </p>
          <p className="text-xs text-[#666666]">解決済み</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E1E8ED] text-center">
          <p className="text-2xl text-[#4DA9E8] mb-1">
            {issues.filter(i => i.status === '議案化').length}
          </p>
          <p className="text-xs text-[#666666]">議案化</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E1E8ED] text-center">
          <p className="text-2xl text-[#FFC93C] mb-1">
            {issues.filter(i => i.status === '対応中').length}
          </p>
          <p className="text-xs text-[#666666]">対応中</p>
        </div>
      </div>

      {/* Submit Button */}
      {!showSubmitForm && (
        <button
          onClick={() => setShowSubmitForm(true)}
          className="w-full bg-gradient-to-br from-[#4DA9E8] to-[#3B8AC7] text-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          <span>地域の課題を投稿する</span>
        </button>
      )}

      {/* Submit Form */}
      {showSubmitForm && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E1E8ED]">
          <h3 className="mb-4 text-[#333333]">課題を投稿</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-[#666666] mb-2">タイトル</label>
              <input
                type="text"
                value={newIssue.title}
                onChange={(e) => setNewIssue({ ...newIssue, title: e.target.value })}
                placeholder="課題のタイトルを入力してください"
                className="w-full px-4 py-3 bg-[#F5F7FA] rounded-lg border-none outline-none text-[#333333]"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-[#666666] mb-2">詳細</label>
              <textarea
                value={newIssue.description}
                onChange={(e) => setNewIssue({ ...newIssue, description: e.target.value })}
                placeholder="具体的な状況や改善してほしい点を入力してください"
                className="w-full px-4 py-3 bg-[#F5F7FA] rounded-lg border-none outline-none text-[#333333] h-32 resize-none"
                required
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-[#666666] mb-2">カテゴリー</label>
                <select
                  value={newIssue.category}
                  onChange={(e) => setNewIssue({ ...newIssue, category: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F5F7FA] rounded-lg border-none outline-none text-[#333333]"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-[#666666] mb-2">場所</label>
                <input
                  type="text"
                  value={newIssue.location}
                  onChange={(e) => setNewIssue({ ...newIssue, location: e.target.value })}
                  placeholder="例: 福島駅前エリア"
                  className="w-full px-4 py-3 bg-[#F5F7FA] rounded-lg border-none outline-none text-[#333333]"
                  required
                />
              </div>
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="flex-1 bg-[#4DA9E8] text-white px-6 py-3 rounded-lg hover:bg-[#3B8AC7] transition-colors"
              >
                投稿する
              </button>
              <button
                type="button"
                onClick={() => setShowSubmitForm(false)}
                className="px-6 py-3 bg-[#F5F7FA] text-[#666666] rounded-lg hover:bg-[#E8EDF2] transition-colors"
              >
                キャンセル
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Issues List */}
      <div className="space-y-4">
        {issues.map((issue) => (
          <div key={issue.id} className="bg-white rounded-xl p-5 shadow-sm border border-[#E1E8ED] hover:shadow-md transition-shadow">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(issue.status)}`}>
                    {issue.status}
                  </span>
                  <span className="px-3 py-1 bg-[#F5F7FA] text-[#4DA9E8] text-xs rounded-full">
                    {issue.category}
                  </span>
                </div>
                <h4 className="text-[#333333] mb-2">{issue.title}</h4>
                <p className="text-sm text-[#666666] mb-3">{issue.description}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 mb-3 text-sm text-[#666666]">
              <MapPin className="w-4 h-4" />
              <span>{issue.location}</span>
            </div>

            {/* Related Bill */}
            {issue.relatedBill && (
              <div className="bg-[#4DA9E8] bg-opacity-10 rounded-lg p-3 mb-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#4DA9E8]" />
                  <p className="text-sm text-[#4DA9E8]">
                    関連議案: {issue.relatedBill}
                  </p>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-[#E1E8ED]">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-[#4DA9E8] hover:text-[#3B8AC7] transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm">{issue.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-[#666666] hover:text-[#4DA9E8] transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">{issue.comments}</span>
                </button>
              </div>
              <span className="text-xs text-[#666666]">{issue.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div className="bg-[#FFC93C] bg-opacity-10 rounded-xl p-6 border border-[#FFC93C]">
        <h4 className="text-[#333333] mb-2">投稿時の注意事項</h4>
        <ul className="text-sm text-[#666666] space-y-2">
          <li>• 個人や団体への誹謗中傷は禁止されています</li>
          <li>• 具体的な事実に基づいた課題をご投稿ください</li>
          <li>• 投稿内容は定期的に確認され、適切に対応されます</li>
        </ul>
      </div>
    </div>
  );
}
