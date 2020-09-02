import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Details = (props) => {
    const getDetails = () => {
        axios.get(`https://davids-restaurant.herokuapp.com/menu_items.json?category=${props.category}`)
        .then(response => {
            setDetails(response.data.menu_items)
        })
    }
    

    useEffect (()=> {
      console.log("use effect", props)  
      if(props.category) { 
            getDetails()  
      }
    }, [props.category])

    const [details, setDetails] = useState([]);

    if(props.category)
        return (
            <div> 
                <h4>Items in category: ({props.category})</h4>
                <table>
                    <th>Name</th><th>Description</th>    
                    {details.map(item => <tr><td>{item.name}</td> <td>{item.description}</td></tr>)}
                </table>
            </div>)
    return <div/> 
        

}

export default Details