export default function Banner({ inProgressCount, resolvedCount }) {
  return (
    <section className="grid grid-cols-2 gap-6 px-6 py-8">
      {/* In-Progress */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-lg font-medium text-center">In-Progress</h2>
        <p className="text-5xl font-bold text-center mt-2">{inProgressCount}</p>
      </div>

      {/* Resolved */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-lg font-medium text-center">Resolved</h2>
        <p className="text-5xl text-center font-bold mt-2">{resolvedCount}</p>
      </div>
    </section>
  );
}
