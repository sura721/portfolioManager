import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Menu, X, LayoutGrid, PlusCircle, List } from 'lucide-react';

import ProjectForm from './components/ProjectForm';
import SkillForm from './components/SkillForm';
import SocialLinkForm from './components/SocialLinks';
import ExperienceForm from './components/ExperianceForm';

import ExperienceList from './display/Experiancepage';
import SkillList from './display/Skillpage';
import ProjectsList from './display/projectListPage';



const Dashboard = () => (
  <div className="p-6 text-center">
    <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Welcome to your Portfolio Manager</h1>
    <p className="mt-2 text-slate-600 dark:text-slate-300">Select an option from the navigation to view or add content.</p>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleAddMenu = (e) => {
    e.stopPropagation();
    setIsAddOpen(!isAddOpen);
    setIsViewOpen(false);
  }
   const toggleViewMenu = (e) => {
    e.stopPropagation();
    setIsViewOpen(!isViewOpen);
    setIsAddOpen(false);
  }

  const closeAllMenus = () => {
    setIsOpen(false);
    setIsAddOpen(false);
    setIsViewOpen(false);
  }

  const linkClass = "block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded";
  const navButtonClass = "flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded font-medium";

  return (
    <nav className="bg-white dark:bg-slate-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 text-xl font-bold text-indigo-600 dark:text-indigo-400" onClick={closeAllMenus}>
              <LayoutGrid className="h-6 w-6" />
              <span>PortfolioMgr</span>
            </Link>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
             <div className="relative">
              <button onClick={toggleViewMenu} className={navButtonClass}>
                <List size={18} /> View
              </button>
               {isViewOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 z-20">
                  <Link to="/view/projects" className={linkClass} onClick={closeAllMenus}>Projects</Link>
                  <Link to="/view/experience" className={linkClass} onClick={closeAllMenus}>Experience</Link>
                  <Link to="/view/skills" className={linkClass} onClick={closeAllMenus}>Skills</Link>
                 
                </div>
              )}
            </div>
            <div className="relative">
               <button onClick={toggleAddMenu} className={navButtonClass}>
                 <PlusCircle size={18} /> Add
               </button>
              {isAddOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 z-20">
                  <Link to="/add/project" className={linkClass} onClick={closeAllMenus}>Project</Link>
                  <Link to="/add/experience" className={linkClass} onClick={closeAllMenus}>Experience</Link>
                  <Link to="/add/skill" className={linkClass} onClick={closeAllMenus}>Skill</Link>
                  <Link to="/add/social" className={linkClass} onClick={closeAllMenus}>Social Link</Link>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden absolute top-16 inset-x-0 bg-white dark:bg-slate-900 z-40 shadow-lg border-t border-slate-200 dark:border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
             <div>
               <button onClick={toggleViewMenu} className={navButtonClass}>
                <List size={18} /> View Content
               </button>
               {isViewOpen && (
                <div className="pl-4 mt-1 space-y-1">
                    <Link to="/view/projects" className={linkClass} onClick={closeAllMenus}>View Projects</Link>
                    <Link to="/view/experience" className={linkClass} onClick={closeAllMenus}>View Experience</Link>
                    <Link to="/view/skills" className={linkClass} onClick={closeAllMenus}>View Skills</Link>
                 
                </div>
               )}
            </div>
             <div>
               <button onClick={toggleAddMenu} className={navButtonClass}>
                <PlusCircle size={18}/> Add Content
               </button>
               {isAddOpen && (
                <div className="pl-4 mt-1 space-y-1">
                    <Link to="/add/project" className={linkClass} onClick={closeAllMenus}>Add Project</Link>
                    <Link to="/add/experience" className={linkClass} onClick={closeAllMenus}>Add Experience</Link>
                    <Link to="/add/skill" className={linkClass} onClick={closeAllMenus}>Add Skill</Link>
                    <Link to="/add/social" className={linkClass} onClick={closeAllMenus}>Add Social Link</Link>
                </div>
               )}
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Toaster position="bottom-center" reverseOrder={false} containerClassName="text-sm"/>
    </div>
  );
};


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />

          <Route path="add">
            <Route path="project" element={<ProjectForm />} />
            <Route path="experience" element={<ExperienceForm />} />
            <Route path="skill" element={<SkillForm />} />
            <Route path="social" element={<SocialLinkForm />} />
            
          </Route>

           <Route path="view">
            <Route path="projects" element={<ProjectsList />} />
            <Route path="experience" element={<ExperienceList />} />
            <Route path="skills" element={<SkillList />} />
            
          </Route>

        </Route>
      </Routes>
    </Router>
  );
};

export default App;