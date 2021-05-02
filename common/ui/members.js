import React from "react";
import { Text, ScrollView, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/index.native';
import Card from '../components/card';
import Loader from '../components/Loader';

import { connect } from "react-redux";
import {fetchArticleDetails} from '../business/redux/actions/articleAction'



class Members extends React.Component {

  componentDidMount() {
    this.props.fetchArticleDetails();
  }

  render() {
    console.log(this.props.data)
    return (
      <SafeAreaView style={globalStyles.container}>
        {this.props.isLoadingData ? <Loader/> : 
      <FlatList data={this.props.data} renderItem={({ item }) => (
        <TouchableOpacity >
          <Card >
            <Text style={globalStyles.titleText}>{ item.name }</Text>
          </Card>
        </TouchableOpacity>
      )} />}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  
  data: state.data.data,
  isLoadingData: state.data.isLoadingData 
});
export default connect(
  mapStateToProps,
  {
    fetchArticleDetails
  }
)(Members);
