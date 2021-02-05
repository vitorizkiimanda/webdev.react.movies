import * as baseService from "./baseService";

export const getNowPlaying = (page) =>
    baseService.doGet(
        `movie/now_playing?api_key=d6ea2204529c6bffd564fdcee6792a22&language=en-US&page=${page}`
    );
