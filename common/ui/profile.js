import React from "react";
import { View, Text, TouchableOpacity, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { globalStyles } from '../styles/index.native';
import Card from '../components/card';

import { connect } from "react-redux";
import { actions } from "../services/userReducer";
import DataHandler from "../services/dataHandler";


class Profile extends React.Component {

  componentDidMount() {
    this.props.dataHandler.getAll();

  }

  render() {
    return (
      <SafeAreaView style={globalStyles.container}>

            <ScrollView contentContainerStyle={globalStyles.contentContainer}>
            {this.props.users.map((user) => (
               <Card key={user.id}>
                    <Text >{user.name}</Text>   
               </Card>
            ))}
            </ScrollView>
          
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
    console.log(state)
    return ({
  users: state.users.list,
  loading: state.users.isLoading
})
}

const mapDispatchToProps = dispatch => ({
  dataHandler: new DataHandler(
    dispatch,
    actions,
    "https://jsonplaceholder.typicode.com/users"
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
