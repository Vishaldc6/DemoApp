import {AppImages} from './images';

export interface DiscountDataType {
  id: number;
  title: string;
  subTitle: string;
}

const DiscountData: DiscountDataType[] = [
  {
    id: 1,
    title: '50% off',
    subTitle: 'use code FREE50',
  },
  {
    id: 2,
    title: '60% off on Debit Card',
    subTitle: 'No coupon required',
  },
];

export interface CategoryDataType {
  id: number;
  title: string;
}

const CategoryData: CategoryDataType[] = [
  {
    id: 1,
    title: 'Recommended',
  },
  {
    id: 2,
    title: 'Packages',
  },
  {
    id: 3,
    title: 'Face Care',
  },
  {
    id: 4,
    title: 'Packages',
  },
];

export interface DataType {
  id: number;
  image: any;
  title: string;
  price: number;
  duration: number;
}
export interface SectionDataListType {
  data: DataType[];
  title: string;
}

const SectionDataList: SectionDataListType[] = [
  {
    title: 'Recommended',
    data: [
      {
        id: 1,
        image: AppImages.IMAGE1,
        title: 'Haircut',
        price: 40,
        duration: 40,
      },
      {
        id: 2,
        image: AppImages.IMAGE2,
        title: 'Body Massage',
        price: 40,
        duration: 20,
      },
      {
        id: 3,
        image: AppImages.IMAGE3,
        title: 'Active Detox Cleanup',
        price: 40,
        duration: 10,
      },
    ],
  },
  {
    title: 'Packages',
    data: [
      {
        id: 4,
        image: AppImages.IMAGE4,
        title: 'Haircut & Shave',
        price: 40,
        duration: 40,
      },
      {
        id: 5,
        image: AppImages.IMAGE5,
        title: 'Haircut & Beard Grooming',
        price: 40,
        duration: 40,
      },
    ],
  },
  {
    title: 'Face Care',
    data: [
      {
        id: 6,
        image: AppImages.IMAGE2,
        title: 'Haircut & Shave',
        price: 40,
        duration: 40,
      },
      {
        id: 7,
        image: AppImages.IMAGE6,
        title: 'Haircut & Beard Grooming',
        price: 40,
        duration: 40,
      },
    ],
  },
];

export {DiscountData, CategoryData, SectionDataList};
