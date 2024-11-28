import { useState, useEffect } from 'react';
// import { Spin } from 'antd';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, image: '/tempimg/p1.jpg', name: 'most popular' },
  { id: 1, image: '/tempimg/p2.jpg', name: 'most popular' },
  { id: 2, image: '/tempimg/p3.jpg', name: 'most popular' },
  { id: 3, image: '/tempimg/p4.jpg', name: 'most popular' },
  { id: 4, image: '/tempimg/p5.jpg', name: 'most popular' },
  { id: 5, image: '/tempimg/p6.jpg', name: 'most popular' },
  { id: 6, image: '/tempimg/p7.jpg', name: 'most popular' },
  { id: 7, image: '/tempimg/p1.jpg', name: 'most popular' },
  { id: 8, image: '/tempimg/p1.jpg', name: 'most popular' },
  { id: 9, image: '/tempimg/p1.jpg', name: 'most popular' },
  { id: 10, image: '/tempimg/p1.jpg', name: 'most popular' },
];

const CategorySlider = () => {
  // -------------------start setup loading-----------------------
  const [loading, setLoading] = useState(false);
  const contentStyle = {
    padding: 50,
  };
  const content = <div style={contentStyle} />;
  // -------------------end setup loading-----------------------

  //   const [categories, setCategories] = useState([]);
  //   const getCategories = async () => {
  //     const result = await axios.get('/category');
  //     setCategories(result.data);
  //     setLoading(false);
  //   };
  //   useEffect(() => {
  //     getCategories();
  //   }, []);
  // console.log(categories);

  return (
    <div className="">
      {loading ? (
        // <Spin tip="Loading" size="large">
        //   {content}
        // </Spin>
        <div></div>
      ) : (
        <div class="d-flex pt-2 pb-2 overflow-scroll scrollbar-none">
          {categories.map(item => {
            return (
              <div className="d-flex flex-column" key={item.id}>
                <div
                  className="h-20t w-20t overflow-hidden rounded-full mx-4 cursor-pointer  "
                  style={{ borderRadius: '50%' }}
                >
                  <img
                    src={item.image}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="text-black text-center mt-2  line-clamp-1 text-ellipsis fs-6 ">
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CategorySlider;
