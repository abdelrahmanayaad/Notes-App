import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  COLORS,
  FONSTS,
  ICONS,
  PADDING,
  HEIGHT,
  BORDER_RADIUS,
} from '../constants/Constants';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    padding: PADDING.md2Padding,
  },
  inputWrapper: {
    marginTop: PADDING.xsPadding,
    marginBottom: PADDING.xxxlPadding,
  },
  titleWrapper: {
    marginBottom: PADDING.xxxlPadding,
  },
  title: {
    fontSize: FONSTS.h3,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  noteView: {
    maxHeight: HEIGHT.maxHeight,
    backgroundColor: '#D2E2ED',
    borderRadius: BORDER_RADIUS.B1,
    padding: PADDING.xsPadding,
    marginBottom: PADDING.xxxlPadding,
  },
  noteTitle: {
    marginLeft: PADDING.smPadding,
    fontSize: FONSTS.h4,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  noteDetailsWrapper: {
    marginTop: PADDING.mdPadding,
  },
  noteDetailsText: {
    fontSize: FONSTS.h6,
    color: COLORS.black,
  },
});
