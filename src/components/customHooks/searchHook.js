import {useState, useEffect} from 'react';

export const useSearch = (currentUsers) => {
    const [search, setSearch] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        updateUsersByFilter();
    }, [search, currentUsers]);

    const updateUsersByFilter = () => {
        setFilteredUsers(
            currentUsers.filter(item =>
                item.name.toLowerCase().includes(search.toLowerCase())
            ));
    };

    return {
        filteredUsers,
        setSearch
    };
};