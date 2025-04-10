import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Sura's Dashboard</h1>
        <div className="space-x-4 text-sm sm:text-base">
          <Link to="/projects" className="hover:text-indigo-400">Projects</Link>
          <Link to="/skills" className="hover:text-indigo-400">Skills</Link>
          <Link to="/experiences" className="hover:text-indigo-400">Experiences</Link>
          <Link to="/social" className="hover:text-indigo-400">Social Links</Link>
        </div>
      </div>
    </nav>
  );
}
