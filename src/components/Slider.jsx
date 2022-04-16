const Slider = () =>{
    return (
        <div>
            <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-interval="10000">
                <img src="/imgs/b1.jpg" class="d-block w-100" style={{ height:"500px" }} alt="..."/>
                </div>
                <div class="carousel-item" data-interval="2000">
                <img src="/imgs/b2.jpg" class="d-block w-100" style={{ height:"500px" }} alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="/imgs/b3.jpg" class="d-block w-100" style={{ height:"500px" }} alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-target="#carouselExampleInterval" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-target="#carouselExampleInterval" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </button>
            </div>
        </div>
    )
}
export default Slider