import React from 'react';
import { Sparkles, Megaphone, ShoppingCart, Trophy } from 'lucide-react';

const MarketingFeature = ({ subtitle, title, content, icon: Icon }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h4 className="text-sm font-semibold text-black mb-1">{subtitle}</h4>
        <h3 className="text-2xl font-bold text-red-700">{title}</h3>
      </div>
      <div className="bg-red-100 p-3 rounded-full">
        <Icon className="w-14 h-14 text-red-700" strokeWidth={1.5} />
      </div>
    </div>
    <p className="text-sm flex-grow text-gray-700 mt-2">{content}</p>
  </div>
);

const MarketingStrategiesGrid = () => {
  const features = [
    {
      subtitle: "HOT DEAL",
      title: "핫딜형",
      icon: Sparkles,
      content: "신규제품 브랜딩, 할인 프로모션 홍보 등 현재 상황에 맞는 커뮤니티를 체크, 해당 커뮤니티에 관련 게시글, 댓글작성을 통해 홍보를 하는 마케팅입니다.",
    },
    {
      subtitle: "OPINION",
      title: "여론형성형",
      icon: Megaphone,
      content: "신규제품 브랜딩, 할인 프로모션 홍보 등 현재 상황에 맞는 커뮤니티를 체크, 해당 커뮤니티에 관련 게시글, 댓글작성을 통해 홍보를 하는 마케팅입니다.",
    },
    {
      subtitle: "REVIEW",
      title: "후기형",
      icon: ShoppingCart,
      content: "고객들이 직접 제품을 체험하고, 네이버 등 블로그에 긍정적인 체험후기를 공유하는 홍보 마케팅입니다.",
    },
    {
      subtitle: "REVIEW",
      title: "상품평 관리",
      icon: Trophy,
      content: "고객들이 직접 제품을 체험하고, 네이버 등 블로그에 긍정적인 체험후기를 공유하는 홍보 마케팅입니다.",
    },
  ];

  return (
    <div className="bg-red-700 p-8">
      <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <MarketingFeature key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default MarketingStrategiesGrid;
