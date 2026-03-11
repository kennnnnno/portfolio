export default async function SkillsPage() {
  return (
    <>
      <h1 className="text-3xl font-extrabold text-center m-10">Skills</h1>

      <div className="mx-5 my-10 0 bg-gray-50 rounded-xl p-5 shadow-xl">
        <h2 className="text-2xl font-bold border-b-2 mb-4">保有資格</h2>
        <div className="text-m">
          ITに関する幅広い知見を得たいと感じ、以下を取得しました。
        </div>
        <ul className="mt-3 items-center list-inside p-2">
          <li className="text-l font-bold">
            <span className="text-blue-500 mr-2">✔</span>応用情報技術者試験
          </li>
          <li className="text-l font-bold">
            <span className="text-blue-500 mr-2">✔</span>基本情報技術者試験
          </li>
          <li className="text-l font-bold">
            <span className="text-blue-500 mr-2">✔</span>
            情報セキュリティマネジメント試験
          </li>
        </ul>
      </div>
      <div className="mx-5 my-5 0 bg-gray-50 rounded-xl py-5 shadow-xl">
        <h2 className="text-2xl font-bold border-b-2 mb-4 mx-6">技術</h2>
        <div className="flex items-center flex-col mt-3 p-2">
          <div className="flex flex-wrap justify-center">
            <div className="m-5">
              <div className="h-32 w-full flex items center justify-center">
                <img src="/images/Java.png"></img>
              </div>
              <div className="text-xl text-center font-bold">Java</div>
              <div className="text-l">主に研究活動で使用しています。</div>
            </div>
            <div className="m-5">
              <div className="h-32 w-full flex items center justify-center">
                <img src="/images/Python.jpg"></img>
              </div>
              <div className="text-xl text-center font-bold">Python</div>
              <div className="text-l text-center">
                大学の授業や課題などで使用しています。
              </div>
            </div>
          </div>
          <div className="mb-10 p-3 bg-white rounded-lg border-l-4 border-blue-500">
            <div className="flex items-center">
              <span className="text-orange-500 mr-2">🏆</span>
              <span className="font-bold text-gray-800">
                Paiza(プログラミングスキルチェックサービス)
                <br />
                Python スキルチェック: Aランク
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1 pl-6">
              複雑なロジックを限られた時間内で設計、実装できる。
              あらゆる実装ができるスキルを持っています。
            </p>
          </div>

          <div className="m-5 w-full max-w-2xl">
            <div className="h-20 w-full flex items-center justify-center gap-6">
              <img
                src="/images/NEXTJS.png"
                className="h-full w-auto object-contain"
                alt="Next.js"
              />
              <img
                src="/images/NESTJS.png"
                className="h-full w-auto object-contain"
                alt="NestJS"
              />
            </div>
            <div className="text-xl font-bold text-center mt-4">
              TypeScript / Next.js / NestJS
            </div>

            <div className="mt-4 p-4 bg-white rounded-lg border-l-4 border-blue-500 shadow-sm">
              <div className="text-sm text-gray-600 leading-relaxed">
                インターンにて、フロントエンド（React/Next.js）からバックエンド（Node.js/NestJS）までのフルスタック開発を学びました。
                学習のアウトプットとしてReact+NestJSで掲示板アプリを作成しました。
                <br />
                またこのポートフォリオもNext.js + Tailwind CSSで作成しています。
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-200 text-xs rounded text-gray-700">
                    React
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-xs rounded text-gray-700">
                    Tailwind CSS
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-xs rounded text-gray-700">
                    PostgreSQL
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-xs rounded text-gray-700">
                    Prisma
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-xs rounded text-gray-700">
                    HTML
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-xs rounded text-gray-700">
                    CSS
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-xs rounded text-gray-700">
                    JavaScript
                  </span>
                </div>
                <br />
                <span>掲示板アプリ フロントエンド :</span>
                <a
                  href="https://github.com/kennnnnno/-frontend"
                  className="text-blue-500 hover:underline"
                >
                  https://github.com/kennnnnno/-frontend
                </a>
                <br />
                <span>掲示板アプリ バックエンド :</span>
                <a
                  href="https://github.com/kennnnnno/-backend"
                  className="text-blue-500 hover:underline"
                >
                  https://github.com/kennnnnno/-backend
                </a>
                <div className="my-5">
                  <div className="underline text-center mb-2">
                    掲示板アプリの画面例
                  </div>
                  <video controls src="/videos/掲示板画面例.mp4"></video>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
