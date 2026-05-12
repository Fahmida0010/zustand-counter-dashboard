"use client";

type Props = {
  total: number;
};

const Navbar = ({ total }: Props) => {
  return (
    <div className="bg-black text-white p-4 rounded-xl mb-6 flex justify-between">
      <h1 className="text-2xl font-bold">
        Counter Dashboard
      </h1>

      <h2 className="text-xl">
        Total Sum: {total}
      </h2>
    </div>
  );
};

export default Navbar;