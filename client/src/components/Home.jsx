import React, {Component} from 'react';

class Home extends Component {
    constructor() {
      super();
      this.state = {
        shows: [{ id: 1, name: 'Reservoir Dogs' , watching:true},
        { id: 2, name: 'Airplane' , watching:true },
        { id: 3, name: 'Doctor Zhivago' , watching:true},
        { id: 4, name: 'Memento', watching:false },
        { id: 5, name: 'Braveheart' , watching:true},
        { id: 6, name: 'Beauty and the Beast' , watching:true},
        { id: 7, name: 'Seven' , watching:true},
        { id: 8, name: 'The Seven Samurai' , watching:false}],
        currentShow: null,
        currentIndex: -1,
        searchTitle: ""
      };
      this.setUpdateShow = this.setUpdateShow.bind(this);
  
  
    }
    setUpdateShow(show, index) {
        this.setState({
          currentShow: show,
          currentIndex: index
        });
    }
    //add component that lets you view
  
    render() {
      const { shows, currentIndex } = this.state;
      return (
        <div>
            <h3>View your shows below</h3>
            <div className = "list row">
                <ul className = "col-md-6"> {shows &&
                shows.map((show, index) => (
                    <li
                    className={"list-group-item " +(index === currentIndex ? "active" : "")}
                    onClick={() => this.setUpdateShow(show, index)}
                    key={index}>
                    {show.name}
                    </li>
                ))}</ul>
            </div>
            
        </div>
      );
    }
  }
export default Home;