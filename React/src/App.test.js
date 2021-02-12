import { render, screen } from "@testing-library/react";
import App from "./App";
import TestRenderer from "react-test-renderer"; // ES6

// Mock
import { mockData } from "./testsData/daily";

// Providers
import { StockProvider } from "./providers/stockProvider";

// Components
import StockAdd from "./components/StockAdd";
import TopBar from "./components/TopBar";
import StockGraph from "./components/StockGraph";
import TimeCompare from "./components/TimeCompare";

// Pages
import StockPage from "./pages/StockPage";

import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import SearchPage from "./pages/SearchPage";

test("render SockGraph component", () => {
  const props = {
    data: mockData,
  };

  const Component = TestRenderer.create(<StockGraph {...props} />);
  const Tree = Component.toJSON();
  expect(Tree).toMatchSnapshot();
});

test("render TimeCompare component", () => {
  const props = {
    data: mockData,
  };

  const Component = TestRenderer.create(<TimeCompare {...props} />);
  const Tree = Component.toJSON();
  expect(Tree).toMatchSnapshot();
});

test("render StockAdd component", () => {
  const props = {
    actualStock: "IBM",
  };

  // Testing with context provider
  const Component = TestRenderer.create(
    <StockProvider>
      <StockAdd {...props} />
    </StockProvider>
  );
  const Tree = Component.toJSON();
  expect(Tree).toMatchSnapshot();
});

test("render TopBar component", () => {
  const Component = TestRenderer.create(<TopBar />);
  const Tree = Component.toJSON();
  expect(Tree).toMatchSnapshot();
});

test("render StockPage component", () => {
  const history = createMemoryHistory();
  const route = "/stock/IBM";
  history.push(route);
  const Component = TestRenderer.create(
    <Router history={history}>
      <StockPage />
    </Router>
  );
  const Tree = Component.toJSON();
  expect(Tree).toMatchSnapshot();
});

test("render SearchPage component", () => {
  const Component = TestRenderer.create(<SearchPage />);
  const Tree = Component.toJSON();
  expect(Tree).toMatchSnapshot();
});
