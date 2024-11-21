"use server"
import { predictLoadType } from "@/types/predictType";
import axios from 'axios'

export const  predictApi = async (values: predictLoadType) => {
  const processedValues = {
    relativeCompactNess: parseFloat(values.relativeCompactNess),
    surfaceArea: parseFloat(values.surfaceArea),
    wallArea: parseFloat(values.wallArea),
    roofArea: parseFloat(values.roofArea),
    overallHeight: parseFloat(values.overallHeight),
    orientation: values.orientation as "East" | "North" | "South" | "West", // Cast to enum
    glazingArea: parseFloat(values.glazingArea),
    distribution: parseFloat(values.distribution),
};

  const options = {

  }
  const response = await axios('http://localhost:')

  

}