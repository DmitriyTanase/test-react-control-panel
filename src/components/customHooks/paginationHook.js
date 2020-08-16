import {useState, useEffect} from 'react';

export const usePagination = (users = [], defaultPage = 1, amountPerPage = 5) => {
    const [currentPage, setCurrentPage] = useState(defaultPage);
    const [currentUsers, setCurrentUsers] = useState([]);
    const [amountOfPages, setAmountOfPages] = useState(0);

    useEffect(() => {
        updateUsers();
        updateAmountOfPages();
    }, [currentPage]);

    const updateUsers = () => {
        const indexOfLastPost = currentPage * amountPerPage;
        const indexOfFirstPost = indexOfLastPost - amountPerPage;
        const updatedUsers = users.slice(indexOfFirstPost, indexOfLastPost);
        setCurrentUsers(updatedUsers);
    };

    const updateAmountOfPages = () => {
        const updatedAmount = Math.ceil(users.length / amountPerPage);
        setAmountOfPages(updatedAmount);
    };

    return {
        setCurrentPage,
        amountOfPages,
        currentUsers,
    };
};