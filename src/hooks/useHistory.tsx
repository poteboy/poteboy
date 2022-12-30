import { useRouter } from "next/router";
import React, {
  FC,
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useLayoutEffect } from "react";
import { PathKey, pathKeys } from "@src/constants";

type HistoryItem = { href: string; as?: string; pathKey: PathKey };

type History = {
  histories: HistoryItem[];
  push(args: HistoryItem): void;
  replace(args: HistoryItem): void;
  pop(): { popped: HistoryItem | null; nextTop: HistoryItem | null };
};

const context = createContext<History>({
  histories: [],
  push: () => {},
  replace: () => {},
  pop: () => ({ popped: null, nextTop: null }),
});
const { Provider } = context;

export const useHistory = () => useContext(context);

export const usePushHistory = () => {
  const router = useRouter();
  const history = useHistory();

  // Headerのレンダリングより先に発火させる必要がある
  useLayoutEffect(() => {
    history.push({
      href: router.pathname,
      as: router.asPath,
      pathKey: (router.asPath.split("/")[1] as PathKey) || "index",
      // (() => {
      //   console.log(router.asPath.split("/")[1] || "index");
      //   const path = pathKeys.safeParse(router.asPath.split("/")[1]);
      //   return path.success ? path.data : "index";
      // })(),
    });
  }, []);

  return history;
};

export const HistoryProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();

  const [historyItems, setHistoryItems] = useState<HistoryItem[]>([
    {
      href: router.pathname,
      as: router.asPath,
      pathKey: (router.asPath.split("/")[1] as PathKey) || "index",
    },
  ]);

  const push = ({ href, as, pathKey }: HistoryItem) => {
    setHistoryItems((prevHistoryItems) => {
      if (prevHistoryItems.length > 0 && prevHistoryItems[0].href === href) {
        return prevHistoryItems;
      }

      return [{ href, as, pathKey }, ...prevHistoryItems];
    });
  };

  const replace = ({ href, as, pathKey }: HistoryItem) => {
    setHistoryItems((prevHistoryItems) => [
      { href, as, pathKey },
      ...prevHistoryItems.filter((_, i) => i > 0),
    ]);
  };

  const pop = () => {
    if (historyItems.length === 0) {
      return { popped: null, nextTop: null };
    }

    const popped = historyItems[0];
    const nextTop = historyItems[1] ?? null;

    setHistoryItems((historyItems) => historyItems.filter((_, i) => i > 0));

    return {
      popped,
      nextTop,
    };
  };

  return (
    <Provider value={{ histories: historyItems, push, replace, pop }}>
      {children}
    </Provider>
  );
};
