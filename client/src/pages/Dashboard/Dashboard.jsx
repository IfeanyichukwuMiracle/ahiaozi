import { Sidebar } from "../../components";

const Dashboard = () => {
  return (
    <section className="w-full flex gap-6 relative">
      <Sidebar />
      <section className="py-5">
        <h1>Dashboard</h1>
      </section>
    </section>
  );
};

export default Dashboard;
