import { useState, useEffect } from 'react';
// import { Spin } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const categories = [
  { id: 1, image: '/tempimg/cat1.png', name: 'most popular' },
  { id: 1, image: '/tempimg/cat1.png', name: 'most popular' },
  { id: 1, image: '/tempimg/cat1.png', name: 'most popular' },
  { id: 1, image: '/tempimg/cat1.png', name: 'most popular' },
  { id: 1, image: '/tempimg/cat1.png', name: 'most popular' },
  { id: 1, image: '/tempimg/cat1.png', name: 'most popular' },
  { id: 1, image: '/tempimg/cat1.png', name: 'most popular' },
  { id: 1, image: '/tempimg/cat1.png', name: 'most popular' },
  { id: 1, image: '/tempimg/cat1.png', name: 'most popular' },
  { id: 1, image: '/tempimg/cat1.png', name: 'most popular' },
  { id: 1, image: '/tempimg/cat1.png', name: 'most popular' },
  { id: 1, image: '/tempimg/cat1.png', name: 'most popular' },
];

const items = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];

const CategorySlider = () => {
  const navigate = useNavigate();
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
        <div class="d-flex pt-5 pb-5 overflow-scroll scrollbar-none">
          {categories.map(item => {
            return (
              <div className="d-flex flex-column" key={item.id}>
                <div
                  className="h-20t w-20t overflow-hidden rounded-full mx-4 custom-pointer grid place-items-center d-flex justify-content-center align-items-center "
                  style={{ borderRadius: '50%', backgroundColor: '#E3E3EC' }}
                  onClick={() => {
                    navigate('/categoryfilter');
                  }}
                >
                  <img
                    src={item.image}
                    className=""
                    style={{
                      width: '50px',
                      height: '50px',
                      objectFit: 'contain',
                    }}
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
