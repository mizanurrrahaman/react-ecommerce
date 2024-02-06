import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
const showResult = "Showing 01 -12 of 139 Results"
import Data from "../products.json"
import ProductCards from './ProductCards'
import Pagenation from './Pagenation'
import Search from './Search'
import ShopCategory from './ShopCategory'
import PopularPost from './PopularPost'
import Tags from './Tags'



const Shop = () => {
    const [GridList, setGrideList] = useState(true);
    const [products, setProducts] = useState(Data)
   
    const [currentPage, setCurrentPage] = useState(1);
    const productPerPage = 12;

    const indexofLastProduct = currentPage * productPerPage ;
    const indexoffFirstProduct = indexofLastProduct-productPerPage;
    const currentProducts = products.slice(indexoffFirstProduct, indexofLastProduct);
    const paginate =(pageNumber)=>{
      setCurrentPage(pageNumber)
    };
    const [selectedCategory, setSelectedCategory] = useState(" All");
    const menuItems = [...new Set(Data.map((Val) => Val.category))];
    const filterItem = (curcat) =>{
       const newItem = Data.filter((newVal) =>{
         return newVal.category === curcat;
       })
       setSelectedCategory(curcat);
       setProducts(newItem);
    }


  return (
    <div>
      <PageHeader title="Our shop Page" curPage="Shop"/>
       <div className="shop-page padding-tb">
         <div className="container">
           <div className="row justify-content-center">
              <div className="col-lg-8 col-12">
                 <article>
                  <div className="shop-title d-flex flex-warp justify-content-between">
                     <p>{showResult} </p>
                     <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                        <a className="grid" onClick={()=> setGrideList(!GridList)}>
                           <i className='icofont-ghost'></i>
                        </a>
                        <a className="list" onClick={()=> setGrideList(!GridList)}>
                           <i className='icofont-listine-dots'></i>
                        </a>
                     </div>
                  </div>
                   <div>
                      <ProductCards GridList={GridList} products={currentProducts}/>
                   </div>
                      <Pagenation
                      productPerPage={productPerPage}
                      totalProduts ={products.length}
                      paginate ={paginate}
                      activePage={currentPage} />
                   
                 </article>
             </div>
             <div className="col-lg-4 col-12">
                 <aside>
                     <Search products={products} GridList={GridList}/>
                      <ShopCategory 
                      filterItem={filterItem}
                      setItem ={setProducts}
                      menuItems ={menuItems} 
                      setproducts={setProducts}
                      selectedCategory={selectedCategory}
                       />
                       <PopularPost/>
                       <Tags/>
                 </aside>
             </div>
          </div>
        </div>
     </div>
    </div>
  )
}

export default Shop