import { View, Text } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";

const Blackfuelstation = () => {
  const customSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <mask id="mask0_599_18660" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
    <rect width="20" height="20" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_599_18660)">
    <path d="M7.14583 15.4579L8.91667 12.4579H7.85417V10.1454L6.08333 13.1662H7.14583V15.4579ZM5 8.5412H10V4.4162C10 4.36064 9.97222 4.30509 9.91667 4.24953C9.86111 4.19398 9.80556 4.1662 9.75 4.1662H5.25C5.19444 4.1662 5.13889 4.19398 5.08333 4.24953C5.02778 4.30509 5 4.36064 5 4.4162V8.5412ZM3.75 17.0829V4.4162C3.75 3.99953 3.89583 3.64537 4.1875 3.3537C4.47917 3.06203 4.83333 2.9162 5.25 2.9162H9.75C10.1667 2.9162 10.5208 3.06203 10.8125 3.3537C11.1042 3.64537 11.25 3.99953 11.25 4.4162V9.83287H12.1875C12.5625 9.83287 12.8856 9.96814 13.1567 10.2387C13.4272 10.5098 13.5625 10.8329 13.5625 11.2079V15.062C13.5625 15.3259 13.6703 15.562 13.8858 15.7704C14.1008 15.9787 14.3472 16.0829 14.625 16.0829C14.9167 16.0829 15.1667 15.9787 15.375 15.7704C15.5833 15.562 15.6875 15.3259 15.6875 15.062V7.45787H15.4375C15.2292 7.45787 15.0522 7.38509 14.9067 7.23953C14.7606 7.09342 14.6875 6.9162 14.6875 6.70787V5.20787H15.0625V4.12453H15.7917V5.20787H16.5625V4.12453H17.3125V5.20787H17.6875V6.70787C17.6875 6.9162 17.6147 7.09342 17.4692 7.23953C17.3231 7.38509 17.1458 7.45787 16.9375 7.45787H16.6875V15.062C16.6875 15.6037 16.4861 16.0759 16.0833 16.4787C15.6806 16.8815 15.1944 17.0829 14.625 17.0829C14.0694 17.0829 13.5867 16.8815 13.1767 16.4787C12.7672 16.0759 12.5625 15.6037 12.5625 15.062V11.2079C12.5625 11.0968 12.5278 11.0065 12.4583 10.937C12.3889 10.8676 12.2986 10.8329 12.1875 10.8329H11.25V17.0829H3.75Z" fill="#0D0D0D"/>
  </g>
</svg>
`;

  return (
    <View>
      <SvgXml xml={customSvg} />
    </View>
  );
};

export default Blackfuelstation;