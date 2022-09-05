import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import GridItem from './GridItem';
const ProductGirdView = () => {
  const [products, setProducts] = useState([
    {
      url: 'https://img.websosanh.vn/v10/users/review/images/7dh7kfivnrtmn/1559701942335_9065535.jpg?compress=85',
      price: 76,
      productName: 'Samsung SC75C',
      specifications: [
        'Dry clean',
        'Cyclone filter',
        'convenience cord storage',
      ],
      review: 19,
      stars: 1,
    },
    {
      url: 'https://cdn.vjshop.vn/may-anh/bai-viet-tin-tuc/best-camera-for-entry-level/best-camera-for-entry-level-1.jpeg',
      price: 65,
      productName: 'Galaxy',
      specifications: [
        'Dry health',
        'Cyclone filter',
        'convenience cord storage',
      ],
      review: 29,
      stars: 2,
    },
    {
      url: 'https://ama.edu.vn/wp-content/uploads/2022/02/tu-vung-tieng-anh-ve-hoa.jpg',
      price: 45,
      productName: 'Samsung F98',
      specifications: [
        'Dry clean',
        'Cyclone strong',
        'convenience cord storage',
      ],
      review: 29,
      stars: 3,
    },
    {
      url: 'https://hoatuoithanhthao.com/media/ftp/hoa-cam-tu-cau.jpg',
      price: 45,
      productName: 'Samsung Clean',
      specifications: [
        'Dry',
        'Cyclone filter',
        'convenience cord storage',
        'convenience hot',
      ],
      review: 49,
      stars: 1,
    },
    {
      url: 'https://cdn.nguyenkimmall.com/images/detailed/691/10046547-dien-thoai-xiaomi-redmi-9a-2gb-32gb-xanh-duong-1.jpg',
      price: 24,
      productName: 'Dell FGP speed for test',
      specifications: [
        'Dry clean',
        'Cyclone struck',
        'convenience cord storage',
      ],
      review: 16,
      stars: 5,
    },
    {
      url: 'https://cdn01.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture//Apro/Apro_product_27321/dien-thoai-v23e_main_202_450.png.webp',
      price: 34,
      productName: 'Conversion 90I',
      specifications: [
        'Dry clean',
        'Cyclone strong',
        'convenience cord storage',
      ],
      review: 18,
      stars: 5,
    },
    {
      url: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2021/05/dien-thoai-cu-cam-ung-smartphone-cu-cho-tot.jpg',
      price: 675,
      productName: 'R5510 Max',
      specifications: ['Dry clean', 'convenience cord storage'],
      review: 29,
      stars: 5,
    },
    {
      url: 'https://sonypro.vn/wp-content/uploads/2021/04/dien-thoai-duoi-5-trieu-2021-1.jpg',
      price: 56,
      productName: 'Function Text Function Text',
      specifications: [
        'Dry clean',
        'convenience cord storage',
        'convenience Text with vvv',
      ],
      review: 29,
      stars: 5,
    },
    {
      url: 'https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/2015/Tin-Tuc/Duyen/image001(71).jpg',
      price: 67,
      productName: 'DIVA f99',
      specifications: ['Cyclone filter', 'convenience cord storage'],
      review: 34,
      stars: 2,
    },
  ]);
  const handleClickSave = item => {
    let clonedProduct = products.map(itemSet => {
      if (item.productName === itemSet.productName) {
        return {
          ...itemSet,
          isSaved: itemSet.isSaved === undefined ? true : !itemSet.isSaved,
        };
      }
      return itemSet;
    });
    setProducts(clonedProduct);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({item, index}) => (
          <GridItem
            item={item}
            index={index}
            handleSave={() => handleClickSave(item)}
          />
        )}
      />
    </View>
  );
};
export default ProductGirdView;
