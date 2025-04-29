
const stats = [
  { value: "14+", label: "Years Experience" },
  { value: "500+", label: "Satisfied Clients" },
  { value: "1000+", label: "Trained Staff" },
  { value: "24/7", label: "Customer Support" }
];

const Stats = () => {
  return (
    <section className="bg-primary py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-primary-foreground opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
