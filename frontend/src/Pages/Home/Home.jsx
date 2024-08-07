import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Layout } from '../../Components';
import Ad1 from '../../assets/Ad1.jpg';
import Ad2 from '../../assets/Ad2.jpg';
import Ad3 from '../../assets/Ad3.jpg';
import Ad4 from '../../assets/Ad4.jpg';
import Ad5 from '../../assets/Ad5.jpg';
import Ad6 from '../../assets/Ad6.jpg';
import Ad7 from '../../assets/Ad7.jpg';
import Ad8 from '../../assets/Ad8.jpg';
import Ad9 from '../../assets/Ad9.jpg';
import Ad10 from '../../assets/Ad10.jpg';

import B1 from '../../assets/Banner/B1.jpg';
import B2 from '../../assets/Banner/B2.jpg';
import B3 from '../../assets/Banner/B3.jpg';
import B4 from '../../assets/Banner/B4.jpg';
import B5 from '../../assets/Banner/B5.jpg';
import B6 from '../../assets/Banner/B6.jpg';
import SB1 from '../../assets/Banner/SB1.jpg';
import SB2 from '../../assets/Banner/SB2.jpg';
import SB3 from '../../assets/Banner/SB3.jpg';
import SB4 from '../../assets/Banner/SB4.jpg';
import SB5 from '../../assets/Banner/SB5.jpg';
import SB6 from '../../assets/Banner/SB6.jpg';

import P1 from '../../assets/Product/P1.jpg';
import P2 from '../../assets/Product/P2.jpg';
import P3 from '../../assets/Product/P3.jpg';
import P4 from '../../assets/Product/P4.jpg';
import P5 from '../../assets/Product/P5.jpg';
import P6 from '../../assets/Product/P6.jpg';
import P7 from '../../assets/Product/P7.jpg';
import P8 from '../../assets/Product/P8.jpg';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => (
    <div
        className='absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10  rounded-r-md lg:py-7 px-1 bg-white'
        onClick={onClick}
    >
        <IoIosArrowBack className='lg:mx-2 lg:my-1 text-gray-600 md:my-' />
    </div>
);

const CustomNextArrow = ({ onClick }) => (
    <div
        className='absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 rounded-l-md lg:py-7 px-1 bg-white'
        onClick={onClick}
    >
        <IoIosArrowForward className='lg:mx-2 lg:my-1 text-gray-600 md:my-5' />
    </div>
);

function Home() {
    const adItems = [
        { src: Ad1, alt: "Top Offer", label: "Top Offer" },
        { src: Ad2, alt: "Mobiles & Tablets", label: "Mobiles & Tablets" },
        { src: Ad3, alt: "TVs & Appliances", label: "TVs & Appliances" },
        { src: Ad4, alt: "Electronics", label: "Electronics" },
        { src: Ad5, alt: "Fashion", label: "Fashion" },
        { src: Ad6, alt: "Beauty", label: "Beauty" },
        { src: Ad7, alt: "Home & Kitchen", label: "Home & Kitchen" },
        { src: Ad8, alt: "Furniture", label: "Furniture" },
        { src: Ad9, alt: "Travel", label: "Travel" },
        { src: Ad10, alt: "Grocery", label: "Grocery" }
    ];

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };
    const settings2 = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024, // Large screens
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768, // Medium screens
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480, // Small screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Layout>
            
            <div className='px-5 py-5 bg-white overflow-x-auto scrollbar-hide'>
                <div className="flex flex-nowrap space-x-9 py-2 lg:justify-evenly bg-white">
                    {adItems.map((item, index) => (
                        <div key={index} className='flex flex-col items-center bg-white'>
                            <img src={item.src} alt={item.alt} className='h-16 w-16 object-cover' />
                            <p className='text-sm font-semibold mt-2 bg-white whitespace-nowrap '>{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="slider-container py-5 relative">
                <Slider {...settings}>

                    <div>
                        <div className='hidden lg:block'>
                            <img src={B1} alt="Banner 1" className='w-full object-cover' />
                        </div>
                        <div className='lg:hidden block'>
                            <img src={SB1} alt="Banner 1" className='w-full object-cover' />
                        </div>
                    </div>

                    <div>
                        <div className='hidden lg:block'>
                            <img src={B2} alt="Banner 2" className='w-full object-cover hidden lg:block' />
                        </div>
                        <div className='lg:hidden block'>
                            <img src={SB2} alt="Banner 2" className='w-full object-cover lg:hidden block' />
                        </div>
                    </div>

                    <div>
                        <div className='hidden lg:block'>
                            <img src={B3} alt="Banner 3" className='w-full object-cover hidden lg:block' />
                        </div>
                        <div className='lg:hidden block'>
                            <img src={SB3} alt="Banner 3" className='w-full object-cover lg:hidden block' />
                        </div>
                    </div>

                    <div>
                        <div className='hidden lg:block'>
                            <img src={B4} alt="Banner 4" className='w-full object-cover hidden lg:block' />
                        </div>
                        <div className='lg:hidden block'>
                            <img src={SB4} alt="Banner 4" className='w-full object-cover lg:hidden block' />
                        </div>
                    </div>

                    <div>
                        <div className='hidden lg:block'>
                            <img src={B5} alt="Banner 5" className='w-full object-cover hidden lg:block' />
                        </div>
                        <div className='lg:hidden block'>
                            <img src={SB5} alt="Banner 5" className='w-full object-cover lg:hidden block' />
                        </div>
                    </div>

                    <div>
                        <div className='hidden lg:block'>
                            <img src={B6} alt="Banner 6" className='w-full object-cover hidden lg:block' />
                        </div>
                        <div className='lg:hidden block'>
                            <img src={SB6} alt="Banner 6" className='w-full object-cover lg:hidden block' />
                        </div>
                    </div>
                </Slider>
            </div>

            <div className='lg:flex gap-5 '>

                <div className='lg:w-4/5'>
                    <div className="slider-container py-5 relative bg-white product">
                        <div className=' flex justify-between items-center pb-5 px-4'>
                            <p className='font-semibold text-xl'>Best Deals on Smartphones</p>
                            <IoIosArrowForward className='rounded-full bg-blue-600 text-white h-6 w-6 p-1' />
                        </div>
                        <Slider {...settings2}>

                            <div className=''>
                                <div className='bg-white flex flex-col items-center border-2 rounded-sm py-2 w-full'>
                                    <img src={P1} alt="Product 1" className='w-32 h-44 object-contain hover:scale-105 transition-transform duration-300 ease-in-out transform' />
                                    <p className='py-1'>Realme P1 5g</p>
                                    <h4 className='font-medium'>From ₹14,999</h4>
                                </div>
                            </div>

                            <div className=''>
                                <div className='bg-white flex flex-col items-center border-2 rounded-sm py-2 w-full'>
                                    <img src={P2} alt="Product 2" className='w-32 h-44 object-contain hover:scale-105 transition-transform duration-300 ease-in-out transform' />
                                    <p className='py-1'>vivo T2 Pro 5g</p>
                                    <h4 className='font-medium'>From ₹20,999*</h4>
                                </div>
                            </div>

                            <div className=''>
                                <div className='bg-white flex flex-col items-center border-2 rounded-sm py-2 w-full'>
                                    <img src={P3} alt="Product 3" className='w-32 h-44 object-contain hover:scale-105 transition-transform duration-300 ease-in-out transform' />
                                    <p className='py-1'>Poco M6 Pro 5G</p>
                                    <h4 className='font-medium'>From ₹9,249*</h4>
                                </div>
                            </div>

                            <div className=''>
                                <div className='bg-white flex flex-col items-center border-2 rounded-sm py-2 w-full'>
                                    <img src={P4} alt="Product 4" className='w-32 h-44 object-contain hover:scale-105 transition-transform duration-300 ease-in-out transform' />
                                    <p className='py-1'>Redmi 12 5G</p>
                                    <h4 className='font-medium'>Just ₹9,999*</h4>
                                </div>
                            </div>

                            <div className=''>
                                <div className='bg-white flex flex-col items-center border-2 rounded-sm py-2 w-full'>
                                    <img src={P5} alt="Product 5" className='w-32 h-44 object-contain hover:scale-105 transition-transform duration-300 ease-in-out transform' />
                                    <p className='py-1'>Moto Edge 50 Fusion</p>
                                    <h4 className='font-medium'>From ₹20,999*</h4>
                                </div>
                            </div>

                            <div className=''>
                                <div className='bg-white flex flex-col items-center border-2 rounded-sm py-2 w-full'>
                                    <img src={P6} alt="Product 6" className='w-32 h-44 object-contain hover:scale-105 transition-transform duration-300 ease-in-out transform' />
                                    <p className='py-1'>Realme P1 Pro 5G</p>
                                    <h4 className='font-medium'>Just ₹20,999</h4>
                                </div>
                            </div>

                            <div className=''>
                                <div className='bg-white flex flex-col items-center border-2 rounded-sm py-2 w-full'>
                                    <img src={P7} alt="Product 7" className='w-32 h-44 object-contain hover:scale-105 transition-transform duration-300 ease-in-out transform' />
                                    <p className='py-1'>Poco C65</p>
                                    <h4 className='font-medium'>Just ₹6,799</h4>
                                </div>
                            </div>

                            <div className=''>
                                <div className='bg-white flex flex-col items-center border-2 rounded-sm py-2 w-full'>
                                    <img src={P8} alt="Product 8" className='w-32 h-44 object-contain hover:scale-105 transition-transform duration-300 ease-in-out transform' />
                                    <p className='py-1'>Nothing Phone 2a</p>
                                    <h4 className='font-medium'>From ₹22,999*</h4>
                                </div>
                            </div>



                        </Slider>
                    </div>
                </div>
                <div className='lg:w-1/5 bg-green-100 lg:mt-0 mt-5 flex items-center justify-center '>
                    Add
                </div>
            </div>

        </Layout>
    );
}

export default Home;
