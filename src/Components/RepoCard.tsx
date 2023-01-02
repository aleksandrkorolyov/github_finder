import React, { useState } from "react";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { IRepo } from "../models/models";

export function RepoCard({ repo }: {repo: IRepo}) {
    const {favourites} = useAppSelector(state => state.github)

    const [isFav, setIsfav] = useState(favourites.includes(repo.html_url))

const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addFavourite(repo.html_url)
    setIsfav(true)
}

const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    removeFavourite(repo.html_url)
    setIsfav(false)
}

const {addFavourite, removeFavourite} = useActions()

    return(
        <div className="border py-3 px-5 rounded mb-2 hover:shadow-ms hover:br-gray-100 transition-all">
            <a href={repo.html_url} target="_blank">
            <h2 className="text-lg font-bold">{repo.full_name}</h2>
            <p className="test-sm">
                Forks:<span className="font-bold mr-2">{repo.forks}</span>
                Watchers:<span className="font-bold">{repo.watchers}</span>
            </p>
            <p className="text-sm font-this">{repo?.description}</p>
            </a>

            {!isFav &&
                <button className="py-2 px-4 bg-yellow-400 mr-2 rounded hover:shadow-md transition-all"
                onClick={addToFavourite}
                >Add to favourite</button>
            }

            { isFav && <button className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
            onClick={removeFromFavourite}
            >Remove from favourite</button>}
        </div>
    )
}