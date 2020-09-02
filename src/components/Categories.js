import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Details from './Details';

const Categories = (props)=> {
    const getCategories = () => {
    console.log(menu.length, menu)    
    if(menu.length === 0) {
    axios.get('https://davids-restaurant.herokuapp.com/categories.json')
    .then(response => {
        setMenu(response.data)
    })
   }}

    useEffect(() => getCategories())
    
    const [menu, setMenu] = useState([]);
    const [category, setCategory] = useState(null);
    
    return (
    <div className = "categories">
        <div className = 'menuCategories'>Menu Categories</div> 
        <ul className = 'menuItems' >{
         menu.map(item => <li onClick={()=>setCategory(item.short_name)}>{item.name}({item.short_name})</li>)   
        }</ul>
        <Details category = {category}/>
    </div>
    )
    
}

export default Categories;