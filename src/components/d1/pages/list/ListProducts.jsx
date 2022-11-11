import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Products from "../../components/product/Products"

const ListProducts = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Products/>
      </div>
    </div>
  )
}

export default ListProducts;