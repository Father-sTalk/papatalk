import queryClient from "@/constants/single/queryClient";

const queryController = {
  invalidateQueries: (querykey: string, query?: unknown) => {
    const key = query ? [querykey, query] : [querykey];
    queryClient.invalidateQueries({ queryKey: key });
  },
  refetchQueries: (querykey: string, query?: unknown) => {
    const key = query ? [querykey, query] : [querykey];
    queryClient.refetchQueries({ queryKey: key });
  },
};
export default queryController;
