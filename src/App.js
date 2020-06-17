import React from "react";
import { Cards } from "./components/Cards/cards";
import { Charts } from "./components/Charts/Charts";
import { CountryPicker } from "./components/Country picker/CountryPicker";
import styles from "./App.module.css";
import { fetchdata } from "./API/index";

import covid from './images/covidm.jpg';

class App extends React.Component {
  state = {
    data: {},
    country : {},
  };
  async componentDidMount() {
    const fetcheddata = await fetchdata();
    this.setState({ data: fetcheddata });
  }
 handleCountryChange = async (country) =>{
  const fetcheddata = await fetchdata(country)
 
  this.setState({ data: fetcheddata, country: country});
 }


  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={covid} alt="Covid-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country}  />
       
      </div>
    );
  }
}
export default App;
