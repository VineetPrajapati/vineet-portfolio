"use client";

const stats = [
  {
    title: "Production",
    text: "Applications Built",
  },
  {
    title: "Full Stack",
    text: "MERN Experience",
  },
  {
    title: "React.js",
    text: "Specialization",
  },
  {
    title: "Real-World",
    text: "ERP Systems",
  },
];

const Stats = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-cyan-500 hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>

              <p className="text-sm text-zinc-400 mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
