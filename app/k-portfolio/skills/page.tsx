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
                    TypeORM
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
                  <span className="px-2 py-1 bg-gray-200 text-xs rounded text-gray-700">
                    TypeScript
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
                  <div className="underline text-center mt-10 mb-2">
                    掲示板アプリの画面例
                  </div>
                  <div className="w-full mb-10 flex justify-center">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/MVRNGi4tJyc?si=IhpmcuAe_uILdDAt"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            {/* 就活管理アプリのセクション */}
            <section className="mt-12 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    就活進捗管理アプリケーション (JOB_HUNTING_MANAGEMENT)
                  </h3>
                </div>
                <div className="flex gap-2 mt-3 md:mt-0">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    Dexie.js (IndexedDB)
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {/* 左・中央：プロジェクト詳細 */}
                <div className="md:col-span-2">
                  <h4 className="font-bold text-gray-700 mb-2 flex items-center">
                    <span className="mr-2">📌</span> 概要
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    自身の就職活動における選考フロー（締切、面接日、ステータス）を一元管理するために開発。
                    「企業ごとの細かい進捗を直感的に把握したい」という自身の課題を、ブラウザ完結のセキュアな環境で解決することを目指しました。
                  </p>

                  <h4 className="font-bold text-gray-700 mb-2 flex items-center">
                    <span className="mr-2"></span> 技術的アプローチ
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-500">✔</span>
                      <span>
                        <strong>オフラインファースト:</strong>{" "}
                        Dexie.jsを採用し、データ通信なしでの高速動作とプライバシー保護を両立。
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-500">✔</span>
                      <span>
                        <strong>動的なUI制御:</strong>{" "}
                        カレンダーとリストの双方向なデータ同期をフロントエンドの状態管理で実装。
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-500">✔</span>
                      <span>
                        <strong>再利用性の高い設計:</strong>{" "}
                        各UIパーツをコンポーネント化し、将来的な機能拡張に備えた設計。
                      </span>
                    </li>
                  </ul>
                </div>

                {/* 右側：リンク集（カード形式） */}
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 flex flex-col justify-center">
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 text-center">
                    Project Links
                  </h4>
                  <div className="space-y-3">
                    <a
                      href="https://github.com/kennnnnno/JOB_HUNTING_MANAGEMENT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors text-sm font-medium"
                    >
                      <span>Source Code (GitHub)</span>
                    </a>
                    <a
                      href="https://job-hunting-management.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-50 transition-colors text-sm font-medium"
                    >
                      <span>Live Demo</span>
                    </a>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-4 text-center">
                    ※IndexedDBを使用しているため、データはブラウザ内に保存されます。
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
