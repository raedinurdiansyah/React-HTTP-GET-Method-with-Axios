// import React, { Component } from 'react';
// // import logo from './logo.svg';
// // import './App.css';

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {klub:''};
//   }

//   lihat(){
//     this.setState({user: this.refs.nama.value});
//   }

//   render() {
//     return (
//       <div>
//       {/* <center> */}
//             <h2> DAFTAR PEMAIN {this.state.klub} </h2>
         
//         <div className="container-fluid">
//           <div className="row">
//               <div className="col-md-6">
//               <input ref="nama" type="text" onInput={()=>{this.lihat();}} className="form-control"/>
//               </div>
//               <div className="col-md-6">
//                 {/* <button type="button" className="btn btn-info" onClick={() => { this.lihat(); }}> Lihat Daftar </button> */}
              
//             </div>
//           </div>
//         </div>

//       {/* </center> */}
          


       
//       </div>
//     );
//   }
// }

// export default App;




import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
class App extends Component {

  // componentDidMount(){
  
  // }
  constructor() {
    super();
    this.state = { user: '',
                   dataku : [], };
  }
  klik() {
    this.setState({ user: this.refs.nama.value });
  }

  lihat() {
    axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${this.state.user}`)
      .then((ambilData) => {
        console.log(ambilData);
        this.setState({
          dataku: ambilData.data.player,
        })
      })
  }
  render() {
    const data = this.state.dataku.map((item, index)=>{
      // var name = item.strPlayer;
      // var description = item.strDescriptionEN;
      return (
    <div className="container" key={item.idPlayer}>
      <div className="card">
        <div className="card-header"> 
              <h4> {item.strPlayer} &nbsp; (<i>{item.strPosition}</i>) </h4>
        </div> 
        <div className="card-body">
              <div className="row">
                <div className="image col-md-4">
                  <img src={item.strCutout} />
                </div>

                <div className="description col-md-8">
                  {item.strDescriptionEN}
                </div>
              </div>
            </div>
      </div>
    </div>
      );
    })
    return (
      <div className="footballapp">
        <center>
        <div classname="container-fluid header">
          <h2 style={{marginTop:'20px',textAlign:'center',color:'yellow'}}>Daftar pemain {this.state.user}</h2>
          <input ref="nama" type="text"
            onInput={() => { this.klik(); }} />
          <button type="button" className="btn btn-warning" onClick={()=> { this.lihat(); }} style={{margin:'30px'}}> Lihat Daftar </button>
        </div>
        </center>
      <div className="output">
          {data}
      </div>

         

      </div>
    );
  }
}
export default App;
