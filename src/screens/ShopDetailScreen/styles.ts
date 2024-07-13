import {StyleSheet} from 'react-native';

import {AppColors, FontSizes, hp, wp} from '../../utils';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: AppColors.PRIMARY_BACKGROUND,
  },
  imageBackground: {
    height: hp(45),
    justifyContent: 'space-between',
  },
  shopDetailsContainer: {padding: wp(7)},
  shopTitleText: {
    color: AppColors.SECONDARY_TEXT,
    fontSize: FontSizes.FONT_26,
    fontWeight: '600',
  },
  shopSubTitleText: {
    color: AppColors.SECONDARY_TEXT,
    fontSize: FontSizes.FONT_12,
  },
  shopDetailsText: {
    color: AppColors.SECONDARY_TEXT,
  },
  actionContainer: {
    backgroundColor: AppColors.SECONDARY_TEXT,
    paddingVertical: wp(7),
  },
  actionSubContainer: {
    paddingHorizontal: wp(7),
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconTitle: {color: 'black'},
  optionsIconRowContainer: {
    flex: 1,
    flexDirection: 'row',
    columnGap: wp(5),
  },
  ratingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: wp(1),
  },
  rateContainer: {
    borderWidth: 1,
    borderRadius: wp(2),
    flexDirection: 'row',
    padding: wp(1.5),
    paddingHorizontal: wp(3),
    alignItems: 'center',
    borderColor: AppColors.BORDER,
  },
  rateText: {
    fontSize: FontSizes.FONT_13,
    color: AppColors.BORDER,
    fontWeight: '600',
  },
  ratingText: {fontSize: FontSizes.FONT_12, color: AppColors.BORDER},
  dashedSeperator: {
    borderTopWidth: 1,
    borderStyle: 'dashed',
    marginHorizontal: wp(7),
    marginVertical: wp(5),
  },
  discountScrollContainer: {
    paddingHorizontal: wp(5),
  },
  discountContainer: {
    borderWidth: 1,
    borderColor: AppColors.GREY,
    borderRadius: 5,
    paddingVertical: wp(2),
    paddingHorizontal: wp(4),
    marginRight: wp(3),
  },
  discountTitleContainer: {flexDirection: 'row', alignItems: 'center'},
  discountTitle: {
    fontSize: FontSizes.FONT_20,
    fontWeight: '700',
  },
  discountSubTitle: {
    fontSize: FontSizes.FONT_12,
  },
  categoryListContainer: {
    backgroundColor: AppColors.SECONDARY_TEXT,
    marginVertical: hp(2),
  },
  categoryListContentContainer: {
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
  },
  categoryTabContainer: {
    borderWidth: 1,
    borderRadius: wp(2),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    paddingVertical: wp(2),
    marginRight: wp(2),
    borderColor: AppColors.GREY,
  },
  selectedCategoryTabContainer: {
    backgroundColor: AppColors.SECONDARY,
    borderColor: AppColors.TRANSPARENT,
  },
  categoryTabText: {
    color: AppColors.GREY,
    fontWeight: '600',
  },
  selectedCategoryTabText: {color: AppColors.PRIMARY},
  sectionListContainer: {
    paddingHorizontal: wp(8),
    paddingBottom: hp(15),
  },
  serviceContainer: {
    flexDirection: 'row',
    paddingVertical: wp(4),
  },
  serviceImage: {height: wp(22), width: wp(22), borderRadius: wp(3)},
  serviceDetailContainer: {flex: 1, marginHorizontal: wp(2)},
  serviceText: {
    fontWeight: '600',
    fontSize: FontSizes.FONT_16,
  },
  serviceDurationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedServiceButtonContainer: {flexDirection: 'row', columnGap: wp(1)},
  removeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(2),
    backgroundColor: AppColors.PRIMARY,
    borderRadius: wp(2),
  },
  selectedServiceContainer: {
    backgroundColor: AppColors.PRIMARY,
    paddingHorizontal: wp(2),
    paddingVertical: wp(1.5),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: wp(2),
  },
  addServiceButton: {
    backgroundColor: AppColors.SECONDARY_TEXT,
    borderWidth: 0.5,
    borderRadius: wp(1),
    borderColor: AppColors.PRIMARY,
    paddingHorizontal: wp(2),
    paddingVertical: wp(1),
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
  },
  sectionText: {
    fontSize: FontSizes.FONT_19,
    fontWeight: '600',
    marginVertical: hp(1),
  },
  serviceSeperator: {
    borderBottomColor: AppColors.SEPERATOR,
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
  },
  floatingContainer: {
    backgroundColor: AppColors.PRIMARY,
    elevation: 2,
    zIndex: 9999999999,
    position: 'absolute',
    right: wp(8),
    left: wp(8),
    bottom: wp(5),
    paddingHorizontal: wp(5),
    paddingVertical: hp(1.5),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: wp(3),
    flex: 1,
  },
  serviceCountContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: AppColors.SECONDARY_TEXT,
    justifyContent: 'center',
    alignItems: 'center',
    height: wp(12),
    width: wp(12),
  },
  serviceCount: {
    fontWeight: '600',
    color: AppColors.SECONDARY_TEXT,
    fontSize: FontSizes.FONT_20,
  },
  floatingActionText: {
    fontWeight: '600',
    color: AppColors.SECONDARY_TEXT,
    fontSize: FontSizes.FONT_20,
  },
  totalPriceContainer: {
    flex: 1,
    marginHorizontal: wp(5),
  },
  totalPrice: {
    fontWeight: '600',
    color: AppColors.SECONDARY_TEXT,
    fontSize: FontSizes.FONT_20,
  },
  totalPriceSubText: {
    fontWeight: '300',
    color: AppColors.SECONDARY_TEXT,
  },
});
