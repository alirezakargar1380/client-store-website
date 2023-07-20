export default function Products() {
    return (
        <main>
            <div className="page-wrapper">
                <header className="header">
                    <div className="header-top">
                        <div className="container">
                            <div className="header-left">
                                <div className="header-dropdown">
                                    <a >تومان</a>
                                    <div className="header-menu">
                                        <ul>
                                            <li><a >دلار</a></li>
                                            <li><a >تومان</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="header-dropdown">
                                    <a >فارسی</a>
                                    <div className="header-menu">
                                        <ul>
                                            <li><a >انگلیسی</a></li>
                                            <li><a >فرانسوی</a></li>
                                            <li><a >ترکی استانبولی</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="header-right">
                                <ul className="top-menu">
                                    <li>
                                        <a >لینک ها</a>
                                        <ul>
                                            <li><a href="tel_3A#"><i className="icon-phone"></i>تلفن تماس : 02155667788</a></li>
                                            <li><a href="wishlist.html"><i className="icon-heart-o"></i>لیست علاقه مندی
                                                <span>(3)</span></a></li>
                                            <li><a href="about.html">درباره ما</a></li>
                                            <li><a href="contact.html">تماس با ما</a></li>
                                            <li><a href="#signin-modal" data-toggle="modal"><i className="icon-user"></i>ورود</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="header-middle sticky-header">
                        <div className="container">
                            <div className="header-left">
                                <button className="mobile-menu-toggler">
                                    <span className="sr-only">فهرست</span>
                                    <i className="icon-bars"></i>
                                </button>

                                <a href="index-1.html" className="logo">
                                    <img src="assets/images/logo.png" alt="Molla Logo" width="105" height="25" />
                                </a>

                                <nav className="main-nav">
                                    <ul className="menu sf-arrows">
                                        <li className="megamenu-container active">
                                            <a href="index-1.html" className="sf-with-ul">خانه</a>

                                            <div className="megamenu demo">
                                                <div className="menu-col">
                                                    <div className="menu-title">دمو خود را انتخاب کنید</div>

                                                    {/* <div className="demo-list">
                                                        <div className="demo-item">
                                                            <a href="index-1.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/1.jpg);"></span>
                                                                <span className="demo-title">01 - فروشگاه مبلمان</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item">
                                                            <a href="index-2.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/2.jpg);"></span>
                                                                <span className="demo-title">02 - فروشگاه مبلمان</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item">
                                                            <a href="index-3.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/3.jpg);"></span>
                                                                <span className="demo-title">03 - فروشگاه لوازم الکترونیکی</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item">
                                                            <a href="index-4.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/4.jpg);"></span>
                                                                <span className="demo-title">04 - فروشگاه لوازم الکترونیکی</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item">
                                                            <a href="index-5.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/5.jpg);"></span>
                                                                <span className="demo-title">05 - فروشگاه مد و لباس</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item">
                                                            <a href="index-6.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/6.jpg);"></span>
                                                                <span className="demo-title">06 - فروشگاه مد و لباس</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item">
                                                            <a href="index-7.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/7.jpg);"></span>
                                                                <span className="demo-title">07 - فروشگاه مد و لباس</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item">
                                                            <a href="index-8.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/8.jpg);"></span>
                                                                <span className="demo-title">08 - فروشگاه مد و لباس</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item">
                                                            <a href="index-9.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/9.jpg);"></span>
                                                                <span className="demo-title">09 - فروشگاه مد و لباس</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item">
                                                            <a href="index-10.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/10.jpg);"></span>
                                                                <span className="demo-title">10 - فروشگاه کفش</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item hidden">
                                                            <a href="index-11.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/11.jpg);"></span>
                                                                <span className="demo-title">11 - فروشگاه مبل</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item hidden">
                                                            <a href="index-12.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/12.jpg);"></span>
                                                                <span className="demo-title">12 - فروشگاه مُد</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item hidden">
                                                            <a href="index-13.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/13.jpg);"></span>
                                                                <span className="demo-title">13 - بازار</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item hidden">
                                                            <a href="index-14.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/14.jpg);"></span>
                                                                <span className="demo-title">14 - بازار تمام عرض</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item hidden">
                                                            <a href="index-15.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/15.jpg);"></span>
                                                                <span className="demo-title">15 - مد و زیبایی</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item hidden">
                                                            <a href="index-16.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/16.jpg);"></span>
                                                                <span className="demo-title">16 - مُد و زیبایی</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item hidden">
                                                            <a href="index-17.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/17.jpg);"></span>
                                                                <span className="demo-title">17 - فروشگاه مُد و لباس</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item hidden">
                                                            <a href="index-18.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/18.jpg);"></span>
                                                                <span className="demo-title">18 - فروشگاه مُد و لباس (با
                                                                    سایدبار)</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item hidden">
                                                            <a href="index-19.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/19.jpg);"></span>
                                                                <span className="demo-title">19 - فروشگاه بازی</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item hidden">
                                                            <a href="index-20.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/20.jpg);"></span>
                                                                <span className="demo-title">20 - فروشگاه کتاب</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item hidden">
                                                            <a href="index-21.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/21.jpg);"></span>
                                                                <span className="demo-title">21 - فروشگاه ورزشی</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item hidden">
                                                            <a href="index-22.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/22.jpg);"></span>
                                                                <span className="demo-title">22 - فروشگاه ابزار</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item hidden">
                                                            <a href="index-23.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/23.jpg);"></span>
                                                                <span className="demo-title">23 - -فروشگاه مد با نوبار سمت
                                                                    راست</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item hidden">
                                                            <a href="index-24.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/24.jpg);"></span>
                                                                <span className="demo-title">24 - فروشگاه ورزشی</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item hidden">
                                                            <a href="index-25.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/25.jpg);"></span>
                                                                <span className="demo-title">25 - فروشگاه زیورآلات</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item hidden">
                                                            <a href="index-26.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/26.jpg);"></span>
                                                                <span className="demo-title">26 - فروشگاه بازار</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item hidden">
                                                            <a href="index-27.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/27.jpg);"></span>
                                                                <span className="demo-title">27 - فروشگاه مُد</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item hidden">
                                                            <a href="index-28.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/28.jpg);"></span>
                                                                <span className="demo-title">28 - فروشگاه مواد غذایی</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item hidden">
                                                            <a href="index-29.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/29.jpg);"></span>
                                                                <span className="demo-title">29 - فروشگاه تی شرت</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item hidden">
                                                            <a href="index-30.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/30.jpg);"></span>
                                                                <span className="demo-title">30 - فروشگاه هدفون</span>
                                                            </a>
                                                        </div>

                                                        <div className="demo-item hidden">
                                                            <a href="index-31.html">
                                                                <span className="demo-bg"
                                                                    style="background-image: url(assets/images/menu/demos/31.jpg);"></span>
                                                                <span className="demo-title">31 - فروشگاه یوگا</span>
                                                            </a>
                                                        </div>

                                                    </div> */}

                                                    <div className="megamenu-action text-center">
                                                        <a href="demo.html"
                                                            className="btn btn-outline-primary-2 view-all-demos"><span>مشاهده همه
                                                                دمو ها</span><i className="icon-long-arrow-left"></i></a>
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

                                                                <div className="col-md-6">
                                                                    <div className="menu-title">دسته بندی محصولات</div>

                                                                    <ul>
                                                                        <li><a href="product-category-boxed.html">دسته بندی محصولات - حالت باکس</a></li>
                                                                        <li><a href="product-category-fullwidth.html"><span>دسته بندی محصولات - تمام عرض<span
                                                                            className="tip tip-new">جدید</span></span></a>
                                                                        </li>
                                                                    </ul>
                                                                    <div className="menu-title">صفحات فروشگاه</div>

                                                                    <ul>
                                                                        <li><a href="cart.html">سبد خرید</a></li>
                                                                        <li><a href="cart2.html">سبد خرید 2</a></li>
                                                                        <li><a href="cart-empty.html">سبد خرید خالی</a></li>
                                                                        <li><a href="checkout.html">پرداخت</a></li>
                                                                        <li><a href="checkout2.html">پرداخت 2</a></li>
                                                                        <li><a href="compare.html">مقایسه محصولات</a></li>
                                                                        <li><a href="compare2.html">مقایسه محصولات 2</a></li>
                                                                        <li><a href="wishlist.html">لیست علاقه مندی ها</a></li>
                                                                        <li><a href="gift-cart.html">کارت هدیه</a></li>
                                                                        <li><a href="dashboard.html">داشبورد</a></li>

                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="banner banner-overlay">
                                                            <a href="category.html" className="banner banner-menu">
                                                                <img src="assets/images/menu/banner-1.jpg" alt="Banner" />

                                                                <div className="banner-content banner-content-top">
                                                                    <div className="banner-title text-white">آخرین
                                                                        <br />شانس<br /><span><strong>فروش</strong></span></div>

                                                                </div>
                                                            </a>
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
                                                                <img src="assets/images/menu/banner-2.jpg" alt="Banner" />

                                                                <div className="banner-content banner-content-bottom">
                                                                    <div className="banner-title text-white">محصولات
                                                                        جدید<br /><span><strong>بهار 1401</strong></span></div>

                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a  className="sf-with-ul">صفحات </a>

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
                                                    <a >شبکه بندی</a>
                                                    <ul>
                                                        <li><a href="blog-grid-2cols.html">2 ستونه</a></li>
                                                        <li><a href="blog-grid-3cols.html">3 ستونه</a></li>
                                                        <li><a href="blog-grid-4cols.html">4 ستونه</a></li>
                                                        <li><a href="blog-grid-sidebar.html">با سایدبار</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a >سایز های مختلف</a>
                                                    <ul>
                                                        <li><a href="blog-masonry-2cols.html">2 ستونه</a></li>
                                                        <li><a href="blog-masonry-3cols.html">3 ستونه</a></li>
                                                        <li><a href="blog-masonry-4cols.html">4 ستونه</a></li>
                                                        <li><a href="blog-masonry-sidebar.html">با سایدبار</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a >ماسک</a>
                                                    <ul>
                                                        <li><a href="blog-mask-grid.html">نوع 1</a></li>
                                                        <li><a href="blog-mask-masonry.html">نوع 2</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a >پست تکی</a>
                                                    <ul>
                                                        <li><a href="single.html">پیش فرض با سایدبار</a></li>
                                                        <li><a href="single-fullwidth.html">تمام صفحه بدون سایدبار</a></li>
                                                        <li><a href="single-fullwidth-sidebar.html">تمام صفحه باسایدبار</a></li>
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
                                <div className="header-search">
                                    <a  className="search-toggle" role="button" title="جستجو"><i
                                        className="icon-search"></i></a>
                                    <form action="#" method="get">
                                        <div className="header-search-wrapper">
                                            <label htmlFor="q" className="sr-only">جستجو</label>
                                            {/* <input type="search" className="form-control" name="q" id="q"
                                                placeholder="جستجوی محصول ..." required /> */}
                                        </div>
                                    </form>
                                </div>
                                <div className="dropdown compare-dropdown">
                                    <a  className="dropdown-toggle" role="button" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false" data-display="static" title="مقایسه محصولات"
                                        aria-label="Compare Products">
                                        <i className="icon-random"></i>
                                    </a>

                                    <div className="dropdown-menu dropdown-menu-right">
                                        <ul className="compare-products">
                                            <li className="compare-product">
                                                <a  className="btn-remove" title="حذف محصول"><i className="icon-close"></i></a>
                                                <h4 className="compare-product-title"><a href="product.html">گوشی سامسونگ مدل S9</a>
                                                </h4>
                                            </li>
                                            <li className="compare-product">
                                                <a  className="btn-remove" title="حذف محصول"><i className="icon-close"></i></a>
                                                <h4 className="compare-product-title"><a href="product.html">گوشی سامسونگ مدل S8</a>
                                                </h4>
                                            </li>
                                        </ul>

                                        <div className="compare-actions">
                                            <a  className="action-link">حذف همه</a>
                                            <a href="compare.html" className="btn btn-outline-primary-2"><span>مقایسه</span><i
                                                className="icon-long-arrow-left"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="dropdown cart-dropdown">
                                    <a  className="dropdown-toggle" role="button" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false" data-display="static">
                                        <i className="icon-shopping-cart"></i>
                                        <span className="cart-count">2</span>
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
                                                        <img src="assets/images/products/cart/product-1.jpg" alt="product" />
                                                    </a>
                                                </figure>
                                                <a  className="btn-remove" title="حذف محصول"><i className="icon-close"></i></a>
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
                                                        <img src="assets/images/products/cart/product-2.jpg" alt="product" />
                                                    </a>
                                                </figure>
                                                <a  className="btn-remove" title="حذف محصول"><i className="icon-close"></i></a>
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
                </header>

                <main className="main">
                    <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
                        <div className="container d-flex align-items-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index-1.html">خانه</a></li>
                                <li className="breadcrumb-item"><a >محصولات</a></li>
                                <li className="breadcrumb-item active" aria-current="page">پیش فرض</li>
                            </ol>

                            <nav className="product-pager mr-auto" aria-label="Product">
                                <a className="product-pager-link product-pager-prev"  aria-label="Previous" tabIndex={-1}>
                                    <i className="icon-angle-right"></i>
                                    <span>قبلی</span>
                                </a>

                                <a className="product-pager-link product-pager-next"  aria-label="Next" tabIndex={-1}>
                                    <span>بعدی</span>
                                    <i className="icon-angle-left"></i>
                                </a>
                            </nav>
                        </div>
                    </nav>

                    <div className="page-content">
                        <div className="container">
                            <div className="product-details-top">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="product-gallery product-gallery-vertical">
                                            <div className="row">
                                                <figure className="product-main-image">
                                                    <img id="product-zoom" src="assets/images/products/single/1.jpg"
                                                        data-zoom-image="assets/images/products/single/1-big.jpg"
                                                        alt="تصویر محصول" />

                                                    <a  id="btn-product-gallery" className="btn-product-gallery">
                                                        <i className="icon-arrows"></i>
                                                    </a>
                                                </figure>

                                                <div id="product-zoom-gallery" className="product-image-gallery">
                                                    <a className="product-gallery-item active" //
                                                        data-image="assets/images/products/single/1.jpg"
                                                        data-zoom-image="assets/images/products/single/1-big.jpg">
                                                        <img src="assets/images/products/single/1-small.jpg"
                                                            alt="توضیحات تصویر" />
                                                    </a>

                                                    <a className="product-gallery-item" //
                                                        data-image="assets/images/products/single/2.jpg"
                                                        data-zoom-image="assets/images/products/single/2-big.jpg">
                                                        <img src="assets/images/products/single/2-small.jpg"
                                                            alt="توضیحات تصویر" />
                                                    </a>

                                                    <a className="product-gallery-item" //
                                                        data-image="assets/images/products/single/3.jpg"
                                                        data-zoom-image="assets/images/products/single/3-big.jpg">
                                                        <img src="assets/images/products/single/3-small.jpg"
                                                            alt="توضیحات تصویر" />
                                                    </a>

                                                    <a className="product-gallery-item" //
                                                        data-image="assets/images/products/single/4.jpg"
                                                        data-zoom-image="assets/images/products/single/4-big.jpg">
                                                        <img src="assets/images/products/single/4-small.jpg" alt="product back" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="product-details">
                                            <h1 className="product-title">لباس زنانه رنگ زرد تیره</h1>


                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: "80%" }}></div>
                                                </div>
                                                <a className="ratings-text" href="#product-review-link" id="review-link">( 2 نظر
                                                    )</a>
                                            </div>

                                            <div className="product-price">
                                                84,000 تومان
                                            </div>

                                            <div className="product-content">
                                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید
                                                    سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن
                                                    ساختگی با تولید سادگی نامفهوم
                                                </p>
                                            </div>

                                            <div className="details-filter-row details-row-size">
                                                <label>رنگ : </label>

                                                <div className="product-nav product-nav-thumbs">
                                                    <a  className="active">
                                                        <img src="assets/images/products/single/1-thumb.jpg" alt="product desc" />
                                                    </a>
                                                    <a >
                                                        <img src="assets/images/products/single/2-thumb.jpg" alt="product desc" />
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="details-filter-row details-row-size">
                                                <label htmlFor="size">سایز : </label>
                                                <div className="select-custom">
                                                    <select name="size" id="size" className="form-control">
                                                        <option value="#">سایز را انتخاب کنید</option>
                                                        <option value="s">کوچک (Small)</option>
                                                        <option value="m">متوسط (Medium)</option>
                                                        <option value="l">بزرگ (Large)</option>
                                                        <option value="xl">خیلی بزرگ (XLarge)</option>
                                                    </select>
                                                </div>

                                                <a  className="size-guide"><i className="icon-th-list"></i>راهنمای اندازه</a>
                                            </div>

                                            <div className="details-filter-row details-row-size">
                                                <label htmlFor="qty">تعداد : </label>
                                                <div className="product-details-quantity">
                                                    {/* <input type="number" id="qty" className="form-control" value="1" min="1"
                                                        max="10" step="1" data-decimals="0" required /> */}
                                                </div>
                                            </div>

                                            <div className="product-details-action">
                                                <a  className="btn-product btn-cart"><span>افزودن به سبد خرید</span></a>

                                                <div className="details-action-wrapper">
                                                    <a  className="btn-product btn-wishlist"
                                                        title="لیست علاقه مندی"><span>افزودن
                                                            به
                                                            علاقه مندی</span></a>
                                                    <a  className="btn-product btn-compare" title="مقایسه"><span>افزودن به
                                                        لیست مقایسه</span></a>
                                                </div>
                                            </div>

                                            <div className="product-details-footer">
                                                <div className="product-cat text-center">
                                                    <span>دسته بندی : </span>
                                                    <a >زنانه</a>،
                                                    <a >لباس</a>،
                                                    <a >زرد</a>
                                                </div>

                                                <div className="social-icons social-icons-sm">
                                                    <span className="social-label">اشتراک گذاری : </span>
                                                    <a  className="social-icon" title="فیسبوک" target="_blank"><i
                                                        className="icon-facebook-f"></i></a>
                                                    <a  className="social-icon" title="توییتر" target="_blank"><i
                                                        className="icon-twitter"></i></a>
                                                    <a  className="social-icon" title="اینستاگرام" target="_blank"><i
                                                        className="icon-instagram"></i></a>
                                                    <a  className="social-icon" title="پینترست" target="_blank"><i
                                                        className="icon-pinterest"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="product-details-tab">
                                <ul className="nav nav-pills justify-content-center" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="product-desc-link" data-toggle="tab"
                                            href="#product-desc-tab" role="tab" aria-controls="product-desc-tab"
                                            aria-selected="true">توضیحات</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="product-info-link" data-toggle="tab" href="#product-info-tab"
                                            role="tab" aria-controls="product-info-tab" aria-selected="false">اطلاعات بیشتر</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="product-shipping-link" data-toggle="tab"
                                            href="#product-shipping-tab" role="tab" aria-controls="product-shipping-tab"
                                            aria-selected="false">ارسال و بازگشت</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="product-review-link" data-toggle="tab"
                                            href="#product-review-tab" role="tab" aria-controls="product-review-tab"
                                            aria-selected="false">نظرات (2)</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="product-desc-tab" role="tabpanel"
                                        aria-labelledby="product-desc-link">
                                        <div className="product-desc-content">
                                            <h3>اطلاعات محصول</h3>
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید
                                                سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن
                                                ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوملورم
                                                ایپسوم متن ساختگی با تولید سادگی نامفهوملورم ایپسوم متن ساختگی با تولید سادگی
                                                نامفهوم. </p>
                                            <ul>
                                                <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم </li>
                                                <li>لورم ایپسوم متن ساختگی با تولید سادگی.</li>
                                                <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم</li>
                                            </ul>

                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید
                                                سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوملورم ایپسوم متن
                                                ساختگی با تولید سادگی نامفهوم، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوملورم
                                                ایپسوم متن ساختگی با تولید سادگی نامفهوملورم ایپسوم متن ساختگی با تولید سادگی
                                                نامفهوملورم ایپسوم متن ساختگی با تولید سادگی نامفهوم. </p>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="product-info-tab" role="tabpanel"
                                        aria-labelledby="product-info-link">
                                        <div className="product-desc-content">
                                            <h3>اطلاعات</h3>
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید
                                                سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوملورم ایپسوم متن
                                                ساختگی با تولید سادگی نامفهوملورم ایپسوم متن ساختگی با تولید سادگی نامفهوملورم
                                                ایپسوم متن ساختگی با تولید سادگی نامفهوم. </p>

                                            <h3>اطلاعات بیشتر</h3>
                                            <ul>
                                                <li>لورم ایپسوم متن ساختگی</li>
                                                <li>لورم ایپسوم متن ساختگی با تولید سادگی</li>
                                                <li>لورم ایپسوم</li>
                                                <li>لورم ایپسوم متن ساختگی </li>
                                                <li>لورم ایپسوم متن ساختگی با تولید سادگی</li>
                                            </ul>

                                            <h3>سایز</h3>
                                            <p>تک سایز</p>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="product-shipping-tab" role="tabpanel"
                                        aria-labelledby="product-shipping-link">
                                        <div className="product-desc-content">
                                            <h3>ارسال و بازگشت</h3>
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید
                                                سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن
                                                ساختگی با تولید سادگی نامفهوم
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید
                                                    سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوملورم ایپسوم متن
                                                    ساختگی با تولید سادگی نامفهوملورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                            </p>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="product-review-tab" role="tabpanel"
                                        aria-labelledby="product-review-link">
                                        <div className="reviews">
                                            <h3>نظر (2)</h3>
                                            <div className="review">
                                                <div className="row no-gutters">
                                                    <div className="col-auto">
                                                        <h4><a >کاربر 1</a></h4>
                                                        <div className="ratings-container">
                                                            <div className="ratings">
                                                                <div className="ratings-val" style={{ width: "80%" }}></div>

                                                            </div>
                                                        </div>
                                                        <span className="review-date">4 روز پیش</span>
                                                    </div>
                                                    <div className="col-12">
                                                        <h4>عالی، سایز فوق العاده</h4>

                                                        <div className="review-content">
                                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم،لورم ایپسوم متن
                                                                ساختگی با تولید سادگی نامفهوم، لورم ایپسوم متن ساختگی با تولید
                                                                سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم!</p>
                                                        </div>

                                                        <div className="review-action">
                                                            <a ><i className="icon-thumbs-up"></i>مثبت (2)</a>
                                                            <a ><i className="icon-thumbs-down"></i>منفی (0)</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="review">
                                                <div className="row no-gutters">
                                                    <div className="col-auto">
                                                        <h4><a >کاربر 2</a></h4>
                                                        <div className="ratings-container">
                                                            <div className="ratings">
                                                                {/* <div className="ratings-val" style="width: 100%;"></div> */}
                                                            </div>
                                                        </div>
                                                        <span className="review-date">2 روز پیش</span>
                                                    </div>
                                                    <div className="col-12">
                                                        <h4>خیلی عالی</h4>

                                                        <div className="review-content">
                                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم، لورم ایپسوم متن
                                                                ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید
                                                                سادگی نامفهوم.</p>
                                                        </div>

                                                        <div className="review-action">
                                                            <a ><i className="icon-thumbs-up"></i>مثبت (0)</a>
                                                            <a ><i className="icon-thumbs-down"></i>منفی (0)</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h2 className="title text-center mb-4">محصولاتی که شاید بپسندید</h2>

                            <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl"
                                data-owl-options='{
                            "nav": false, 
                            "dots": true,
                            "margin": 20,
                            "loop": false,
                            "rtl": true, 
                            "responsive": {
                                "0": {
                                    "items":1
                                },
                                "480": {
                                    "items":2
                                },
                                "768": {
                                    "items":3
                                },
                                "992": {
                                    "items":4
                                },
                                "1200": {
                                    "items":4,
                                    "nav": true,
                                    "dots": false
                                }
                            }
                        }'>
                                <div className="product product-7 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-new">جدید</span>
                                        <a href="product.html">
                                            <img src="assets/images/products/product-4.jpg" alt="تصویر محصول"
                                                className="product-image" />
                                        </a>

                                        <div className="product-action-vertical">
                                            <a  className="btn-product-icon btn-wishlist btn-expandable"><span>افزودن به
                                                لیست علاقه مندی</span></a>
                                            <a href="popup/quickView.html" className="btn-product-icon btn-quickview"
                                                title="مشاهده سریع"><span>مشاهده سریع</span></a>
                                            <a  className="btn-product-icon btn-compare" title="مقایسه"><span>لیست
                                                مقایسه</span></a>
                                        </div>

                                        <div className="product-action">
                                            <a  className="btn-product btn-cart"><span>افزودن به سبد خرید</span></a>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat text-center">
                                            <a >زنانه</a>
                                        </div>
                                        <h3 className="product-title text-center"><a href="product.html">دامن چرم قهوه ای</a></h3>

                                        <div className="product-price">
                                            60,000 تومان
                                        </div>
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={{ width: "20%" }}></div>
                                            </div>
                                            <span className="ratings-text">( 2 دیدگاه )</span>
                                        </div>

                                        <div className="product-nav product-nav-thumbs">
                                            <a className="active">
                                                <img src="assets/images/products/product-4-thumb.jpg" alt="product desc"/>
                                            </a>
                                            <a>
                                                <img src="assets/images/products/product-4-2-thumb.jpg" alt="product desc"/>
                                            </a>

                                            <a>
                                                <img src="assets/images/products/product-4-3-thumb.jpg" alt="product desc"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="product product-7 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-out">ناموجود</span>
                                        <a href="product.html">
                                            <img src="assets/images/products/product-6.jpg" alt="تصویر محصول"
                                                className="product-image" />
                                        </a>

                                        <div className="product-action-vertical">
                                            <a  className="btn-product-icon btn-wishlist btn-expandable"><span>افزودن به
                                                لیست علاقه مندی</span></a>
                                            <a href="popup/quickView.html" className="btn-product-icon btn-quickview"
                                                title="مشاهده سریع"><span>مشاهده سریع</span></a>
                                            <a  className="btn-product-icon btn-compare" title="مقایسه"><span>لیست
                                                مقایسه</span></a>
                                        </div>

                                        <div className="product-action">
                                            <a  className="btn-product btn-cart"><span>افزودن به سبد خرید</span></a>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat text-center">
                                            <a >ژاکت</a>
                                        </div>
                                        <h3 className="product-title text-center"><a href="product.html">بلوز شلوار خاکی</a></h3>

                                        <div className="product-price">
                                            <span className="out-price">120,000 تومان</span>
                                        </div>
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={{ width: "80%" }}></div>
                                            </div>
                                            <span className="ratings-text">( 6 دیدگاه )</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="product product-7 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-top">برتر</span>
                                        <a href="product.html">
                                            <img src="assets/images/products/product-11.jpg" alt="تصویر محصول"
                                                className="product-image" />
                                        </a>

                                        <div className="product-action-vertical">
                                            <a  className="btn-product-icon btn-wishlist btn-expandable"><span>افزودن به
                                                لیست علاقه مندی</span></a>
                                            <a href="popup/quickView.html" className="btn-product-icon btn-quickview"
                                                title="مشاهده سریع"><span>مشاهده سریع</span></a>
                                            <a  className="btn-product-icon btn-compare" title="مقایسه"><span>لیست
                                                مقایسه</span></a>
                                        </div>

                                        <div className="product-action">
                                            <a  className="btn-product btn-cart"><span>افزودن به سبد خرید</span></a>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat text-center">
                                            <a >کفش</a>
                                        </div>
                                        <h3 className="product-title text-center"><a href="product.html">کش زنانه قهوه ای پاشنه
                                            دار</a>
                                        </h3>
                                        <div className="product-price">
                                            110,000 تومان
                                        </div>
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={{ width: "80%" }}></div>
                                            </div>
                                            <span className="ratings-text">( 1 دیدگاه )</span>
                                        </div>

                                        <div className="product-nav product-nav-thumbs">
                                            <a  className="active">
                                                <img src="assets/images/products/product-11-thumb.jpg" alt="product desc" />
                                            </a>
                                            <a >
                                                <img src="assets/images/products/product-11-2-thumb.jpg" alt="product desc" />
                                            </a>

                                            <a >
                                                <img src="assets/images/products/product-11-3-thumb.jpg" alt="product desc" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="product product-7 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img src="assets/images/products/product-10.jpg" alt="تصویر محصول"
                                                className="product-image" />
                                        </a>

                                        <div className="product-action-vertical">
                                            <a  className="btn-product-icon btn-wishlist btn-expandable"><span>افزودن به
                                                لیست علاقه مندی</span></a>
                                            <a href="popup/quickView.html" className="btn-product-icon btn-quickview"
                                                title="مشاهده سریع"><span>مشاهده سریع</span></a>
                                            <a  className="btn-product-icon btn-compare" title="مقایسه"><span>لیست
                                                مقایسه</span></a>
                                        </div>

                                        <div className="product-action">
                                            <a  className="btn-product btn-cart"><span>افزودن به سبد خرید</span></a>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat text-center">
                                            <a >لباس زنانه</a>
                                        </div>
                                        <h3 className="product-title text-center"><a href="product.html">لباس زنانه دکمه دار رنگ
                                            زرد</a></h3>

                                        <div className="product-price">
                                            56,000 تومان
                                        </div>
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                {/* <div className="ratings-val" style="width: 0%;"></div> */}
                                            </div>
                                            <span className="ratings-text">( 0 دیدگاه )</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="product product-7 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img src="assets/images/products/product-7.jpg" alt="تصویر محصول" className="product-image" />
                                        </a>

                                        <div className="product-action-vertical">
                                            <a  className="btn-product-icon btn-wishlist btn-expandable"><span>افزودن به
                                                لیست علاقه مندی</span></a>
                                            <a href="popup/quickView.html" className="btn-product-icon btn-quickview"
                                                title="مشاهده سریع"><span>مشاهده سریع</span></a>
                                            <a  className="btn-product-icon btn-compare" title="مقایسه"><span>لیست
                                                مقایسه</span></a>
                                        </div>

                                        <div className="product-action">
                                            <a  className="btn-product btn-cart"><span>افزودن به سبد خرید</span></a>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat text-center">
                                            <a >لی</a>
                                        </div>
                                        <h3 className="product-title text-center"><a href="product.html">لباس آبی زنانه</a>
                                        </h3>
                                        <div className="product-price">
                                            76,000 تومان
                                        </div>
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={{ width: "20%" }}></div>
                                            </div>
                                            <span className="ratings-text">( 2 دیدگاه )</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <footer className="footer">
                    <div className="footer-middle">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 col-lg-3">
                                    <div className="widget widget-about">
                                        <img src="assets/images/logo.png" className="footer-logo" alt="Footer Logo" width="105"
                                            height="25" />
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی
                                                نامفهوم. </p>

                                            <div className="social-icons">
                                                <a  className="social-icon" title="فیسبوک" target="_blank"><i
                                                    className="icon-facebook-f"></i></a>
                                                <a  className="social-icon" title="توییتر" target="_blank"><i
                                                    className="icon-twitter"></i></a>
                                                <a  className="social-icon" title="اینستاگرام" target="_blank"><i
                                                    className="icon-instagram"></i></a>
                                                <a  className="social-icon" title="یوتیوب" target="_blank"><i
                                                    className="icon-youtube"></i></a>
                                                <a  className="social-icon" title="پینترست" target="_blank"><i
                                                    className="icon-pinterest"></i></a>
                                            </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-3">
                                    <div className="widget">
                                        <h4 className="widget-title">لینک های مفید</h4>

                                        <ul className="widget-list">
                                            <li><a href="about.html">درباره ما</a></li>
                                            <li><a >خدمات</a></li>
                                            <li><a >نحوه خرید</a></li>
                                            <li><a href="faq.html">سوالات متداول</a></li>
                                            <li><a href="contact.html">تماس با ما</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-3">
                                    <div className="widget">
                                        <h4 className="widget-title">خدمات مشتری</h4>

                                        <ul className="widget-list">
                                            <li><a >شیوه پرداخت</a></li>
                                            <li><a >گارانتی بازگشت وجه</a></li>
                                            <li><a >شیوه ارسال محصولات</a></li>
                                            <li><a >قوانین و مقررات</a></li>
                                            <li><a >خط مشی</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-3">
                                    <div className="widget">
                                        <h4 className="widget-title">حساب کاربری</h4>

                                        <ul className="widget-list">
                                            <li><a >ورود</a></li>
                                            <li><a href="cart.html">سبد خرید</a></li>
                                            <li><a >لیست علاقه مندی ها</a></li>
                                            <li><a >پیگیری سفارشات</a></li>
                                            <li><a >راهنما</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="container">
                            <p className="footer-copyright">کپی رایت © 2019 تمامی حقوق محفوظ است.</p>

                        </div>
                    </div>
                </footer>
            </div>
            <button id="scroll-top" title="بازگشت به بالا"><i className="icon-arrow-up"></i></button>


            <div className="sticky-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <figure className="product-media">
                                <a href="product.html">
                                    <img src="assets/images/products/sticky/product-1.jpg" alt="تصویر محصول" />
                                </a>
                            </figure>
                            <h4 className="product-title"><a href="product.html">لباس زنانه رنگ زرد تیره</a></h4>

                        </div>

                        <div className="col-6 justify-content-end">
                            <div className="product-price">
                                84,000 تومان
                            </div>
                            <div className="product-details-quantity">
                                {/* <input type="number" id="sticky-cart-qty" className="form-control" defaultValue="1" min="1" max="10"
                                    step="1" data-decimals="0" required /> */}
                            </div>

                            <div className="product-details-action">
                                <a  className="btn-product btn-cart"><span>افزودن به سبد خرید</span></a>
                                <a  className="btn-product btn-wishlist" title="لیست علاقه مندی"><span>افزودن به علاقه
                                    مندی</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mobile-menu-overlay"></div>

            <div className="mobile-menu-container">
                <div className="mobile-menu-wrapper">
                    <span className="mobile-menu-close"><i className="icon-close"></i></span>

                    <form action="#" method="get" className="mobile-search">
                        <label htmlFor="mobile-search" className="sr-only">جستجو</label>
                        {/* <input type="search" className="form-control" name="mobile-search" id="mobile-search" placeholder="جستجو در ..." required /> */}
                        <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                    </form>

                    <nav className="mobile-nav">
                        <ul className="mobile-menu">
                            <li className="active">
                                <a href="index-1.html">خانه</a>

                                <ul>
                                    <li><a href="index-1.html">01 - فروشگاه مبلمان</a></li>
                                    <li><a href="index-2.html">02 - فروشگاه مبلمان</a></li>
                                    <li><a href="index-3.html">03 - فروشگاه لوازم الکترونیکی</a></li>
                                    <li><a href="index-4.html">04 - فروشگاه لوازم الکترونیکی</a></li>
                                    <li><a href="index-5.html">05 - فروشگاه مد و لباس</a></li>
                                    <li><a href="index-6.html">06 - فروشگاه مد و لباس</a></li>
                                    <li><a href="index-7.html">07 - فروشگاه مد و لباس</a></li>
                                    <li><a href="index-8.html">08 - فروشگاه مد و لباس</a></li>
                                    <li><a href="index-9.html">09 - فروشگاه مد و لباس</a></li>
                                    <li><a href="index-10.html">10 - فروشگاه کفش</a></li>
                                    <li><a href="index-11.html">11 - فروشگاه مبل</a></li>
                                    <li><a href="index-12.html">12 - فروشگاه مد</a></li>
                                    <li><a href="index-13.html">13 - بازار</a></li>
                                    <li><a href="index-14.html">14 - بازار تمام عرض</a></li>
                                    <li><a href="index-15.html">15 - مد و زیبایی</a></li>
                                    <li><a href="index-16.html">16 - مد و زیبایی</a></li>
                                    <li><a href="index-17.html">17 - فروشگاه مد و لباس</a></li>
                                    <li><a href="index-18.html">18 - فروشگاه مد (با سایدبار)</a></li>
                                    <li><a href="index-19.html">19 - فروشگاه بازی</a></li>
                                    <li><a href="index-20.html">20 - فروشگاه کتاب</a></li>
                                    <li><a href="index-21.html">21 - فروشگاه ورزشی</a></li>
                                    <li><a href="index-22.html">22 - فروشگاه ابزار</a></li>
                                    <li><a href="index-23.html">23 - فروشگاه مد با نوبار سمت راست</a></li>
                                    <li><a href="index-24.html">24 - فروشگاه ورزشی</a></li>
                                    <li><a href="index-25.html">25 - فروشگاه زیورآلات</a></li>
                                    <li><a href="index-26.html">26 - فروشگاه بازار</a></li>
                                    <li><a href="index-27.html">27 - فروشگاه مُد</a></li>
                                    <li><a href="index-28.html">28 - فروشگاه مواد غذایی</a></li>
                                    <li><a href="index-29.html">29 - فروشگاه تی شرت</a></li>
                                    <li><a href="index-30.html">30 - فروشگاه هدفون</a></li>
                                    <li><a href="index-31.html">31 - فروشگاه یوگا</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="category.html">فروشگاه</a>
                                <ul>
                                    <li><a href="category-list.html">فروشگاه لیست</a></li>
                                    <li><a href="category-2cols.html">2 ستونه</a></li>
                                    <li><a href="category.html">3 ستونه</a></li>
                                    <li><a href="category-4cols.html">4 ستونه</a></li>
                                    <li><a href="category-boxed.html"><span>فروشگاه با حالت بسته بدون سایدبار<span
                                        className="tip tip-hot">ویژه</span></span></a></li>
                                    <li><a href="category-fullwidth.html">فروشگاه تمام عرض بدون سایدبار</a></li>
                                    <li><a href="product-category-boxed.html">دسته بندی محصولات با حالت بسته</a></li>
                                    <li><a href="product-category-fullwidth.html"><span>دسته بندی محصولات تمام عرض<span
                                        className="tip tip-new">جدید</span></span></a></li>
                                    <li><a href="cart.html">سبد خرید</a></li>
                                    <li><a href="cart2.html">سبد خرید 2</a></li>
                                    <li><a href="cart-empty.html">سبد خرید خالی</a></li>
                                    <li><a href="checkout.html">پرداخت</a></li>
                                    <li><a href="checkout2.html">پرداخت 2</a></li>
                                    <li><a href="compare.html">مقایسه محصولات</a></li>
                                    <li><a href="compare2.html">مقایسه محصولات 2</a></li>
                                    <li><a href="wishlist.html">لیست علاقه مندی</a></li>
                                    <li><a href="gift-cart.html">کارت هدیه</a></li>
                                    <li><a href="dashboard.html">داشبورد</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="product.html" className="sf-with-ul">محصولات</a>
                                <ul>
                                    <li><a href="product.html">پیش فرض</a></li>
                                    <li><a href="product-centered.html">توضیحات وسط چین</a></li>
                                    <li><a href="product-extended.html"><span>توضیحات گسترده<span
                                        className="tip tip-new">جدید</span></span></a></li>
                                    <li><a href="product-gallery.html">گالری</a></li>
                                    <li><a href="product-sticky.html">اطلاعات چسبیده</a></li>
                                    <li className=""><a href="product-sidebar.html">صفحه جمع با سایدبار</a></li>
                                    <li><a href="product-fullwidth.html">تمام صفحه</a></li>
                                    <li><a href="product-masonry.html">اطلاعات چسبیده ماسونری</a></li>
                                    <li><a href="product-new-design.html">طراحی جدید</a></li>
                                </ul>
                            </li>
                            <li>
                                <a >صفحات</a>
                                <ul>
                                    <li>
                                        <a href="about.html" className="sf-with-ul">درباره ما</a>

                                        <ul style={{ display: "none" }}>
                                            <li><a href="about.html">درباره ما 01</a></li>
                                            <li><a href="about-2.html">درباره ما 02</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="contact.html" className="sf-with-ul">تماس با ما</a>

                                        <ul style={{ display: "none" }}>
                                            <li><a href="contact.html">تماس با ما 01</a></li>
                                            <li><a href="contact-2.html">تماس با ما 02</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="invoice-template/invoice-template.html" className="sf-with-ul">قالب
                                            فاکتور</a>

                                        <ul>
                                            <li><a href="invoice-template/invoice-template.html">قالب فاکتور 01</a>
                                            </li>
                                            <li><a href="invoice-template/invoice-template2.html">قالب فاکتور 02</a>
                                            </li>
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
                                <a href="blog.html">اخبار</a>

                                <ul>
                                    <li className=""><a href="blog.html">کلاسیک</a></li>
                                    <li><a href="blog-listing.html">لیست</a></li>
                                    <li>
                                        <a  className="sf-with-ul">شبکه بندی</a>
                                        <ul style={{ display: "none" }}>
                                            <li><a href="blog-grid-2cols.html">2 ستونه</a></li>
                                            <li><a href="blog-grid-3cols.html">3 ستونه</a></li>
                                            <li><a href="blog-grid-4cols.html">4 ستونه</a></li>
                                            <li><a href="blog-grid-sidebar.html">با سایدبار</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a  className="sf-with-ul">سایز های مختلف</a>
                                        <ul style={{ display: "none" }}>
                                            <li><a href="blog-masonry-2cols.html">2 ستونه</a></li>
                                            <li><a href="blog-masonry-3cols.html">3 ستونه</a></li>
                                            <li><a href="blog-masonry-4cols.html">4 ستونه</a></li>
                                            <li><a href="blog-masonry-sidebar.html">با سایدبار</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a  className="sf-with-ul">ماسک</a>
                                        <ul style={{ display: "none" }}>
                                            <li><a href="blog-mask-grid.html">نوع 1</a></li>
                                            <li><a href="blog-mask-masonry.html">نوع 2</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a  className="sf-with-ul">پست تکی</a>
                                        <ul style={{ display: "none" }}>
                                            <li><a href="single.html">پیش فرض با سایدبار</a></li>
                                            <li><a href="single-fullwidth.html">تمام صفحه بدون سایدبار</a></li>
                                            <li><a href="single-fullwidth-sidebar.html">تمام صفحه باسایدبار</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="elements-list.html">عناصر طراحی</a>
                                <ul>
                                    <li className=""><a href="elements-products.html">محصولات</a></li>
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

                    <div className="social-icons">
                        <a  className="social-icon" target="_blank" title="فیسبوک"><i className="icon-facebook-f"></i></a>
                        <a  className="social-icon" target="_blank" title="توییتر"><i className="icon-twitter"></i></a>
                        <a  className="social-icon" target="_blank" title="اینستاگرام"><i className="icon-instagram"></i></a>
                        <a  className="social-icon" target="_blank" title="یوتیوب"><i className="icon-youtube"></i></a>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="signin-modal" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="icon-close"></i></span>
                            </button>

                            <div className="form-box">
                                <div className="form-tab">
                                    <ul className="nav nav-pills nav-fill nav-border-anim" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="signin-tab" data-toggle="tab" href="#signin"
                                                role="tab" aria-controls="signin" aria-selected="true">ورود</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab"
                                                aria-controls="register" aria-selected="false">ثبت نام</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="tab-content-5">
                                        <div className="tab-pane fade show active" id="signin" role="tabpanel"
                                            aria-labelledby="signin-tab">
                                            <form action="#">
                                                <div className="form-group">
                                                    <label htmlFor="singin-email">نام کاربری یا آدرس ایمیل *</label>
                                                    {/* <input type="text" className="form-control" id="singin-email"
                                                        name="singin-email" required /> */}
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="singin-password">رمز عبور *</label>
                                                    {/* <input type="password" className="form-control" id="singin-password"
                                                        name="singin-password" required /> */}
                                                </div>

                                                <div className="form-footer">
                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span>ورود</span>
                                                        <i className="icon-long-arrow-left"></i>
                                                    </button>

                                                    <div className="custom-control custom-checkbox">
                                                        {/* <input type="checkbox" className="custom-control-input"
                                                            id="signin-remember" /> */}
                                                        <label className="custom-control-label" htmlFor="signin-remember">مرا به خاطر
                                                            بسپار</label>
                                                    </div>

                                                    <a  className="forgot-link">فراموشی رمز عبور؟</a>
                                                </div>
                                            </form>
                                            <div className="form-choice">
                                                <p className="text-center">یا ورود با</p>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <a  className="btn btn-login btn-g">
                                                            <i className="icon-google"></i>
                                                            حساب گوگل
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <a  className="btn btn-login btn-f">
                                                            <i className="icon-facebook-f"></i>
                                                            حساب فیسبوک
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                                            <form action="#">
                                                <div className="form-group">
                                                    <label htmlFor="register-email">آدرس ایمیل شما *</label>
                                                    {/* <input type="email" className="form-control" id="register-email"
                                                        name="register-email" required /> */}
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="register-password">رمز عبور *</label>
                                                    {/* <input type="password" className="form-control" id="register-password"
                                                        name="register-password" required /> */}
                                                </div>

                                                <div className="form-footer">
                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span>ثبت نام</span>
                                                        <i className="icon-long-arrow-left"></i>
                                                    </button>

                                                    <div className="custom-control custom-checkbox">
                                                        {/* <input type="checkbox" className="custom-control-input" id="register-policy"
                                                            required /> */}
                                                        <label className="custom-control-label" htmlFor="register-policy">با
                                                            <a >قوانین و مقررات </a>موافقم *</label>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="form-choice">
                                                <p className="text-center">یا عضویت با</p>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <a  className="btn btn-login btn-g">
                                                            <i className="icon-google"></i>
                                                            حساب گوگل
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <a  className="btn btn-login  btn-f">
                                                            <i className="icon-facebook-f"></i>
                                                            حساب فیسبوک
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}