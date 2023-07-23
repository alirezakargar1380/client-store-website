'use client'
import Headers from './components/header/header'
import LandingProducts from './components/products/landingProducts'
// import Image from 'next/image'
import * as homeApi from './api/home.api'
import React, { useEffect, useState } from 'react'
// import styles from './page.module.css'

export default function Home() {
  const [data, setData] = useState([])
  const [landingSection, setLandingSection] = useState([])

  useEffect(() => {
    function fetchData() {
      const res = fetch('http://localhost:3002/api/landing-section-name')
        .then(async (res: any) => {
          const jsonData: any = await res.json()
          console.log(jsonData)
          setLandingSection(jsonData.data)
        })
    }

    // async function fwe() {
    //   const res = await fetch('http://localhost:3002/api/products?data_per_page=10&page=1')
    //   if (!res.ok) throw new Error('Failed to fetch data')

    //   const jsonData: any = await res.json()
    //   console.log(jsonData)
    //   setData(jsonData.data)
    // }

    fetchData()
    // fwe()
  })

  console.log(process.env.API_MAIN_URL)
  console.log(data)
  console.log(landingSection)

  const getCategory = (e: any) => {
    e.preventDefault();
    console.log("hau")
    // if (id === null) return console.log("id is null")
    // console.log(id)
  }

  // if (!landingSection.length) return <h1>wait...</h1>
  return (
    <main>
      <div className="page-wrapper">
        <Headers />
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

          {landingSection?.map((item: any, index: number) => {
            return (
              <>
                <div className="container new-arrivals" key={index}>
                  <div className="heading heading-flex mb-3">
                    <div className="heading-left">
                      <h2 className="title">{item.sectionName + ">"}</h2>
                    </div>

                    <div className="heading-right">

                      <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">

                        {item.landingSectionCategory.map((item2: any, index2: number) => {
                          if (index2 === 0) {
                            return (
                              <li className="nav-item">
                                <a className="nav-link active" id="new-all-link" data-toggle="tab" href="#new-all-tab"
                                  role="tab" aria-controls="new-all-tab" aria-selected="true">همه</a>
                              </li>
                            )
                          } else {
                            return (
                              <li className="nav-item"
                              // onClick={(e) => {
                              //   e.preventDefault()
                              //   console.log('asd')
                              //   getCategory((item2.category === null) ? null : item2.category.id)
                              // }}
                              >
                                <a className="nav-link" id="new-all-link" data-toggle="tab" href="#new-all-tab"
                                  role="tab" aria-controls="new-all-tab" aria-selected="true">{(item2.category === null) ? "همه" : item2.category.name}</a>
                              </li>
                            )
                          }
                        })}

                        {/* <li className="nav-item">
                          <a className="nav-link active" id="new-all-link" data-toggle="tab" href="#new-all-tab"
                            role="tab" aria-controls="new-all-tab" aria-selected="true">همه</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="new-all-link-2" data-toggle="tab" href="#new-all-tab-2"
                            role="tab" aria-controls="new-all-tab-2" aria-selected="true">2همه</a>
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
                        </li> */}
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

                        {data?.map((item: any) => {
                          return (
                            <LandingProducts
                              key={item.id}
                              id={item.id}
                              title={item.title}
                              label={1}
                            />
                          )
                        })}

                      </div>
                    </div>

                    <div className="tab-pane p-0 fade" id="new-all-tab-2" role="tabpanel"
                      aria-labelledby="new-all-link-2">
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
                        {data?.map((item: any) => {
                          return (
                            <LandingProducts
                              key={item.id}
                              id={item.id}
                              title={item.title}
                              label={1}
                            />
                          )
                        })}

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

                        {/* produc start */}
                        <LandingProducts test={'s'} />
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
                            <h3 className="product-title">
                              <a href="product.html">تلویزیون ال ای دی سامسونگ - سایز 55
                                اینچ</a>
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
              </>
            )
          })}
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
                    <a className="nav-link" id="new-all-link-2" data-toggle="tab" href="#new-all-tab-2"
                      role="tab" aria-controls="new-all-tab-2" aria-selected="true">2همه</a>
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
                  {data?.map((item: any) => {
                    return (
                      <LandingProducts
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        label={1}
                      />
                    )
                  })}

                </div>
              </div>

              <div className="tab-pane p-0 fade" id="new-all-tab-2" role="tabpanel"
                aria-labelledby="new-all-link-2">
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
                  {data?.map((item: any) => {
                    return (
                      <LandingProducts
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        label={1}
                      />
                    )
                  })}

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

                  {/* produc start */}
                  <LandingProducts test={'s'} />
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
                      <h3 className="product-title">
                        <a href="product.html">تلویزیون ال ای دی سامسونگ - سایز 55
                          اینچ</a>
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

          <div className="mb-5"></div>

          <div className="container for-you">
            <div className="heading heading-flex mb-3">
              <div className="heading-left">
                <h2 className="title">پیشنهاد برای شما</h2>
              </div>

              <div className="heading-right">
                <a href="#" className="title-link">مشاهده همه پیشنهادها <i className="icon-long-arrow-left"></i></a>
              </div>
            </div>

            <div className="products">
              <div className="row justify-content-center">
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="product product-2">
                    <figure className="product-media">
                      <span className="product-label label-circle label-sale">فروش ویژه</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-10.jpg" alt="تصویر محصول"
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
                        <a href="#">هدفون</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">هدفون وایرلس بیتس </a></h3>

                      <div className="product-price">
                        <span className="new-price">279,000 تومان</span>
                        <span className="old-price">349,000</span>
                      </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "40%" }}></div>
                        </div>
                        <span className="ratings-text">( 4 دیدگاه )</span>
                      </div>

                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{ background: "#666666" }}><span
                          className="sr-only">نام رنگ</span></a>
                        <a href="#" style={{ background: "#ff887f" }}><span className="sr-only">نام
                          رنگ</span></a>
                        <a href="#" style={{ background: "#6699cc" }}><span className="sr-only">نام
                          رنگ</span></a>
                        <a href="#" style={{ background: "#f3dbc1" }}><span className="sr-only">نام
                          رنگ</span></a>
                        <a href="#" style={{ background: "#eaeaec" }}><span className="sr-only">نام
                          رنگ</span></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <div className="product product-2">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-11.jpg" alt="تصویر محصول"
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
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <div className="product product-2">
                    <figure className="product-media">
                      <span className="product-label label-circle label-new">جدید</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-12.jpg" alt="تصویر محصول"
                          className="product-image" />
                        <img src="assets/images/demos/demo-4/products/product-12-2.jpg"
                          alt="تصویر محصول" className="product-image-hover" />
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
                          <div className="ratings-val" style={{ width: "0%" }}></div>
                        </div>
                        <span className="ratings-text">( 0 دیدگاه )</span>
                      </div>

                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{ background: "#e2e2e2" }}><span
                          className="sr-only">نام رنگ</span></a>
                        <a href="#" style={{ background: "#333333" }}><span className="sr-only">نام
                          رنگ</span></a>
                        <a href="#" style={{ background: "#f2bc9e" }}><span className="sr-only">نام
                          رنگ</span></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <div className="product product-2">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-13.jpg" alt="تصویر محصول"
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
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <div className="product product-2">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-14.jpg" alt="تصویر محصول"
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
                        <a href="#">دوربین دیجیتال</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">دوربین سونی - آلفا 5100</a></h3>

                      <div className="product-price">
                        499,000 تومان
                      </div>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "50%" }}></div>
                        </div>
                        <span className="ratings-text">( 11 دیدگاه )</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <div className="product product-2">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-15.jpg" alt="تصویر محصول"
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
                        <a href="#" className="active" style={{ background: "#ef837b" }}><span
                          className="sr-only">نام رنگ</span></a>
                        <a href="#" style={{ background: "#333333" }}><span className="sr-only">نام
                          رنگ</span></a>
                        <a href="#" style={{ background: "#e2e2e2" }}><span className="sr-only">نام
                          رنگ</span></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <div className="product product-2">
                    <figure className="product-media">
                      <span className="product-label label-circle label-sale">فروش ویژه</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-16.jpg" alt="تصویر محصول"
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
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <div className="product product-2">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-4/products/product-17.jpg" alt="تصویر محصول"
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
              </div>
            </div>
          </div>

          <div className="mb-4"></div>

          <div className="container">
            <hr className="mb-0" />
          </div>

          <div className="icon-boxes-container bg-transparent">
            <div className="container">
              <div className="row">

                <div className="col-sm-6 col-lg-3">
                  <div className="icon-box icon-box-side">
                    <span className="icon-box-icon text-dark">
                      <i className="icon-rocket"></i>
                    </span>
                    <div className="icon-box-content">
                      <h3 className="icon-box-title">ارسال رایگان</h3>
                      <p>برای سفارشات بالای 50 هزار تومان</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                  <div className="icon-box icon-box-side">
                    <span className="icon-box-icon text-dark">
                      <i className="icon-rotate-left"></i>
                    </span>
                    <div className="icon-box-content">
                      <h3 className="icon-box-title">بازگشت رایگان</h3>
                      <p>تا 30 روز</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                  <div className="icon-box icon-box-side">
                    <span className="icon-box-icon text-dark">
                      <i className="icon-info-circle"></i>
                    </span>
                    <div className="icon-box-content">
                      <h3 className="icon-box-title">20% تخفیف برای اولین خرید</h3>
                      <p>ثبت نام کنید</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                  <div className="icon-box icon-box-side">
                    <span className="icon-box-icon text-dark">
                      <i className="icon-life-ring"></i>
                    </span>

                    <div className="icon-box-content">
                      <h3 className="icon-box-title">پشتیبانی حرفه ای</h3>
                      <p>خدمات 24 ساعته / 7 روز هفته</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="footer">
          <div className="cta bg-image bg-dark pt-4 pb-5 mb-0" style={{ backgroundImage: "url(assets/images/demos/demo-4/bg-5.jpg)" }}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-sm-10 col-md-8 col-lg-6">
                  <div className="cta-heading text-center">
                    <h3 className="cta-title text-white">دریافت آخرین پیشنهادات</h3>
                    <p className="cta-desc text-white text-center">و دریافت <span className="font-weight-normal">کد
                      تخفیف 20 هزار تومانی</span> برای اولین خرید</p>
                  </div>

                  <form action="#">
                    <div className="input-group input-group-round">
                      <input type="email" className="form-control form-control-white"
                        placeholder="آدرس ایمیل خود را وارد کنید" aria-label="Email Adress" required />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit"><span>عضویت</span><i
                          className="icon-long-arrow-left"></i></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-middle">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-lg-3">
                  <div className="widget widget-about">
                    <img src="assets/images/demos/demo-4/logo-footer.png" className="footer-logo"
                      alt="Footer Logo" width="105" height="25" />
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی
                      نامفهوم. </p>

                    <div className="widget-call">
                      <i className="icon-phone"></i>
                      سوالی دارید؟ 7روز هفته/24ساعته
                      <a href="tel:#">02155667788</a>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                  <div className="widget">
                    <h4 className="widget-title">لینک های مفید</h4>

                    <ul className="widget-list">
                      <li><a href="about.html">درباره ما</a></li>
                      <li><a href="#">خدمات</a></li>
                      <li><a href="#">نحوه خرید</a></li>
                      <li><a href="faq.html">سوالات متداول</a></li>
                      <li><a href="contact.html">تماس با ما</a></li>
                    </ul>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                  <div className="widget">
                    <h4 className="widget-title">خدمات مشتری</h4>

                    <ul className="widget-list">
                      <li><a href="#">شیوه پرداخت</a></li>
                      <li><a href="#">گارانتی بازگشت وجه</a></li>
                      <li><a href="#">شیوه ارسال محصولات</a></li>
                      <li><a href="#">قوانین و مقررات</a></li>
                      <li><a href="#">خط مشی</a></li>
                    </ul>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                  <div className="widget">
                    <h4 className="widget-title">حساب کاربری</h4>

                    <ul className="widget-list">
                      <li><a href="#">ورود</a></li>
                      <li><a href="cart.html">سبد خرید</a></li>
                      <li><a href="#">لیست علاقه مندی ها</a></li>
                      <li><a href="#">پیگیری سفارشات</a></li>
                      <li><a href="#">راهنما</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="container">
              <p className="footer-copyright">کپی رایت © 2019 تمامی حقوق محفوظ است.</p>

              <div className="social-icons social-icons-color">
                <span className="social-label">شبکه های اجتماعی</span>
                <a href="#" className="social-icon social-facebook" title="فیسبوک" target="_blank"><i
                  className="icon-facebook-f"></i></a>
                <a href="#" className="social-icon social-twitter" title="توییتر" target="_blank"><i
                  className="icon-twitter"></i></a>
                <a href="#" className="social-icon social-instagram" title="اینستاگرام" target="_blank"><i
                  className="icon-instagram"></i></a>
                <a href="#" className="social-icon social-youtube" title="یوتیوب" target="_blank"><i
                  className="icon-youtube"></i></a>
                <a href="#" className="social-icon social-pinterest" title="پینترست" target="_blank"><i
                  className="icon-pinterest"></i></a>
              </div>
            </div>
          </div>
        </footer>

      </div>

      <button id="scroll-top" title="بازگشت به بالا"><i className="icon-arrow-up"></i></button>


      {/* <div className="mobile-menu-overlay"></div>

    <div className="mobile-menu-container mobile-menu-light">
        <div className="mobile-menu-wrapper">
            <span className="mobile-menu-close"><i className="icon-close"></i></span>

            <form action="#" method="get" className="mobile-search">
                <label for="mobile-search" className="sr-only">جستجو</label>
                <input type="search" className="form-control" name="mobile-search" id="mobile-search"
                    placeholder="جستجو در ..." required/>
                <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
            </form>

            <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="mobile-menu-link" data-toggle="tab" href="#mobile-menu-tab"
                        role="tab" aria-controls="mobile-menu-tab" aria-selected="true">منو</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="mobile-cats-link" data-toggle="tab" href="#mobile-cats-tab" role="tab"
                        aria-controls="mobile-cats-tab" aria-selected="false">دسته بندی ها</a>
                </li>
            </ul>

            <div className="tab-content">
                <div className="tab-pane fade show active" id="mobile-menu-tab" role="tabpanel"
                    aria-labelledby="mobile-menu-link">
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
                                <a href="#">صفحات</a>
                                <ul>
                                    <li>
                                        <a href="about.html" className="sf-with-ul">درباره ما</a>

                                        <ul style="display: none;">
                                            <li><a href="about.html">درباره ما 01</a></li>
                                            <li><a href="about-2.html">درباره ما 02</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="contact.html" className="sf-with-ul">تماس با ما</a>

                                        <ul style="display: none;">
                                            <li><a href="contact.html">تماس با ما 01</a></li>
                                            <li><a href="contact-2.html">تماس با ما 02</a></li>
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
                                        <a href="#" className="sf-with-ul">شبکه بندی</a>
                                        <ul style="display: none;">
                                            <li><a href="blog-grid-2cols.html">2 ستونه</a></li>
                                            <li><a href="blog-grid-3cols.html">3 ستونه</a></li>
                                            <li><a href="blog-grid-4cols.html">4 ستونه</a></li>
                                            <li><a href="blog-grid-sidebar.html">با سایدبار</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="sf-with-ul">سایز های مختلف</a>
                                        <ul style="display: none;">
                                            <li><a href="blog-masonry-2cols.html">2 ستونه</a></li>
                                            <li><a href="blog-masonry-3cols.html">3 ستونه</a></li>
                                            <li><a href="blog-masonry-4cols.html">4 ستونه</a></li>
                                            <li><a href="blog-masonry-sidebar.html">با سایدبار</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="sf-with-ul">ماسک</a>
                                        <ul style="display: none;">
                                            <li><a href="blog-mask-grid.html">نوع 1</a></li>
                                            <li><a href="blog-mask-masonry.html">نوع 2</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="sf-with-ul">پست تکی</a>
                                        <ul style="display: none;">
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
                </div>
                <div className="tab-pane fade" id="mobile-cats-tab" role="tabpanel" aria-labelledby="mobile-cats-link">
                    <nav className="mobile-cats-nav">
                        <ul className="mobile-cats-menu">
                            <li><a className="mobile-cats-lead" href="#">پیشنهاد روزانه</a></li>
                            <li><a className="mobile-cats-lead" href="#">هدیه</a></li>
                            <li><a href="#">تخت خواب</a></li>
                            <li><a href="#">روشنایی</a></li>
                            <li><a href="#">مبلمان</a></li>
                            <li><a href="#">فضای ذخیره سازی</a></li>
                            <li><a href="#">میز وصندلی</a></li>
                            <li><a href="#">دکور </a></li>
                            <li><a href="#">کابینت</a></li>
                            <li><a href="#">قهوه</a></li>
                            <li><a href="#">مبلمان خارج از منزل </a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="social-icons">
                <a href="#" className="social-icon" target="_blank" title="فیسبوک"><i className="icon-facebook-f"></i></a>
                <a href="#" className="social-icon" target="_blank" title="توییتر"><i className="icon-twitter"></i></a>
                <a href="#" className="social-icon" target="_blank" title="اینستاگرام"><i className="icon-instagram"></i></a>
                <a href="#" className="social-icon" target="_blank" title="یوتیوب"><i className="icon-youtube"></i></a>
            </div>
        </div>
    </div> */}


      {/* <div className="modal fade" id="signin-modal" tabIndex={-1} role="dialog" aria-hidden="true">
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
                                            <label for="singin-email">نام کاربری یا آدرس ایمیل *</label>
                                            <input type="text" className="form-control" id="singin-email"
                                                name="singin-email" required/>
                                        </div>

                                        <div className="form-group">
                                            <label for="singin-password">رمز عبور *</label>
                                            <input type="password" className="form-control" id="singin-password"
                                                name="singin-password" required/>
                                        </div>

                                        <div className="form-footer">
                                            <button type="submit" className="btn btn-outline-primary-2">
                                                <span>ورود</span>
                                                <i className="icon-long-arrow-left"></i>
                                            </button>

                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input"
                                                    id="signin-remember">
                                                <label className="custom-control-label" for="signin-remember">مرا به خاطر
                                                    بسپار</label>
                                            </div>

                                            <a href="#" className="forgot-link">فراموشی رمز عبور؟</a>
                                        </div>
                                    </form>
                                    <div className="form-choice">
                                        <p className="text-center">یا ورود با</p>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <a href="#" className="btn btn-login btn-g">
                                                    <i className="icon-google"></i>
                                                    حساب گوگل
                                                </a>
                                            </div>
                                            <div className="col-sm-6">
                                                <a href="#" className="btn btn-login btn-f">
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
                                            <label for="register-email">آدرس ایمیل شما *</label>
                                            <input type="email" className="form-control" id="register-email"
                                                name="register-email" required/>
                                        </div>

                                        <div className="form-group">
                                            <label for="register-password">رمز عبور *</label>
                                            <input type="password" className="form-control" id="register-password"
                                                name="register-password" required/>
                                        </div>

                                        <div className="form-footer">
                                            <button type="submit" className="btn btn-outline-primary-2">
                                                <span>ثبت نام</span>
                                                <i className="icon-long-arrow-left"></i>
                                            </button>

                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="register-policy"
                                                    required/>
                                                <label className="custom-control-label" for="register-policy">با
                                                    <a href="#">قوانین و مقررات </a>موافقم *</label>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="form-choice">
                                        <p className="text-center">یا عضویت با</p>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <a href="#" className="btn btn-login btn-g">
                                                    <i className="icon-google"></i>
                                                    حساب گوگل
                                                </a>
                                            </div>
                                            <div className="col-sm-6">
                                                <a href="#" className="btn btn-login  btn-f">
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
    </div> */}

      {/* <div className="container newsletter-popup-container mfp-hide" id="newsletter-popup-form">
        <div className="row justify-content-center">
            <div className="col-10">
                <div className="row no-gutters bg-white newsletter-popup-content">
                    <div className="col-xl-3-5col col-lg-7 banner-content-wrap">
                        <div className="banner-content text-center">
                            <img src="assets/images/popup/newsletter/logo.png" className="logo" alt="logo" width="60"
                                height="15">
                            <h2 className="banner-title">دریافت <span>25<light>%</light></span> تخفیف</h2>
                            <p>با عضویت در خبرنامه فروشگاه ما، یک تخفیف 25 درصدی دریافت کنید و از جدیدترین تخفیف ها مطلع
                                شوید</p>
                            <form action="#">
                                <div className="input-group input-group-round">
                                    <input type="email" className="form-control form-control-white" placeholder="ایمیل شما"
                                        aria-label="Email Adress" required/>
                                    <div className="input-group-append">
                                        <button className="btn" type="submit"><span>تایید</span></button>
                                    </div>
                                </div>
                            </form>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="register-policy-2" required/>
                                <label className="custom-control-label" for="register-policy-2">این پنجره را دوباره
                                    نشان نده</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2-5col col-lg-5 ">
                        <img src="assets/images/popup/newsletter/img-1.jpg" className="newsletter-img" alt="newsletter" />
                    </div>
                </div>
            </div>
        </div>
    </div> */}


    </main>
  )
}


