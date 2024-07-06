import { create } from 'zustand';

export type LoaderProps = {
  showLoader: boolean;
  videosToLoad: string[];
  loadedVideos: { [key: string]: { url: string; use: boolean } };
  setLoaderVideos: (urls: Array<string | { folder: string; files: string[] }>) => void;
  getVideo: (path: string) => string;
};

export const useLoader = create<LoaderProps>((set, get) => ({
  showLoader: true,
  loadedVideos: {},
  posterImages: {},
  videosToLoad: [],
  setLoaderVideos: urls => {
    const loadedVideos = get().loadedVideos;

    let _urls = urls;

    if (typeof urls[0] === 'object') {
      _urls = urls.reduce((acc, curr) => {
        const fileType = fileSupport?.fileType;
        const codex = fileSupport?.codex;

        const item = curr as {
          folder: string;
          files: string[];
        };

        const fileUrls: string[] = item.files.map(file => {
          const url = `/videos/${item.folder}/${codex}/${file}.${fileType}`;
          return url;
        });
        acc.push(...fileUrls);
        return acc;
      }, [] as string[]);
    }

    const notLoaded = (_urls as string[]).filter(url => !(url in loadedVideos));

    set({
      videosToLoad: [...notLoaded, ...get().videosToLoad],
    });
  },
  getVideo: path => {
    const videoArr = Object.keys(get().loadedVideos);
    const hasPath = videoArr.includes(path);
    const shouldUse = get().loadedVideos[path]?.use ?? false;

    return hasPath && shouldUse ? get().loadedVideos[path].url : path;
  },
}));
