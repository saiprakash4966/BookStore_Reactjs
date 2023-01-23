import React from 'react';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { getBooksList } from '../../services/dataService';
import Header from '../header/header';
import BookHeader from '../books/bookHeader';
import Book from '../books/book';
import BookDetails from '../books/bookDetails';
import Pagination from '../pagination/pagination';
import './dashboard.css';



function Dashboard() {

   
    const [bookslist, setBookslist] = useState([]);
    const [open, setOpen] = useState(false);
    const [bookObj, setBookObj] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    const [visible, setVisible] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [PostperPage, setPostperPage] = useState(4);

    const lastPostIndex = currentPage * PostperPage;
    const firstPostIndex = lastPostIndex - PostperPage;
    const currentPosts = bookslist.slice(firstPostIndex, lastPostIndex);

    const previousPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage !== Math.ceil(setVisible.length / PostperPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const listenToTakeBook = (obj) => {
        setBookObj(true)
        console.log(obj)
        setOpen(obj)
        console.log(open.bookName, "added book details")
        setVisible(true)


    }

    const listenToTakeBookDetails = () => {
        setBookObj(false)
        setVisible(true)


    }



    const handleClick = () => {
        setOpen(!open);
    }
    const searchBook = (value) => {
        setSearchInput(value)
    }
    const autoRefresh = () => {
        getBooksList()
    }



    useEffect(() => {
        getBooksList()
            .then(res => {
                console.log(res)
                if (searchInput) {
                    let filterBook = res.data.result.filter(book => book.bookName.toLowerCase().includes(searchInput.toLocaleLowerCase()))
                    setBookslist(filterBook)
                }
                else {
                    setBookslist(res.data.result)
                }

            })
            .catch(error => {
                console.log(error)
            })

    }, [searchInput])
    console.log(bookslist, 'fetching array')













    return (
        <div>
            <Header  searchInput={searchBook} />
            <BookHeader />


            <div style={{ width: '80vw', height: 'auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginLeft: '210px', gap: '15px 20px', marginTop: '15px' }}>
                {
                    bookObj ? <BookDetails listenToTakeBookDetails={listenToTakeBookDetails} id={open._id} bookName={open.bookName} author={open.author} quantity={open.quantity} discountPrice={open.discountPrice} price={open.price} description={open.description} /> :

                        <div style={{ width: '70vw', height: 'auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginLeft: '35px', gap: '15px 20px', marginTop: '15px' }}>
                            {
                                currentPage === 1 ?
                                    bookslist.filter((book) => {
                                        if (searchInput === "") {
                                            return book
                                        }
                                        else if (book.bookName.toLowerCase().includes(searchInput.toLowerCase())) {
                                            return book
                                        }
                                    }).slice(0, 4).map(
                                        (book) => (<Box onClick={() => listenToTakeBook(book)}><Book key={book._id} book={book} autoRefresh={autoRefresh}/></Box>))
                                    :
                                    currentPage === 2 ?
                                        bookslist.slice(4, 8).map(
                                            (book) => (<Box onClick={() => listenToTakeBook(book)}><Book key={book._id} book={book} autoRefresh={autoRefresh}/></Box>))
                                        :
                                        currentPage === 3 ?
                                            bookslist.slice(8, 12).map(
                                                (book) => (<Box onClick={() => listenToTakeBook(book)}><Book key={book._id} book={book} autoRefresh={autoRefresh}/></Box>))
                                            :
                                            currentPage === 4 ?
                                                bookslist.slice(12, 16).map(
                                                    (book) => (<Box onClick={() => listenToTakeBook(book)}><Book key={book._id} book={book} autoRefresh={autoRefresh}/></Box>))
                                                :
                                                null



                            }


                        </div>

                }
            </div>


            {visible ? null :
                (<Box style={{ marginLeft: '5px', marginTop: '150px' }}>
                    <Pagination
                        totalPosts={bookslist.length}
                        postsPerPage={PostperPage}
                        setCurrentPage={setCurrentPage}
                        previousPage={previousPage}
                        nextPage={nextPage}
                        currentPosts={currentPosts}
                        onChange={(e, value) => currentPosts(value)} />
                </Box>)
            }
            <Box className='footer'>
                <Box className='footerone'><p>Copyright @ 2020, Bookstore Private Limited.All Rights Reserved</p></Box>
            </Box>



        </div>







    );
}

export default Dashboard;