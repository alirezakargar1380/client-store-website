// import Headers from '@/components/header'
import Image from 'next/image'
// import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <div className="page-wrapper">
        {/* <Headers /> */}
        <main className="main">
          <div className="intro-slider-container mb-5">
            <div className="intro-slider owl-carousel owl-theme owl-nav-inside owl-light" data-toggle="owl"
              data-owl-options='{
                        "dots": true,
                        "nav": false, 
                        "rtl": true, 
                            "responsive": {
                            "1200": {
                                "nav": true,
                                "dots": true
                            }
                        }
                    }'>
              <div className="intro-slide"
                style={{ backgroundImage: "url(assets/images/demos/demo-4/slider/slide-1.png)" }}>
                <div className="container intro-content">
                  <div className="row justify-content-end">
                    <div className="col-auto col-sm-7 col-md-6 col-lg-5">
                      <h3 className="intro-subtitle text-third">پیشنهاد و تبلیغات</h3>
                      <h1 className="intro-title">آیپد های</h1>
                      <h1 className="intro-title">هوشمند اپل</h1>

                      <div className="intro-price" dir="rtl">
                        <sup className="intro-old-price">349,000</sup>
                        <span className="text-third">
                          279,000 تومان
                        </span>
                      </div>

                      <a href="category.html" className="btn btn-primary btn-round">
                        <span>خرید</span>
                        <i className="icon-long-arrow-left"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="intro-slide"
                style={{ backgroundImage: "url(assets/images/demos/demo-4/slider/slide-2.png)" }}>
                <div className="container intro-content">
                  <div className="row justify-content-end">
                    <div className="col-auto col-sm-7 col-md-6 col-lg-5">
                      <h3 className="intro-subtitle text-primary">محصول جدید</h3>
                      <h1 className="intro-title">هدفون های جدید <br></br>
                        با کیفیت صوتی بالا </h1>

                      <div className="intro-price" dir="rtl">
                        <sup>امروز : </sup>
                        <span className="text-primary">
                          999,000 تومان
                        </span>

                        <a href="category.html" className="btn btn-primary btn-round">
                          <span>خرید</span>
                          <i className="icon-long-arrow-left"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <span className="slider-loader"></span>
          </div>
          <div className="container">
            <h2 className="title text-center mb-4 mt-4">دسته بندی های محبوب</h2>

            <div className="cat-blocks-container">
              <div className="row">
                <div className="col-6 col-sm-4 col-lg-2">
                  <a href="category.html" className="cat-block">
                    <figure>
                      <span>
                        <img src="assets/images/demos/demo-4/cats/1.png" alt="Category image" />
                      </span>
                    </figure>

                    <h3 className="cat-block-title">کامپیوتر و لپ تاپ</h3>
                  </a>
                </div>

                <div className="col-6 col-sm-4 col-lg-2">
                  <a href="category.html" className="cat-block">
                    <figure>
                      <span>
                        <img src="assets/images/demos/demo-4/cats/2.png" alt="Category image" />
                      </span>
                    </figure>
                    <h3 className="cat-block-title">دوربین دیجیتال</h3>
                  </a>
                </div>

                <div className="col-6 col-sm-4 col-lg-2">
                  <a href="category.html" className="cat-block">
                    <figure>
                      <span>
                        <img src="assets/images/demos/demo-4/cats/3.png" alt="Category image" />
                      </span>
                    </figure>

                    <h3 className="cat-block-title">گوشی هوشمند</h3>
                  </a>
                </div>

                <div className="col-6 col-sm-4 col-lg-2">
                  <a href="category.html" className="cat-block">
                    <figure>
                      <span>
                        <img src="assets/images/demos/demo-4/cats/4.png" alt="Category image" />
                      </span>
                    </figure>

                    <h3 className="cat-block-title">تلویزیون</h3>
                  </a>
                </div>

                <div className="col-6 col-sm-4 col-lg-2">
                  <a href="category.html" className="cat-block">
                    <figure>
                      <span>
                        <img src="assets/images/demos/demo-4/cats/5.png" alt="Category image" />
                      </span>
                    </figure>

                    <h3 className="cat-block-title">لوازم صوتی</h3>
                  </a>
                </div>

                <div className="col-6 col-sm-4 col-lg-2">
                  <a href="category.html" className="cat-block">
                    <figure>
                      <span>
                        <img src="assets/images/demos/demo-4/cats/6.png" alt="Category image" />
                      </span>
                    </figure>

                    <h3 className="cat-block-title">ساعت هوشمند</h3>
                  </a>
                </div>

              </div>
            </div>
          </div>

          <div className="mb-4"></div>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4">
                <div className="banner banner-overlay banner-overlay-light">
                  <a href="#">
                    <img src="assets/images/demos/demo-4/banners/banner-1.png" alt="بنر" />
                  </a>

                  <div className="banner-content">
                    <h4 className="banner-subtitle"><a href="#">تخفیف گوشی هوشمند</a></h4>
                    <h3 className="banner-title"><a href="#">15,000 تومان <strong>برای <br></br>
                      سامسونگ - گلکسی نوت
                      9</strong></a></h3>
                    <a href="#" className="banner-link">خرید<i className="icon-long-arrow-left"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="banner banner-overlay banner-overlay-light">
                  <a href="#">
                    <img src="assets/images/demos/demo-4/banners/banner-2.jpg" alt="بنر" />
                  </a>

                  <div className="banner-content">
                    <h4 className="banner-subtitle"><a href="#">پیشهاد روزانه</a></h4>

                    <h3 className="banner-title"><a href="#"><strong>هندزفری باس </strong> <br></br>
                      30% تخفیف</a>
                    </h3>
                    <a href="#" className="banner-link">خرید<i className="icon-long-arrow-left"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="banner banner-overlay banner-overlay-light">
                  <a href="#">
                    <img src="assets/images/demos/demo-4/banners/banner-3.png" alt="بنر" />
                  </a>

                  <div className="banner-content">
                    <h4 className="banner-subtitle"><a href="#">تخفیف شگفت انگیز</a></h4>

                    <h3 className="banner-title"><a href="#"><strong>دوربین 360 درجه</strong>
                      <br></br>
                      70,000
                      تومان</a></h3>
                    <a href="#" className="banner-link">خرید<i className="icon-long-arrow-left"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-3"></div>
          <div className="container new-arrivals">
            <div className="heading heading-flex mb-3">
              <div className="heading-left">
                <h2 className="title">محصولات جدید</h2>
              </div>

              <div className="heading-right">
                <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">

                  <li className="nav-item">
                    <a className="nav-link active" id="new-all-link" data-toggle="tab" href="#new-all-tab"
                      role="tab" aria-controls="new-all-tab" aria-selected="true">همه</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="new-tv-link" data-toggle="tab" href="#new-tv-tab" role="tab"
                      aria-controls="new-tv-tab" aria-selected="false">تلویزیون</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="new-computers-link" data-toggle="tab" href="#new-computers-tab"
                      role="tab" aria-controls="new-computers-tab" aria-selected="false">کامپیوتر</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="new-phones-link" data-toggle="tab" href="#new-phones-tab"
                      role="tab" aria-controls="new-phones-tab" aria-selected="false">موبایل و تب لت</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="new-watches-link" data-toggle="tab" href="#new-watches-tab"
                      role="tab" aria-controls="new-watches-tab" aria-selected="false">ساعت هوشمند</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="new-acc-link" data-toggle="tab" href="#new-acc-tab" role="tab"
                      aria-controls="new-acc-tab" aria-selected="false">لوازم جانبی</a>
                  </li>

                </ul>
              </div>
            </div>

            <div className="tab-content tab-content-carousel just-action-icons-sm">
              <div className="tab-pane p-0 fade show active" id="new-all-tab" role="tabpanel"
                aria-labelledby="new-all-link">
                <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl"
                  data-owl-options='{
                                "nav": true, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "rtl": true, 
                            "responsive": {
                                    "0": {
                                        "items":2
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
                                        "items":5
                                    }
                                }
                            }'>
                  <div className="product product-2">
                    <figure className="product-media">
                      <span className="product-label label-circle label-top">برتر</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                        <a href="#">لپ تاپ</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">لپ تاپ مک بوک پرو - 13 اینچ</a>
                      </h3>
                      <div className="product-price">
                        1,199,000 تومان
                      </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "100%" }}></div>
                        </div>
                        <span className="ratings-text">( 4 دیدگاه )</span>
                      </div>
                    </div>
                  </div>

                  <div className="product product-2">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-2.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                        <a href="#">لوازم صوتی</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">اسپیکر بلوتوث</a></h3>

                      <div className="product-price">
                        79,000 تومان
                      </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val"
                            style={{ width: "60%" }}
                          ></div>
                        </div>
                        <span className="ratings-text">( 6 دیدگاه )</span>
                      </div>
                    </div>
                  </div>

                  <div className="product product-2">
                    <figure className="product-media">
                      <span className="product-label label-circle label-new">جدید</span>
                      <span className="product-label label-circle label-sale">فروش ویژه</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                        <a href="#">تب لت</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">آیپد پرو اپل - سایز 11 اینچ - حافظه
                        256 گیگ</a></h3>
                      <div className="product-price">
                        899,000 تومان
                      </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "80%" }}></div>
                        </div>
                        <span className="ratings-text">( 4 دیدگاه )</span>
                      </div>

                      <div className="product-nav product-nav-dots">
                        <a href="#" style={{ background: "#edd2c8" }}><span className="sr-only">نام
                          رنگ</span></a>
                        <a href="#" style={{ background: "#eaeaec" }}><span className="sr-only">نام
                          رنگ</span></a>
                        <a href="#" className="active" style={{ background: "#333333" }}><span
                          className="sr-only">نام رنگ</span></a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="tab-pane p-0 fade" id="new-tv-tab" role="tabpanel" aria-labelledby="new-tv-link">
                <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl"
                  data-owl-options='{
                                "nav": true, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "rtl": true, 
                            "responsive": {
                                    "0": {
                                        "items":2
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
                                        "items":5
                                    }
                                }
                            }'>
                  <div className="product product-2">
                    <figure className="product-media">
                      <span className="product-label label-circle label-new">جدید</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                        <a href="#">تب لت</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">آیپد پرو اپل - سایز 11 اینچ - حافظه
                        256 گیگ</a></h3>
                      <div className="product-price">
                        899,000 تومان
                      </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "80%" }}></div>
                        </div>
                        <span className="ratings-text">( 4 دیدگاه )</span>
                      </div>

                      <div className="product-nav product-nav-dots">
                        <a href="#" style={{ background: "#edd2c8" }}><span className="sr-only">نام
                          رنگ</span></a>
                        <a href="#" style={{ background: "#eaeaec" }}><span className="sr-only">نام
                          رنگ</span></a>
                        <a href="#" className="active" style={{ background: "#333333" }}><span
                          className="sr-only">نام رنگ</span></a>
                      </div>
                    </div>
                  </div>

                  <div className="product product-2">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-2.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                        <a href="#">لوازم صوتی</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">اسپیکر بلوتوث</a></h3>

                      <div className="product-price">
                        79,000 تومان
                      </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "60%" }}></div>
                        </div>
                        <span className="ratings-text">( 6 دیدگاه )</span>
                      </div>
                    </div>
                  </div>

                  <div className="product product-2">
                    <figure className="product-media">
                      <span className="product-label label-circle label-top">برتر</span>
                      <span className="product-label label-circle label-sale">فروش ویژه</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-4.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                        <a href="#">موبایل</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">گوشی گوشی گوگل مدل پیکسل 3 - 128
                        گیگابایت</a></h3>

                      <div className="product-price">
                        <span className="new-price">35,000 تومان</span>
                        <span className="old-price">41,000</span>
                      </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "100%" }}></div>

                        </div>
                        <span className="ratings-text">( 10 دیدگاه )</span>
                      </div>

                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{ background: "#edd2c8" }}><span
                          className="sr-only">نام رنگ</span></a>
                        <a href="#" style={{ background: "#eaeaec" }}><span className="sr-only">نام
                          رنگ</span></a>
                        <a href="#" style={{ background: "#333333" }}><span className="sr-only">نام
                          رنگ</span></a>
                      </div>
                    </div>
                  </div>

                  <div className="product product-2">
                    <figure className="product-media">
                      <span className="product-label label-circle label-top">برتر</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-5.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                      <h3 className="product-title"><a href="product.html">تلویزیون ال ای دی سامسونگ - سایز 55
                        اینچ</a></h3>
                      <div className="product-price">
                        899,000 تومان
                      </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "60%" }} ></div>
                        </div>
                        <span className="ratings-text">( 5 دیدگاه )</span>
                      </div>
                    </div>
                  </div>

                  <div className="product product-2">
                    <figure className="product-media">
                      <span className="product-label label-circle label-top">برتر</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                        <a href="#">لپ تاپ</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">لپ تاپ مک بوک پرو - 13 اینچ</a>
                      </h3>
                      <div className="product-price">
                        1,199,000 تومان
                      </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "100%" }}></div>
                        </div>
                        <span className="ratings-text">( 4 دیدگاه )</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane p-0 fade" id="new-computers-tab" role="tabpanel"
                aria-labelledby="new-computers-link">
                <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl"
                  data-owl-options='{
                                "nav": true, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "rtl": true, 
                            "responsive": {
                                    "0": {
                                        "items":2
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
                                        "items":5
                                    }
                                }
                            }'>
                  <div className="product product-2">
                    <figure className="product-media">
                      <span className="product-label label-circle label-top">برتر</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-5.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                      <h3 className="product-title"><a href="product.html">تلویزیون ال ای دی سامسونگ - سایز 55
                        اینچ</a></h3>
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

                  <div className="product product-2">
                    <figure className="product-media">
                      <span className="product-label label-circle label-top">برتر</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                        <a href="#">لپ تاپ</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">لپ تاپ مک بوک پرو - 13 اینچ</a>
                      </h3>
                      <div className="product-price">
                        1,199,000 تومان
                      </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "100%" }}></div>

                        </div>
                        <span className="ratings-text">( 4 دیدگاه )</span>
                      </div>
                    </div>
                  </div>

                  <div className="product product-2">
                    <figure className="product-media">
                      <span className="product-label label-circle label-new">جدید</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                        <a href="#">تب لت</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">آیپد پرو اپل - سایز 11 اینچ - حافظه
                        256 گیگ</a></h3>
                      <div className="product-price">
                        899,000 تومان
                      </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "80%" }}></div>
                        </div>
                        <span className="ratings-text">( 4 دیدگاه )</span>
                      </div>

                      <div className="product-nav product-nav-dots">
                        <a href="#" style={{ background: "#edd2c8" }}><span className="sr-only">نام
                          رنگ</span></a>
                        <a href="#" style={{ background: "#eaeaec" }}><span className="sr-only">نام
                          رنگ</span></a>
                        <a href="#" className="active" style={{ background: "#333333" }}><span
                          className="sr-only">نام رنگ</span></a>
                      </div>
                    </div>
                  </div>

                  <div className="product product-2">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-2.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                        <a href="#">لوازم صوتی</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">اسپیکر بلوتوث</a></h3>

                      <div className="product-price">
                        79,000 تومان
                      </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "60%" }}></div>
                        </div>
                        <span className="ratings-text">( 6 دیدگاه )</span>
                      </div>
                    </div>
                  </div>

                  <div className="product product-2">
                    <figure className="product-media">
                      <span className="product-label label-circle label-top">برتر</span>
                      <span className="product-label label-circle label-sale">فروش ویژه</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-4.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                        <a href="#">موبایل</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">گوشی گوشی گوگل مدل پیکسل 3 - 128
                        گیگابایت</a></h3>

                      <div className="product-price">
                        <span className="new-price">35,000 تومان</span>
                        <span className="old-price">41,000</span>
                      </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "100%" }}></div>

                        </div>
                        <span className="ratings-text">( 10 دیدگاه )</span>
                      </div>

                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{ background: "#edd2c8" }}><span
                          className="sr-only">نام رنگ</span></a>
                        <a href="#" style={{ background: "#eaeaec" }}><span className="sr-only">نام
                          رنگ</span></a>
                        <a href="#" style={{ background: "#333333" }}><span className="sr-only">نام
                          رنگ</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane p-0 fade" id="new-phones-tab" role="tabpanel"
                aria-labelledby="new-phones-link">
                <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl"
                  data-owl-options='{
                                "nav": true, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "rtl": true, 
                            "responsive": {
                                    "0": {
                                        "items":2
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
                                        "items":5
                                    }
                                }
                            }'>
                  <div className="product product-2">
                    <figure className="product-media">
                      <span className="product-label label-circle label-top">برتر</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                        <a href="#">لپ تاپ</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">لپ تاپ مک بوک پرو - 13 اینچ</a>
                      </h3>
                      <div className="product-price">
                        1,199,000 تومان
                      </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "100%" }}></div>

                        </div>
                        <span className="ratings-text">( 4 دیدگاه )</span>
                      </div>
                    </div>
                  </div>

                  <div className="product product-2">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-2.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                        <a href="#">لوازم صوتی</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">اسپیکر بلوتوث</a></h3>

                      <div className="product-price">
                        79,000 تومان
                      </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "60%" }}></div>
                        </div>
                        <span className="ratings-text">( 6 دیدگاه )</span>
                      </div>
                    </div>
                  </div>

                  <div className="product product-2">
                    <figure className="product-media">
                      <span className="product-label label-circle label-new">جدید</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                        <a href="#">تب لت</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">آیپد پرو اپل - سایز 11 اینچ - حافظه
                        256 گیگ</a></h3>
                      <div className="product-price">
                        899,000 تومان
                      </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "80%" }}></div>
                        </div>
                        <span className="ratings-text">( 4 دیدگاه )</span>
                      </div>

                      <div className="product-nav product-nav-dots">
                        <a href="#" style={{ background: "#edd2c8" }}><span className="sr-only">نام
                          رنگ</span></a>
                        <a href="#" style={{ background: "#eaeaec" }}><span className="sr-only">نام
                          رنگ</span></a>
                        <a href="#" className="active" style={{ background: "#333333" }}><span
                          className="sr-only">نام رنگ</span></a>
                      </div>
                    </div>
                  </div>

                  <div className="product product-2">
                    <figure className="product-media">
                      <span className="product-label label-circle label-top">برتر</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-5.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                      <h3 className="product-title"><a href="product.html">تلویزیون ال ای دی سامسونگ - سایز 55
                        اینچ</a></h3>
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

                  <div className="product product-2">
                    <figure className="product-media">
                      <span className="product-label label-circle label-top">برتر</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                        <a href="#">لپ تاپ</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">لپ تاپ مک بوک پرو - 13 اینچ</a>
                      </h3>
                      <div className="product-price">
                        1,199,000 تومان
                      </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "100%" }}></div>

                        </div>
                        <span className="ratings-text">( 4 دیدگاه )</span>
                      </div>
                    </div>
                  </div>

                  <div className="product product-2">
                    <figure className="product-media">
                      <span className="product-label label-circle label-top">برتر</span>
                      <span className="product-label label-circle label-sale">فروش ویژه</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-4.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                        <a href="#">موبایل</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">گوشی گوشی گوگل مدل پیکسل 3 - 128
                        گیگابایت</a></h3>

                      <div className="product-price">
                        <span className="new-price">35,000 تومان</span>
                        <span className="old-price">41,000</span>
                      </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "100%" }}></div>

                        </div>
                        <span className="ratings-text">( 10 دیدگاه )</span>
                      </div>

                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{ background: "#edd2c8" }}><span
                          className="sr-only">نام رنگ</span></a>
                        <a href="#" style={{ background: "#eaeaec" }}><span className="sr-only">نام
                          رنگ</span></a>
                        <a href="#" style={{ background: "#333333" }}><span className="sr-only">نام
                          رنگ</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane p-0 fade" id="new-watches-tab" role="tabpanel"
                aria-labelledby="new-watches-link">
                <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl"
                  data-owl-options='{
                                "nav": true, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "rtl": true, 
                            "responsive": {
                                    "0": {
                                        "items":2
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
                                        "items":5
                                    }
                                }
                            }'>
                  <div className="product product-2">
                    <figure className="product-media">
                      <span className="product-label label-circle label-top">برتر</span>
                      <span className="product-label label-circle label-sale">فروش ویژه</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-4.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                        <a href="#">موبایل</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">گوشی گوشی گوگل مدل پیکسل 3 - 128
                        گیگابایت</a></h3>

                      <div className="product-price">
                        <span className="new-price">35,000 تومان</span>
                        <span className="old-price">41,000</span>
                      </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "100%" }}></div>

                        </div>
                        <span className="ratings-text">( 10 دیدگاه )</span>
                      </div>

                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{ background: "#edd2c8" }}><span
                          className="sr-only">نام رنگ</span></a>
                        <a href="#" style={{ background: "#eaeaec" }}><span className="sr-only">نام
                          رنگ</span></a>
                        <a href="#" style={{ background: "#333333" }}><span className="sr-only">نام
                          رنگ</span></a>
                      </div>
                    </div>
                  </div>

                  <div className="product product-2">
                    <figure className="product-media">
                      <span className="product-label label-circle label-top">برتر</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                        <a href="#">لپ تاپ</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">لپ تاپ مک بوک پرو - 13 اینچ</a>
                      </h3>
                      <div className="product-price">
                        1,199,000 تومان
                      </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "100%" }}></div>

                        </div>
                        <span className="ratings-text">( 4 دیدگاه )</span>
                      </div>
                    </div>
                  </div>

                  <div className="product product-2">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-2.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                        <a href="#">لوازم صوتی</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">اسپیکر بلوتوث</a></h3>

                      <div className="product-price">
                        79,000 تومان
                      </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "60%" }}></div>
                        </div>
                        <span className="ratings-text">( 6 دیدگاه )</span>
                      </div>
                    </div>
                  </div>

                  <div className="product product-2">
                    <figure className="product-media">
                      <span className="product-label label-circle label-new">جدید</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                        <a href="#">تب لت</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">آیپد پرو اپل - سایز 11 اینچ - حافظه
                        256 گیگ</a></h3>
                      <div className="product-price">
                        899,000 تومان
                      </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "80%" }}></div>
                        </div>
                        <span className="ratings-text">( 4 دیدگاه )</span>
                      </div>

                      <div className="product-nav product-nav-dots">
                        <a href="#" style={{ background: "#edd2c8" }}><span className="sr-only">نام
                          رنگ</span></a>
                        <a href="#" style={{ background: "#eaeaec" }}><span className="sr-only">نام
                          رنگ</span></a>
                        <a href="#" className="active" style={{ background: "#333333" }}><span
                          className="sr-only">نام رنگ</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane p-0 fade" id="new-acc-tab" role="tabpanel" aria-labelledby="new-acc-link">
                <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl"
                  data-owl-options='{
                                "nav": true, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "rtl": true, 
                            "responsive": {
                                    "0": {
                                        "items":2
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
                                        "items":5
                                    }
                                }
                            }'>
                  <div className="product product-2">
                    <figure className="product-media">
                      <span className="product-label label-circle label-top">برتر</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                        <a href="#">لپ تاپ</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">لپ تاپ مک بوک پرو - 13 اینچ</a>
                      </h3>
                      <div className="product-price">
                        1,199,000 تومان
                      </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "100%" }}></div>

                        </div>
                        <span className="ratings-text">( 4 دیدگاه )</span>
                      </div>
                    </div>
                  </div>

                  <div className="product product-2">
                    <figure className="product-media">
                      <span className="product-label label-circle label-top">برتر</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-5.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                      <h3 className="product-title"><a href="product.html">تلویزیون ال ای دی سامسونگ - سایز 55
                        اینچ</a></h3>
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

                  <div className="product product-2">
                    <figure className="product-media">
                      <span className="product-label label-circle label-top">برتر</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                        <a href="#">لپ تاپ</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">لپ تاپ مک بوک پرو - 13 اینچ</a>
                      </h3>
                      <div className="product-price">
                        1,199,000 تومان
                      </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "100%" }}></div>
                        </div>
                        <span className="ratings-text">( 4 دیدگاه )</span>
                      </div>
                    </div>
                  </div>

                  <div className="product product-2">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-2.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                        <a href="#">لوازم صوتی</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">اسپیکر بلوتوث</a></h3>

                      <div className="product-price">
                        79,000 تومان
                      </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "60%" }}></div>
                        </div>
                        <span className="ratings-text">( 6 دیدگاه )</span>
                      </div>
                    </div>
                  </div>

                  <div className="product product-2">
                    <figure className="product-media">
                      <span className="product-label label-circle label-new">جدید</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="تصویر محصول"
                          className="product-image" />
                      </a>

                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist"
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
                        <a href="#">تب لت</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">آیپد پرو اپل - سایز 11 اینچ - حافظه
                        256 گیگ</a></h3>
                      <div className="product-price">
                        899,000 تومان
                      </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "80%" }}></div>
                        </div>
                        <span className="ratings-text">( 4 دیدگاه )</span>
                      </div>

                      <div className="product-nav product-nav-dots">
                        <a href="#" style={{ background: "#edd2c8" }}><span className="sr-only">نام
                          رنگ</span></a>
                        <a href="#" style={{ background: "#eaeaec" }}><span className="sr-only">نام
                          رنگ</span></a>
                        <a href="#" className="active" style={{ background: "#333333" }}><span
                          className="sr-only">نام رنگ</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6"></div>

          <div className="container">
            <div className="cta cta-border mb-5" style={{ backgroundImage: "url(assets/images/demos/demo-4/bg-1.jpg)" }}>
              <img src="assets/images/demos/demo-4/camera.png" alt="camera" className="cta-img" />
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <div className="cta-content">
                    <div className="cta-text text-left text-white">
                      <p>پیشنهاد ویژه امروز <br /><strong> مدیا پلیر جدید</strong></p>
                    </div>
                    <a href="#" className="btn btn-primary btn-round"><span>خرید - 429,000 تومان</span><i
                      className="icon-long-arrow-left"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="heading text-center mb-3">
              <h2 className="title text-center">پیشنهاد و تخفیف</h2>
              <p className="title-desc text-center">پیشنهادهای شگفت انگیز امروز</p>
            </div>

            <div className="row">
              <div className="col-lg-6 deal-col">
                <div className="deal" style={{ backgroundImage: "url('assets/images/demos/demo-4/deal/bg-1.jpg')" }}>
                  <div className="deal-top">
                    <h2>پیشنهاد امروز</h2>
                    <h4>تعداد محدود </h4>
                  </div>

                  <div className="deal-content">
                    <h3 className="product-title"><a href="product.html">اسپیکر خانگی هوشمند</a></h3>


                    <div className="product-price">
                      <span className="new-price">129,000 تومان</span>
                      <span className="old-price">150,000</span>
                    </div>

                    <a href="product.html" className="btn btn-link"><span>خرید</span><i
                      className="icon-long-arrow-left"></i></a>
                  </div>

                  <div className="deal-bottom">
                    <div className="deal-countdown daily-deal-countdown" data-until="+10h"></div>

                  </div>
                </div>
              </div>

              <div className="col-lg-6 deal-col">
                <div className="deal" style={{ backgroundImage: "url('assets/images/demos/demo-4/deal/bg-2.jpg')" }}>
                  <div className="deal-top">
                    <h2>پیشنهاد ویژه برای شما</h2>
                    <h4>وارد شوید و پیشنهادهای ویژه مخصوص خود را مشاهده کنید</h4>
                  </div>

                  <div className="deal-content">
                    <h3 className="product-title"><a href="product.html">شارژر بی سیم آیفون / اندروید</a></h3>


                    <div className="product-price">
                      <span className="new-price">299,000 تومان</span>
                    </div>

                    <a href="login.html" className="btn btn-link"><span>وارد شوید و پول خود را ذخیره
                      کنید</span><i className="icon-long-arrow-left"></i></a>
                  </div>

                  <div className="deal-bottom">
                    <div className="deal-countdown offer-countdown" data-until="+11d"></div>

                  </div>
                </div>
              </div>
            </div>

            <div className="more-container text-center mt-1 mb-5">
              <a href="#" className="btn btn-outline-dark-2 btn-round btn-more"><span>مشاهده تخفیف های بیشتر</span><i
                className="icon-long-arrow-left"></i></a>
            </div>
          </div>

          <div className="container">
            <hr className="mb-0" />
            <div className="owl-carousel mt-5 mb-5 owl-simple" data-toggle="owl" data-owl-options='{
                                                                                "nav": false, 
                                                                                "dots": false,
                                                                                "margin": 30,
                                                                                "loop": false,
                                                                                "rtl": true, 
                                                                                    "responsive": {
                                                                                    "0": {
                                                                                        "items":2
                                                                                    },
                                                                                    "420": {
                                                                                        "items":3
                                                                                    },
                                                                                    "600": {
                                                                                        "items":4
                                                                                    },
                                                                                    "900": {
                                                                                        "items":5
                                                                                    },
                                                                                    "1024": {
                                                                                        "items":6
                                                                                    }
                                                                                }
                                                                            }'>
              <a href="#" className="brand">
                <img src="assets/images/brands/1.png" alt="نام برند" />
              </a>

              <a href="#" className="brand">
                <img src="assets/images/brands/2.png" alt="نام برند" />
              </a>

              <a href="#" className="brand">
                <img src="assets/images/brands/3.png" alt="نام برند" />
              </a>

              <a href="#" className="brand">
                <img src="assets/images/brands/4.png" alt="نام برند" />
              </a>

              <a href="#" className="brand">
                <img src="assets/images/brands/5.png" alt="نام برند" />
              </a>

              <a href="#" className="brand">
                <img src="assets/images/brands/6.png" alt="نام برند" />
              </a>
            </div>
          </div>

          <div className="bg-light pt-5 pb-6">
            <div className="container trending-products">
              <div className="heading heading-flex mb-3">
                <div className="heading-left">
                  <h2 className="title">محصولات برتر</h2>
                </div>

                <div className="heading-right">
                  <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="trending-top-link" data-toggle="tab"
                        href="#trending-top-tab" role="tab" aria-controls="trending-top-tab"
                        aria-selected="true">محبوب ترین</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="trending-best-link" data-toggle="tab"
                        href="#trending-best-tab" role="tab" aria-controls="trending-best-tab"
                        aria-selected="false">بیش ترین فروش</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="trending-sale-link" data-toggle="tab"
                        href="#trending-sale-tab" role="tab" aria-controls="trending-sale-tab"
                        aria-selected="false">جدیدترین</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-5col d-none d-xl-block">
                  <div className="banner">
                    <a href="#">
                      <img src="assets/images/demos/demo-4/banners/banner-4.jpg" alt="بنر" />
                    </a>
                  </div>
                </div>

                <div className="col-xl-4-5col">
                  <div className="tab-content tab-content-carousel just-action-icons-sm">
                    <div className="tab-pane p-0 fade show active" id="trending-top-tab" role="tabpanel"
                      aria-labelledby="trending-top-link">
                      <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                        data-toggle="owl" data-owl-options='{
                              "nav": true, 
                              "dots": false,
                              "margin": 20,
                              "loop": false,
                              "rtl": true, 
              "responsive": {
                                  "0": {
                                      "items":2
                                  },
                                  "480": {
                                      "items":2
                                  },
                                  "768": {
                                      "items":3
                                  },
                                  "992": {
                                      "items":4
                                  }
                              }
                          }'>
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-top">برتر</span>
                            <a href="product.html">
                              <img src="assets/images/demos/demo-4/products/product-6.jpg"
                                alt="تصویر محصول" className="product-image" />
                            </a>

                            <div className="product-action-vertical">
                              <a href="#" className="btn-product-icon btn-wishlist"
                                title="افزودن به لیست علاقه مندی"></a>
                            </div>

                            <div className="product-action">
                              <a href="#" className="btn-product btn-cart"
                                title="افزودن به سبد خرید"><span>افزودن به سبد خرید</span></a>
                              <a href="popup/quickView.html" className="btn-product btn-quickview"
                                title="مشاهده سریع محصول"><span>مشاهده سریع</span></a>
                            </div>
                          </figure>

                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">هدفون</a>
                            </div>
                            <h3 className="product-title"><a href="product.html">هندزفری بی سیم</a></h3>

                            <div className="product-price">
                              199,000 تومان
                            </div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div className="ratings-val" style={{ width: "100%" }}></div>

                              </div>
                              <span className="ratings-text">( 4 دیدگاه )</span>
                            </div>

                            <div className="product-nav product-nav-dots">
                              <a href="#" style={{ background: "#69b4ff" }}><span className="sr-only">Color
                                name</span></a>
                              <a href="#" style={{ background: "#ff887f" }}><span className="sr-only">Color
                                name</span></a>
                              <a href="#" className="active" style={{ background: "#333333" }}><span
                                className="sr-only">نام رنگ</span></a>
                            </div>
                          </div>
                        </div>

                        <div className="product product-2">
                          <figure className="product-media">
                            <a href="product.html">
                              <img src="assets/images/demos/demo-4/products/product-7.jpg"
                                alt="تصویر محصول" className="product-image" />
                            </a>

                            <div className="product-action-vertical">
                              <a href="#" className="btn-product-icon btn-wishlist"
                                title="افزودن به لیست علاقه مندی"></a>
                            </div>

                            <div className="product-action">
                              <a href="#" className="btn-product btn-cart"
                                title="افزودن به سبد خرید"><span>افزودن به سبد خرید</span></a>
                              <a href="popup/quickView.html" className="btn-product btn-quickview"
                                title="مشاهده سریع محصول"><span>مشاهده سریع</span></a>
                            </div>
                          </figure>

                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">بازی ویدیویی</a>
                            </div>
                            <h3 className="product-title"><a href="product.html">دستگاه ایکس باکس وان
                              500GB</a></h3>
                            <div className="product-price">
                              279,000 تومان
                            </div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div className="ratings-val" style={{ width: "60%" }}></div>

                              </div>
                              <span className="ratings-text">( 6 دیدگاه )</span>
                            </div>
                          </div>
                        </div>

                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-new">جدید</span>
                            <a href="product.html">
                              <img src="assets/images/demos/demo-4/products/product-8.jpg"
                                alt="تصویر محصول" className="product-image" />
                            </a>

                            <div className="product-action-vertical">
                              <a href="#" className="btn-product-icon btn-wishlist"
                                title="افزودن به لیست علاقه مندی"></a>
                            </div>

                            <div className="product-action">
                              <a href="#" className="btn-product btn-cart"
                                title="افزودن به سبد خرید"><span>افزودن به سبد خرید</span></a>
                              <a href="popup/quickView.html" className="btn-product btn-quickview"
                                title="مشاهده سریع محصول"><span>مشاهده سریع</span></a>
                            </div>
                          </figure>

                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">ساعت هوشمند</a>
                            </div>
                            <h3 className="product-title"><a href="product.html">ساعت اپل - سری 4 جنس
                              صفحه آلمینیومی</a></h3>
                            <div className="product-price">
                              499,000 تومان
                            </div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div className="ratings-val" style={{ width: "80%" }}></div>

                              </div>
                              <span className="ratings-text">( 4 دیدگاه )</span>
                            </div>

                            <div className="product-nav product-nav-dots">
                              <a href="#" style={{ background: "#edd2c8" }}><span className="sr-only">Color
                                name</span></a>
                              <a href="#" style={{ background: "#eaeaec" }}><span className="sr-only">Color
                                name</span></a>
                              <a href="#" className="active" style={{ background: "#333333" }}><span
                                className="sr-only">نام رنگ</span></a>
                            </div>
                          </div>
                        </div>

                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-top">برتر</span>
                            <span className="product-label label-circle label-sale">فروش ویژه</span>
                            <a href="product.html">
                              <img src="assets/images/demos/demo-4/products/product-9.jpg"
                                alt="تصویر محصول" className="product-image" />
                            </a>

                            <div className="product-action-vertical">
                              <a href="#" className="btn-product-icon btn-wishlist"
                                title="افزودن به لیست علاقه مندی"></a>
                            </div>

                            <div className="product-action">
                              <a href="#" className="btn-product btn-cart"
                                title="افزودن به سبد خرید"><span>افزودن به سبد خرید</span></a>
                              <a href="popup/quickView.html" className="btn-product btn-quickview"
                                title="مشاهده سریع محصول"><span>مشاهده سریع</span></a>
                            </div>
                          </figure>

                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">تلویزیون و سینما خانگی</a>
                            </div>
                            <h3 className="product-title"><a href="product.html">تلویزیون ال ای دی
                              سونی</a></h3>
                            <div className="product-price">
                              <span className="new-price">1,699,000 تومان</span>
                              <span className="old-price">1,999,000</span>
                            </div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div className="ratings-val" style={{ width: "80%" }}></div>

                              </div>
                              <span className="ratings-text">( 10 دیدگاه )</span>
                            </div>
                          </div>
                        </div>

                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-new">جدید</span>
                            <a href="product.html">
                              <img src="assets/images/demos/demo-4/products/product-3.jpg"
                                alt="تصویر محصول" className="product-image" />
                            </a>

                            <div className="product-action-vertical">
                              <a href="#" className="btn-product-icon btn-wishlist"
                                title="افزودن به لیست علاقه مندی"></a>
                            </div>

                            <div className="product-action">
                              <a href="#" className="btn-product btn-cart"
                                title="افزودن به سبد خرید"><span>افزودن به سبد خرید</span></a>
                              <a href="popup/quickView.html" className="btn-product btn-quickview"
                                title="مشاهده سریع محصول"><span>مشاهده سریع</span></a>
                            </div>
                          </figure>

                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">تب لت</a>
                            </div>
                            <h3 className="product-title"><a href="product.html">آیپد اپل - سایز 11 اینچ
                              - 256 گیگ</a></h3>
                            <div className="product-price">
                              899,000 تومان
                            </div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div className="ratings-val" style={{ width: "80%" }}></div>

                              </div>
                              <span className="ratings-text">( 4 دیدگاه )</span>
                            </div>

                            <div className="product-nav product-nav-dots">
                              <a href="#" style={{ background: "#edd2c8" }}><span className="sr-only">Color
                                name</span></a>
                              <a href="#" style={{ background: "#eaeaec" }}><span className="sr-only">Color
                                name</span></a>
                              <a href="#" className="active" style={{ background: "#333333" }}><span
                                className="sr-only">نام رنگ</span></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane p-0 fade" id="trending-best-tab" role="tabpanel"
                      aria-labelledby="trending-best-link">
                      <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                        data-toggle="owl" data-owl-options='{
                              "nav": true, 
                              "dots": false,
                              "margin": 20,
                              "loop": false,
                              "rtl": true, 
              "responsive": {
                                  "0": {
                                      "items":2
                                  },
                                  "480": {
                                      "items":2
                                  },
                                  "768": {
                                      "items":3
                                  },
                                  "992": {
                                      "items":4
                                  }
                              }
                          }'>
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-new">جدید</span>
                            <a href="product.html">
                              <img src="assets/images/demos/demo-4/products/product-3.jpg"
                                alt="تصویر محصول" className="product-image" />
                            </a>

                            <div className="product-action-vertical">
                              <a href="#" className="btn-product-icon btn-wishlist"
                                title="افزودن به لیست علاقه مندی"></a>
                            </div>

                            <div className="product-action">
                              <a href="#" className="btn-product btn-cart"
                                title="افزودن به سبد خرید"><span>افزودن به سبد خرید</span></a>
                              <a href="popup/quickView.html" className="btn-product btn-quickview"
                                title="مشاهده سریع محصول"><span>مشاهده سریع</span></a>
                            </div>
                          </figure>

                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">تب لت</a>
                            </div>
                            <h3 className="product-title"><a href="product.html">آیپد اپل - سایز 11 اینچ
                              - 256 گیگ</a></h3>
                            <div className="product-price">
                              899,000 تومان
                            </div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div className="ratings-val" style={{ width: "80%" }}></div>

                              </div>
                              <span className="ratings-text">( 4 دیدگاه )</span>
                            </div>

                            <div className="product-nav product-nav-dots">
                              <a href="#" style={{ background: "#edd2c8" }}><span className="sr-only">Color
                                name</span></a>
                              <a href="#" style={{ background: "#eaeaec" }}><span className="sr-only">Color
                                name</span></a>
                              <a href="#" className="active" style={{ background: "#333333" }}><span
                                className="sr-only">نام رنگ</span></a>
                            </div>
                          </div>
                        </div>

                        <div className="product product-2">
                          <figure className="product-media">
                            <a href="product.html">
                              <img src="assets/images/demos/demo-4/products/product-2.jpg"
                                alt="تصویر محصول" className="product-image" />
                            </a>

                            <div className="product-action-vertical">
                              <a href="#" className="btn-product-icon btn-wishlist"
                                title="افزودن به لیست علاقه مندی"></a>
                            </div>

                            <div className="product-action">
                              <a href="#" className="btn-product btn-cart"
                                title="افزودن به سبد خرید"><span>افزودن به سبد خرید</span></a>
                              <a href="popup/quickView.html" className="btn-product btn-quickview"
                                title="مشاهده سریع محصول"><span>مشاهده سریع</span></a>
                            </div>
                          </figure>

                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">لوازم صوتی</a>
                            </div>
                            <h3 className="product-title"><a href="product.html">Bose - SoundLink
                              Bluetooth Speaker</a></h3>
                            <div className="product-price">
                              79,000 تومان
                            </div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div className="ratings-val" style={{ width: "60%" }}></div>

                              </div>
                              <span className="ratings-text">( 6 دیدگاه )</span>
                            </div>
                          </div>
                        </div>

                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-top">برتر</span>
                            <span className="product-label label-circle label-sale">فروش ویژه</span>
                            <a href="product.html">
                              <img src="assets/images/demos/demo-4/products/product-4.jpg"
                                alt="تصویر محصول" className="product-image" />
                            </a>

                            <div className="product-action-vertical">
                              <a href="#" className="btn-product-icon btn-wishlist"
                                title="افزودن به لیست علاقه مندی"></a>
                            </div>

                            <div className="product-action">
                              <a href="#" className="btn-product btn-cart"
                                title="افزودن به سبد خرید"><span>افزودن به سبد خرید</span></a>
                              <a href="popup/quickView.html" className="btn-product btn-quickview"
                                title="مشاهده سریع محصول"><span>مشاهده سریع</span></a>
                            </div>
                          </figure>

                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">موبایل</a>
                            </div>
                            <h3 className="product-title"><a href="product.html">گوشی Google - مدل Pixel
                              3 XL -
                              حافظه 128 گیگ</a></h3>
                            <div className="product-price">
                              <span className="new-price">35,000 تومان</span>
                              <span className="old-price">41,000</span>
                            </div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div className="ratings-val" style={{ width: "100%" }}></div>

                              </div>
                              <span className="ratings-text">( 10 دیدگاه )</span>
                            </div>

                            <div className="product-nav product-nav-dots">
                              <a href="#" className="active" style={{ background: "#edd2c8" }}><span
                                className="sr-only">نام رنگ</span></a>
                              <a href="#" style={{ background: "#eaeaec" }}><span className="sr-only">Color
                                name</span></a>
                              <a href="#" style={{ background: "#333333" }}><span className="sr-only">Color
                                name</span></a>
                            </div>
                          </div>
                        </div>

                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-top">برتر</span>
                            <a href="product.html">
                              <img src="assets/images/demos/demo-4/products/product-5.jpg"
                                alt="تصویر محصول" className="product-image" />
                            </a>

                            <div className="product-action-vertical">
                              <a href="#" className="btn-product-icon btn-wishlist"
                                title="افزودن به لیست علاقه مندی"></a>
                            </div>

                            <div className="product-action">
                              <a href="#" className="btn-product btn-cart"
                                title="افزودن به سبد خرید"><span>افزودن به سبد خرید</span></a>
                              <a href="popup/quickView.html" className="btn-product btn-quickview"
                                title="مشاهده سریع محصول"><span>مشاهده سریع</span></a>
                            </div>
                          </figure>

                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">تلویزیون و سینما خانگی</a>
                            </div>
                            <h3 className="product-title"><a href="product.html">Samsung - 55" className LED
                              2160p Smart</a></h3>
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

                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-top">برتر</span>
                            <a href="product.html">
                              <img src="assets/images/demos/demo-4/products/product-1.jpg"
                                alt="تصویر محصول" className="product-image" />
                            </a>

                            <div className="product-action-vertical">
                              <a href="#" className="btn-product-icon btn-wishlist"
                                title="افزودن به لیست علاقه مندی"></a>
                            </div>

                            <div className="product-action">
                              <a href="#" className="btn-product btn-cart"
                                title="افزودن به سبد خرید"><span>افزودن به سبد خرید</span></a>
                              <a href="popup/quickView.html" className="btn-product btn-quickview"
                                title="مشاهده سریع محصول"><span>مشاهده سریع</span></a>
                            </div>
                          </figure>

                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">لپ تاپ</a>
                            </div>
                            <h3 className="product-title"><a href="product.html">لپ تاپ MacBook Pro -
                              سایز 13 اینچ</a></h3>
                            <div className="product-price">
                              1,199,000 تومان
                            </div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div className="ratings-val" style={{ width: "100%" }}></div>

                              </div>
                              <span className="ratings-text">( 4 دیدگاه )</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane p-0 fade" id="trending-sale-tab" role="tabpanel"
                      aria-labelledby="trending-sale-link">
                      <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                        data-toggle="owl" data-owl-options='{
                              "nav": true, 
                              "dots": false,
                              "margin": 20,
                              "loop": false,
                              "rtl": true, 
              "responsive": {
                                  "0": {
                                      "items":2
                                  },
                                  "480": {
                                      "items":2
                                  },
                                  "768": {
                                      "items":3
                                  },
                                  "992": {
                                      "items":4
                                  }
                              }
                          }'>
                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-new">جدید</span>
                            <a href="product.html">
                              <img src="assets/images/demos/demo-4/products/product-8.jpg"
                                alt="تصویر محصول" className="product-image" />
                            </a>

                            <div className="product-action-vertical">
                              <a href="#" className="btn-product-icon btn-wishlist"
                                title="افزودن به لیست علاقه مندی"></a>
                            </div>

                            <div className="product-action">
                              <a href="#" className="btn-product btn-cart"
                                title="افزودن به سبد خرید"><span>افزودن به سبد خرید</span></a>
                              <a href="popup/quickView.html" className="btn-product btn-quickview"
                                title="مشاهده سریع محصول"><span>مشاهده سریع</span></a>
                            </div>
                          </figure>

                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">ساعت هوشمند</a>
                            </div>
                            <h3 className="product-title"><a href="product.html">ساعت اپل - سری 4 جنس
                              صفحه آلمینیومی</a></h3>
                            <div className="product-price">
                              499,000 تومان
                            </div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div className="ratings-val" style={{ width: "80%" }}></div>

                              </div>
                              <span className="ratings-text">( 4 دیدگاه )</span>
                            </div>

                            <div className="product-nav product-nav-dots">
                              <a href="#" style={{ background: "#edd2c8" }}><span className="sr-only">Color
                                name</span></a>
                              <a href="#" style={{ background: "#eaeaec" }}><span className="sr-only">Color
                                name</span></a>
                              <a href="#" className="active" style={{ background: "#333333" }}><span
                                className="sr-only">نام رنگ</span></a>
                            </div>
                          </div>
                        </div>

                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-top">برتر</span>
                            <a href="product.html">
                              <img src="assets/images/demos/demo-4/products/product-6.jpg"
                                alt="تصویر محصول" className="product-image" />
                            </a>

                            <div className="product-action-vertical">
                              <a href="#" className="btn-product-icon btn-wishlist"
                                title="افزودن به لیست علاقه مندی"></a>
                            </div>

                            <div className="product-action">
                              <a href="#" className="btn-product btn-cart"
                                title="افزودن به سبد خرید"><span>افزودن به سبد خرید</span></a>
                              <a href="popup/quickView.html" className="btn-product btn-quickview"
                                title="مشاهده سریع محصول"><span>مشاهده سریع</span></a>
                            </div>
                          </figure>

                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">هدفون</a>
                            </div>
                            <h3 className="product-title"><a href="product.html">هندزفری بی سیم</a></h3>

                            <div className="product-price">
                              199,000 تومان
                            </div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div className="ratings-val" style={{ width: "100%" }}></div>

                              </div>
                              <span className="ratings-text">( 4 دیدگاه )</span>
                            </div>

                            <div className="product-nav product-nav-dots">
                              <a href="#" style={{ background: "#69b4ff" }}><span className="sr-only">Color
                                name</span></a>
                              <a href="#" style={{ background: "#ff887f" }}><span className="sr-only">Color
                                name</span></a>
                              <a href="#" className="active" style={{ background: "#333333" }}><span
                                className="sr-only">نام رنگ</span></a>
                            </div>
                          </div>
                        </div>

                        <div className="product product-2">
                          <figure className="product-media">
                            <a href="product.html">
                              <img src="assets/images/demos/demo-4/products/product-7.jpg"
                                alt="تصویر محصول" className="product-image" />
                            </a>

                            <div className="product-action-vertical">
                              <a href="#" className="btn-product-icon btn-wishlist"
                                title="افزودن به لیست علاقه مندی"></a>
                            </div>

                            <div className="product-action">
                              <a href="#" className="btn-product btn-cart"
                                title="افزودن به سبد خرید"><span>افزودن به سبد خرید</span></a>
                              <a href="popup/quickView.html" className="btn-product btn-quickview"
                                title="مشاهده سریع محصول"><span>مشاهده سریع</span></a>
                            </div>
                          </figure>

                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">بازی ویدیویی</a>
                            </div>
                            <h3 className="product-title"><a href="product.html">دستگاه ایکس باکس وان
                              500GB</a></h3>
                            <div className="product-price">
                              279,000 تومان
                            </div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div className="ratings-val" style={{ width: "60%" }}></div>

                              </div>
                              <span className="ratings-text">( 6 دیدگاه )</span>
                            </div>
                          </div>
                        </div>

                        <div className="product product-2">
                          <figure className="product-media">
                            <span className="product-label label-circle label-new">جدید</span>
                            <a href="product.html">
                              <img src="assets/images/demos/demo-4/products/product-3.jpg"
                                alt="تصویر محصول" className="product-image" />
                            </a>

                            <div className="product-action-vertical">
                              <a href="#" className="btn-product-icon btn-wishlist"
                                title="افزودن به لیست علاقه مندی"></a>
                            </div>

                            <div className="product-action">
                              <a href="#" className="btn-product btn-cart"
                                title="افزودن به سبد خرید"><span>افزودن به سبد خرید</span></a>
                              <a href="popup/quickView.html" className="btn-product btn-quickview"
                                title="مشاهده سریع محصول"><span>مشاهده سریع</span></a>
                            </div>
                          </figure>

                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">تب لت</a>
                            </div>
                            <h3 className="product-title"><a href="product.html">آیپد اپل - سایز 11 اینچ
                              - 256 گیگ</a></h3>
                            <div className="product-price">
                              899,000 تومان
                            </div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div className="ratings-val" style={{ width: "80%" }}></div>

                              </div>
                              <span className="ratings-text">( 4 دیدگاه )</span>
                            </div>

                            <div className="product-nav product-nav-dots">
                              <a href="#" style={{ background: "#edd2c8" }}><span className="sr-only">Color
                                name</span></a>
                              <a href="#" style={{ background: "#eaeaec" }}><span className="sr-only">Color
                                name</span></a>
                              <a href="#" className="active" style={{ background: "#333333" }}><span
                                className="sr-only">نام رنگ</span></a>
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

          {/* <div className="mb-5"></div><!-- End .mb-5 --> */}

          {/* <div className="container for-you"> */}
          {/* <div className="heading heading-flex mb-3">
  <div className="heading-left">
    <h2 className="title">پیشنهاد برای شما</h2>
  </div>

  <div className="heading-right">
    <a href="#" className="title-link">مشاهده همه پیشنهادها <i className="icon-long-arrow-left"></i></a>
  </div>
</div> */}

          {/* <div className="products">
  <div className="row justify-content-center">
    <div className="col-6 col-md-4 col-lg-3">
      <div className="product product-2">
        <figure className="product-media">
          <span className="product-label label-circle label-sale">فروش ویژه</span>
          <a href="product.html">
            <img src="assets/images/demos/demo-4/products/product-10.jpg" alt="تصویر محصول"
              className="product-image">
          </a>

          <div className="product-action-vertical">
            <a href="#" className="btn-product-icon btn-wishlist"
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
            <a href="#">هدفون</a>
          </div>
          <h3 className="product-title"><a href="product.html">هدفون وایرلس بیتس </a></h3>
          
          <div className="product-price">
            <span className="new-price">279,000 تومان</span>
            <span className="old-price">349,000</span>
          </div>
          <div className="ratings-container">
            <div className="ratings">
              <div className="ratings-val" style="width: 40%;"></div>
            </div>
            <span className="ratings-text">( 4 دیدگاه )</span>
          </div>

          <div className="product-nav product-nav-dots">
            <a href="#" className="active" style="background: #666666;"><span
              className="sr-only">نام رنگ</span></a>
            <a href="#" style="background: #ff887f;"><span className="sr-only">نام
              رنگ</span></a>
            <a href="#" style="background: #6699cc;"><span className="sr-only">نام
              رنگ</span></a>
            <a href="#" style="background: #f3dbc1;"><span className="sr-only">نام
              رنگ</span></a>
            <a href="#" style={{background: "#eaeaec"}}><span className="sr-only">نام
              رنگ</span></a>
          </div>
        </div>
      </div>
    </div><!-- End .col-sm-6 col-md-4 col-lg-3 -->

    {/* <div className="col-6 col-md-4 col-lg-3">
      <div className="product product-2">
        <figure className="product-media">
          <a href="product.html">
            <img src="assets/images/demos/demo-4/products/product-11.jpg" alt="تصویر محصول"
              className="product-image">
          </a>

          <div className="product-action-vertical">
            <a href="#" className="btn-product-icon btn-wishlist"
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
            <a href="#">دوربین فیلمبرداری</a>
          </div>
          <h3 className="product-title"><a href="product.html">دوربین عکاسی 360 درجه ضد آب</a>
          </h3>
          <div className="product-price">
            349,000 تومان
          </div>
          <div className="ratings-container">
            <div className="ratings">
              <div className="ratings-val" style={{ width: "60%" }}></div>
            </div>
            <span className="ratings-text">( 2 دیدگاه )</span>
          </div>
        </div>
      </div>
    </div><!-- End .col-sm-6 col-md-4 col-lg-3 --> */}

          {/* <div className="col-6 col-md-4 col-lg-3">
      <div className="product product-2">
        <figure className="product-media">
          <span className="product-label label-circle label-new">جدید</span>
          <a href="product.html">
            <img src="assets/images/demos/demo-4/products/product-12.jpg" alt="تصویر محصول"
              className="product-image">
              <img src="assets/images/demos/demo-4/products/product-12-2.jpg"
                alt="تصویر محصول" className="product-image-hover">
              </a>

              <div className="product-action-vertical">
                <a href="#" className="btn-product-icon btn-wishlist"
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
                <a href="#">ساعت هوشمند</a>
              </div>
              <h3 className="product-title"><a href="product.html">ساعت اپل - با بند سفید اسپورت</a>
              </h3>
              <div className="product-price">
                214,000 تومان
              </div>
              <div className="ratings-container">
                <div className="ratings">
                  <div className="ratings-val" style="width: 0%;"></div>
                </div>
                <span className="ratings-text">( 0 دیدگاه )</span>
              </div>

              <div className="product-nav product-nav-dots">
                <a href="#" className="active" style="background: #e2e2e2;"><span
                  className="sr-only">نام رنگ</span></a>
                <a href="#" style={{background: "#333333"}}><span className="sr-only">نام
                  رنگ</span></a>
                <a href="#" style="background: #f2bc9e;"><span className="sr-only">نام
                  رنگ</span></a>
              </div>
            </div>
          </div>
      </div><!-- End .col-sm-6 col-md-4 col-lg-3 -->

      <div className="col-6 col-md-4 col-lg-3">
        <div className="product product-2">
          <figure className="product-media">
            <a href="product.html">
              <img src="assets/images/demos/demo-4/products/product-13.jpg" alt="تصویر محصول"
                className="product-image">
            </a>

            <div className="product-action-vertical">
              <a href="#" className="btn-product-icon btn-wishlist"
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
              <a href="#">لپ تاپ</a>
            </div>
            <h3 className="product-title"><a href="product.html">لپ تاپ لنوو - 15.6 اینچ</a></h3>
            
            <div className="product-price">
              <span className="out-price">339,000 تومان</span>
              <span className="out-text">ناموجود</span>
            </div>
            <div className="ratings-container">
              <div className="ratings">
                <div className="ratings-val" style={{ width: "60%" }}></div>
              </div>
              <span className="ratings-text">( 11 دیدگاه )</span>
            </div>
          </div>
        </div>
      </div><!-- End .col-sm-6 col-md-4 col-lg-3 -->

      <div className="col-6 col-md-4 col-lg-3">
        <div className="product product-2">
          <figure className="product-media">
            <a href="product.html">
              <img src="assets/images/demos/demo-4/products/product-14.jpg" alt="تصویر محصول"
                className="product-image">
            </a>

            <div className="product-action-vertical">
              <a href="#" className="btn-product-icon btn-wishlist"
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
              <a href="#">دوربین دیجیتال</a>
            </div>
            <h3 className="product-title"><a href="product.html">دوربین سونی - آلفا 5100</a></h3>
            
            <div className="product-price">
              499,000 تومان
            </div>
            <div className="ratings-container">
              <div className="ratings">
                <div className="ratings-val" style="width: 50%;"></div>
              </div>
              <span className="ratings-text">( 11 دیدگاه )</span>
            </div>
          </div>
        </div>
      </div><!-- End .col-sm-6 col-md-4 col-lg-3 -->

      <div className="col-6 col-md-4 col-lg-3">
        <div className="product product-2">
          <figure className="product-media">
            <a href="product.html">
              <img src="assets/images/demos/demo-4/products/product-15.jpg" alt="تصویر محصول"
                className="product-image">
            </a>

            <div className="product-action-vertical">
              <a href="#" className="btn-product-icon btn-wishlist"
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
              <a href="#">لپ تاپ</a>
            </div>
            <h3 className="product-title"><a href="product.html">اسپیکر هوشمند کوچک</a></h3>
            
            <div className="product-price">
              490,000 تومان
            </div>
            <div className="ratings-container">
              <div className="ratings">
                <div className="ratings-val" style={{ width: "60%" }}></div>
              </div>
              <span className="ratings-text">( 24 دیدگاه )</span>
            </div>

            <div className="product-nav product-nav-dots">
              <a href="#" className="active" style="background: #ef837b;"><span
                className="sr-only">نام رنگ</span></a>
              <a href="#" style={{background: "#333333"}}><span className="sr-only">نام
                رنگ</span></a>
              <a href="#" style="background: #e2e2e2;"><span className="sr-only">نام
                رنگ</span></a>
            </div>
          </div>
        </div>
      </div><!-- End .col-sm-6 col-md-4 col-lg-3 -->

      <div className="col-6 col-md-4 col-lg-3">
        <div className="product product-2">
          <figure className="product-media">
            <span className="product-label label-circle label-sale">فروش ویژه</span>
            <a href="product.html">
              <img src="assets/images/demos/demo-4/products/product-16.jpg" alt="تصویر محصول"
                className="product-image">
            </a>

            <div className="product-action-vertical">
              <a href="#" className="btn-product-icon btn-wishlist"
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
              <a href="#">لوازم صوتی</a>
            </div>
            <h3 className="product-title"><a href="product.html">اسپیکر بلوتوث قابل حمل </a></h3>
            
            <div className="product-price">
              <span className="new-price">99,000 تومان</span>
              <span className="old-price">129,000</span>
            </div>
            <div className="ratings-container">
              <div className="ratings">
                <div className="ratings-val" style="width: 40%;"></div>
              </div>
              <span className="ratings-text">( 4 دیدگاه )</span>
            </div>

            <div className="product-nav product-nav-dots">
              <a href="#" className="active" style="background: #666666;"><span
                className="sr-only">نام رنگ</span></a>
              <a href="#" style="background: #ff887f;"><span className="sr-only">نام
                رنگ</span></a>
              <a href="#" style="background: #6699cc;"><span className="sr-only">نام
                رنگ</span></a>
              <a href="#" style="background: #f3dbc1;"><span className="sr-only">نام
                رنگ</span></a>
              <a href="#" style={{background: "#eaeaec"}}><span className="sr-only">نام
                رنگ</span></a>
            </div>
          </div>
        </div>
      </div><!-- End .col-sm-6 col-md-4 col-lg-3 -->

      <div className="col-6 col-md-4 col-lg-3">
        <div className="product product-2">
          <figure className="product-media">
            <a href="product.html">
              <img src="assets/images/demos/demo-4/products/product-17.jpg" alt="تصویر محصول"
                className="product-image">
            </a>

            <div className="product-action-vertical">
              <a href="#" className="btn-product-icon btn-wishlist"
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
              <a href="#">خانه هوشمند</a>
            </div>
            <h3 className="product-title"><a href="product.html">قطب نمای گوگل</a></h3>
            
            <div className="product-price">
              149,000 تومان
            </div>
            <div className="ratings-container">
              <div className="ratings">
                <div className="ratings-val" style={{ width: "60%" }}></div>
              </div>
              <span className="ratings-text">( 2 دیدگاه )</span>
            </div>
          </div>
        </div>
      </div>
    </div> */}
          {/* </div> */}
          {/* </div> */}

          <div className="mb-4"></div>

          {/* <div className="container">
  <hr className="mb-0">
</div> */}

          {/* <div className="icon-boxes-container bg-transparent">
  <div className="container">
    <div className="row">
      <div className="col-sm-6 col-lg-3">
        <div className="icon-box icon-box-side">
          <span className="icon-box-icon text-dark">
            <i className="icon-rocket"></i>
          </span>
          <div className="icon-box-content">
            <h3 className="icon-box-title">ارسال رایگان</h3><!-- End .icon-box-title -->
            <p>برای سفارشات بالای 50 هزار تومان</p>
          </div>
        </div>
      </div>

    </div>
  </div>*/}

        </main>
      </div>

    </main>
  )
}


