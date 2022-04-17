import Link from 'next/link'

const Product = ({products}) => {
    return (
        <div>
           
                <div className="container">
                <div className="row">
                {
                    products.map((product, index)=>
                        <div className="col-12 col-md-3 col-lg-3 my-3">
                            <div class="card" style={{ width: "16rem", height:"460px" }}>
                                <img src={product.image} class="card-img-top" style={{ height:"300px" }} alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">{product.title}</h5>
                                    <div className="form-inline text-center">
                                       <p className="text-center"> 
                                            <Link href={`/product/${product.id}`} class="btn btn-primary">eye</Link>&nbsp;
                                            <a href="#" class="btn btn-primary">cart</a>&nbsp;
                                            <a href="#" class="btn btn-primary">chioce</a>&nbsp;
                                        </p>
                                    </div>
                                
                                </div>
                            </div> 
                        </div>
                    )
                }   
                </div>
                    </div>
            
       
        </div>
    )
}



export default Product

