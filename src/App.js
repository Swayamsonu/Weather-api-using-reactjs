import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { useEffect,useState } from "react";

function App() {

  const Apikey="e5a4386a2607c19be042eef815d562ca"
  const [City,setCity]=useState("")
  const [data,setData]=useState({})


  const getWetherDetails=(cityName)=>{
  if(!cityName)return
  const apiUrl="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+Apikey;
  axios.get(apiUrl).then((res)=>{
    console.log("Response is of ",res);
    console.log("Response is ",res.data);
    setData(res.data)
  }).catch((err)=>{

    console.log("Error is",err)
  })
}
const SearchInput=(e)=>{
  setCity(e.target.value);
}

const Search=()=>{
  getWetherDetails(City)
}

useEffect(()=>{
  getWetherDetails("")
})

  return (
    <div className="col-md-12">
      <div className="wetherBg">
      <h1 className="heading">Weather Application</h1>
      <div className="d-grid gap-3 col-4 mt-4">
      <input type='text' placeholder="Enter The Place" className="form-control" onChange={SearchInput} value={City}/>
      <button className="btn btn-warning" type="button" onClick={Search}>Search</button>
      </div>

      </div>
      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded wetherResultBox">

          <h5 className="weatherCity">Location :{data?.name}</h5>
          <h6 className="weatherTemp">Temperature: {((data?.main?.temp)-273.15).toFixed(2)} C</h6>

        </div>
      </div>
    </div>

  );
}

export default App;
