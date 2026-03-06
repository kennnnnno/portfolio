export default async function linkPage() {
  return (
    <>
      <h1 className="text-3xl font-extrabold text-center m-10">Link</h1>
      <div className="flex justify-center">
        <a
          href="https://github.com/kennnnnno"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white rounded-2xl hover:bg-black hover:scale-105 transition-all shadow-lg group"
        >
          <div className="flex items-center gap-4">
            <img
              src="https://cdn.simpleicons.org/github/white"
              className="w-6 h-6"
              alt="GitHub"
            />
            <span className="font-bold">github</span>
          </div>
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>
      </div>
    </>
  );
}
