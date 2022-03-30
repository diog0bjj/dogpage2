import React, { Component } from 'react'
import "./App.css"
import cachorro from "./assests/dog.png"
import gato from "./assests/cat.png"
import cerca from "./assests/fence.png"


class App extends Component{
  state={
    dogs:[
      {
        name:"Billy",
        age:"1 ano",
        breed:"bulldog",
      },
      {
        name:"Thor",
        age:"2 anos",
        breed:"Pitbull",
      },
      {
        name:"Freya",
        age:"3 meses",
        breed:"yorkie",
      },
      {
        name:"Odin",
        age:"4 anos",
        breed:"Rottweiler",
      }
    ],
    cats:[
      {
        name:"Bella",
        age:"5 meses",
        breed:"Bengal",
      },
      {
        name:"Chiclete",
        age:"6 meses",
        breed:"Birman",
      },
      {
        name:"Diva",
        age:"5 anos",
        breed:"Chartreux",
      },
      {
        name:"Milo",
        age:"8 meses",
        breed:"Maine Coon",
      }
    ],
    list:[]
  };


  alldogs = () =>{
      this.setState({list: this.state.dogs.map((item)=>(
        <div className="listpets">
          <ul className="allpets">
            <li>Nome:{item.name}</li>
            <li>Idade:{item.age}</li>
            <li>Raça:{item.breed}</li>
          </ul>
        </div> 
      ))
    })
  }
    

  allcats = () =>{
    this.setState({list:this.state.cats.map((item)=>(
      <div className="listpets">
         <ul className="allpets">
            <li>Nome:{item.name}</li>
            <li>Idade:{item.age}</li>
            <li>Raça:{item.breed}</li>
          </ul>
      </div>
      ))
    })
  }
  render(){
    return(
      <div className="Page" style={{ backgroundImage: `url(${cerca})`,
      backgroundRepeat:'no-repeat', backgroundSize: 'cover' }}>
        <div className='tittle1'>
          <h1>Adoçao do VNW</h1>
        </div>
        <div className="Images">
          <div className="adopption">
            <h2>Cachorros para adoçao</h2>
            <img className="photos" onClick={this.alldogs} src={cachorro}/>
          </div>
          <div className="lista">
            <h4>{this.state.list}</h4>
          </div>
          <div className="adopption">
            <h2>Gatos para adoçao</h2>
            <img className="photos" onClick={this.allcats} src={gato}/>
          </div>
        </div>
        <div className="phrase">
          <h4>Adoção tem o poder de transformar homem e animal em um só coração.</h4>
        </div>
        <div className='final'>
          <ul className='socialmidias'>
            <li><a href="https://instagram.com/ggsantz">Instagram</a></li>
            <li><a href="https://github.com/diog0bjj">Github</a></li>
            <li><a href="https://www.linkedin.com/in/diogo-sales-368b64224/">Linkedin</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
export default App