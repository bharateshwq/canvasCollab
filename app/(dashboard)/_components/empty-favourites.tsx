import Image from "next/image"
export const EmptyFavorites =() =>{
    
    
    return (
    <div className="h-full flex flex-col items-center justify-center">
        <Image 
        src={"/emptyFavs.png"}
        alt="Empty Favorites"
        height={140}
        width={140}
        />
        <h2 className="text-2xl font-semibold mt-6">
            No Favorite visions
        </h2>
        <p className="text-muted-foreground text-sm mt-2">Try favoriting a vision</p>
    </div>)
}