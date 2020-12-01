import React, { useContext, createContext} from 'react';

export const MainData = {
    postList: [],
    categories: ['All', 'Travel', 'Lifestyle', 'Business', 'Food', 'Work']
}

export const GlobalContext = createContext(MainData);

export const PostContext = (props) => {
    return (
        <GlobalContext.Provider value={MainData}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export const useStateValue = () => useContext(GlobalContext);