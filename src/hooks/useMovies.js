import { useQuery } from "@tanstack/react-query";
import api from "../utils/api"

const fetchMovies = (type) => {
    return api.get(`/movie/${type}`)
}

export const useMoviesQuery = (type) => {
    return useQuery({
        queryKey: ['movies', type],
        queryFn: () => fetchMovies(type),
        select: (data) => {
            return data.data.results
        }
    })
}