

export default function landingProducts(props: any) {
    return (
        <div className="product product-2">
            <figure className="product-media">
                {props.label == 1 ? <span className="product-label label-circle label-new">جدید</span> : null }
                {props.label == 2 ? <span className="product-label label-circle label-top">برتر</span> : null }
                {props.label == 3 ? <span className="product-label label-circle label-sale">فروش ویژه</span> : null }
                <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-5.jpg" alt="تصویر محصول"
                        className="product-image" />
                </a>

                <div className="product-action-vertical">
                    <a className="btn-product-icon btn-wishlist"
                        title="افزودن به لیست علاقه مندی"></a>
                </div>

                <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="افزودن به سبد خرید"><span>افزودن
                        به
                        سبد خرید</span></a>
                    <a href="popup/quickView.html" className="btn-product btn-quickview"
                        title="مشاهده سریع محصول"><span>مشاهده سریع</span></a>
                </div>
            </figure>

            <div className="product-body">
                <div className="product-cat">
                    <a href="#">تلویزیون و سینما خانگی</a>
                </div>
                <h3 className="product-title">
                    <a href="product.html">{props.title}</a>
                </h3>
                <div className="product-price">
                    899,000 تومان
                </div>
                <div className="ratings-container">
                    <div className="ratings">
                        <div className="ratings-val" style={{ width: "60%" }}></div>
                    </div>
                    <span className="ratings-text">( 5 دیدگاه )</span>
                </div>
            </div>
        </div>
    )
}