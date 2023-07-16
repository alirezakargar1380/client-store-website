const Headers = () => {
    return (
        <div className="page-wrapper">
            <header className="header header-intro-clearance header-4">
                <div className="header-top">
                    <div className="container">
                        <div className="header-left">
                            <a href="tel_3A#"><i className="icon-phone"></i>تلفن تماس : 02155667788</a>
                        </div>

                        <div className="header-right">

                            <ul className="top-menu">
                                <li>
                                    <a href="#">لینک ها</a>
                                    <ul>
                                        <li>
                                            <div className="header-dropdown">
                                                <a href="#">تومان</a>
                                                <div className="header-menu">
                                                    <ul>
                                                        <li><a href="#">دلار</a></li>
                                                        <li><a href="#">تومان</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="header-dropdown">
                                                <a href="#">فارسی</a>
                                                <div className="header-menu">
                                                    <ul>
                                                        <li><a href="#">انگلیسی</a></li>
                                                        <li><a href="#">فرانسوی</a></li>
                                                        <li><a href="#">ترکی استانبولی</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li><a href="#signin-modal" data-toggle="modal">ورود / ثبت نام</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="header-middle">
                    <div className="container">
                        <div className="header-left">
                            <button className="mobile-menu-toggler">
                                <span className="sr-only">فهرست</span>
                                <i className="icon-bars"></i>
                            </button>

                            <a href="index-1.html" className="logo">
                                <img src="assets/images/demos/demo-4/logo.png" alt="Molla Logo" width="105" height="25"></img>
                            </a>
                        </div>

                        <div className="header-center">
                            <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
                                <a href="#" className="search-toggle" role="button"><i className="icon-search"></i></a>
                                <form action="#" method="get">
                                    <div className="header-search-wrapper search-wrapper-wide">
                                        <label
                                            htmlFor="q"
                                            className="sr-only">جستجو</label>
                                        <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                                        <input type="search" className="form-control" name="q" id="q"
                                            placeholder="جستجوی محصول ..." required></input>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="header-right">
                            <div className="dropdown compare-dropdown">
                                <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false" data-display="static" title="مقایسه محصولات"
                                    aria-label="Compare Products">
                                    <div className="icon">
                                        <i className="icon-random"></i>
                                    </div>
                                    <p>مقایسه</p>
                                </a>

                                <div className="dropdown-menu dropdown-menu-right">
                                    <ul className="compare-products">
                                        <li className="compare-product">
                                            <a href="#" className="btn-remove" title="حذف محصول"><i className="icon-close"></i></a>
                                            <h4 className="compare-product-title"><a href="product.html">گوشی سامسونگ مدل S9</a>
                                            </h4>
                                        </li>
                                        <li className="compare-product">
                                            <a href="#" className="btn-remove" title="حذف محصول"><i className="icon-close"></i></a>
                                            <h4 className="compare-product-title"><a href="product.html">گوشی سامسونگ مدل S8</a>
                                            </h4>
                                        </li>
                                    </ul>

                                    <div className="compare-actions">
                                        <a href="#" className="action-link">حذف همه</a>
                                        <a href="compare.html" className="btn btn-outline-primary-2"><span>مقایسه</span><i
                                            className="icon-long-arrow-left"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="wishlist">
                                <a href="wishlist.html" title="لیست محصولات مورد علاقه شما">
                                    <div className="icon">
                                        <i className="icon-heart-o"></i>
                                        <span className="wishlist-count badge">3</span>
                                    </div>
                                    <p>علاقه مندی</p>
                                </a>
                            </div>

                            <div className="dropdown cart-dropdown">
                                <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false" data-display="static">
                                    <div className="icon">
                                        <i className="icon-shopping-cart"></i>
                                        <span className="cart-count">2</span>
                                    </div>
                                    <p>سبد خرید</p>
                                </a>

                                <div className="dropdown-menu dropdown-menu-right">
                                    <div className="dropdown-cart-products">
                                        <div className="product">
                                            <div className="product-cart-details">
                                                <h4 className="product-title">
                                                    <a href="product.html">کتونی ورزشی مخصوص دویدن رنگ بژ</a>
                                                </h4>

                                                <span className="cart-product-info">
                                                    <span className="cart-product-qty">1 x </span>
                                                    84,000 تومان
                                                </span>
                                            </div>

                                            <figure className="product-image-container">
                                                <a href="product.html" className="product-image">
                                                    <img src="assets/images/products/cart/product-1.jpg" alt="product"></img>
                                                </a>
                                            </figure>
                                            <a href="#" className="btn-remove" title="حذف محصول"><i className="icon-close"></i></a>
                                        </div>

                                        <div className="product">
                                            <div className="product-cart-details">
                                                <h4 className="product-title">
                                                    <a href="product.html">لباس زنانه آبی</a>
                                                </h4>

                                                <span className="cart-product-info">
                                                    <span className="cart-product-qty">1 x </span>
                                                    76,000 تومان
                                                </span>
                                            </div>

                                            <figure className="product-image-container">
                                                <a href="product.html" className="product-image">
                                                    <img src="assets/images/products/cart/product-2.jpg" alt="product"></img>
                                                </a>
                                            </figure>
                                            <a href="#" className="btn-remove" title="حذف محصول"><i className="icon-close"></i></a>
                                        </div>
                                    </div>

                                    <div className="dropdown-cart-total">
                                        <span>مجموع</span>

                                        <span className="cart-total-price">160,000 تومان</span>
                                    </div>

                                    <div className="dropdown-cart-action">
                                        <a href="cart.html" className="btn btn-primary">مشاهده سبد خرید</a>
                                        <a href="checkout.html" className="btn btn-outline-primary-2"><span>پرداخت</span><i
                                            className="icon-long-arrow-left"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-bottom sticky-header">
                    <div className="container">
                        <div className="header-left">
                            <div className="dropdown category-dropdown">
                                <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false" data-display="static"
                                    title="دسته بندی فروشگاه">
                                    فهرست دسته بندی ها <i className="icon-angle-down"></i>
                                </a>

                                <div className="dropdown-menu">
                                    <nav className="side-nav">
                                        <ul className="menu-vertical sf-arrows">
                                            <li className="item-lead"><a href="#">تخفیف های روزانه</a></li>
                                            <li className="item-lead"><a href="#">هدیه ها</a></li>
                                            <li><a href="#">تخت خواب</a></li>
                                            <li><a href="#">روشنایی</a></li>
                                            <li><a href="#">مبل</a></li>
                                            <li><a href="#">حافظه های ذخیره سازی</a></li>
                                            <li><a href="#">میز و صندلی</a></li>
                                            <li><a href="#">وسایل تزیینی </a></li>
                                            <li><a href="#">کابینت آشپزخانه</a></li>
                                            <li><a href="#">قهوه</a></li>
                                            <li><a href="#">لوازم تعمیرات </a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>

                        <div className="header-center">
                            <nav className="main-nav">
                                <ul className="menu sf-arrows">
                                    <li className="megamenu-container active">
                                        <a href="index-1.html" className="sf-with-ul">خانه</a>

                                        <div className="megamenu demo">
                                            <div className="menu-col">
                                                <div className="menu-title">دمو خود را انتخاب کنید</div>

                                                <div className="demo-list">
                                                    <div className="demo-item">
                                                        <a href="index-31.html">
                                                            <span className="demo-bg"
                                                                style={{ backgroundImage: `url(assets/images/menu/demos/31.jpg)` }}
                                                            // style="background-image: url(assets/images/menu/demos/31.jpg);"
                                                            >
                                                            </span>
                                                            <span className="demo-title">31 - فروشگاه یوگا</span>
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="megamenu-action text-center">
                                                    <a href="demo.html"
                                                        className="btn btn-outline-primary-2 view-all-demos">
                                                        <span>مشاهده همه
                                                            دمو ها</span>
                                                        <i className="icon-long-arrow-left"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="category.html" className="sf-with-ul">فروشگاه</a>
                                        <div className="megamenu megamenu-md">
                                            <div className="row no-gutters">
                                                <div className="col-md-8">
                                                    <div className="menu-col">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="menu-title">فروشگاه با سایدبار</div>
                                                                <ul>
                                                                    <li><a href="category-list.html">فروشگاه لیست</a></li>
                                                                    <li><a href="category-2cols.html">فروشگاه 2 ستونه</a>
                                                                    </li>
                                                                    <li><a href="category.html">فروشگاه 3 ستونه</a></li>
                                                                    <li><a href="category-4cols.html">فروشگاه 4 ستونه</a>
                                                                    </li>
                                                                    <li><a href="category-market.html"><span>فروشگاه
                                                                        بازار<span
                                                                            className="tip tip-new">جدید</span></span></a>
                                                                    </li>
                                                                </ul>

                                                                <div className="menu-title">فروشگاه بدون سایدبار</div>
                                                                <ul>
                                                                    <li><a href="category-boxed.html"><span>فروشگاه با حالت
                                                                        باکس<span
                                                                            className="tip tip-hot">ویژه</span></span></a>
                                                                    </li>
                                                                    <li><a href="category-fullwidth.html">فروشگاه تمام
                                                                        صفحه</a></li>
                                                                </ul>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="banner banner-overlay">
                                                            <a href="category.html" className="banner banner-menu">
                                                                <img src="assets/images/menu/banner-1.jpg" alt="Banner"></img>

                                                                <div className="banner-content banner-content-top">
                                                                    <div className="banner-title text-white">آخرین
                                                                        <br></br>
                                                                        شانس
                                                                        <br></br>
                                                                        <span><strong>فروش</strong></span></div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="product.html" className="sf-with-ul">محصول</a>

                                        <div className="megamenu megamenu-sm">
                                            <div className="row no-gutters">
                                                <div className="col-md-6">
                                                    <div className="menu-col">
                                                        <div className="menu-title">جزئیات محصول</div>
                                                        <ul>
                                                            <li><a href="product.html">پیش فرض</a></li>
                                                            <li><a href="product-centered.html">توضیحات وسط چین</a></li>
                                                            <li><a href="product-extended.html"><span>توضیحات گسترده<span
                                                                className="tip tip-new">جدید</span></span></a></li>
                                                            <li><a href="product-gallery.html">گالری</a></li>
                                                            <li><a href="product-sticky.html">اطلاعات چسبیده</a></li>
                                                            <li><a href="product-sidebar.html">صفحه جمع با سایدبار</a></li>
                                                            <li><a href="product-fullwidth.html">تمام عرض</a></li>
                                                            <li><a href="product-masonry.html">اطلاعات چسبیده ماسونری</a></li>
                                                            <li><a href="product-new-design.html">طراحی جدید</a></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="banner banner-overlay">
                                                        <a href="category.html">
                                                            <img src="assets/images/menu/banner-2.jpg" alt="Banner"></img>

                                                            <div className="banner-content banner-content-bottom">
                                                                <div className="banner-title text-white">محصولات
                                                                    جدید<br></br><span><strong>بهار 1401</strong></span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#" className="sf-with-ul">صفحات </a>

                                        <ul>
                                            <li>
                                                <a href="about.html" className="sf-with-ul">درباره ما</a>

                                                <ul>
                                                    <li><a href="about.html">درباره ما 01</a></li>
                                                    <li><a href="about-2.html">درباره ما 02</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="contact.html" className="sf-with-ul">تماس با ما</a>

                                                <ul>
                                                    <li><a href="contact.html">تماس با ما 01</a></li>
                                                    <li><a href="contact-2.html">تماس با ما 02</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="invoice-template/invoice-template.html" className="sf-with-ul">قالب
                                                    فاکتور</a>

                                                <ul>
                                                    <li><a href="invoice-template/invoice-template.html">قالب فاکتور 01</a></li>
                                                    <li><a href="invoice-template/invoice-template2.html">قالب فاکتور 02</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="email-template/email-template.html" className="sf-with-ul">قالب
                                                    ایمیل</a>

                                                <ul>
                                                    <li><a href="email-template/email-template.html">قالب ایمیل 01</a>
                                                    </li>
                                                    <li><a href="email-template/email-order-success.html">قالب ایمیل 02 - سفارش موفق</a>
                                                    </li>
                                                    <li><a href="email-template/email-promotional.html">قالب ایمیل 03</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="login.html">ورود</a></li>
                                            <li><a href="forget-password.html">فراموشی رمز عبور</a></li>
                                            <li><a href="track-order.html">پیگیری سفارش</a></li>
                                            <li><a href="faq.html">سوالات متداول</a></li>
                                            <li><a href="404.html">خطای 404</a></li>
                                            <li><a href="coming-soon.html">به زودی</a></li>
                                            <li><a href="coming-soon-2.html">به زودی 2</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="blog.html" className="sf-with-ul">اخبار</a>
                                        <ul>
                                            <li><a href="blog.html">کلاسیک</a></li>
                                            <li><a href="blog-listing.html">لیست</a></li>
                                            <li>
                                                <a href="#">شبکه بندی</a>
                                                <ul>
                                                    <li><a href="blog-grid-2cols.html">2 ستونه</a></li>
                                                    <li><a href="blog-grid-3cols.html">3 ستونه</a></li>
                                                    <li><a href="blog-grid-4cols.html">4 ستونه</a></li>
                                                    <li><a href="blog-grid-sidebar.html">با سایدبار</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="elements-list.html" className="sf-with-ul">عناصر طراحی</a>

                                        <ul>
                                            <li><a href="elements-products.html">محصولات</a></li>
                                            <li><a href="elements-typography.html">تایپوگرافی</a></li>
                                            <li><a href="elements-titles.html">عناوین</a></li>
                                            <li><a href="elements-banners.html">بنرها</a></li>
                                            <li><a href="elements-product-category.html">دسته بندی محصولات</a></li>
                                            <li><a href="elements-video-banners.html">بنرهای ویدیویی</a></li>
                                            <li><a href="elements-buttons.html">دکمه ها</a></li>
                                            <li><a href="elements-accordions.html">آکاردئون</a></li>
                                            <li><a href="elements-lookbook.html">لوک بوک</a></li>
                                            <li><a href="elements-tabs.html">تب ها</a></li>
                                            <li><a href="elements-testimonials.html">توصیف و نقل قول</a></li>
                                            <li><a href="elements-blog-posts.html">اخبار</a></li>
                                            <li><a href="elements-portfolio.html">نمونه کار</a></li>
                                            <li><a href="elements-cta.html">پاسخ به عمل</a></li>
                                            <li><a href="elements-icon-boxes.html">باکس های آیکون</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header-right">
                            <i className="la la-lightbulb-o"></i>
                            <p>خرید<span className="highlight">&nbsp;تا 30 درصد تخفیف</span></p>
                        </div>
                    </div>
                </div>
            </header>
        </div>

    )
}

export default Headers