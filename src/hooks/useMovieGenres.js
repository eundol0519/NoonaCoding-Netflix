import { useQuery } from "@tanstack/react-query";
import api from "../utils/api"

const fetchMovieGenres = () => {
    return api.get('/genre/movie/list?language=en')
}

export const useMovieGenresQuery = () => {
    return useQuery({
        queryKey: ['movie-renres'],
        queryFn: fetchMovieGenres,
        select: (data) => {
            return data.data.genres
        },
        staleTime: 300000 // 5분
    })
}