import React from "react";
import { Cards } from "./components/Cards/cards";
import { Charts } from "./components/Charts/Charts";
import { CountryPicker } from "./components/Country picker/CountryPicker";
import styles from "./App.module.css";
import { fetchdata } from "./API/index";

class App extends React.Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const fetcheddata = await fetchdata();
    this.setState({ data: fetcheddata });
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Charts />
       
      </div>
    );
  }
}
export default App;
