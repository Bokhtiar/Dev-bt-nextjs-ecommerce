import Layout from "../../components/Layout"
import Link from "next/link"

const ProductDetail = ({product,catProducts}) => {
    return (
        <Layout>
            <section className="container my-5">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-12">
                        <img className="container" src={product.image} alt="" height={"400px"} width={"100%"} />
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12">
                        <div className="">
                            <div className="">
                                {product.title}
                            </div>
                            <div className="card-body">
                                <p><strong>Category:</strong> {product.category}.</p>
                                <p><strong>Price:</strong> {product.price}$.</p>
                                <p className="lead">{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="">
                    <h3>Releted Product</h3>
                    <div className="row">
                    {
                    catProducts.map((product, index)=>
                        <div className="col-12 col-md-3 col-lg-3 my-3">
                            <div class="card" style={{ width: "16rem", height:"460px" }}>
                                <img  src={product.image} className="card-img-top container my-2" style={{ height:"300px" }} alt="..."/>
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
            
            </section>
        </Layout>
    )
}
export async function getServerSideProps({params}) {

    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const product = await res.json()

    const category = await fetch(`https://fakestoreapi.com/products/category/${product.category}`)
    const catProducts = await category.json()


    return { 
        props: { 
            product,
            catProducts,
        } 
    }
}


export default ProductDetail