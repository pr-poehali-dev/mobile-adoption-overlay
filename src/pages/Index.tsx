import { Button } from "@/components/ui/button";
import { useState } from "react";

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  const handleYesClick = () => {
    window.location.href =
      "https://1wcjlr.com/casino/list?open=register&p=sbpl";
  };

  const handleNoClick = () => {
    window.location.href =
      "https://1wcjlr.com/casino/list?open=register&p=sbpl";
  };

  if (showContent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 text-green-600">
            Добро пожаловать!
          </h1>
          <p className="text-xl text-gray-600">
            Контент для взрослых пользователей
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 relative"
      style={{
        backgroundImage: `url('https://cdn.poehali.dev/files/22bfdd8f-fb76-4a9f-b805-1a28bf651d21.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Темная накладка для лучшей читаемости */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Основная карточка */}
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-sm w-full animate-scale-in relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 leading-tight">
            Вам есть 18?
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Кнопки */}
        <div className="space-y-4">
          <Button
            onClick={handleYesClick}
            className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Да
          </Button>

          <Button
            onClick={handleNoClick}
            variant="outline"
            className="w-full h-14 text-lg font-semibold border-2 border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Нет
          </Button>
        </div>

        {/* Декоративные элементы */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </div>

      {/* Фоновые декоративные элементы */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl animate-pulse z-5"></div>
      <div className="absolute top-32 right-16 w-16 h-16 bg-white/20 rounded-full blur-xl animate-pulse delay-300 z-5"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/20 rounded-full blur-xl animate-pulse delay-500 z-5"></div>
      <div className="absolute bottom-32 right-12 w-12 h-12 bg-white/20 rounded-full blur-xl animate-pulse delay-700 z-5"></div>
    </div>
  );
};

export default Index;
