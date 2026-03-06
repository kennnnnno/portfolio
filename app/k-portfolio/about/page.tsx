export default async function aboutPage() {
  return (
    <>
      <h1 className="text-3xl font-extrabold text-center m-10">About me</h1>
      <div className="flex flex-wrap justify-center">
        <div className="text-center mx-10 bg-gray-100  py-5 rounded-xl shadow-xl">
          初めまして！石松謙之介と申します。
          <br />
          九州工業大学の修士1年目です。
          <br />
          大学では知的学習支援システムの研究に取り組んでいます。
        </div>

        <div className="mx-15 my-5">
          <label className="text-l font-bold border-b-4 p-0 border-blue-500">
            趣味
          </label>
          <ul className="mt-5 list-disc list-inside">
            <li>サウナ</li>
            <li>釣り</li>
            <li>ゴルフ</li>
            <li>プログラミング</li>
          </ul>
        </div>
      </div>
    </>
  );
}
