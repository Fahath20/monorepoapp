import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

import {
   Avatar,
   Button,
   Card,
   Title,
   Paragraph,
   List,
   Headline,
   withTheme
 } from 'react-native-paper';

 //React native paper to add styling to native components, this supports both web and native 
const Paper = () => {
   return (
       <View>
           <Card
               style={{
                   shadowOffset: { width: 5, height: 5 },
                   width: '90%',
                   borderRadius: 12,
                   alignSelf: 'center',
                   marginBottom: 10,
               }}>
               <Card.Content>
                   <Title>Blog post</Title>
                   <Card.Cover
                       style={{
                           width: '100%',
                           height: 190,
                           alignSelf: 'left',
                       }}
                       source={{
                           uri:
                               'https://images.unsplash.com/photo-1573921470445-8d99c48c879f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                       }}
                   />
                   <Paragraph>just a blog post</Paragraph>
               </Card.Content>
            
           </Card>
       </View>
   );
 
}
 
export default withTheme(Paper);