export default async function researchPage() {
  return (
    <>
      <h1 className="text-3xl font-extrabold text-center mt-10">Research</h1>
      <div className="text-m text-center text-blue-800 font-semibold italic m-5">
        "英語パラグラフライティング支援システムのチュートリアルシステム構築"
      </div>
      <div className="mx-5 my-10 0 bg-gray-100 rounded-xl p-5 shadow-xl">
        <h2 className="text-2xl font-bold border-b-2 mb-4">研究背景や目的</h2>
        <div className="text-m">
          私の研究室では英語パラグラフライティング支援を行うシステムを構築しています。
          <br />
          このシステムを大学の英語の授業で実際に利用してもらったところ、システムの口頭での説明にかなり時間がかかり生徒にもうまく理解してもらえないという課題が生じました。
          この課題を解決するためにチュートリアルシステムを構築しました。
          また、授業によって使用用途が異なるため、より授業用途に合わせたチュートリアルになるよう先生が簡単にカスタマイズ可能にしました。
        </div>
      </div>
      <div className="mx-5 my-10 0 bg-gray-100 rounded-xl p-5 shadow-xl">
        <h2 className="text-2xl font-bold border-b-2 mb-4">実装</h2>
        <div className="text-m">
          <h2 className="text-center text-gray-500 font-bold mb-4 italic">
            System Architecture
          </h2>
          <div className="h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400">
            [システム構成図をここに配置]
          </div>
          <h2 className="text-center text-gray-500 font-bold mb-4">
            Implementation: Java
          </h2>
        </div>
        まず先生役にチュートリアルで習得してほしい操作を英語ライティング支援援システムで行ってもらいます。
        <br />
        その操作logをシナリオ読み込み機能が読み込み、テンプレートデータからlogに対応するチュートリアルを自動生成し、チュートリアルとしてユーザに出力します。
        これにより、授業に合わせたチュートリアルのカスタマイズが可能になりました。
        <br />
        また、初めて行った種類の操作には理解を深めてもらうため、追加の説明を行ったり、出力時に操作してほしい部分を赤枠で囲ってそれ以外のところを薄暗くし、操作部分を一目でわかるようにしたりとユーザの理解を助ける工夫をしました。
        <br />
        現在は授業での実使用に向けて、研究室内でテストとフィードバックを通して、システムのブラッシュアップを継続しています。
      </div>
    </>
  );
}
