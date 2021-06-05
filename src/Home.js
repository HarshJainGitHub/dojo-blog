import { useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs , setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const [name , setName] = useState('mario');
    
    const handleDelete = (id) => {
        const newBlogs  = blogs.filter( blog => blog.id !== id);
        setBlogs(newBlogs);
    };

    useEffect(() =>{
        console.log("use Effect ran");
        console.log(name);
    }, [name]);
    return (  
        <div className="home">
           <BlogList blogs={blogs} title="Blog List" handleDelete={handleDelete} />
            <button onClick={()=> setName('luigi')}>Change Name</button>
            <p>{ name }</p>
        </div>
    );
}
 
export default Home;

  // const handleClickAgain = () => {
    //     console.log('Hello ' + name);
    //     console.log('Event ',e);
    // }



    {
        /*
         useState example

          const [name , setName] = useState('Mario');
    const  [age , setAge] = useState(25); 

    const handleClick =  () => {
    
    setName('luigi');
    setAge(35);

    }

         <p> I'm {name} & my age is {age} </p>
            <button onClick= { handleClick }>Click ME</button>
             <button onClick= { (e)=> handleClickAgain('Mario', e.target)} style={{marginLeft:'8px'}}> Click Me Again</button> */}


             {/*
                reusing component example 
                <BlogList blogs={blogs.filter((blog) => blog.author ==='mario')} title="Mario's Blog" /> */}