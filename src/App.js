import "./reset.scss";
import "./grid.scss";
import "./App.css";
import ThemeRec from "./ThemeRec";

const App = () => {
  return (
    <main>
      <div className="container container--lg">
        <div className="row">
          <div className="col-12">
            <section className="u-mt32">
              <ThemeRec />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
