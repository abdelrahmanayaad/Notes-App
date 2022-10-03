import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONSTS, ICONS, PADDING} from '../constants/Constants';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    padding: PADDING.md2Padding,
  },
  headerWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ArrowIconStyle: {
    fontSize: ICONS.icon1,
    color: COLORS.black,
  },
  TrashIconStyle: {
    fontSize: ICONS.icon2,
    color: COLORS.black,
  },
  title: {
    fontSize: FONSTS.h3,
    color: COLORS.black,
    fontWeight: '500',
    letterSpacing: 1,
  },
  titleInputWrapper: {},
  noteContentWrapper: {
    marginLeft: PADDING.xlPadding,
  },
  noteContententText: {
    fontSize: FONSTS.h5,
    color: COLORS.black,
  },
  plusIconWrapper: {
    position: 'absolute',
    bottom: RFValue(15),
    right: RFValue(15),
    width: RFValue(50),
    height: RFValue(50),
    borderRadius: RFValue(25),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    elevation: 1,
  },
  plusIcon: {
    fontSize: ICONS.icon1,
    color: COLORS.black,
  },
  RBSheetFormat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: PADDING.xxlPadding,
    marginBottom: PADDING.xxlPadding,
  },
  RBSheetTitles: {
    fontSize: FONSTS.h5,
    color: COLORS.black,
    marginStart: PADDING.xsPadding,
  },
  RBSheetIcons: {
    fontSize: ICONS.icon4,
  },
});
