import {Platform} from "react-native";

export const isWeb = Platform.OS === 'web';

export const vacationsInfo = () => {
    return [
        { title: 'Grand Canyon, Arizona', rating: 5, body: 'The Grand Canyon is one of the most iconic, family-friendly American summer vacation spots because of its views', key: '1' },
        { title: 'Mackinac Island, Michigan', rating: 4, body: 'A summer vacation on Mackinac Island in Michigan is a throwback to the simplicity of the summer vacation of the 1800s.', key: '2' },
        { title: 'Door County, Wisconsin', rating: 3, body: 'One of the best summer vacation spots in the United States is the serene peninsula of Door County, Wisconsin. ', key: '3' },
        { title: 'Yellowstone National Park', rating: 3, body: 'A summer vacation to Yellowstone National Park enables you to experience some of the most stunning natural beauty in the United States', key: '4' },
        { title: 'Cape Cod, Massachusetts', rating: 3, body: 'ASummer in Cape Cod defines the idea of a cottage escape. With pristine beaches and quaint villages with old-fashioned ice-cream parlors, Cape Cod is one of the best vacation getaways in New England.', key: '5' },
      ];
}
