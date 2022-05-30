import React, {
  FC,
  useCallback,
  useEffect,
  useState,
  useContext,
  createContext,
} from 'react';
import { Category, MicroList } from '@src/entities';
import { client as microClient, paths } from '@src/constants';

type CategoryContext = {
  categories: Category[];
  loadingCategories: boolean;
};

const context = createContext<CategoryContext>({
  categories: [],
  loadingCategories: false,
});

const { Provider } = context;
export const useCategory = () => useContext(context);

export const CategoryProvider: FC = ({ children }) => {
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = useCallback(async () => {
    setLoadingCategories(true);
    try {
      const categoryList: MicroList<Category> = await microClient.get({
        endpoint: 'categories',
      });
      setCategories(categoryList.contents);
    } finally {
      setLoadingCategories(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Provider value={{ categories, loadingCategories }}>{children}</Provider>
  );
};
