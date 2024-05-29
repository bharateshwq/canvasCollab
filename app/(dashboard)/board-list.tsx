"use client"

import { EmptyBoards } from "./_components/empty-boards";
import { EmptyFavorites } from "./_components/empty-favourites";
import { EmptySearch } from "./_components/empty-search";

interface BoardListProps {
    orgId:string;
    query:{
        search?:string;
        favorites?:string;
    }
}


const BoardList = ({orgId,query}:BoardListProps) => {
const data=[];
if(!data?.length && query.search){
    return(
        <EmptySearch />
    )
}
if(!data?.length && query.favorites){
    return(
        <EmptyFavorites/>
    )
}

if(!data?.length ) {
    return(
       <EmptyBoards/>
    )
}

  return (
    <div>
        {JSON.stringify(query)}
        BoardList</div>
  )
}

export default BoardList