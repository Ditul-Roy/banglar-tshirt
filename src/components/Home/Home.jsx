import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData();
    console.log(tshirts)
    return (
        <div>
            <h3>this tshirts: {tshirts.length}</h3>
        </div>
    );
};

export default Home;