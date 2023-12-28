const HomeIcone = require('../Assets/Home.png');
const YoloLogo = require('../Assets/YoloLogo.png');
const Rectangle = require('../Assets/Rectangle.png');
import Ionicons from 'react-native-vector-icons/Ionicons';


const IonIcon = ({title, size, IconColor, IconStyle}) => (
    <Ionicons
      name={title}
      size={size}
      color={IconColor}
      style={IconStyle || {}}
    />
  );

export {HomeIcone, YoloLogo, Rectangle, IonIcon};
