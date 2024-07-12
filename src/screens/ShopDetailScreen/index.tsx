const DiscountData = [
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

const CategoryData = [
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

const SectionDataList = [
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

import {
  FlatList,
  Image,
  ImageBackground,
  LogBox,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Feather';

import {BaseHeader, BaseIcon, FloatingButoon} from '../../components';
import {AppImages, hp, wp} from '../../utils';
import {styles} from './styles';

const ShopDetailScreen = () => {
  const [selectedTabId, setSelectedTabId] = useState(1);
  const [count, setCount] = useState<Number>(0);
  const [totalPrice, setTotalPrice] = useState<Number>(0);

  const [selectedList, setSelectedList] = useState([]);

  useEffect(() => {
    setCount(selectedList.length);
    let res = 0;
    selectedList.map(val => {
      res += val?.price;
    });
    console.log({res});
    setTotalPrice(res);
  }, [selectedList]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f2f1f6',
      }}>
      <ScrollView nestedScrollEnabled>
        <StatusBar
          backgroundColor="transparent"
          translucent
          barStyle={'light-content'}
        />

        <ImageBackground
          source={AppImages.IMAGE1}
          style={{
            height: hp(45),
            // justifyContent: "flex-end",
            justifyContent: 'space-between',
            padding: wp(7),
          }}>
          {/* header */}
          <BaseHeader leftIcon="arrow-left" rightIcon="search" />
          <View>
            <Text
              style={{
                color: 'white',
              }}
              numberOfLines={1}>
              FOR MEN
            </Text>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: RFValue(24),
                    fontWeight: '600',
                  }}
                  numberOfLines={2}>
                  Woodlands Hills SPA
                </Text>
                <Text
                  style={{
                    color: 'white',
                  }}>
                  Keira throughway * 5.0 Kms * $$
                </Text>
              </View>

              {/* fav icon */}
              <BaseIcon icon="heart" iconTitle="Favourite" />
            </View>
          </View>
        </ImageBackground>

        <View
          style={{
            backgroundColor: 'white',
            paddingVertical: wp(7),
          }}>
          <View
            style={{
              paddingHorizontal: wp(7),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {/* options (call,dir,share) */}
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                columnGap: wp(5),
                // justifyContent: "space-around",
              }}>
              <BaseIcon
                icon="phone"
                iconTitle="Call"
                iconColor="black"
                titleStyle={{
                  color: 'black',
                }}
              />
              <BaseIcon
                icon="map-pin"
                iconTitle="Directions"
                iconColor="black"
                titleStyle={{
                  color: 'black',
                }}
              />
              <BaseIcon
                icon="share"
                iconTitle="Share"
                iconColor="black"
                titleStyle={{
                  color: 'black',
                }}
              />
            </View>

            {/* rating */}
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: wp(2),
                  flexDirection: 'row',
                  padding: wp(1.5),
                  paddingHorizontal: wp(3),
                  alignItems: 'center',
                  borderColor: '#2765ba',
                }}>
                {/* star icon */}
                <Icon
                  name={'star'}
                  size={RFValue(18)}
                  style={{marginRight: '8%'}}
                  color={'#2765ba'}
                />
                <Text
                  style={{
                    fontSize: RFValue(14),
                    color: '#2765ba',
                    fontWeight: '600',
                  }}>
                  4.2
                </Text>
              </View>
              <Text style={{fontSize: RFValue(12), color: '#2765ba'}}>
                5k+ ratings
              </Text>
            </View>
          </View>

          {/* seperator */}
          <View
            style={{
              borderTopWidth: 1,
              borderStyle: 'dashed',
              marginHorizontal: wp(7),
              marginVertical: wp(5),
            }}
          />

          {/* discount */}
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[...DiscountData, ...DiscountData]}
            contentContainerStyle={{
              paddingHorizontal: wp(5),
            }}
            renderItem={({item}) => (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#acabb0',
                  borderRadius: 5,
                  paddingVertical: wp(2),
                  paddingHorizontal: wp(4),
                  marginRight: wp(3),
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {/* dicount icon */}
                  <Icon
                    name="percent"
                    size={RFValue(20)}
                    style={{marginRight: wp(2)}}
                    color={'#643ffe'}
                  />
                  <Text
                    style={{
                      fontSize: RFValue(20),
                      fontWeight: '700',
                    }}>
                    {item?.title}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: RFValue(12),
                  }}>
                  {item?.subTitle}
                </Text>
              </View>
            )}
          />
        </View>

        {/* scrollbar hori */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={CategoryData}
          style={{
            backgroundColor: 'white',
            marginVertical: hp(2),
          }}
          contentContainerStyle={{
            paddingVertical: hp(2),
            paddingHorizontal: wp(4),
          }}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => setSelectedTabId(item?.id)}
              style={[
                {
                  borderWidth: 1,
                  borderRadius: wp(2),
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: wp(4),
                  paddingVertical: wp(2),
                  marginRight: wp(2),
                  borderColor: '#acabb0',
                },
                selectedTabId === item?.id && {
                  backgroundColor: '#f2f0fd',
                  borderColor: 'transparent',
                },
              ]}>
              <Text
                style={[
                  {
                    color: '##acabb0',
                    fontWeight: '600',
                  },
                  selectedTabId === item?.id && {
                    color: '#643ffe',
                  },
                ]}>
                {item?.title}
              </Text>
            </TouchableOpacity>
          )}
        />

        <SectionList
          sections={SectionDataList}
          contentContainerStyle={{
            paddingHorizontal: wp(8),
            paddingBottom: hp(15),
          }}
          renderItem={({item}) => (
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: wp(4),
              }}>
              <Image
                source={item?.image}
                style={{height: wp(22), width: wp(22), borderRadius: wp(3)}}
              />
              <View style={{flex: 1, marginHorizontal: wp(2)}}>
                <View
                  style={{
                    flex: 1,
                  }}>
                  <Text
                    style={{
                      fontWeight: '600',
                      fontSize: RFValue(16),
                    }}
                    numberOfLines={3}>
                    {item?.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: RFValue(14),
                    }}>
                    ${item?.price}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="clock"
                    size={RFValue(14)}
                    style={{marginRight: wp(1)}}
                  />
                  <Text style={{fontSize: RFValue(12)}}>
                    {item?.duration}&nbsp;Mins
                  </Text>
                </View>
              </View>

              <View>
                {selectedList.includes(item) ? (
                  <View style={{flexDirection: 'row', columnGap: wp(1)}}>
                    <TouchableOpacity
                      onPress={() =>
                        setSelectedList(prev =>
                          prev.filter(value => value?.id !== item?.id),
                        )
                      }
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: wp(2),
                        backgroundColor: '#643ffe',
                        borderRadius: wp(2),
                      }}>
                      <Icon name="minus" size={RFValue(14)} color={'white'} />
                    </TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: '#643ffe',
                        paddingHorizontal: wp(2),
                        paddingVertical: wp(1),
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderRadius: wp(2),
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: RFValue(14),
                        }}>
                        {'Selected'}
                      </Text>
                    </View>
                  </View>
                ) : (
                  <TouchableOpacity
                    onPress={() => setSelectedList(prev => [...prev, item])}
                    style={{
                      backgroundColor: 'white',
                      borderWidth: 0.5,
                      paddingHorizontal: wp(2),
                      paddingVertical: wp(1),
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(14),
                      }}>
                      {'Select'}
                    </Text>
                    <Icon
                      name={'plus'}
                      size={RFValue(14)}
                      style={{marginHorizontal: wp(0.5)}}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          )}
          renderSectionHeader={({section}) => (
            <Text
              style={{
                fontSize: RFValue(19),
                fontWeight: '600',
                marginVertical: hp(1),
              }}>
              {section?.title}&nbsp;({section?.data?.length})
            </Text>
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                backgroundColor: '#dedde3',
                height: StyleSheet.hairlineWidth,
              }}
            />
          )}
        />
      </ScrollView>

      {/* icon FAB */}
      <FloatingButoon icon="menu" />

      {/* floating container */}
      {count ? (
        <View
          style={{
            backgroundColor: '#643ffe',
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
          }}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              height: wp(12),
              width: wp(12),
              // paddingHorizontal: wp(5),
            }}>
            <Text
              style={{
                fontWeight: '600',
                color: 'white',
                fontSize: RFValue(20),
              }}>
              {count?.toString()}
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              marginHorizontal: wp(5),
            }}>
            <Text
              style={{
                fontWeight: '600',
                color: 'white',
                fontSize: RFValue(20),
              }}>
              ${totalPrice.toString()}
            </Text>
            <Text
              style={{
                fontWeight: '300',
                color: 'white',
              }}>
              plus taxes
            </Text>
          </View>

          <Text
            style={{
              fontWeight: '600',
              color: 'white',
              fontSize: RFValue(20),
            }}>
            Next
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export default ShopDetailScreen;
