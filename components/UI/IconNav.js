import React from 'react'

export default function IconNav({ name, iconActive }) {
  return (
    <>
        {
            name === 'Home.svg' && 
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.0683594 6.83355C0.0683594 6.41283 0.249846 6.01216 0.567115 5.73244L6.07891 0.872996C6.643 0.375668 7.49372 0.375668 8.05781 0.872996L13.5696 5.73244C13.8869 6.01216 14.0684 6.41283 14.0684 6.83355V13.0259C14.0684 13.84 13.4021 14.5 12.5802 14.5H1.55656C0.73465 14.5 0.0683594 13.84 0.0683594 13.0259V6.83355Z" fill={ iconActive ? "#CB3CFF" : "#AEB9E1 "}/>
            </svg>

        }
        {
            name === 'Features Icon.svg' && 
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.57784 1.06151C6.76629 0.73796 7.23371 0.737959 7.42216 1.06151L9.41868 4.48932C9.48772 4.60785 9.60339 4.69189 9.73745 4.72092L13.6144 5.56047C13.9804 5.63972 14.1248 6.08426 13.8754 6.36347L11.2323 9.32153C11.1409 9.42381 11.0967 9.55979 11.1105 9.69626L11.5101 13.6429C11.5478 14.0155 11.1697 14.2902 10.827 14.1392L7.19701 12.5396C7.07149 12.4843 6.92851 12.4843 6.80299 12.5396L3.17296 14.1392C2.83032 14.2902 2.45216 14.0155 2.48988 13.6429L2.88948 9.69626C2.9033 9.55979 2.85911 9.42381 2.76772 9.32153L0.12464 6.36347C-0.124841 6.08426 0.0196004 5.63972 0.385551 5.56047L4.26255 4.72092C4.39661 4.69189 4.51228 4.60785 4.58132 4.48932L6.57784 1.06151Z" fill={ iconActive ? "#CB3CFF" : "#AEB9E1 "}/>
            </svg>            
        }
        {
            name === 'Users Icon.svg' &&
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.943604 12.7391C0.943604 10.5946 2.68203 8.8562 4.8265 8.8562H9.17356C11.318 8.8562 13.0565 10.5946 13.0565 12.7391V12.7391C13.0565 13.4539 12.477 14.0334 11.7622 14.0334H2.2379C1.52308 14.0334 0.943604 13.4539 0.943604 12.7391V12.7391Z" fill={ iconActive ? "#CB3CFF" : "#AEB9E1 "}/>
            <path d="M7.00236 7.86972C8.90855 7.86972 10.4538 6.32445 10.4538 4.41826C10.4538 2.51207 8.90855 0.966797 7.00236 0.966797C5.09617 0.966797 3.5509 2.51207 3.5509 4.41826C3.5509 6.32445 5.09617 7.86972 7.00236 7.86972Z" fill={ iconActive ? "#CB3CFF" : "#AEB9E1 "}/>
            </svg>
        }
        {
            name === 'Pricing Icon.svg' &&
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.00357 0.5C7.51784 0.5 7.93473 0.916896 7.93473 1.43116V1.90222C8.36312 1.90237 8.7873 1.98682 9.18308 2.15076C9.57923 2.31485 9.93917 2.55535 10.2424 2.85855C10.5456 3.16174 10.7861 3.52169 10.9502 3.91783C11.1142 4.31398 11.1987 4.73856 11.1987 5.16734C11.1987 5.68161 10.7818 6.09851 10.2675 6.09851C9.75327 6.09851 9.33637 5.68161 9.33638 5.16734C9.33638 4.98312 9.30009 4.80071 9.22959 4.63051C9.1591 4.46032 9.05577 4.30567 8.9255 4.17541C8.79524 4.04515 8.6406 3.94182 8.4704 3.87132C8.3002 3.80082 8.11779 3.76454 7.93357 3.76454H5.833C5.46095 3.76454 5.10414 3.91233 4.84107 4.17541C4.57799 4.43849 4.43019 4.7953 4.43019 5.16734C4.43019 5.53939 4.57799 5.8962 4.84107 6.15928C5.10414 6.42235 5.46095 6.57015 5.833 6.57015H8.40036C9.26633 6.57015 10.0968 6.91415 10.7092 7.52648C11.3215 8.13881 11.6655 8.96931 11.6655 9.83528C11.6655 10.7012 11.3215 11.5317 10.7092 12.1441C10.0968 12.7564 9.26633 13.1004 8.40036 13.1004H7.93473V13.5688C7.93473 14.0831 7.51784 14.5 7.00357 14.5C6.48931 14.5 6.07241 14.0831 6.07241 13.5688V13.1004H5.5996C4.73364 13.1004 3.90314 12.7564 3.29081 12.1441C2.67848 11.5317 2.33447 10.7012 2.33447 9.83528C2.33447 9.32101 2.75137 8.90412 3.26563 8.90412C3.7799 8.90412 4.1968 9.32101 4.1968 9.83528C4.1968 10.2073 4.34459 10.5641 4.60767 10.8272C4.87075 11.0903 5.22756 11.2381 5.5996 11.2381H6.96485C6.97769 11.2376 6.9906 11.2373 7.00357 11.2373C7.01654 11.2373 7.02945 11.2376 7.0423 11.2381H8.40036C8.77241 11.2381 9.12922 11.0903 9.3923 10.8272C9.65537 10.5641 9.80317 10.2073 9.80317 9.83528C9.80317 9.46323 9.65537 9.10642 9.3923 8.84335C9.12922 8.58027 8.77241 8.43247 8.40036 8.43247H5.833C4.96703 8.43247 4.13653 8.08847 3.5242 7.47614C2.91187 6.86381 2.56787 6.03331 2.56787 5.16734C2.56787 4.30138 2.91187 3.47088 3.5242 2.85855C4.13653 2.24622 4.96703 1.90221 5.833 1.90221H6.07241V1.43116C6.07241 0.916896 6.48931 0.5 7.00357 0.5Z" fill={ iconActive ? "#CB3CFF" : "#AEB9E1 "}/>
            </svg>
            
        } {
            name === 'Integrations Icon.svg' &&
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.36257 13.7199C3.21408 13.7199 3.07168 13.6609 2.96668 13.5559C2.86169 13.4509 2.8027 13.3085 2.8027 13.1601V10.1718C2.49555 10.3183 2.15515 10.3811 1.81594 10.3537C1.52872 10.3326 1.24969 10.2485 0.998699 10.1073C0.747707 9.96605 0.530926 9.77125 0.363785 9.53673C0.196643 9.30221 0.0832509 9.03372 0.0316773 8.75039C-0.0198963 8.46705 -0.00838304 8.17584 0.0653976 7.89746C0.139178 7.61908 0.273412 7.36039 0.458547 7.13979C0.643681 6.91919 0.875164 6.74211 1.13652 6.62116C1.39788 6.5002 1.68268 6.43834 1.97067 6.43998C2.25865 6.44161 2.54274 6.50671 2.8027 6.63063V3.64235C2.8027 3.49387 2.86169 3.35146 2.96668 3.24647C3.07168 3.14147 3.21408 3.08249 3.36257 3.08249H6.63078C6.48426 2.77534 6.42149 2.43493 6.44882 2.09573C6.46992 1.80851 6.55408 1.52948 6.69529 1.27848C6.8365 1.02749 7.0313 0.810711 7.26582 0.64357C7.50035 0.476429 7.76883 0.363036 8.05217 0.311462C8.3355 0.259889 8.62672 0.271402 8.9051 0.345183C9.18347 0.418963 9.44217 0.553198 9.66276 0.738332C9.88336 0.923466 10.0604 1.15495 10.1814 1.41631C10.3024 1.67766 10.3642 1.96247 10.3626 2.25045C10.3609 2.53844 10.2958 2.82252 10.1719 3.08249H13.4401C13.5886 3.08249 13.731 3.14147 13.836 3.24647C13.941 3.35146 14 3.49387 14 3.64235V6.63063C13.6929 6.48411 13.3524 6.42134 13.0132 6.44867C12.726 6.46978 12.447 6.55393 12.196 6.69514C11.945 6.83635 11.7282 7.03115 11.5611 7.26568C11.3939 7.5002 11.2805 7.76868 11.229 8.05202C11.1774 8.33535 11.1889 8.62657 11.2627 8.90495C11.3365 9.18333 11.4707 9.44202 11.6558 9.66262C11.841 9.88322 12.0725 10.0603 12.3338 10.1812C12.5952 10.3022 12.88 10.3641 13.168 10.3624C13.456 10.3608 13.74 10.2957 14 10.1718V13.1601C14 13.3085 13.941 13.4509 13.836 13.5559C13.731 13.6609 13.5886 13.7199 13.4401 13.7199H3.36257Z" fill={ iconActive ? "#CB3CFF" : "#AEB9E1 "}/>
            </svg>
        } {
            name === 'Webflow Icon.svg' &&
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2989 5.4887C10.2989 5.4887 9.17241 9.02893 9.09195 9.35077C9.09195 9.02893 8.2069 2.67261 8.2069 2.67261C6.27586 2.67261 5.22989 4.04042 4.74713 5.4887C4.74713 5.4887 3.43604 8.24623 3.35558 8.56807C3.27512 8.32669 3.05747 5.56916 3.05747 5.56916C2.89655 3.79904 1.28736 2.67261 0 2.67261L1.6092 12.3278C3.62069 12.3278 4.74713 10.96 5.31034 9.51169C5.31034 9.51169 6.51724 6.37376 6.5977 6.21284C6.5977 6.37376 7.48276 12.3278 7.48276 12.3278C9.49425 12.3278 10.6207 11.0404 11.1839 9.67261L14 2.67261C11.908 2.67261 10.8621 4.04042 10.2989 5.4887Z" fill={ iconActive ? "#CB3CFF" : "#AEB9E1 "}/>
            </svg>

        } {
            name === 'Settings Icon.svg' &&
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25563 0.5C4.97949 0.5 4.75563 0.723857 4.75563 1V3.61548L2.49258 2.30863C2.25344 2.17054 1.94767 2.25247 1.80962 2.49163L0.0674686 5.50976C-0.0705809 5.74892 0.011364 6.05475 0.250498 6.19284L2.51356 7.49969L0.250389 8.8066C0.011255 8.94469 -0.0706902 9.25052 0.0673594 9.48968L1.80952 12.5078C1.94757 12.747 2.25333 12.8289 2.49247 12.6908L4.75563 11.3839V14C4.75563 14.2761 4.97949 14.5 5.25563 14.5H8.73978C9.01593 14.5 9.23978 14.2761 9.23978 14V11.3839L11.5063 12.6928C11.7455 12.8309 12.0512 12.7489 12.1893 12.5098L13.9314 9.49163C14.0695 9.25247 13.9876 8.94665 13.7484 8.80855L11.4819 7.49969L13.7483 6.19088C13.9874 6.05279 14.0694 5.74697 13.9313 5.50781L12.1892 2.48968C12.0511 2.25052 11.7454 2.16859 11.5062 2.30668L9.23978 3.61549V1C9.23978 0.723858 9.01593 0.5 8.73979 0.5H5.25563ZM6.99914 9.37256C8.03324 9.37256 8.87155 8.53408 8.87155 7.49976C8.87155 6.46544 8.03324 5.62695 6.99914 5.62695C5.96503 5.62695 5.12672 6.46544 5.12672 7.49976C5.12672 8.53408 5.96503 9.37256 6.99914 9.37256Z" fill={ iconActive ? "#CB3CFF" : "#AEB9E1 "}/>
            </svg>
        }
    </>
  )
}
