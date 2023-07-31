import {View, Text, ScrollView} from 'react-native';
import Question from '../../components/Question';
import {useState, useEffect} from 'react';

import isCloseToBottom from '../../functions/isCloseToBottom';

import getData from '../../functions/getData';

const ReactHome = () => {
  const title = 'Loading <Stackunderflow/>';

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [listEnd, setListEnd] = useState(false);

  const change = () => {
    setListEnd(!listEnd);
  };

  useEffect(() => {
    setLoading(true);
    getData({
      category: 'react',
      setData: setData,
      setLoading: setLoading,
    });
  }, [listEnd]);

  return (
    <>
      {loading === true ? (
        <View>
          <Text>{title}</Text>
        </View>
      ) : (
        <ScrollView
          onScroll={({nativeEvent}) => {
            if (isCloseToBottom(nativeEvent)) {
              change();
            }
          }}
          scrollEventThrottle={400}
          style={{backgroundColor: '#f7ad52'}}>
          {data.map(e => {
            return <Question e={e} />;
          })}
        </ScrollView>
      )}
    </>
  );
};

export default ReactHome;
