import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white shadow-md">
            <h3 className="font-bold ">My react pet project!</h3>
            <span>
                <Link className="mr-2 p-4 hover:bg-orange-600" to="/">Pet Github project</Link>
                <Link className="mr-2 p-4 hover:bg-orange-600" to="/favouroves">Favorite</Link>
                <Link className="mr-2 p-4 hover:bg-orange-600" to="/search">Search repo</Link>
            </span>
        </nav>
    )
}