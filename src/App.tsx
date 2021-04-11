import { Redirect, Route, Switch } from "react-router-dom";

import { ROUTES } from "./constants/routes";
import Layout from "./components/Layout";
import {
  DIMeasurement,
  ImprovementSuggestions,
  Goals,
  PaygapMeasurement,
  ISOCertification,
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
          component={DIMeasurement}
        />
        <Route exact path={ROUTES.Goals} component={Goals} />
        <Route
          exact
          path={ROUTES["Improvement-suggestions"]}
          component={ImprovementSuggestions}
        />
        <Route exact path={ROUTES.Paygap} component={PaygapMeasurement} />
        <Route exact path={ROUTES.ISO} component={ISOCertification} />
      </Switch>
    </Layout>
  );
}

export default App;
