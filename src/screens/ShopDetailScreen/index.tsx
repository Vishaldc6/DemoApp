import React, {memo, useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  SectionList,
  SectionListData,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {BaseHeader, BaseIcon, BaseText, FloatingButoon} from '../../components';
import {AppColors, AppImages, FontSizes, wp} from '../../utils';
import {styles} from './styles';

import {
  CategoryData,
  DataType,
  DiscountData,
  SectionDataList,
  SectionDataListType,
} from '../../utils/dummyData';

const ShopDetailScreen = () => {
  const [selectedTabId, setSelectedTabId] = useState(1);
  const [count, setCount] = useState<Number>(0);
  const [totalPrice, setTotalPrice] = useState<Number>(0);

  const [selectedList, setSelectedList] = useState<DataType[]>([]);

  useEffect(() => {
    setCount(selectedList.length);
    let res = 0;
    selectedList.map(val => {
      res += val?.price;
    });
    setTotalPrice(res);
  }, [selectedList]);

  const SectionHeader = memo(
    ({section}: {section: SectionListData<DataType, SectionDataListType>}) => (
      <BaseText style={styles.sectionText}>
        {section?.title}&nbsp;({section?.data?.length})
      </BaseText>
    ),
  );

  const ServiceCard = useCallback(
    ({item}: {item: DataType}) => (
      <View style={styles.serviceContainer}>
        <Image source={item?.image} style={styles.serviceImage} />
        <View style={styles.serviceDetailContainer}>
          <View style={{flex: 1}}>
            <BaseText style={styles.serviceText} numberOfLines={3}>
              {item?.title}
            </BaseText>
            <BaseText>${item?.price}</BaseText>
          </View>
          <View style={styles.serviceDurationContainer}>
            <Icon
              name="clock"
              size={FontSizes.FONT_14}
              style={{marginRight: wp(1)}}
            />
            <BaseText style={{fontSize: FontSizes.FONT_12}}>
              {item?.duration}&nbsp;Mins
            </BaseText>
          </View>
        </View>

        <View>
          <View style={styles.selectedServiceButtonContainer}>
            {selectedList.includes(item) && (
              <TouchableOpacity
                onPress={() =>
                  setSelectedList(prev =>
                    prev.filter(value => value?.id !== item?.id),
                  )
                }
                style={styles.removeButton}>
                <Icon
                  name="minus"
                  size={FontSizes.FONT_14}
                  color={AppColors.SECONDARY_TEXT}
                />
              </TouchableOpacity>
            )}

            <TouchableOpacity
              disabled={selectedList.includes(item)}
              onPress={() => setSelectedList(prev => [...prev, item])}
              style={
                selectedList.includes(item)
                  ? styles.selectedServiceContainer
                  : styles.addServiceButton
              }>
              <BaseText
                style={{
                  color: selectedList.includes(item)
                    ? AppColors.SECONDARY_TEXT
                    : AppColors.PRIMARY,
                }}>
                {selectedList.includes(item) ? 'Selected' : 'Select'}
              </BaseText>
              {!selectedList.includes(item) && (
                <Icon
                  name={'plus'}
                  size={FontSizes.FONT_14}
                  color={AppColors.PRIMARY}
                  style={{marginHorizontal: wp(0.5)}}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    ),
    [selectedList],
  );

  return (
    <View style={styles.mainContainer}>
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <StatusBar
          backgroundColor={AppColors.TRANSPARENT}
          translucent
          barStyle={'light-content'}
        />

        <ImageBackground
          source={AppImages.IMAGE1}
          style={styles.imageBackground}>
          {/* header */}
          <BaseHeader leftIcon="arrow-left" rightIcon="search" />
          <View style={styles.shopDetailsContainer}>
            <BaseText style={styles.shopSubTitleText} numberOfLines={1}>
              FOR MEN
            </BaseText>

            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <BaseText style={styles.shopTitleText} numberOfLines={2}>
                  Woodlands Hills SPA
                </BaseText>
                <View style={{flexDirection: 'row', columnGap: wp(1.5)}}>
                  <BaseText style={styles.shopDetailsText}>
                    Keira throughway
                  </BaseText>
                  <BaseText style={styles.shopDetailsText}>•</BaseText>
                  <BaseText style={styles.shopDetailsText}>5.0 Kms</BaseText>
                  <BaseText style={styles.shopDetailsText}>•</BaseText>
                  <BaseText style={styles.shopDetailsText}>$$</BaseText>
                </View>
              </View>

              {/* fav icon */}
              <BaseIcon icon="heart" iconTitle="Favourite" />
            </View>
          </View>
        </ImageBackground>

        <View style={styles.actionContainer}>
          <View style={styles.actionSubContainer}>
            {/* options (call,dir,share) */}
            <View style={styles.optionsIconRowContainer}>
              <BaseIcon
                icon="phone"
                iconTitle="Call"
                iconColor={AppColors.PRIMARY_TEXT}
                titleStyle={styles.iconTitle}
              />
              <BaseIcon
                icon="map-pin"
                iconTitle="Directions"
                iconColor={AppColors.PRIMARY_TEXT}
                titleStyle={styles.iconTitle}
              />
              <BaseIcon
                icon="share"
                iconTitle="Share"
                iconColor={AppColors.PRIMARY_TEXT}
                titleStyle={styles.iconTitle}
              />
            </View>

            {/* rating */}
            <View style={styles.ratingContainer}>
              <View style={styles.rateContainer}>
                {/* star icon */}
                <Icon
                  name={'star'}
                  size={FontSizes.FONT_18}
                  style={{marginRight: '8%'}}
                  color={AppColors.BORDER}
                />
                <BaseText style={styles.rateText}>4.2</BaseText>
              </View>
              <BaseText style={styles.ratingText}>5k+ ratings</BaseText>
            </View>
          </View>

          {/* seperator */}
          <View style={styles.dashedSeperator} />

          {/* discount */}
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={DiscountData}
            contentContainerStyle={styles.discountScrollContainer}
            renderItem={({item}) => (
              <View style={styles.discountContainer}>
                <View style={styles.discountTitleContainer}>
                  {/* dicount icon */}
                  <Icon
                    name="percent"
                    size={FontSizes.FONT_20}
                    style={{marginRight: wp(2)}}
                    color={AppColors.PRIMARY}
                  />
                  <BaseText style={styles.discountTitle}>
                    {item?.title}
                  </BaseText>
                </View>
                <BaseText style={styles.discountSubTitle}>
                  {item?.subTitle}
                </BaseText>
              </View>
            )}
          />
        </View>

        {/* scrollbar hori */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={CategoryData}
          style={styles.categoryListContainer}
          contentContainerStyle={styles.categoryListContentContainer}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => setSelectedTabId(item?.id)}
              style={[
                styles.categoryTabContainer,
                selectedTabId === item?.id &&
                  styles.selectedCategoryTabContainer,
              ]}>
              <BaseText
                style={[
                  styles.categoryTabText,
                  selectedTabId === item?.id && styles.selectedCategoryTabText,
                ]}>
                {item?.title}
              </BaseText>
            </TouchableOpacity>
          )}
        />

        <SectionList
          sections={SectionDataList}
          contentContainerStyle={styles.sectionListContainer}
          renderItem={({item}) => <ServiceCard item={item} />}
          renderSectionHeader={({section}) => (
            <SectionHeader section={section} />
          )}
          ItemSeparatorComponent={() => (
            <View style={styles.serviceSeperator} />
          )}
        />
      </ScrollView>

      {/* icon FAB */}
      <FloatingButoon icon="menu" />

      {/* floating container */}
      {count ? (
        <View style={styles.floatingContainer}>
          <View style={styles.serviceCountContainer}>
            <BaseText style={styles.serviceCount}>{count?.toString()}</BaseText>
          </View>

          <View style={styles.totalPriceContainer}>
            <BaseText style={styles.totalPrice}>
              ${totalPrice.toString()}
            </BaseText>
            <BaseText style={styles.totalPriceSubText}>plus taxes</BaseText>
          </View>

          <BaseText style={styles.floatingActionText}>Next</BaseText>
        </View>
      ) : null}
    </View>
  );
};

export default ShopDetailScreen;
