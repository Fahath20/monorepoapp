import { instructionEn, instructionMx, language } from '../config';
import {Platform} from "react-native";

export const isWeb = Platform.OS === 'web';

export const instructions = () => {
    return language == 'En' ? instructionEn : instructionMx
}
