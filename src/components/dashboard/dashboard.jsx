import React from 'react';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { getBooksList } from '../../services/dataService';
import Header from '../header/header';
import BookHeader from '../books/bookHeader';
import Book from '../books/book';
import BookDetails from '../books/bookDetails';
import Pagination from '../pagination/pagination';



function Dashboard() {

    const [toggle, setToggle] = useState(false);
    const [bookslist, setBookslist] = useState([]);
    const [open, setOpen] = useState(false);
    const [bookObj, setBookObj] = useState(false)
    const [visible, setVisible] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [PostperPage, setPostperPage] = useState(4);

    const lastPostIndex = currentPage * PostperPage;
    const firstPostIndex = lastPostIndex - PostperPage;
    const currentPosts = bookslist.slice(firstPostIndex, lastPostIndex);


    const listenToTakeBook = (obj) => {
        setBookObj(true)
        console.log(obj)
        setVisible(true)
        console.log(open.bookName, "added book details")


    }

    const listenToTakeBookDetails = () => {
        setBookObj(true)
        setVisible(true)


    }


    const listenToHeader = () => {
        setToggle(!toggle)
    }



    useEffect(() => {
        getBooksList()
            .then(res => {
                console.log(res)
                setBookslist(res.data.result)
            })
            .catch(error => {
                console.log(error)
            })

    }, [])
    console.log(bookslist, 'fetching array')













    return (
        <div>
            <Header listenToHeader={listenToHeader} />
            <BookHeader />


            <div style={{ width: '80vw', height: 'auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginLeft: '40px', gap: '15px 20px', marginTop: '15px' }}>
                {
                    bookObj ? <BookDetails listenToTakeBookDetails={listenToTakeBookDetails} id={open._id} bookName={open.bookName} author={open.author} quantity={open.quantity} discountPrice={open.discountPrice} price={open.price} description={open.description} /> :
                        <div style={{ width: '80vw', height: 'auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginLeft: '210px', gap: '15px 20px', marginTop: '15px' }}>
                            {
                                currentPosts.map((book) => (<Box onClick={() => listenToTakeBook(book)}><Book key={book._id} book={book} /></Box>))}
                        </div>

                }
            </div>


            {visible ? null :
                (<Box style={{  marginLeft: '50px', marginTop: '150px' }}>
                    <Pagination
                        totalPosts={bookslist.length}
                        postsPerPage={PostperPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage} />
                </Box>)
            }


        </div>







    );
}

export default Dashboard;