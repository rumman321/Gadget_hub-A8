import toast from "react-hot-toast"

const addFavorite=(product)=>{
    const favorites=getAllFavorites()
    
    const isExist=favorites.find(item=>item.product_id==product.product_id)
    if(isExist) return toast.error("Already exist.")
    product.isTrue=true
    favorites.push(product)
    localStorage.setItem('favorites',JSON.stringify(favorites))
    toast.success('Successfully added')
}
const getAllFavorites=()=>{
    const all=localStorage.getItem('favorites')
    if(all){
        const favorites=JSON.parse(all)
        return favorites
    }
    else{
        return []
    }
}

export {addFavorite,getAllFavorites}