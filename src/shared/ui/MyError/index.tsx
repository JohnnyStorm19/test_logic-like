interface MyErrorProps {
  message?: string;
}

export const MyError = ({ message }: MyErrorProps) => {
  return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">{message || 'Ошибка загрузки!'}</div>;
};
