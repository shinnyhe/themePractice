import ThemeRec from "./ThemeRec";
import "./reset.scss";
import "./grid.scss";
import "./App.css";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
