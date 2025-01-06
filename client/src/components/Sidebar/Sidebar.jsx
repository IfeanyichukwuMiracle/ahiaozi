const Sidebar = () => {
  return (
    <section className="flex flex-col justify-between h-screen sticky min-w-[14rem] max-w-[15rem] p-5 bg-[#fbfbfb] shadow-xl top-0 left-0">
      <div>
        <p className="font-bold text-lg mb-6 text-blue-600">Infomart</p>
        <div className="flex flex-col gap-2">
          <nav>Link</nav>
          <nav>Link</nav>
          <nav>Link</nav>
          <nav>Link</nav>
        </div>
      </div>
      <button className="bg-red-500 text-white font-semibold w-full pt-1 pb-2 rounded-sm">
        Logout
      </button>
    </section>
  );
};

export default Sidebar;
