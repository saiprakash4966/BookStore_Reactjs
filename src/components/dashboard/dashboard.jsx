import React from 'react';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Books from '../books/book';
import { getBooksList } from '../../services/dataService';
import Header from '../header/header';
import BookHeader from '../books/bookHeader';
import Book from '../books/book';
import BookDetails from '../books/bookDetails';



function Dashboard() {

    const [toggle, setToggle] = useState(false);
    const [bookslist, setBookslist] = useState([]);
    const [open, setOpen] = useState(false);
    const [bookObj, setBookObj] = useState(false)

    

    const listenToTakeBookDetails = () => {
        setBookObj(false)
    }

    
    const listenToHeader = () => {
        setToggle(!toggle)
    }


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
    console.log(bookslist, 'fetching array')









    return (
        <div>
            <Header listenToHeader={listenToHeader} />
            <BookHeader />


            <div style={{ width: '80vw', height: 'auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginLeft: '210px', gap: '15px 20px', marginTop: '15px' }}>
                {
                    bookObj ? <BookDetails listenToTakeBookDetails = { listenToTakeBookDetails }/> : bookslist.map((book) => (<Book getBooks={getBooks} book={book} />))
                }
            </div>





        </div>







    );
}

export default Dashboard;