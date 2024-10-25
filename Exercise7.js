import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Title from './components/Tittle';
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title title="Users Directory" />
        {users.map(user => {
          const {id, name, username, email, phone, address} = user;
          return (
            <View key={id} style={styles.userCard}>
              <Text style={styles.text}>
                <Text style={styles.label}>Name: </Text>
                {name}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.label}>Username: </Text>
                {username}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.label}>Email: </Text>
                {email}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.label}>Address: </Text>
                {`${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.label}>Phone: </Text>
                {phone}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white', 
  },
  userCard: {
    backgroundColor: 'white', 
    padding: 15,
    marginBottom: 15,
    borderRadius: 10, 
    shadowColor: 'black', 
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
  },
  text: {
    fontSize: 18, 
    marginBottom: 8,
    color: '#333', 
  },
  label: {
    fontWeight: 'bold',
    color: 'black', 
  },
});