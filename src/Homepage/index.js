import React, { useState, useEffect } from "react";
import axios from "axios";
import ThemeRec from "../ThemeRec";

const Homepage = () => {
  const [data, setData] = useState([]);
  const [themeData, setThemeData] = useState([]);
  useEffect(() => {
    axios
      .get("/index/stage/v1/data&27655702")
      .then((res) => {
        setData(res.data.window1.Blocks[0].Nodes);
        setThemeData(res.data.window.Blocks);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <main>
      <div className="container container--lg">
        <div className="row">
          <div className="col-12">
            <section className="u-mt32">
              <ThemeRec data={data} themeData={themeData} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
