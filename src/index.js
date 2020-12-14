import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Hello extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   error: null,
   isLoaded:false,
   items: null
  };
 }

 componentDidMount() {
  fetch("https://cors-anywhere.herokuapp.com/https://www.rescuetime.com/anapi/daily_summary_feed?key=B63i1WHTfyrn9M68vC73HBkV099Lnse9NPvLOAkY")
  .then(response => response.json())
  .then(
       (data) => {
        this.setState({
         isLoaded:true,
         items:data.items
        })
        console.log(data);
       },
       (error) => {
        this.setState({
         isLoaded:true,
         error
        });
       }
       
  )
 }

  
 
 render() {
  const {error, isLoaded, items} = this.state;
  if (error) {
   return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
   return <div>Loading...</div>

  }else { return (
   <p>{items}</p>
  );
  }
 }
}

ReactDOM.render(<Hello />, document.getElementById('root'));