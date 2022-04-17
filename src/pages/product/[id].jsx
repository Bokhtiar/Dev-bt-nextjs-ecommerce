import Layout from "../../components/Layout"

const ProductDetail = ({product}) => {
    return (
        <Layout>
            <section className="container my-5">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-12">
                        <img src={product.image} alt="" height={"400px"} width={"100%"} />
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
            </section>
        </Layout>
    )
}
export async function getServerSideProps({params}) {

    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const product = await res.json()

    return { 
        props: { 
            product,
        } 
    }
}


export default ProductDetail