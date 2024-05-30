import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

interface IQueryProviderProps {
    children: React.ReactNode
}

const queryClient = new QueryClient()

export const QueryProvider = ({children}: IQueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
