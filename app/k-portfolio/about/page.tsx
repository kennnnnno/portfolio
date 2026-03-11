export default async function aboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-extrabold text-center mb-16 relative">
        About Me
        <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-12 h-1 bg-blue-500 rounded-full"></span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-1 text-center space-y-6">
          <div className="relative inline-block">
            <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-blue-300 to-teal-400 p-1 shadow-2xl overflow-hidden">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img
                  src="/images/Icon.jpg"
                  className="w-full h-full object-cover"
                  alt="Icon"
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-800">石松 謙之介</h2>
            <p className="text-blue-600 font-medium">Kennosuke Ishimatsu</p>
            <p className="text-sm text-gray-500">九州工業大学大学院 修士1年</p>
          </div>
        </div>

        <div className="md:col-span-2 space-y-8">
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-6 bg-blue-500 rounded-full mr-3"></span>
              Introduction
            </h3>
            <p className="text-gray-600 leading-relaxed">
              初めまして！九州工業大学で知的学習支援システムの研究に取り組んでいます。
              研究でユーザーに寄り添ったシステムを構築するやりがいと楽しさを感じています。
              また学部時代のインターンでは、フルスタック開発を学びました。
              社会の役に立つシステムを構築できる人材になりたいです！
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-2 h-6 bg-green-500 rounded-full mr-3"></span>
              Hobbies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "サウナ", icon: "♨️" },
                { name: "釣り", icon: "🎣" },
                { name: "ゴルフ", icon: "⛳" },
                { name: "プログラミング", icon: "💻" },
              ].map((hobby) => (
                <div
                  key={hobby.name}
                  className="flex items-center space-x-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100"
                >
                  <span className="text-xl">{hobby.icon}</span>
                  <span className="font-medium text-gray-700">
                    {hobby.name}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
