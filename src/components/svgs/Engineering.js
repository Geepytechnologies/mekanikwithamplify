import { View, Text } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";

const Engineering = () => {
  const customSvg = `
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <mask
      id="mask0_599_18562"
      style="mask-type:alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="20"
      height="20"
    >
      <rect width="20" height="20" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_599_18562)">
      <path
        d="M1.22864 17.1659V15.3118C1.22864 14.8951 1.33642 14.5165 1.55197 14.1759C1.76697 13.8359 2.06892 13.5687 2.4578 13.3743C3.15225 13.027 3.92669 12.7387 4.78114 12.5093C5.63503 12.2804 6.53419 12.1659 7.47864 12.1659C8.42308 12.1659 9.32586 12.2804 10.187 12.5093C11.0481 12.7387 11.8259 13.027 12.5203 13.3743C12.8953 13.5687 13.1906 13.8359 13.4061 14.1759C13.6211 14.5165 13.7286 14.8951 13.7286 15.3118V17.1659H1.22864ZM7.47864 10.8118C6.67308 10.8118 5.98558 10.5304 5.41614 9.9676C4.84669 9.40538 4.56197 8.70066 4.56197 7.85343H4.37447C4.26336 7.85343 4.17308 7.81871 4.10364 7.74927C4.03419 7.67982 3.99947 7.58955 3.99947 7.47843C3.99947 7.36732 4.03419 7.28038 4.10364 7.2176C4.17308 7.15538 4.26336 7.12427 4.37447 7.12427H4.56197C4.57586 6.59649 4.69725 6.12066 4.92614 5.69677C5.15558 5.27343 5.48558 4.90899 5.91614 4.60343V5.3951C5.91614 5.50621 5.95086 5.59649 6.02031 5.66593C6.08975 5.73538 6.18003 5.7701 6.29114 5.7701C6.38836 5.7701 6.47169 5.73538 6.54114 5.66593C6.61058 5.59649 6.64531 5.50621 6.64531 5.3951V4.29093C6.77031 4.24927 6.90225 4.21455 7.04114 4.18677C7.18003 4.15899 7.32586 4.1451 7.47864 4.1451C7.63142 4.1451 7.78058 4.15899 7.92614 4.18677C8.07225 4.21455 8.20086 4.24927 8.31197 4.29093V5.3951C8.31197 5.50621 8.34669 5.59649 8.41614 5.66593C8.48558 5.73538 8.57586 5.7701 8.68697 5.7701C8.79808 5.7701 8.88836 5.73538 8.95781 5.66593C9.02725 5.59649 9.06197 5.50621 9.06197 5.3951V4.60343C9.49253 4.90899 9.82225 5.27343 10.0511 5.69677C10.2806 6.12066 10.3953 6.59649 10.3953 7.12427H10.6036C10.7009 7.12427 10.7842 7.15538 10.8536 7.2176C10.9231 7.28038 10.9578 7.36732 10.9578 7.47843C10.9578 7.58955 10.9231 7.67982 10.8536 7.74927C10.7842 7.81871 10.7009 7.85343 10.6036 7.85343H10.3953C10.3953 8.70066 10.1142 9.40538 9.55197 9.9676C8.98919 10.5304 8.29808 10.8118 7.47864 10.8118ZM7.47864 9.56177C7.95086 9.56177 8.34669 9.40204 8.66614 9.0826C8.98558 8.76316 9.14531 8.36732 9.14531 7.8951H5.81197C5.81197 8.36732 5.97503 8.76316 6.30114 9.0826C6.6278 9.40204 7.02031 9.56177 7.47864 9.56177ZM13.7495 12.4368L13.6661 11.8326C13.5689 11.8048 13.4717 11.7665 13.3745 11.7176C13.2772 11.6693 13.1939 11.6034 13.1245 11.5201L12.562 11.7493L12.187 11.1034L12.6661 10.7076C12.6522 10.6659 12.6453 10.6209 12.6453 10.5726V10.2701C12.6453 10.2284 12.6522 10.1798 12.6661 10.1243L12.187 9.72843L12.562 9.0826L13.1245 9.31177C13.1939 9.24232 13.2772 9.17982 13.3745 9.12427C13.4717 9.06871 13.5689 9.02705 13.6661 8.99927L13.7495 8.3951H14.4786L14.5828 8.99927C14.68 9.02705 14.7773 9.06871 14.8745 9.12427C14.9717 9.17982 15.055 9.24232 15.1245 9.31177L15.687 9.0826L16.062 9.72843L15.5828 10.1243C15.5967 10.1798 15.6036 10.2284 15.6036 10.2701V10.5726C15.6036 10.6209 15.5967 10.6659 15.5828 10.7076L16.062 11.1034L15.687 11.7493L15.1245 11.5201C15.0411 11.6034 14.9542 11.6693 14.8636 11.7176C14.7736 11.7665 14.68 11.8048 14.5828 11.8326L14.4786 12.4368H13.7495ZM14.1245 11.1034C14.305 11.1034 14.4647 11.0373 14.6036 10.9051C14.7425 10.7734 14.812 10.6104 14.812 10.4159C14.812 10.2215 14.7425 10.0582 14.6036 9.92593C14.4647 9.79427 14.305 9.72843 14.1245 9.72843C13.93 9.72843 13.767 9.79427 13.6353 9.92593C13.5031 10.0582 13.437 10.2215 13.437 10.4159C13.437 10.6104 13.5031 10.7734 13.6353 10.9051C13.767 11.0373 13.93 11.1034 14.1245 11.1034ZM15.7078 8.0826L15.6036 7.3326C15.4648 7.29093 15.3259 7.23177 15.187 7.1551C15.0481 7.07899 14.93 6.98538 14.8328 6.87427L14.0828 7.1451L13.6036 6.3326L14.2286 5.8326C14.2009 5.74927 14.187 5.67621 14.187 5.61343V5.2176C14.187 5.15538 14.2009 5.0826 14.2286 4.99927L13.6036 4.49927L14.0828 3.68677L14.8328 3.9576C14.93 3.84649 15.0481 3.7526 15.187 3.67593C15.3259 3.59982 15.4648 3.54093 15.6036 3.49927L15.7078 2.74927H16.6661L16.7703 3.49927C16.9092 3.54093 17.0481 3.59982 17.187 3.67593C17.3259 3.7526 17.4439 3.84649 17.5411 3.9576L18.2911 3.68677L18.7703 4.49927L18.1453 4.99927C18.1731 5.0826 18.187 5.15538 18.187 5.2176V5.61343C18.187 5.67621 18.1731 5.74927 18.1453 5.8326L18.7703 6.3326L18.2911 7.1451L17.5411 6.87427C17.4439 6.98538 17.3259 7.07899 17.187 7.1551C17.0481 7.23177 16.9092 7.29093 16.7703 7.3326L16.6661 8.0826H15.7078ZM16.187 6.49927C16.4925 6.49927 16.7495 6.3951 16.9578 6.18677C17.1661 5.97843 17.2703 5.72149 17.2703 5.41593C17.2703 5.11038 17.1661 4.85343 16.9578 4.6451C16.7495 4.43677 16.4925 4.3326 16.187 4.3326C15.8814 4.3326 15.6245 4.43677 15.4161 4.6451C15.2078 4.85343 15.1036 5.11038 15.1036 5.41593C15.1036 5.72149 15.2078 5.97843 15.4161 6.18677C15.6245 6.3951 15.8814 6.49927 16.187 6.49927Z"
        fill="#D7A31E"
      />
    </g>
  </svg>
`;

  return (
    <View>
      <SvgXml xml={customSvg} />
    </View>
  );
};

export default Engineering;