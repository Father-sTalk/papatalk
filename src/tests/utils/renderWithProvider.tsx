import { render } from "@testing-library/react";

import MockProvider from "./mockProvider";

export const renderWithProvider = (component: React.ReactElement) => {
  return render(component, { wrapper: MockProvider });
};
