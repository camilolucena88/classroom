import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return <div>
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
                         stroke-linejoin="round" stroke-width="2"
                         className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">Classroom</span>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <input type="search" className="form-control mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Buscar..."/>
                </nav>
                <nav>
                    <Link className="mr-5 hover:text-gray-900" to="/activities">Actividades</Link>
                    <Link className="mr-5 hover:text-gray-900" to="/books">Libros</Link>
                    <Link className="mr-5 hover:text-gray-900" to="/videos">Videos</Link>
                </nav>
            </div>
        </header>
    </div>
}