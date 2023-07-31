import {View, Text, ScrollView} from 'react-native';

import Question from '../../components/Question';
import {useState, useEffect} from 'react';

import getData from '../../functions/getData';

const NodeHome = () => {
  const title = 'Loading <Stackunderflow/>';

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData({
      category: 'nodejs',
      setData: setData,
      setLoading: setLoading,
    });
  }, []);

  return (
    <>
      {loading === true ? (
        <View>
          <Text>{title}</Text>
        </View>
      ) : (
        <ScrollView style={{backgroundColor: '#f7ad52'}}>
          {data.map(e => {
            return <Question e={e} />;
          })}
        </ScrollView>
      )}
    </>
  );
};

export default NodeHome;
