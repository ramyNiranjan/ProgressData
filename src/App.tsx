import { Redirect, Route, Switch } from "react-router-dom";

import { ROUTES } from "./constants/routes";
import Layout from "./components/Layout";
import {
  DashboardPage,
  CustomersPage,
  OrdersPage,
  InventoryPage,
} from "./pages";

function App() {
  return (
    <Layout>
      <Switch>
        <Route
          path="/"
          exact
          render={() => <Redirect to={ROUTES["D&I-measurement"]} />}
        />
        <Route
          exact
          path={ROUTES["D&I-measurement"]}
          component={DashboardPage}
        />
        <Route exact path={ROUTES.Goals} component={OrdersPage} />
        <Route
          exact
          path={ROUTES["Improvement-suggestions"]}
          component={CustomersPage}
        />
        <Route exact path={ROUTES.Paygap} component={InventoryPage} />
        <Route exact path={ROUTES.ISO} component={InventoryPage} />
      </Switch>
    </Layout>
  );
}

export default App;
