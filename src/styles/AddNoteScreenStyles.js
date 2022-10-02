import {StyleSheet} from 'react-native';
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
});
