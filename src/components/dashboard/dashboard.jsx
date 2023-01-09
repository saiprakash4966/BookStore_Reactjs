import React from 'react';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Books from '../books/book';
import { getBooksList } from '../../services/dataService';
import Header from '../header/header';
import BookHeader from '../books/bookHeader';
import Book from '../books/book';



function Dashboard() {

    const [toggle, setToggle] = useState(false);
    const [bookslist, setBookslist] = useState([]);




    const getBooks = () => {
        getBooksList().then((response) => {
            console.log(response)
            setBookslist(response.data.result)

        }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }

    useEffect(() => {
        getBooks()
    }, [])









    return (
        <div>
            <Header />
            <BookHeader />


            <div style={{ width: '80vw', height: 'auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginLeft: '210px', gap: '15px 20px', marginTop: '15px' }}>
                {
                    bookslist.map((book) => (<Book getBooks={getBooks} book={book} />))
                }
            </div>





        </div>







    );
}

export default Dashboard;