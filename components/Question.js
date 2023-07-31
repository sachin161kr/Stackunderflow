import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';

import {verticalScale, scale, moderateScale} from 'react-native-size-matters';

const Question = ({e}) => {
  return (
    <TouchableOpacity
      onPress={async () => {
        await Linking.openURL(e.link);
      }}
      style={styles.body}>
      <Text style={styles.title}>{e.title}</Text>
      <Text style={styles.id}>Question ID : {e.question_id}</Text>
      <Text style={styles.tags}>{e.tags.toString()}</Text>
    </TouchableOpacity>
  );
};

export default Question;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    // borderWidth: moderateScale(3),
    borderColor: 'black',
    margin: moderateScale(10),
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
  },
  title: {
    fontSize: moderateScale(18),
    color: 'black',
    marginBottom: verticalScale(10),
  },

  id: {
    color: 'black',
    fontSize: moderateScale(14),
    marginBottom: verticalScale(10),
  },

  tags: {
    color: 'black',
    fontSize: moderateScale(14),
  },
});
